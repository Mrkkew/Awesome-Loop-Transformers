# 从一个 Block 到 OpenMythos：循环 Transformer 入门

这是本阅读清单的配套动手教程。清单里的其他页面告诉你文献怎么说，这一页让你亲手跑一遍。

你从单个 Transformer block 出发，先在一个"难度恰好等于串行步数"的任务上把它训到失败，最后读
[OpenMythos](https://github.com/kyegomez/OpenMythos) 的源码——一个开放实现的递归深度
Transformer。中间你会自己训练这个循环，量出多循环到底买到了什么，看到它想多了反而变差，也会认出
那些让共享块不炸掉的工程细节。

- **成本：** 只用 CPU，训练总计约一分钟，不需要下载数据集，不需要 GPU。
- **代码：** 约 370 行手写的 PyTorch 与 matplotlib，其中模型与训练循环约 200 行。
- **Notebook：** [中文](loop-transformers.zh-CN.ipynb) · [English](loop-transformers.ipynb)

## 章节

| # | 问题 | 你会得到什么 |
| --- | --- | --- |
| 0 | 这个想法长什么形状？ | 一张 Prelude → Recurrent → Coda 的结构图，以及一次循环做了什么 |
| 1 | 固定深度的模型会输在哪？ | 一个难度等于步数的合成任务，以及那道断崖 |
| 2 | 复用同一个块之后，什么变了？ | 一个训好的循环模型、参数账单、准确率 × 循环次数热图，以及"想多了"的现象 |
| 3 | 一个循环需要什么才可训练？ | 输入注入、loop index、逐次 LoRA，以及稳定的线性递归 |
| 4 | 循环什么时候该停？ | 一个 ACT 停机头：算力跟着难度走，而不是跟着预算走 |
| 5 | OpenMythos 怎么把它们组装起来？ | 一个 tiny config 在 1/2/4/8 次循环下跑起来，外加源码阅读顺序 |
| 6 | 接下来读什么 | 指向对应论文分组的入口 |

里面的数字都是量出来的，不是断言：正文引用的每个数都由上面的 cell 打印，两个模型都在
`k ≤ 4` 上训练，循环模型则按 1 到 6 次循环逐一评估。哪里是推测而不是实测，正文会明说。每章末尾
都指向[论文清单](../README.zh-CN.md) 里认真研究这个问题的部分。

## 怎么跑

本地：

```bash
python -m venv .venv && source .venv/bin/activate
pip install torch matplotlib jupyter
jupyter lab tutorials/loop-transformers.zh-CN.ipynb
```

在浏览器里：打开 notebook 用顶部的 Colab 徽标，或直接点
[这个链接](https://colab.research.google.com/github/Mrkkew/Awesome-Loop-Transformers/blob/main/tutorials/loop-transformers.zh-CN.ipynb)。

第 5 章额外需要 `pip install git+https://github.com/kyegomez/OpenMythos`；没装的话那一格会打印提示，
其余部分照常运行。

## 文件

| 文件 | 是什么 |
| --- | --- |
| `build_notebooks.py` | 两份 notebook 的唯一来源：每种语言写一遍正文，代码完全相同 |
| `loop-transformers.ipynb` | 英文 notebook，带输出与图 |
| `loop-transformers.zh-CN.ipynb` | 中文 notebook，结构与数字完全对应 |
| `figures/*.png` | 五张图，同时内嵌在 notebook 里 |

notebook 是生成出来的：要改内容请改 `build_notebooks.py` 再重建，不要直接编辑 notebook JSON。

```bash
python tutorials/build_notebooks.py --execute    # 需要 torch 与 nbclient
```

## 许可

正文与代码采用 CC BY 4.0，与本仓库一致。OpenMythos 是 MIT 许可：教程只 import 它、读它的源码，
不复制它的代码。
