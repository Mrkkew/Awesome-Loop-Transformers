"""Build the bilingual "looped Transformer from scratch" tutorial notebooks.

The prose lives in this file once per language; the code is shared, so the two
notebooks cannot drift apart. Everything runs on CPU in well under a minute and
needs no dataset, no GPU, and no network access.

    python tutorials/build_notebooks.py            # write the two notebooks
    python tutorials/build_notebooks.py --execute  # write + run, embedding outputs

Requires: torch, matplotlib, nbformat, nbclient, ipykernel.
"""

from __future__ import annotations

import argparse
import pathlib

import nbformat
from nbformat.v4 import new_code_cell, new_markdown_cell, new_notebook

HERE = pathlib.Path(__file__).resolve().parent
FIGDIR = HERE / "figures"

SHARED_FRONT = """\
```text
tokens ─► [ Prelude ] ─► [ Recurrent block ──┐ ] ─► [ Coda ] ─► logits
                 e            ▲   h_t ────────┘
                              │
                    h_{t+1} = A · h_t + B · e + Block(h_t)
```

"""

# --------------------------------------------------------------------------- #
# Cells. Each entry is either markdown (with `en` / `zh` bodies) or code.
# --------------------------------------------------------------------------- #

CHAPTERS: list[dict] = []


def md(en: str, zh: str) -> None:
    CHAPTERS.append({"type": "md", "en": en, "zh": zh})


def code(src: str) -> None:
    CHAPTERS.append({"type": "code", "src": src.strip("\n")})


# --------------------------------------------------------------------------- #
# 0. Orientation
# --------------------------------------------------------------------------- #

md(
    """# Looped Transformers, from one block to OpenMythos

A looped Transformer does something almost rude in its simplicity: it takes one
Transformer block, applies it several times, and lets the same weights do more
work. Nothing is added to the parameter count, yet the model gains *depth*.

This notebook builds that idea from scratch, in seven short chapters, and finishes by
reading the source of [OpenMythos](https://github.com/kyegomez/OpenMythos), an
open reference implementation of a recurrent-depth Transformer. By the end you
will have trained a looped model, measured what extra loops buy, seen where they
stop helping, and recognised the engineering that makes the idea survive contact
with a real training run.

**What you need:** a laptop. Every cell runs on CPU in a few seconds, the task is
synthetic, and the only dependency is PyTorch.

**How to read it:** the code is deliberately small (about 150 lines in total, no
framework). Read the prose, run the cell, then look at the figure. Each chapter
ends with a pointer into the companion paper list,
[Awesome-Loop-Transformers](https://github.com/Mrkkew/Awesome-Loop-Transformers),
so you can go from the toy to the literature.

| Chapter | Question |
| --- | --- |
| 0 | What is the shape of the idea, and what does it cost? |
| 1 | What does a fixed-depth Transformer *fail* at? |
| 2 | What changes when the block is reused? |
| 3 | Which pieces does a loop need in order to be trainable? |
| 4 | When should the loop stop? |
| 5 | How does OpenMythos assemble all of this? |
| 6 | Where to read next |

*Text and code: CC BY 4.0, same as the repository. The OpenMythos source is MIT
and is imported, never copied.*""",
    """# 从一个 Block 到 OpenMythos：循环 Transformer 入门

循环 Transformer 的想法简单得几乎有点冒犯：拿一个 Transformer block，重复用几次，
让同一组权重多干一点活。参数量一个都没加，模型却变"深"了。

这份 notebook 用六个小步骤把这个想法从零搭起来，最后读一遍
[OpenMythos](https://github.com/kyegomez/OpenMythos) 的源码——一个开放实现的递归深度
Transformer。读完之后，你会亲手训练一个循环模型，量出"多循环"到底买到了什么，看到它在什么
地方停止起作用，并认出那些让这个想法在真实训练中活下来的工程细节。

**你需要什么：** 一台笔记本。每个 cell 都在 CPU 上几秒钟跑完，任务是合成的，唯一依赖是 PyTorch。

**怎么读：** 代码刻意写得极小（总共约 150 行，不用任何框架）。先读文字，再运行，然后看图。
每章末尾都会指向配套论文列表
[Awesome-Loop-Transformers](https://github.com/Mrkkew/Awesome-Loop-Transformers)
里的相应分组，方便你从玩具走向文献。

| 章节 | 回答的问题 |
| --- | --- |
| 0 | 这个想法长什么形状？ |
| 1 | 固定深度的 Transformer 到底会*输*在哪？ |
| 2 | 复用同一个 block 之后，什么变了？ |
| 3 | 一个能训练的循环，需要哪几件东西？ |
| 4 | 循环什么时候该停？ |
| 5 | OpenMythos 怎么把它们组装起来？ |
| 6 | 接下来读什么 |

*正文与代码：CC BY 4.0，与本仓库一致。OpenMythos 源码是 MIT，这里只 import，不复制。*""",
)

code(
    r"""
%matplotlib inline
import math, time
from pathlib import Path

import torch, torch.nn as nn, torch.nn.functional as F
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyArrowPatch, FancyBboxPatch

torch.manual_seed(0)
torch.set_num_threads(4)

INK, CYAN, LIME, VIOLET, MUTED, GRID = (
    "#0B1020", "#1F7A99", "#6F9E1F", "#5B4BD6", "#6B7385", "#E7EAF3",
)
plt.rcParams.update({
    "figure.dpi": 130, "savefig.dpi": 160, "figure.facecolor": "white",
    "axes.facecolor": "white", "axes.edgecolor": MUTED, "axes.labelcolor": INK,
    "text.color": INK, "xtick.color": MUTED, "ytick.color": MUTED,
    "axes.grid": True, "grid.color": GRID, "grid.linewidth": 0.9,
    "axes.spines.top": False, "axes.spines.right": False,
    "font.size": 10, "axes.titlesize": 11, "legend.frameon": False,
    "lines.linewidth": 2.0,
})
FIGDIR = Path("figures")
FIGDIR.mkdir(exist_ok=True)

def save(fig, name):
    '''Save a copy for the README; harmless if the directory is read-only.'''
    try:
        fig.savefig(FIGDIR / name, bbox_inches="tight")
    except OSError:
        pass

P, D = 7, 64                     # residue modulus, model width

class Block(nn.Module):
    '''Pre-norm Transformer block: causal self-attention + MLP.'''
    def __init__(self, d, heads=4):
        super().__init__()
        self.heads = heads
        self.n1, self.n2 = nn.LayerNorm(d), nn.LayerNorm(d)
        self.qkv, self.proj = nn.Linear(d, 3 * d), nn.Linear(d, d)
        self.mlp = nn.Sequential(nn.Linear(d, 4 * d), nn.GELU(), nn.Linear(4 * d, d))

    def forward(self, x):
        b, n, d = x.shape
        q, k, v = self.qkv(self.n1(x)).split(d, dim=2)
        q, k, v = (t.view(b, n, self.heads, d // self.heads).transpose(1, 2) for t in (q, k, v))
        att = F.scaled_dot_product_attention(q, k, v, is_causal=True)
        x = x + self.proj(att.transpose(1, 2).reshape(b, n, d))
        return x + self.mlp(self.n2(x))

print("torch", torch.__version__, "| device:", "cuda" if torch.cuda.is_available() else "cpu")
print(f"one block: {sum(p.numel() for p in Block(D).parameters()):,} parameters")
"""
)

md(
    """## 0. The shape of the idea

Three blocks, not one:

- **Prelude** — a normal Transformer stack, runs *once*, turns tokens into a latent state `e`.
- **Recurrent block** — a small stack that is applied `T` times. Pass `t` reads the
  previous state `h_t` and the injected input `e`, and writes `h_{t+1}`. Every pass
  shares weights.
- **Coda** — a normal stack, runs *once*, turns the final state into logits.

The parameter count is fixed by the block, not by `T`. That is the whole trade:
you spend *inference* compute (and some training instability) to buy *depth*.

The output below draws the dataflow. Chapter 2 prices it, once both models exist
and the comparison can be measured instead of estimated.""",
    """## 0. 这个想法的形状

三个部分，而不是一个：

- **Prelude（前奏）** —— 一个普通 Transformer 栈，只跑*一次*，把 token 变成隐状态 `e`。
- **Recurrent block（循环块）** —— 一个小栈，被应用 `T` 次。第 `t` 次读入上一状态 `h_t` 和注入的
  输入 `e`，写出 `h_{t+1}`。每次循环共享同一组权重。
- **Coda（尾声）** —— 一个普通栈，只跑*一次*，把最终状态变成 logits。

参数量由"块"决定，而不由 `T` 决定。这就是全部的交易：用*推理*算力（以及一些训练不稳定性）
去换*深度*。

下面的输出画出数据流。价格留到第 2 章再算——那时两个模型都已经存在，比较的是实测值而不是估算。""",
)

code(
    r"""
def diagram():
    fig, ax = plt.subplots(figsize=(9.6, 3.7))
    ax.set_axis_off(); ax.set_xlim(0, 10); ax.set_ylim(0, 4.95)

    def box(x, y, w, h, label, sub, color):
        ax.add_patch(FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.02,rounding_size=0.12",
                                    linewidth=1.2, edgecolor=color, facecolor=color + "14"))
        ax.text(x + w / 2, y + h * 0.82, label, ha="center", va="center",
                fontsize=10.5, fontweight="bold", color=color)
        if sub:
            ax.text(x + w / 2, y + h * 0.28, sub, ha="center", va="center",
                    fontsize=8.5, color=MUTED)

    def arrow(x0, y0, x1, y1, color=MUTED, rad=0.0):
        ax.add_patch(FancyArrowPatch((x0, y0), (x1, y1), arrowstyle="-|>", mutation_scale=12,
                                     linewidth=1.3, color=color,
                                     connectionstyle=f"arc3,rad={rad}"))

    box(0.10, 1.55, 1.75, 0.95, "Prelude", "runs once", INK)
    box(2.45, 1.15, 3.30, 1.75, "Recurrent block", "", CYAN)
    box(6.35, 1.55, 1.60, 0.95, "Coda", "runs once", INK)
    box(8.35, 1.65, 1.45, 0.75, "logits", "next token", VIOLET)

    # three readable lines beat one crowded caption
    ax.text(4.10, 2.22, "y = Block(h + loop_index(t))", ha="center", fontsize=9.2, color=CYAN)
    ax.text(4.10, 1.86, "h ← A · h + B · e + y", ha="center", fontsize=9.2, color=CYAN)
    ax.text(4.10, 1.45, "e: the prelude state, re-injected every pass", ha="center",
            fontsize=8.2, color=MUTED)

    arrow(1.85, 2.02, 2.45, 2.02)
    ax.text(2.15, 2.28, "e", ha="center", fontsize=8.6, color=MUTED)
    arrow(5.75, 2.02, 6.35, 2.02)
    arrow(7.95, 2.02, 8.35, 2.02)

    # the recurrence itself: an arc leaves the block on the right, returns on the left
    arrow(5.55, 2.98, 2.65, 2.98, color=CYAN, rad=0.34)
    ax.text(4.10, 4.05, "T passes, one copy of the weights", ha="center",
            fontsize=9.4, color=CYAN, fontweight="bold")

    ax.text(0.10, 4.62, "same weights, more depth", fontsize=11, fontweight="bold", color=INK)
    ax.text(0.10, 0.62,
            r"$h_{t+1}=A\odot h_t+B\odot e+\mathrm{Block}(h_t+\pi(t))$",
            fontsize=10.5, color=INK)
    fig.tight_layout(); save(fig, "01-architecture.png"); plt.show()

diagram()

pass  # chapter 2 prices this model, once the looped version exists
"""
)

md(
    """## 1. A task where depth is the whole problem

Vague tasks produce vague curves, so we need something whose difficulty is
*exactly* the number of sequential steps. Take arithmetic modulo 7:

> read `a_1 … a_k`, output `(a_1 + … + a_k) mod 7`

A one-pass model can learn `a_1 + a_2` by pattern matching. It cannot learn
`a_1 + a_2 + … + a_8`, because no single attention lookup composes eight additions:
the result of step `i` is *input* to step `i+1`. This is the smallest honest
depth test we can build: `k` is a knob you can turn up, and the label is exact.

Below: the model, the trainer, and a fixed-depth baseline (four distinct blocks)
trained on `k ≤ 4`, evaluated on `k` up to 8. Watch the cliff.""",
    """## 1. 一个"深度就是全部难点"的任务

模糊的任务只会得到模糊的曲线。所以我们需要一个难度**恰好**等于"顺序步数"的任务。取模 7 加法：

> 读入 `a_1 … a_k`，输出 `(a_1 + … + a_k) mod 7`

一次前向能靠模式匹配学会 `a_1 + a_2`，但学不会 `a_1 + … + a_8`：没有任何单次 attention 查表
能组合八次加法，因为第 `i` 步的结果是第 `i+1` 步的*输入*。这是我们能造出的最小、最诚实的深度
测试：`k` 是一个可以拧大的旋钮，标签是精确的。

下面给出模型、训练器，以及一个固定深度基线（四个互不共享的 block）：在 `k ≤ 4` 上训练，
一直评估到 `k = 8`。注意那个断崖。""",
)

code(
    r"""
def make_batch(bs, k, p=P):
    a = torch.randint(0, p, (bs, k))
    return a, a.sum(1) % p          # tokens, exact target

class FixedDepth(nn.Module):
    '''The control: one block per layer, no reuse. Depth is baked into the weights.'''
    def __init__(self, d=D, depth=4):
        super().__init__()
        self.embed, self.pos = nn.Embedding(P, d), nn.Embedding(32, d)
        self.blocks = nn.ModuleList([Block(d) for _ in range(depth)])
        self.norm, self.head = nn.LayerNorm(d), nn.Linear(d, P)

    def forward(self, a, loops=None):
        x = self.embed(a) + self.pos(torch.arange(a.shape[1]))
        for blk in self.blocks:
            x = blk(x)
        return self.head(self.norm(x[:, -1]))

def train(model, steps=1200, k_max=4, lr=3e-3, bs=64):
    opt = torch.optim.AdamW(model.parameters(), lr=lr, weight_decay=0.01)
    sched = torch.optim.lr_scheduler.OneCycleLR(opt, max_lr=lr, total_steps=steps)
    for _ in range(steps):
        k = int(torch.randint(1, k_max + 1, (1,)))
        a, y = make_batch(bs, k)
        loss = F.cross_entropy(model(a, k), y)
        opt.zero_grad(); loss.backward()
        nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        opt.step(); sched.step()
    return loss.item()

@torch.no_grad()
def accuracy(model, k, loops=None, bs=512):
    # fixed evaluation batch per k, so the table, the heatmap and the prose agree
    g = torch.Generator().manual_seed(1234)
    a = torch.randint(0, P, (bs, k), generator=g)
    y = a.sum(1) % P
    return (model(a, loops).argmax(-1) == y).float().mean().item()

torch.manual_seed(0)
t0 = time.time()
baseline = FixedDepth(depth=4)
final_loss = train(baseline)
print(f"trained in {time.time() - t0:.1f}s, final loss {final_loss:.3f}, "
      f"{sum(p.numel() for p in baseline.parameters()):,} params")
print("k :", "  ".join(f"{k}" for k in range(1, 9)))
print("acc:", "  ".join(f"{accuracy(baseline, k):.2f}" for k in range(1, 9)))
"""
)

md(
    """The baseline solves `k ≤ 3` perfectly and `k = 4` almost perfectly (0.94), then collapses: four
blocks, four composition steps, and no way to add a fifth without new weights. Note
what it does *not* do — it does not degrade gracefully.

Keep this model around; it is the control in every comparison below. It also comes
with an honest warning: the looped model will hit the same wall at `k = 5`, because
it is trained on `k ≤ 4` as well. What the loop changes is not how far the model
generalises, but what one more step *costs* — a new block, or one more pass over
blocks you already own.""",
    """基线模型把 `k ≤ 3` 全解对了，`k = 4` 也几乎全对（0.94），然后立刻崩掉：四个 block，就只能做四步组合，
不加新权重就加不出第五步。注意它*没有*做的事——它不会平缓退化。

把这个模型留住，它是后面所有对比的对照组。它同时带着一个诚实的提醒：循环模型在 `k = 5` 上
会撞到同一堵墙，因为它同样只在 `k ≤ 4` 上训练过。循环改变的不是模型能泛化多远，而是一步的
*价格*——是新增一个 block，还是在已有的 block 上多跑一次。""",
)

# --------------------------------------------------------------------------- #
# 2. The loop
# --------------------------------------------------------------------------- #

md(
    """## 2. Reuse the block

Now the change that defines the whole family: keep **two** blocks, and apply them
`T` times. Two extra pieces make the recurrence work at all:

- **Input injection** — `e` is added at *every* pass. Without it the model would
  have to reconstruct the question from a state that keeps drifting; with it, each
  pass can re-read the input while carrying the partial result. (`S·e` in the
  figure, `B · e` in the code.)
- **State decay** — `h` is multiplied by a diagonal `A` before the update. This is
  the LTI (linear time-invariant) injection that OpenMythos inherits from the
  Parcae line of work; for now, read it as "a learnable forget gate per channel".

Training detail that matters: we train with `loops = k`. The model is told how many
composition steps the problem needs, which is exactly the setting the paper list
calls *adaptive compute*. Inference then becomes a free variable, and the table
below sweeps it.""",
    """## 2. 复用这个块

现在做定义整个家族的那个改动：只保留**两个** block，然后应用 `T` 次。有两样东西让递归真正成立：

- **输入注入** —— 每一次循环都把 `e` 加进去。没有它，模型只能从一个不断漂移的状态里"回忆"
  题目；有了它，每次循环都能重新读到输入，同时带着已经算出的部分结果。
- **状态衰减** —— 更新前先把 `h` 乘以一个对角矩阵 `A`。这就是 OpenMythos 从 Parcae 一系工作
  继承来的 LTI（线性时不变）注入；此刻你只要把它读成"每个通道一个可学习的遗忘门"。

一个关键的训练细节：我们用 `loops = k` 训练。也就是说告诉模型"这题需要几步组合"，这恰好是论文
列表里 **adaptive compute**（自适应计算）那一栏讨论的设定。到推理时循环数变成自由变量，下面的
表格就来扫它。""",
)

code(
    r"""
class LoRA(nn.Module):
    '''Low-rank update: per-pass specialisation for a few extra parameters.'''
    def __init__(self, d, rank):
        super().__init__()
        self.down, self.up = nn.Linear(d, rank, bias=False), nn.Linear(rank, d, bias=False)
        nn.init.zeros_(self.up.weight)

    def forward(self, x):
        return self.up(self.down(x))

class Looped(nn.Module):
    def __init__(self, d=D, depth=2, loops=4, loop_index=True, lora_rank=0):
        super().__init__()
        self.embed, self.pos = nn.Embedding(P, d), nn.Embedding(32, d)
        self.loop_index = nn.Embedding(32, d) if loop_index else None
        self.prelude = nn.ModuleList([Block(d)])
        self.core = nn.ModuleList([Block(d) for _ in range(depth)])
        self.coda = nn.ModuleList([Block(d)])
        self.norm, self.head = nn.LayerNorm(d), nn.Linear(d, P)
        self.lora = nn.ModuleList([LoRA(d, lora_rank) for _ in range(32)]) if lora_rank else None
        # LTI injection, confined to (0, 1) for any parameter value.
        # Formula as in OpenMythos LTIInjection.get_A() (MIT, kyegomez/OpenMythos).
        self.log_dt, self.log_A = nn.Parameter(torch.zeros(d)), nn.Parameter(torch.zeros(d))
        self.B = nn.Parameter(torch.ones(d))
        self.loops = loops

    @property
    def A(self):
        return torch.exp(-torch.exp((self.log_dt + self.log_A).clamp(-20, 20)))

    def forward(self, a, loops=None):
        loops = self.loops if loops is None else loops
        x = self.embed(a) + self.pos(torch.arange(a.shape[1]))
        for blk in self.prelude:
            x = blk(x)
        e, h = x, torch.zeros_like(x)
        for t in range(loops):
            y = h if self.loop_index is None else h + self.loop_index(torch.tensor(t))
            for blk in self.core:
                y = blk(y)
            if self.lora is not None:
                y = y + self.lora[t](y)
            h = self.A * h + self.B * e + y
        for blk in self.coda:
            h = blk(h)
        return self.head(self.norm(h[:, -1]))

torch.manual_seed(0)
t0 = time.time()
looped = Looped(loops=4)
train(looped, steps=1500)
print(f"trained in {time.time() - t0:.1f}s | {sum(p.numel() for p in looped.parameters()):,} params "
      f"| mean A = {looped.A.mean().item():.2f}")
print("k :", "  ".join(f"{k:4d}" for k in range(1, 7)))
for T in (1, 2, 3, 4, 5, 6):
    print(f"T={T}:", "  ".join(f"{accuracy(looped, k, T):.2f}" for k in range(1, 7)))
"""
)

md(
    """The diagonal is the result. Accuracy tracks `min(T, k)` — passes beyond the
number of steps buy nothing, and passes short of it degrade gently rather than
sharply: one pass already reaches 0.76 on
`k = 2` and 0.23 on `k = 4`, two passes take `k = 2` to 1.00, three take `k = 3`
to 1.00, and four take `k = 4` to 0.98. Past the needed number the curve bends
*down* rather than staying flat — extra passes on an already-solved problem are
not free, they are another chance to corrupt the state.

Two honest caveats, visible in the same table:

- **`T < k` fails softly.** Underthinking is not a smaller version of thinking; it
  is a different answer.
- **Unseen `k` does not transfer.** Train on `k ≤ 4`, evaluate on `k = 6`, and the
  model is at chance for every `T`. Reusing weights buys depth *within* the range
  you trained; extrapolating beyond it is an open problem, not a free lunch.

The figure below makes the diagonal visible, and puts the fixed-depth baseline on
the same axes.""",
    """对角线就是答案。准确率大体跟着 `min(T, k)` 走——超过步数的循环买不到东西，而不足时它是
*温和地*退化，不是断崖：只跑一次时
`k = 2` 已经能到 0.76、`k = 4` 只剩 0.23；两次把 `k = 2` 送到 1.00，三次把 `k = 3` 送到 1.00，
四次把 `k = 4` 送到 0.98。而超过所需次数之后，曲线是*往下弯*的，不是持平——对一道已经做对的题
继续循环不是免费的，它只是又给了一次破坏状态的机会。

同一张表里还有两个诚实的注脚：

- **`T < k` 是"软失败"。** 想得不够不等于想得少一点，它是另一个答案。
- **没见过的 `k` 不会迁移。** 在 `k ≤ 4` 上训练、在 `k = 6` 上评估，无论 `T` 取多少都在瞎猜水平。
  复用权重买到的是*训练范围内*的深度；超出范围的外推是一个开放问题，不是免费午餐。

下图把这条对角线画出来，并把固定深度基线放进同一坐标系。""",
)

code(
    r"""
ks = list(range(1, 7))
grid = [[accuracy(looped, k, T) for T in range(1, 7)] for k in ks]

fig, axes = plt.subplots(1, 2, figsize=(11.0, 5.0), gridspec_kw={"width_ratios": [1, 1.05]})
ax = axes[0]
im = ax.imshow(grid, cmap="YlGnBu", vmin=0, vmax=1, origin="lower")
ax.set_xticks(range(6), range(1, 7)); ax.set_yticks(range(6), range(1, 7))
ax.set_xlabel("passes at inference (T)"); ax.set_ylabel("terms in the sum (k)")
ax.set_title("Loops are sequential steps", loc="left"); ax.grid(False)
for i, row in enumerate(grid):
    for j, v in enumerate(row):
        ax.text(j, i, f"{v:.2f}", ha="center", va="center", fontsize=7.5,
                color="white" if v > 0.6 else INK)
ax.plot([-0.5, 5.5], [-0.5, 5.5], color=LIME, linewidth=1.4, linestyle=(0, (4, 3)),
        label="T = k, just enough passes")
cbar = fig.colorbar(im, ax=ax, fraction=0.046, pad=0.03)
cbar.set_label("accuracy", fontsize=9); cbar.outline.set_visible(False)

ax = axes[1]
for k, color in zip((2, 3, 4), (CYAN, VIOLET, LIME)):
    ax.plot(range(1, 7), [accuracy(looped, k, T) for T in range(1, 7)], "o-",
            color=color, label=f"looped, k = {k}")
ax.plot(range(1, 9), [accuracy(baseline, k) for k in range(1, 9)], "s--", color=INK,
        label="fixed depth 4, one point per k")
ax.axhline(1 / P, color=MUTED, linewidth=1.0, linestyle=":", label=f"chance (1/{P})")
ax.set_xlabel("passes at inference (T); for the baseline, terms k")
ax.set_ylabel("accuracy")
ax.set_ylim(0, 1.08); ax.set_xticks(range(1, 9))
ax.set_title("More loops help until the problem is solved", loc="left")

# one legend for both panels, below the axis labels: keeping it out of the heatmap
# matters, every cell is already labelled
h1, l1 = axes[0].get_legend_handles_labels()
h2, l2 = axes[1].get_legend_handles_labels()
fig.legend(h1 + h2, l1 + l2, loc="lower center", bbox_to_anchor=(0.5, -0.03), ncol=6,
           frameon=False, fontsize=7.9, handlelength=1.6, columnspacing=1.1)
fig.tight_layout(rect=(0, 0.08, 1, 1)); save(fig, "03-depth-diagonal.png"); plt.show()
"""
)

md(
    """Read the right panel as a budget line. For `k = 2` two passes are enough and a
sixth pass is waste; for `k = 4` the model needs four. The dashed control is
plotted against `k` because a fixed stack has no `T` to vary: it is excellent where
it was trained and helpless one step beyond.

> **Paper trail.** The depth-as-compute framing, the `min(T, k)` diagonal, and the
> underthinking failure are the subject of the *Adaptive Compute* track in the
> [catalog](https://github.com/Mrkkew/Awesome-Loop-Transformers#adaptive-compute):
> depth-portfolio work (depth as a candidate source), fixed-horizon latent
> reasoning (why running to the horizon hurts), and late-entry loops that let new
> tokens skip the early passes.""",
    """把右图读成一条预算线：`k = 2` 时两次循环就够，第六次是浪费；`k = 4` 时需要四次。虚线对照画在 `k` 轴上——固定深度的栈没有可变的 `T`：
它在训练过的地方极好，往后再走一步就无能为力。

> **延伸阅读。** "深度即算力"的框架、`min(T, k)` 的对角线、以及 underthinking 这个失败模式，正是
> [目录](https://github.com/Mrkkew/Awesome-Loop-Transformers#adaptive-compute)中
> *自适应计算* 这一栏的主题：深度组合（把深度当作候选答案来源）、固定视界的潜在推理（为什么
> 一直算到上限反而更差）、以及让新 token 跳过早期循环的 late-entry 方法。""",
)

# --------------------------------------------------------------------------- #
# 2b. The bill
# --------------------------------------------------------------------------- #

md(
    """Before moving on, price what you just built. The looped model has four blocks
(one prelude, two shared, one coda) plus the embeddings, the loop index and the
injection gate — and that total does not change when `T` does. The control pays for
depth the only way a stack can: one more block per step.

That is the trade in one figure: a line that climbs with depth, and a flat one that
does not.""",
    """在往下走之前，先给刚搭好的东西标价。循环模型有四个 block（一个 prelude、两个共享块、
一个 coda），再加上嵌入、loop index 和注入门——这个总数不随 `T` 改变。而对照组只能按栈的方式
为深度付费：多一步，就多一个 block。

一张图就是这笔交易：一条随深度上升的线，和一条不动的线。""",
)

code(
    r"""
def n_params(m):
    return sum(p.numel() for p in m.parameters())

depths = [1, 2, 4, 6, 8, 12]
fig, ax = plt.subplots(figsize=(7.2, 3.7))
ax.plot(depths, [n_params(FixedDepth(depth=d)) / 1e3 for d in depths], "o-",
        color=INK, label="fixed stack: one block per layer")
ax.axhline(n_params(looped) / 1e3, color=CYAN, linestyle="--",
           label="looped: 4 blocks, any number of passes")
ax.annotate(f"{n_params(looped):,}", xy=(2, n_params(looped) / 1e3), xytext=(0, 10),
            textcoords="offset points", ha="center", va="bottom", fontsize=8.2, color=CYAN)
ax.annotate(f"8 layers: {n_params(FixedDepth(depth=8)):,}", xy=(8, n_params(FixedDepth(depth=8)) / 1e3),
            xytext=(9, -6), textcoords="offset points", ha="left", va="top",
            fontsize=8.2, color=INK)
ax.set_xlabel("effective depth (number of passes)"); ax.set_ylabel("parameters (thousands)")
ax.set_title("Depth is free at inference time, not in the weights", loc="left")
ax.legend(loc="upper left"); ax.set_xticks(depths); ax.set_ylim(0, 700)
fig.tight_layout(); save(fig, "02-params-vs-depth.png"); plt.show()

print(f"one block                 {n_params(Block(D)):,}")
print(f"looped model              {n_params(looped):,}   (independent of T)")
print(f"  of which 4 x block      {4 * n_params(Block(D)):,}")
print(f"fixed stack, depth 8      {n_params(FixedDepth(depth=8)):,}")
print(f"ratio at depth 8          {n_params(FixedDepth(depth=8)) / n_params(looped):.2f}x")
"""
)

# --------------------------------------------------------------------------- #
# 3. What the loop needs
# --------------------------------------------------------------------------- #

md(
    """## 3. Three pieces that make the loop trainable

A loop with one shared block is not yet a good model. Three ingredients separate a
toy from something you can train at scale, and each one answers a specific failure.

### 3.1 The block must know which pass it is on

A shared block sees `h_t`, but nothing in `h_t` says whether this is pass 2 or pass
7. Add a learned embedding of the pass index (a "loop index", the depth analogue of
a position embedding) and the same weights can behave differently at different
depths. OpenMythos does exactly this with `loop_index_embedding(h, t, loop_dim)`,
which is cheaper than a table: a sinusoidal code — the depth analogue of RoPE — is
*added* to the first `loop_dim = dim // 8` channels of `h`, and the rest of the
state passes through untouched:

```python
h_loop = loop_index_embedding(h, t, self.loop_dim)   # h + sinusoidal bias
combined = self.norm(h_loop + e)
```

Our toy takes the other cheap route, a learned `Embedding(32, d)` added to the whole
state. Either way the point is the same: the shared weights need to know which pass
they are on, and both routes cost a few thousand parameters.

### 3.2 Per-pass specialisation without untying the weights

If every pass should behave slightly differently, the naive fix is one block per
pass — and the parameter count is back to a fixed-depth stack. The cheap fix is a
low-rank adapter per pass: `rank` controls the price. Depth-wise LoRA is what
OpenMythos uses (`LoRAAdapter`, `lora_rank=16` by default). The table below prices
all three options for the model you just trained.

### 3.3 The recurrence must be bounded

This is the failure that kills naive implementations. `h_{t+1} = A h_t + …` is a
linear recurrence: if the spectral radius of `A` exceeds 1, the state grows
geometrically with depth, and so does the gradient. OpenMythos removes the choice
by reparameterising

```python
A = exp(-exp(log_dt + log_A))     # LTIInjection.get_A(), clamped to (-20, 20)
```

which is in `(0, 1)` for every value of the parameters. Stability stops being a
hyperparameter you tune and becomes a property of the parameterisation. The next
two cells show the difference on the same initialisation.""",
    """## 3. 让循环可训练的三件东西

一个共享 block 的循环还不是一个好模型。要把玩具变成能在规模上训练的东西，需要三样配料，每一样都
对应一个具体的失败。

### 3.1 块必须知道自己走到第几步

共享块看到的是 `h_t`，但 `h_t` 里没有任何信息说明这是第 2 次还是第 7 次。加一个可学习的步数嵌入
（"loop index"，位置嵌入在深度方向上的对应物），同一组权重就能在不同深度上表现不同。OpenMythos
正是这么做的，而且比查表更省：`loop_index_embedding(h, t, loop_dim)` 是一个正弦编码（RoPE 在
深度方向上的对应物），它被*加*到 `h` 的前 `loop_dim = dim // 8` 个通道上，其余状态原样通过：

```python
h_loop = loop_index_embedding(h, t, self.loop_dim)   # h + sinusoidal bias
combined = self.norm(h_loop + e)
```

我们的玩具走另一条省钱的路：一个可学习的 `Embedding(32, d)` 加到整个状态上。两条路要点相同：
共享权重需要知道自己是第几步，而两者都只花几千个参数。

### 3.2 每次循环各自特化，但不解开权重绑定

如果希望每次循环略有不同，朴素做法是"一次循环一个块"——参数量立刻退回固定深度栈。便宜的做法是
每次循环挂一个低秩适配器：`rank` 就是价格。OpenMythos 用的正是 depth-wise LoRA
（`LoRAAdapter`，默认 `lora_rank=16`）。下面的表格给你刚训好的模型把三种方案的价钱标出来。

### 3.3 递归必须有界

这是杀死朴素实现的那个失败。`h_{t+1} = A h_t + …` 是一个线性递归：只要 `A` 的谱半径大于 1，
状态就随深度几何增长，梯度也是。OpenMythos 干脆取消了这个选择，用重参数化

```python
A = exp(-exp(log_dt + log_A))     # LTIInjection.get_A()，clamp 到 (-20, 20)
```

它对任意参数取值都落在 `(0, 1)`。稳定性不再是你调的超参数，而是参数化的性质。接下来两格在同一
初始条件下把差别画出来。""",
)

code(
    r"""
def price(d=D, depth=2, rank=4, passes=8):
    shared = Looped(d=d, depth=depth, loop_index=False)
    base = sum(p.numel() for p in shared.parameters())
    unrolled = base + depth * passes * sum(p.numel() for p in Block(d).parameters())
    lora = base + passes * (rank * d * 2)
    return base, unrolled, lora

base, unrolled, lora = price()
print(f"shared core + one block, 8 passes   {base:>10,}")
print(f"8 independent blocks (no tying)     {unrolled:>10,}   ({unrolled / base:.2f}x)")
print(f"shared core + LoRA(r=4) on 8 passes {lora:>10,}   ({lora / base:.2f}x)")
print(f"LoRA adds {lora - base:,} params for {8} passes = {((lora - base) / 8):,.0f} per pass")
"""
)

md(
    """Cheap, and it is the difference between "one model with eight behaviours" and
"eight models". Note that the adapter is zero-initialised (`up.weight = 0`), so
adding it cannot damage a trained checkpoint at step zero.

Now stability. The two panels below run the same recurrence for 16 passes with the
same random draw of `A`, once without the constraint (`A = exp(raw)`, unbounded) and
once with it. Note that the y-axis is logarithmic — the unbounded state is not
"slightly larger".""",
    """很便宜，而且这正是"一个有八种行为的模型"和"八个模型"的区别。注意适配器是零初始化的
（`up.weight = 0`），所以它在第 0 步不会破坏任何已经训好的权重。

接下来是稳定性。下面两栏用同一份随机 `A` 把同一个递归跑 16 次：一次不加约束
（`A = exp(raw)`，无界），一次加约束。注意纵轴是对数刻度——无界状态不是"稍微大一点"。""",
)

code(
    r"""
torch.manual_seed(3)
raw = torch.randn(D) * 1.5        # the same draw feeds both branches
A_free = raw.exp()                                        # unbounded: exp(raw)
A_lti = torch.exp(-torch.exp(raw.clamp(-20, 20)))          # bounded: exp(-exp(raw))

def state_norm(A, passes=16, e=torch.ones(D)):
    h, norms = torch.zeros(D), []
    for _ in range(passes):
        h = A * h + e
        norms.append(h.norm().item())
    return norms

free, lti = state_norm(A_free), state_norm(A_lti)

fig, ax = plt.subplots(figsize=(7.4, 3.7))
ax.plot(range(1, 17), free, "o-", color=VIOLET, label="unconstrained  A = exp(raw)")
ax.plot(range(1, 17), lti, "o-", color=CYAN, label="LTI  A = exp(-exp(log_dt + log_A))")
ax.set_yscale("log"); ax.set_xlabel("pass t"); ax.set_ylabel(r"$\Vert h_t\Vert$  (log scale)")
ax.set_title("A linear recurrence either forgets or explodes", loc="left")
ax.legend(loc="upper left", fontsize=9)
ax.text(0.03, 0.66, f"unconstrained:  rho = {A_free.max():.1f}  ->  overflow\n"
                    f"LTI:            rho = {A_lti.max():.2f}  ->  bounded",
        transform=ax.transAxes, va="top", fontsize=9,
        bbox=dict(boxstyle="round,pad=0.45", facecolor="white", edgecolor=GRID))
fig.tight_layout(); save(fig, "04-stability.png"); plt.show()

print(f"unconstrained: max |h| = {max(free):.1f} after 16 passes")
print(f"LTI:           max |h| = {max(lti):.1f} after 16 passes")
print(f"our trained model's mean rho = {looped.A.mean().item():.2f}")
"""
)

md(
    """In the trained model the gate settles around `0.3`: it *wants* to forget most of
the state on every pass and re-read the injected input instead. That is the
behaviour the constraint makes safe — a shared block with a long memory is a block
that can blow up; a shared block with a short memory is a block that can be looped.

> **Paper trail.** Stability, the LTI parameterisation, and the scaling laws that
> come with it are catalogued under *Architectures & Scaling* and
> *Foundations & Theory*: the recurrent-depth stability line, per-layer fixed
> points in cyclic recurrence, and the looped-MoE scaling results that make the
> parameter-efficiency claim measurable.""",
    """在训练好的模型里，这个门稳定在 `0.3` 左右：它*想要*在每次循环时忘掉大部分状态，重新读注入的
输入。这正是约束让它安全的行为——记忆很长的共享块是会炸的块，记忆很短的共享块才是能被循环的块。

> **延伸阅读。** 稳定性、LTI 参数化以及随之而来的 scaling law 收在 *架构与扩展* 和
> *基础与理论* 两栏：递归深度的稳定性研究、循环递归中的逐层不动点、以及让"参数效率"这句话变得
> 可度量的 looped-MoE scaling 结果。""",
)

# --------------------------------------------------------------------------- #
# 4. Halting
# --------------------------------------------------------------------------- #

md(
    """## 4. When to stop

If `T ≥ k` is enough, then for most inputs `T` is *too much*. A deployed model
should not spend eight passes on a two-term sum. This is what adaptive computation
time (ACT) is for: a small head reads the state, predicts "am I done?", and the
model stops.

The mechanism is a cumulative product. At pass `t` the head emits `p_t`; the
probability of having exited by pass `t` is `1 - Π(1 - p_s)`. When that crosses a
threshold the sample stops — per *position*, not per sequence, in OpenMythos, which
scores every token separately and keeps a weight for each pass. Worth knowing before
you expect a speed-up: with a KV cache the loop still runs every pass, so the saving
shows up in which pass answers, not in skipped matmuls.

In the original ACT paper the exit probability is trained with a ponder cost, so the
model cannot simply always wait. OpenMythos ships the gate (`ACTHalting`,
`act_threshold = 0.99`) but no explicit halting loss; the toy below adds one, because
a frozen core plus a stop term is the smallest setup where the behaviour is visible.

We keep the trained core frozen and train only the halting head — the cheap version
of the experiment, and the one that shows the behaviour clearly.""",
    """## 4. 什么时候停

如果 `T ≥ k` 就够，那对大多数输入来说 `T` 其实*太多*了。上线模型不该在两项求和的题上花八次循环。
这就是自适应计算时间（ACT）要解决的问题：一个小头读一下状态，预测"我算完了吗"，然后停下来。

机制是一个累积乘积。第 `t` 次循环时，头输出 `p_t`；到第 `t` 次为止已经退出的概率是
`1 - Π(1 - p_s)`。越过阈值就停——在 OpenMythos 里是逐*位置*（逐 token）停，它对每个 token 单独打分
并保留每一次循环的权重。所以在期待加速之前要知道：带 KV cache 时每一次循环照样要跑，省下来的是
"用哪一次循环的输出去答"，不是跳过的矩阵乘。

在原版 ACT 里，退出概率靠 ponder 代价训练出来，模型才不能永远选择再等一次。OpenMythos 提供了这个门
（`ACTHalting`，`act_threshold = 0.99`），但没有显式的停机损失；下面的玩具加了一项，因为"冻结主干
加停机项"是能看清行为的最小设定。

我们把训练好的核心冻住，只训练停机头——这是这个实验的便宜版本，也是最能看清行为的版本。""",
)

code(
    r"""
class Halted(nn.Module):
    '''Frozen looped core + a halting head (ACT-style cumulative exit).'''
    def __init__(self, base):
        super().__init__()
        self.base, self.halt = base, nn.Linear(D, 1)
        for p in base.parameters():
            p.requires_grad_(False)

    def forward(self, a, loops=None):
        b, k = a.shape
        loops = self.base.loops if loops is None else loops
        x = self.base.embed(a) + self.base.pos(torch.arange(k))
        for blk in self.base.prelude:
            x = blk(x)
        e, h = x, torch.zeros_like(x)
        remaining = torch.ones(b)
        logits, probs, exits = [], [], []
        for t in range(loops):
            y = h + self.base.loop_index(torch.tensor(t))
            for blk in self.base.core:
                y = blk(y)
            h = self.base.A * h + self.base.B * e + y
            z = h
            for blk in self.base.coda:      # every pass is decoded, so every pass can answer
                z = blk(z)
            p = torch.sigmoid(self.halt(self.base.norm(h[:, -1]))).squeeze(-1)
            logits.append(self.base.head(self.base.norm(z[:, -1])))
            probs.append(p)
            exits.append(remaining * p)
            remaining = remaining * (1 - p)
        return logits, probs, exits


torch.manual_seed(0)
halted = Halted(looped)
opt = torch.optim.AdamW(halted.halt.parameters(), lr=1e-2)
for step in range(400):
    k = int(torch.randint(1, 5, (1,)))
    a, y = make_batch(64, k)
    logits, probs, exits = halted(a, loops=k + 2)
    # answer term: weighted by how likely this pass is the one we stop at
    answer_term = sum((exits[t] * F.cross_entropy(logits[t], y, reduction="none")).mean()
                      for t in range(len(logits)))
    # stop term: "by this pass the sum has been added k times, so stop here"
    ones = torch.ones(a.shape[0])
    stop_term = sum(F.binary_cross_entropy(probs[t], ones if t >= k else 1 - ones)
                    for t in range(len(logits))) / len(logits)
    loss = answer_term + 0.3 * stop_term
    opt.zero_grad(); loss.backward(); opt.step()


@torch.no_grad()
def spend(k, loops=6, threshold=0.5):
    '''Read the answer at the pass the model decides to exit at.'''
    a, y = make_batch(256, k)
    logits, probs, exits = halted(a, loops=loops)
    cdf = torch.stack(exits).cumsum(0)                        # P(exited by pass t)
    choice = (cdf < threshold).sum(0).clamp(max=loops - 1)     # first pass over threshold
    guesses = torch.stack([lg.argmax(-1) for lg in logits])[choice, torch.arange(a.shape[0])]
    return (guesses == y).float().mean().item(), (choice + 1).float().mean().item()

budget = {k: spend(k) for k in range(1, 5)}
for k, (acc, used) in budget.items():
    print(f"k={k}: accuracy {acc:.2f}, loops actually spent {used:.2f}")

fig, ax = plt.subplots(figsize=(6.6, 3.6))
ks = list(budget); used = [budget[k][1] for k in ks]
bars = ax.bar(ks, used, color=[CYAN, CYAN, VIOLET, LIME], width=0.62)
for b, v in zip(bars, used):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.06, f"{v:.1f}", ha="center", fontsize=9.5)
ax.plot(ks, ks, "o--", color=INK, linewidth=1.4, markersize=5, label="k (steps actually needed)")
ax.axhline(6, color=MUTED, linestyle=":", linewidth=1.2, label="fixed horizon (6)")
ax.set_xlabel("terms in the sum (k)"); ax.set_ylabel("loops spent")
ax.set_title("Compute follows difficulty, not the horizon", loc="left")
ax.set_ylim(0, 6.8); ax.set_xticks(ks)
ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.2), ncol=2, fontsize=8.6,
          frameon=False)
fig.tight_layout(); save(fig, "05-halting.png"); plt.show()
avg = sum(used) / len(used)
mean_acc = sum(budget[k][0] for k in budget) / len(budget)
fixed_acc = sum(accuracy(looped, k, 4) for k in range(1, 5)) / 4
print(f"mean accuracy with halting    {mean_acc:.2f} at {avg:.2f} loops")
print(f"mean accuracy at fixed T = 4  {fixed_acc:.2f} at 4.00 loops")
print(f"mean accuracy at fixed T = 6  {sum(accuracy(looped, k, 6) for k in range(1, 5)) / 4:.2f} at 6.00 loops")
print(f"halting vs T=4: {4 / avg:.2f}x fewer loops, and it overshoots on k=4 instead of stopping at 4")
"""
)

md(
    """The bars track `k` instead of the horizon, and accuracy is read at the pass the
model actually exits at, so stopping early costs nothing. The calibration is
visible in the numbers: 1.4, 2.5, 3.7 and 5.4 loops for `k = 1…4`. It follows
difficulty, it overshoots by about half a pass, and it stays under the cap of 6
instead of always spending it. Compare with §2, where
the same weights at `T = 6` were *worse* than at `T = k`: with a halting head the
model keeps the good pass and throws the rest away, which is the whole point of
adaptive computation.

Three things to be precise about:

- this head is trained *after* the core, on a frozen backbone, with two terms: a
  cross-entropy term weighted by the probability of exiting at that pass, and a
  binary term that says "by this pass the answer is in the state". OpenMythos
  ships `ACTHalting` as a per-position gate with `act_threshold = 0.99` instead of
  a 0.5 CDF cut, and no halting loss of its own;
- the 0.5 cut is a latency/accuracy knob, not a law. Raising it spends more loops;
- halting does not rescue the extrapolation failure from §2. If the answer is not
  in the state, exiting later only spends more compute on a wrong answer.""",
    """柱子跟着 `k` 走而不是跟着预算走，而且准确率是在模型真正退出的那一次循环上读的——所以提前停
不吃亏。标定得准不准，数字自己会说：`k = 1…4` 分别花掉 1.4、2.5、3.7、5.4 次循环。它跟着难度
走，平均多花半次左右，但始终没顶到 6 的上限。对照第 2 节：同一组权重固定跑 `T = 6` 时比 `T = k` 更*差*；有了停机头，模型可以留下好的
那一次、把多余的丢掉。这就是自适应计算的全部意义。

三点要精确：

- 这个头是在冻结主干*之后*训练的，损失由两项组成：按"在此次循环退出"概率加权的交叉熵，以及一句
  "到这次循环为止答案已在状态里"的二分类。OpenMythos 只提供这个门（`ACTHalting`，
  `act_threshold = 0.99`，取代这里的 0.5 累积切点），本身没有停机损失；
- 0.5 是延迟/准确率的旋钮，不是定律。调高它就要多花循环；
- 停机救不了第 2 节的外推失败。如果答案不在状态里，晚点退出只是在错误答案上多花算力。""",
)


# --------------------------------------------------------------------------- #
# 5. OpenMythos
# --------------------------------------------------------------------------- #

md(
    """## 5. The same thing, engineered

Everything above is ~150 lines. [OpenMythos](https://github.com/kyegomez/OpenMythos)
is the same idea with the parts a real training run needs: GQA/MLA attention,
fine-grained MoE with shared experts, per-pass LoRA, ACT, and a loop index that is
concatenated rather than added.

| Piece | Our toy | OpenMythos | Why it exists |
| --- | --- | --- | --- |
| Blocks | 1 prelude + 2 shared + 1 coda | `prelude_layers=2`, `coda_layers=2`, shared `RecurrentBlock` | Depth where it is cheap, width where it is not |
| Injection | `h = A·h + B·e + y` | `LTIInjection` (`log_A`, `log_dt`, `B`) | Bounded state, guaranteed |
| Loop index | learned table, added to all channels | `loop_index_embedding`: sinusoidal, added to the first `dim // 8` channels | The block must know its pass |
| Per-pass | none / optional LoRA | `LoRAAdapter(rank=16)` per pass | Specialisation at a few thousand parameters |
| Halting | frozen-core ACT head + stop loss | `ACTHalting`, `act_threshold=0.99`, no stop loss | Per-position exit |
| Width | dense MLP | `MoEFFN` (64 experts, top-4, 2 shared) | Breadth across domains |
| Attention | 4-head MHA | GQA or MLA, switchable | KV-cache economics |

Install it and run the real thing at a size your laptop survives.""",
    """## 5. 同一件事，被工程化之后

上面所有代码大约 150 行。[OpenMythos](https://github.com/kyegomez/OpenMythos) 是同一个想法，
加上一次真实训练需要的东西：GQA/MLA attention、带共享专家的细粒度 MoE、逐次循环的 LoRA、ACT，
以及用正弦编码（加到前 `dim // 8` 个通道）实现的 loop index。

| 部件 | 我们的玩具 | OpenMythos | 它为什么存在 |
| --- | --- | --- | --- |
| 分块 | 1 prelude + 2 共享 + 1 coda | `prelude_layers=2`、`coda_layers=2`、共享 `RecurrentBlock` | 便宜的地方给深度，不便宜的地方给宽度 |
| 注入 | `h = A·h + B·e + y` | `LTIInjection`（`log_A`、`log_dt`、`B`） | 状态有界，且是保证的 |
| Loop index | 学习到的查表嵌入，加到全部通道 | `loop_index_embedding`：正弦，加到前 `dim // 8` 通道 | 块必须知道自己是第几步 |
| 逐次特化 | 无 / 可选 LoRA | 每次循环一个 `LoRAAdapter(rank=16)` | 几千个参数就买到特化 |
| 停机 | 冻结主干的 ACT 头（带停机损失） | `ACTHalting`，`act_threshold=0.99`，无停机损失 | 逐位置的退出判断 |
| 宽度 | 稠密 MLP | `MoEFFN`（64 专家、top-4、2 共享） | 跨领域的广度 |
| 注意力 | 4 头 MHA | GQA 或 MLA 可切换 | KV cache 的经济学 |

装上它，在笔记本能承受的尺寸下跑一次真的。""",
)

code(
    r"""
# pip install git+https://github.com/kyegomez/OpenMythos   (skip this cell if unavailable)
import warnings
warnings.filterwarnings("ignore", message=".*IProgress not found.*")

try:
    from open_mythos.main import MythosConfig, OpenMythos
    HAVE_MYTHOS = True
except Exception as exc:            # pragma: no cover - offline fallback
    HAVE_MYTHOS = False
    print("open-mythos not installed:", exc)

if HAVE_MYTHOS:
    cfg = MythosConfig(
        vocab_size=256, dim=128, n_heads=4, n_kv_heads=2, max_seq_len=32,
        max_loop_iters=8, prelude_layers=1, coda_layers=1, attn_type="gqa",
        n_experts=4, n_shared_experts=1, n_experts_per_tok=2, expert_dim=64,
        lora_rank=8, act_threshold=0.99,
    )
    mythos = OpenMythos(cfg).eval()
    tokens = torch.randint(0, cfg.vocab_size, (2, 12))
    print(f"OpenMythos tiny config: {sum(p.numel() for p in mythos.parameters()):,} params, "
          f"{cfg.max_loop_iters} max loops")
    with torch.no_grad():
        z = {}
        for loops in (1, 2, 4, 8):
            z[loops] = mythos(tokens, n_loops=loops)
            print(f"  n_loops={loops}: logits {tuple(z[loops].shape)}, "
                  f"mean |logit| {z[loops].abs().mean():.3f}")
        drift = (z[8] - z[1]).abs().max()
        print(f"  max |logit(8 loops) - logit(1 loop)| = {drift:.3f}")
"""
)

md(
    """Same input, four different compute budgets, one set of weights. The API is the
dial: `n_loops` is a forward-pass argument, so serving cost is decided per request
rather than at architecture time.

Be honest about what the numbers above show. At random initialisation the output
barely moves with `n_loops` — the max |Δlogit| is about two fifths of the mean
|logit| size — and that is exactly right: an untrained recurrent block has almost nothing
to add, and the injection gate keeps the state close to `e`. The interesting part
is that the mechanism *allows* the state to keep evolving without blowing up; the
depth gets spent once training gives the block something to compute.

What to look at in the source, in reading order:

1. `LTIInjection` (~line 684) — `get_A()` and the update rule. Ten lines, and they
   are the reason the recurrence survives.
2. `RecurrentBlock.forward` (~line 825) — the loop body: loop index, injection,
   per-pass LoRA, optional ACT.
3. `ACTHalting` (~line 750) — the cumulative exit and the per-position gate.
4. `OpenMythos.__init__` (~line 926) — how prelude / recurrent / coda are wired,
   including the weight-tied head.
5. `tests/small_benchmark.py` — a depth sweep over `n_loops ∈ {1, 2, 4, 8, 16}`
   against a same-depth fixed baseline, i.e. the experiment this notebook runs at
   toy scale, after actual training.

The parameter-efficiency claim you will see quoted — a looped model matching a
fixed-depth model roughly twice its size — comes from the Parcae scaling laws this
implementation is built on (Parcae is in the catalog), not from this notebook. Our
toy is a teaching device: treat the numbers as shape, not magnitude.""",
    """同一份输入、四种算力预算、一组权重。API 本身就是那个旋钮：`n_loops` 是一次前向的参数，
于是服务成本按请求决定，而不是在架构阶段定死。

对上面数字要诚实：在随机初始化下，输出几乎不随 `n_loops` 变化——`max |Δlogit|` 大约是平均 `|logit|` 的五分之二
——而这恰好是对的：没训练过的循环块几乎没有东西可加，注入门让状态停在 `e` 附近。真正
有意思的是机制*允许*状态持续演化而不炸掉；等训练让块有东西可算，深度才会被花掉。

源码里值得按顺序看的地方：

1. `LTIInjection`（约 684 行）—— `get_A()` 和更新式。十行代码，是递归能活下来的原因。
2. `RecurrentBlock.forward`（约 825 行）—— 循环体：loop index、注入、逐次 LoRA、可选 ACT。
3. `ACTHalting`（约 750 行）—— 累积退出与逐位置的门。
4. `OpenMythos.__init__`（约 926 行）—— prelude / recurrent / coda 怎么接起来，包括共享权重的
   head。
5. `tests/small_benchmark.py` —— 在 `n_loops ∈ {1, 2, 4, 8, 16}` 上做深度扫描，并与同深度固定
   基线对比；也就是本 notebook 在玩具尺度上跑的那个实验（它真的会训练）。

你可能会看到被引用的参数效率结论——循环模型能追平大约两倍于它的固定深度模型——它来自这套实现所
依据的 Parcae scaling law（Parcae 就在目录里），而不是来自这份 notebook。我们的玩具是教学装置：
把数字当形状看，别当量级看。""",
)

# --------------------------------------------------------------------------- #
# 6. Where to go
# --------------------------------------------------------------------------- #

md(
    """## 6. Where to read next

You now have the mechanical picture. The literature is about the three places it
gets hard: **what to inject and where** (architecture), **how much to compute per
token** (adaptive compute), and **how to serve a model whose depth is a variable**
(systems).

- **[Adaptive compute](https://github.com/Mrkkew/Awesome-Loop-Transformers#adaptive-compute)**
  — depth portfolios, fixed-horizon latent reasoning, late entry, halting. Start
  here if §2 and §4 were the interesting part.
- **[Architectures & scaling](https://github.com/Mrkkew/Awesome-Loop-Transformers#architectures--scaling)**
  — stability, looped MoE, latent lattices, model carving. Start here if §3 was.
- **[Systems & applications](https://github.com/Mrkkew/Awesome-Loop-Transformers#systems--applications)**
  — loop-aware speculative decoding, KV-cache growth under looping,
  fill-in-the-loop drafting. Start here if you care about the serving bill.
- **[Foundations & theory](https://github.com/Mrkkew/Awesome-Loop-Transformers#foundations--theory)**
  — when reuse helps, fixed points, why depth is not uniform. Start here if you
  want the proofs.

The catalog holds nine tracks like these, each paper with an original
English/Chinese summary and the official code link where one exists. If this
notebook changed how you read one of them, it did its job.

*To regenerate these notebooks after editing the prose in
`tutorials/build_notebooks.py`: `python tutorials/build_notebooks.py --execute`.*""",
    """## 6. 接下来读什么

到这里，机制上的图景你已经有了。文献真正难的地方有三处：**注入什么、注入到哪**（架构），
**每个 token 该花多少算力**（自适应计算），以及**怎么服务一个深度是变量的模型**（系统）。

- **[自适应计算](https://github.com/Mrkkew/Awesome-Loop-Transformers#adaptive-compute)**
  —— 深度组合、固定视界的潜在推理、late entry、停机。如果 §2 和 §4 是你觉得有意思
  的部分，从这里开始。
- **架构与扩展** —— 稳定性、looped MoE、latent lattice、model carving。如果 §3 打动你，从这里开始。
- **系统与应用** —— 面向循环的投机解码、循环下的 KV cache 增长、循环内补全式草稿。如果你关心
  服务的账单，从这里开始。
- **基础与理论** —— 复用何时有效、不动点、为什么深度并不均质。想要证明的话，从这里开始。

目录收录约 280 篇论文、九个主题，每篇都有原创的中英文概述，有官方代码的地方都给了链接。如果这份
notebook 改变了你读其中某一篇的方式，它就完成任务了。

*修改 `tutorials/build_notebooks.py` 里的正文之后重新生成：
`python tutorials/build_notebooks.py --execute`。*""",
)


def build(lang: str) -> nbformat.NotebookNode:
    nb = new_notebook()
    for cell in CHAPTERS:
        if cell["type"] == "md":
            nb.cells.append(new_markdown_cell(cell[lang]))
        else:
            nb.cells.append(new_code_cell(cell["src"]))
    nb.metadata.update(
        {
            "kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
            "language_info": {"name": "python", "version": "3.10+"},
            "title": "Looped Transformers, from one block to OpenMythos",
        }
    )
    return nb


TARGETS = {
    "en": "loop-transformers.ipynb",
    "zh": "loop-transformers.zh-CN.ipynb",
}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--execute", action="store_true", help="run the notebooks and embed outputs")
    args = parser.parse_args()

    for lang, name in TARGETS.items():
        path = HERE / name
        nb = build(lang)
        if args.execute:
            from nbclient import NotebookClient

            client = NotebookClient(nb, timeout=900, kernel_name="python3", resources={"metadata": {"path": HERE}})
            client.execute()
        nbformat.write(nb, path)
        print(f"wrote {path.relative_to(HERE.parent)} ({len(nb.cells)} cells)")


if __name__ == "__main__":
    main()
