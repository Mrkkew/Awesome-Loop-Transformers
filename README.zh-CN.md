<!-- This file is generated from lib/papers.ts. Edit the data source, then run npm run artifacts. -->
<a id="top"></a>

<p align="center"><strong>简体中文</strong>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="README.md">English</a></p>

<p align="center"><a href="https://awesome-loop-transformers.liyulin.workers.dev"><img src="public/readme-hero.png" alt="Awesome Loop Transformers：共享 Transformer 模块经多次循环更新隐状态，再输出结果。" width="100%" /></a></p>

<h1 align="center">Awesome Loop Transformers</h1>

<p align="center"><strong>循环 Transformer、潜在推理与测试时计算。<br>汇集论文原文、官方代码与中英文概述，梳理研究进展。</strong></p>

<p align="center"><a href="https://github.com/Mrkkew/Awesome-Loop-Transformers/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Mrkkew/Awesome-Loop-Transformers?style=flat-square&labelColor=080b18&color=d8ff55"></a>&nbsp;<a href="#complete-catalog"><img alt="Papers in the full catalog" src="https://img.shields.io/badge/papers-247-5df2ff?style=flat-square&labelColor=080b18"></a>&nbsp;<a href="https://github.com/Mrkkew/Awesome-Loop-Transformers/actions/workflows/ci.yml"><img alt="Data and build" src="https://img.shields.io/github/actions/workflow/status/Mrkkew/Awesome-Loop-Transformers/ci.yml?style=flat-square&label=build&labelColor=080b18"></a>&nbsp;<a href="LICENSE"><img alt="License: CC BY 4.0" src="https://img.shields.io/badge/license-CC%20BY%204.0-a78bfa?style=flat-square&labelColor=080b18"></a>&nbsp;<a href="data/papers.json"><img alt="JSON catalog" src="https://img.shields.io/badge/data-JSON-c6ff4a?style=flat-square&labelColor=080b18"></a></p>

<p align="center"><a href="https://awesome-loop-transformers.liyulin.workers.dev/#catalog"><strong>搜索交互式论文目录 ↗</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="https://github.com/Mrkkew/Awesome-Loop-Transformers/issues/new?template=paper-suggestion.yml">推荐论文</a></p>

<p align="center"><a href="#start-here"><strong>🧭 阅读路线</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#essential-reading"><strong>📌 推荐阅读</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#complete-catalog"><strong>📚 完整目录</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#contributing"><strong>🤝 参与贡献</strong></a></p>

<p align="center"><sub>247 篇论文 · 8 个研究方向 · English / 简体中文 · 文献更新: 2026-10-27</sub></p>

---

<a id="start-here"></a>

## 阅读路线

- **理解架构** — [Universal Transformers](https://arxiv.org/abs/1807.03819) → [循环与可编程计算](https://proceedings.mlr.press/v202/giannou23a.html) → [基础与理论](#foundations--theory)。
- **研究推理与扩展** — [Huginn](https://arxiv.org/abs/2502.05171) → [Ouro](https://arxiv.org/abs/2510.25741) → [自适应计算](#adaptive-compute)与[并行循环](https://arxiv.org/abs/2510.24824)。
- **了解相关方法** — [Coconut](https://arxiv.org/abs/2412.06769)、[HRM](https://arxiv.org/abs/2506.21734)、[TRM](https://arxiv.org/abs/2510.04871) → [广义潜在推理](#broader-latent-reasoning)。

→ [方法对照与阅读要点](docs/reading-guide.zh-CN.md)：辨析循环深度、连续思维、路由与并行循环，并了解如何比较实验结果。

<a id="essential-reading"></a>

## 推荐阅读

从共享深度架构到潜在推理，以下八项工作可作为阅读起点。简称链接至论文原文，排列不代表评价高低。

| 论文 / 模型 | 研究问题 |
| --- | --- |
| **[Universal Transformers](https://arxiv.org/abs/1807.03819)**<br><sub>2018</sub> | 如何以共享的 Transformer 变换替代固定深度的层栈？ |
| **[Programmable Looped Transformers](https://proceedings.mlr.press/v202/giannou23a.html)**<br><sub>2023</sub> | 循环 Transformer 能够执行哪些迭代算法？ |
| **[Huginn](https://arxiv.org/abs/2502.05171)**<br><sub>2025</sub> | 增加循环深度能否在不生成更多 token 的情况下改善推理？ |
| **[Ouro](https://arxiv.org/abs/2510.25741)**<br><sub>2025</sub> | 如何预训练循环语言模型，并学习计算深度的分配？ |
| **[Mixture-of-Recursions](https://arxiv.org/abs/2507.10524)**<br><sub>2025</sub> | 如何在共享模型中为不同 token 分配递归深度？ |
| **[Parallel Loop Transformer](https://arxiv.org/abs/2510.24824)**<br><sub>2025</sub> | 如何组织循环执行，以降低串行延迟与 KV 缓存开销？ |
| **[Coconut](https://arxiv.org/abs/2412.06769)**<br><sub>2024</sub> | 如何以隐状态表示中间思维？· 广义潜在推理 |
| **[Tiny Recursive Model (TRM)](https://arxiv.org/abs/2510.04871)**<br><sub>2025</sub> | 小型共享网络如何交替更新隐状态与候选答案？· 广义潜在推理 |

<a id="scope"></a>

## 收录范围

**循环 Transformer：**在一次前向计算中沿深度复用 Transformer 层、模块或层栈的模型，以及相关的理论、训练、系统与应用研究。

**广义潜在推理：**连续思维、隐式 CoT 与递归推理等方向的代表性工作，包括 Coconut、HRM 和 TRM。这些方法不一定采用循环 Transformer，因此单独分类。

2024 年以来共收录 **242** 项工作，其中核心方向 **199** 项、广义潜在推理 **43** 项；目录同时保留更早的基础研究。

<a id="complete-catalog"></a>

## 完整目录

先选择研究方向，再展开年份；各组按首次公开日期倒序排列。如需搜索标题、作者或模型，请使用[交互式目录](https://awesome-loop-transformers.liyulin.workers.dev/#catalog)。

| 方向 | 数量 | 关注问题 |
| --- | :---: | --- |
| **[基础与理论](#foundations--theory)** | 30 | 表达能力、可编程性，以及长度与深度泛化。 |
| **[架构与扩展](#architectures--scaling)** | 47 | 参数共享、循环核心、MoE、多分辨率设计与扩展规律。 |
| **[潜在推理](#latent-reasoning)** | 21 | 测试时深度、隐状态中的多步计算，以及潜在 CoT。 |
| **[自适应计算](#adaptive-compute)** | 25 | Token 级路由、学习式停止、提前退出与预算条件深度。 |
| **[训练与机制分析](#training--analysis)** | 34 | 优化、稳定性、收敛、不动点与过度思考。 |
| **[系统与应用](#systems--applications)** | 42 | 推理延迟、KV 内存、并行循环，以及代码、多模态和机器人应用。 |
| **[安全与监控](#safety--monitoring)** | 5 | 随循环深度变化的越狱风险、潜在计算监控、激活引导与深度稳健对齐。 |
| **[广义潜在推理](#broader-latent-reasoning)** | 43 | 连续思维、隐式 CoT、层次循环、HRM 与 TRM。 |

<a id="foundations--theory"></a>

### 基础与理论

<details>
<summary><strong>2026</strong> · 14 篇</summary>

- **[Predictive Latents for Autoregressive Language Models: Possibility, Gauge, and Obstruction](https://arxiv.org/abs/2610.28540)**<br>
  Yuzhou Hong · *arXiv 2026*<br>
  把迭代隐状态的风险拆成 token 风险、教师强制风险与开环风险；在满秩协方差统计量、线性最小二乘转移与重新拟合的 unembedding 条件下，宽度 k 的隐状态可在可逆规范变换意义下匹配贝叶斯预测器，而单步损失很小并不能证明 token 预测或自由展开可靠，除非同时给出秩或单射条件。<br>
  [论文](https://arxiv.org/abs/2610.28540)

- **[Internalizing Chain-of-thought into Looped Transformers](https://arxiv.org/abs/2610.25998)**<br>
  Kehang Zhou, Pinyan Lu · *arXiv 2026*<br>
  构造常位宽循环 Transformer，可在显式思维链与隐式思考之间插值；证明在 s(n)^{1/k}=Ω(L) 的条件下，用 L 次循环模拟时间 t、空间 s 的图灵机时，相对非循环队列机基线，上下文窗口与生成 token 数均缩小约 L 倍。<br>
  [论文](https://arxiv.org/abs/2610.25998)

- **[Looped Reasoning Finishes Earlier Than You Think](https://arxiv.org/abs/2610.18174)**<br>
  Sumin Park, T. Konstantin Rusch · *arXiv 2026*<br>
  指出缓慢衰减的振荡模态可能主导耦合隐动力学的收敛速率，进而提出具有精确逐 token 相位旋转对称性的规范等变循环推理器 QRR；该设计不再形成主导性的慢振荡瓶颈，同时保持推理相关商动力学解耦，在 Sudoku、Maze 与 Mini-ARC 上收敛更快。<br>
  [论文](https://arxiv.org/abs/2610.18174)

- **[Learning to Extrapolate in Depth with Looped Transformers](https://arxiv.org/abs/2610.14456)**<br>
  Huitao Yang et al. · *arXiv 2026*<br>
  以全对连通性任务分析深度外推，证明在可交换性与对称正初始化条件下，深度 K 上的总体训练（population training）收敛为由单一参数控制的更新规则，该参数在传播与拟合之间权衡，由此得到端点显式的有限安全测试深度窗口；当训练深度超出训练难度越多，认证的深度增益呈指数增长。<br>
  [论文](https://arxiv.org/abs/2610.14456)

- **[Invariant-Measure Reasoners: Stable Representations for Latent Reasoning](https://arxiv.org/abs/2610.10996)**<br>
  Yuto Inui, Takuya Konishi, Yoshinobu Kawahara · *arXiv 2026*<br>
  注意到反复更新的隐状态可能收敛到一个紧集却不收敛到不动点，于是用该集合上的不变测度做预测，使不同循环深度下的答案更稳定，并在某些情形下反而利用了这种非不动点动力学。<br>
  [论文](https://arxiv.org/abs/2610.10996)

- **[Universal interpolation for deep residual self-attention networks](https://arxiv.org/abs/2610.01981)**<br>
  Sibylle Marcotte, Joan Bruna · *arXiv 2026*<br>
  研究仅靠深度、高度权重共享的自注意力堆叠能表示多少函数，证明两个冻结的单头 softmax 残差块（高斯初始化投影）可在连续或有限深度下，把任意 N 条长度为 n 的 token 序列集合插值到另一同规模集合，并刻画因果掩码带来的限制及相应保证。<br>
  [论文](https://arxiv.org/abs/2610.01981)

- **[Looped Transformers as Optimizers](https://arxiv.org/abs/2609.37379)**<br>
  Yulong Huang et al. · *arXiv 2026*<br>
  把循环隐状态视为快速权重，从投影、局部目标与优化器规则出发闭式推导循环转移，指出现有转移与之不匹配；对齐现有转移的输入映射后训练损失下降、常识准确率提升，而据此提出的 OperLoop 在匹配训练 FLOPs 下提升了生成性能。<br>
  [论文](https://arxiv.org/abs/2609.37379)

- **[Beyond the Training Horizon: Mechanisms and Limits of Length Generalization in Looped Transformers](https://arxiv.org/abs/2609.33144)**<br>
  Jia Liang, Xi Jin, Liangming Pan · *arXiv 2026*<br>
  从机制上对比两种循环 Transformer 递推方案在多项式迭代、有限状态复合与图遍历任务上的表现，发现二者都能超越训练长度泛化却在更深时退化，且循环状态同时编码内容与“是否仍可继续计算”的状态信息。<br>
  [论文](https://arxiv.org/abs/2609.33144)

- **[Statistical Gains from Looped Estimation under Parameter Budgets](https://arxiv.org/abs/2609.25778)**<br>
  Xinyu Tian, Xiaotong Shen · *arXiv 2026*<br>
  在共同参数预算下比较循环与非共享（untied）估计器：给出循环筛极大似然的平方 Hellinger 风险上界与 untied 族的极小极大下界；对已知 Hölder 光滑度的目标，循环网络在对数因子内达到极小极大速率，且在足够大的固定预算下循环风险趋于零，而 untied 风险仍存在正下界。<br>
  [论文](https://arxiv.org/abs/2609.25778)

- **[Right Direction, Wrong Step: Geometric Analysis of Finite-Step Failure in Looped Transformers](https://arxiv.org/abs/2609.16665)**<br>
  Zhihao Guo et al. · *arXiv 2026*<br>
  用路径曲率分解循环 Transformer 的更新步，解释为何局部有利的方向在整步施加时仍会损害参考答案；实验表明固定四分之一步长能在四个设置中 72.2%-83.2% 的选定失败样本上带来参考效用的正向增益。<br>
  [论文](https://arxiv.org/abs/2609.16665)

- **[When Does Recurrence Become an Algorithm? Convergence Selection in Weight-Tied Looped Transformers](https://arxiv.org/abs/2607.20594)**<br>
  Tong Zhang et al. · *arXiv 2026*<br>
  用受控群字问题研究权重共享与训练预算如何选择串行计算前沿，并提出收敛时间扩展作为机制诊断工具。<br>
  [论文](https://arxiv.org/abs/2607.20594)

- **[Looped Transformers with Layer Normalization Provably Learn the Power Method](https://arxiv.org/abs/2606.00605)**<br>
  Lyumin Wu, Chenyang Zhang, Yuan Cao · *arXiv 2026*<br>
  证明梯度下降会选择一种带 LayerNorm 的循环解，使每次注意力调用对应一次幂迭代。<br>
  [论文](https://arxiv.org/abs/2606.00605)

- **[Chain-of-Thought and Compressed Looped Transformers: A Memory-Budget Separation](https://arxiv.org/abs/2605.30757)**<br>
  Haozhou Zhang · *arXiv 2026*<br>
  形式化说明记忆容量分离：增加循环次数不会让压缩潜在循环获得多项式长度思维链所拥有的增长式草稿空间。<br>
  [论文](https://arxiv.org/abs/2605.30757)

- **[Stability and Generalization in Looped Transformers](https://arxiv.org/abs/2604.15259)**<br>
  Asher Labovich · *arXiv 2026*<br>
  刻画回忆连接与归一化如何影响可达、依赖输入的不动点及深度泛化。<br>
  [论文](https://arxiv.org/abs/2604.15259) · [代码](https://github.com/ashlab11/generalization)

</details>

<details>
<summary><strong>2025</strong> · 4 篇</summary>

- **[To CoT or To Loop? A Formal Comparison Between Chain-of-Thought and Looped Transformers](https://arxiv.org/abs/2505.19245)**<br>
  Kevin Xu, Issei Sato · *arXiv 2025*<br>
  形式化区分两种计算扩展方式：循环更擅长并行确定性计算，而随机 CoT 在部分自归约问题上更有优势。<br>
  [论文](https://arxiv.org/abs/2505.19245)

- **[A Little Depth Goes a Long Way: The Expressive Power of Log-Depth Transformers](https://openreview.net/forum?id=njycONK0JG)**<br>
  William Merrill, Ashish Sabharwal · *ICLR 2025*<br>
  证明共享模块只需随输入长度对数级展开，就能识别正则语言并解决超出固定深度能力边界的图连通问题。<br>
  [论文](https://openreview.net/forum?id=njycONK0JG)

- **[Transformers Learn to Implement Multi-step Gradient Descent with Chain of Thought](https://arxiv.org/abs/2502.21212)**<br>
  Jianhao Huang, Zixuan Wang, Jason D. Lee · *arXiv 2025*<br>
  分析 CoT 训练如何诱导多步上下文梯度下降，并用同一套理论工具说明循环带来的性能提升。<br>
  [论文](https://arxiv.org/abs/2502.21212)

- **[Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers](https://arxiv.org/abs/2501.10688)**<br>
  Zekai Huang et al. · *arXiv 2025*<br>
  通过图退化与超边感知编码，把循环 Transformer 的构造性算法模拟从图扩展到超图，包括 Dijkstra 与 Helly 等算法。<br>
  [论文](https://arxiv.org/abs/2501.10688)

</details>

<details>
<summary><strong>2024</strong> · 7 篇</summary>

- **[On the Role of Depth and Looping for In-Context Learning with Task Diversity](https://arxiv.org/abs/2410.21698)**<br>
  Khashayar Gatmiry et al. · *arXiv 2024*<br>
  建立多样化上下文回归任务的深度需求，并说明权重共享循环在保持表达力的同时，可改善分布偏移鲁棒性和随深度变化的单调性。<br>
  [论文](https://arxiv.org/abs/2410.21698)

- **[Bypassing the Exponential Dependency: Looped Transformers Efficiently Learn In-context by Multi-step Gradient Descent](https://arxiv.org/abs/2410.11268)**<br>
  Bo Chen et al. · *arXiv 2024*<br>
  证明线性循环 Transformer 能用多步梯度下降完成上下文学习，而不需要指数数量的示例。<br>
  [论文](https://arxiv.org/abs/2410.11268)

- **[Looped ReLU MLPs May Be All You Need as Practical Programmable Computers](https://arxiv.org/abs/2410.09375)**<br>
  Yingyu Liang et al. · *arXiv 2024*<br>
  证明紧凑的循环 ReLU MLP 可实现可编程计算机的基本操作，为循环 Transformer 的表达能力提供非注意力架构参照。<br>
  [论文](https://arxiv.org/abs/2410.09375)

- **[Can Looped Transformers Learn to Implement Multi-step Gradient Descent for In-context Learning?](https://arxiv.org/abs/2410.08292)**<br>
  Khashayar Gatmiry et al. · *arXiv 2024*<br>
  从可表达性推进到可学习性分析：总体风险最优解与梯度流会学习适应数据分布的多步预条件梯度法。<br>
  [论文](https://arxiv.org/abs/2410.08292)

- **[On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding](https://proceedings.mlr.press/v267/xu25x.html)**<br>
  Kevin Xu, Issei Sato · *ICML 2025*<br>
  推导循环 Transformer 的逼近保证与特有瓶颈，并用时间步条件调制让共享块在不同循环中产生差异化行为。<br>
  [论文](https://proceedings.mlr.press/v267/xu25x.html) · [代码](https://github.com/kevin671/tmlt)

- **[Looped Transformers for Length Generalization](https://openreview.net/forum?id=2edigk8yoU)**<br>
  Ying Fan et al. · *ICLR 2025*<br>
  训练解码器式循环 Transformer 让循环次数随问题长度变化，从而在迭代算法任务上获得更强的长度外推。<br>
  [论文](https://openreview.net/forum?id=2edigk8yoU) · [代码](https://github.com/UW-Madison-Lee-Lab/looped-tf)

- **[Simulation of Graph Algorithms with Looped Transformers](https://arxiv.org/abs/2402.01107)**<br>
  Artur Back de Luca, Kimon Fountoulakis · *arXiv 2024*<br>
  构造可在任意规模图上执行最短路、遍历和连通性算法的循环 Transformer，并明确讨论有限精度带来的限制。<br>
  [论文](https://arxiv.org/abs/2402.01107) · [代码](https://github.com/watcl-lab/graphalgosimulation)

</details>

<details>
<summary><strong>2023</strong> · 2 篇</summary>

- **[Looped Transformers are Better at Learning Learning Algorithms](https://openreview.net/forum?id=HHbRxoDTxE)**<br>
  Liu Yang et al. · *ICLR 2024*<br>
  表明小型共享 Transformer 经多次循环后可以学习迭代式上下文拟合算法，并显著减少参数量。<br>
  [论文](https://openreview.net/forum?id=HHbRxoDTxE) · [代码](https://github.com/Leiay/looped_transformer)

- **[Looped Transformers as Programmable Computers](https://proceedings.mlr.press/v202/giannou23a.html)**<br>
  Angeliki Giannou et al. · *ICML 2023*<br>
  构造可在循环中执行迭代程序的常数规模 Transformer 块，明确展示循环深度的计算能力。<br>
  [论文](https://proceedings.mlr.press/v202/giannou23a.html) · [代码](https://github.com/jysohn1108/Looped-Transformer)

</details>

<details>
<summary><strong>2019</strong> · 1 篇</summary>

- **[Deep Equilibrium Models](https://arxiv.org/abs/1909.01377)**<br>
  Shaojie Bai, J. Zico Kolter, Vladlen Koltun · *NeurIPS 2019*<br>
  把无限深的权重共享网络视为不动点系统，为显式展开循环提供隐式深度的对应框架。<br>
  [论文](https://arxiv.org/abs/1909.01377) · [代码](https://github.com/locuslab/deq)

</details>

<details>
<summary><strong>2018</strong> · 1 篇</summary>

- **[Universal Transformers](https://arxiv.org/abs/1807.03819)**<br>
  Mostafa Dehghani et al. · *ICLR 2019*<br>
  奠定深度循环 Transformer 的经典形式：共享变换反复更新各 token，并可结合自适应停止。<br>
  [论文](https://arxiv.org/abs/1807.03819) · [代码](https://github.com/tensorflow/tensor2tensor)

</details>

<details>
<summary><strong>2016</strong> · 1 篇</summary>

- **[Adaptive Computation Time for Recurrent Neural Networks](https://arxiv.org/abs/1603.08983)**<br>
  Alex Graves · *arXiv 2016*<br>
  提出可微分的停止机制，使循环模型能够针对不同输入动态分配计算步数。<br>
  [论文](https://arxiv.org/abs/1603.08983)

</details>

[↑ 返回目录](#complete-catalog)

<a id="architectures--scaling"></a>

### 架构与扩展

<details>
<summary><strong>2026</strong> · 40 篇</summary>

- **[StateLoop: Persistent State for Looped Transformers](https://arxiv.org/abs/2610.35544)**<br>
  Feichen Song et al. · *arXiv 2026*<br>
  StateLoop 在循环迭代之间为每个 token 额外维护一个持久状态：学习到的门控决定保留多少旧状态、写入多少当前骨干输出，更新后的状态再投影回下一轮迭代与最终预测。相较普通循环 Transformer，它降低了 Pile 困惑度并提升了八个零样本任务的平均准确率，且困惑度优势随训练循环深度增加而扩大。<br>
  [论文](https://arxiv.org/abs/2610.35544)

- **[Recursive CLIP: Vision-Language Distillation with Looped Transformer Blocks](https://arxiv.org/abs/2610.34563)**<br>
  Szymon Mazurek, Alberto Presta, Michał Byra · *arXiv 2026*<br>
  研究递归 CLIP 骨干：用 N 个 Transformer 块重复 M 次，并保持 N×M 等于 ViT-B 深度；分为仅视觉编码器递归的 rCLIP 与双编码器递归的 r2CLIP，在直接对比训练和从 DFN-2B 预训练的 ViT-B/16 教师向 CC3M/CC12M 蒸馏两种设定下评估。CLIP 能承受较大的循环块复用，在零样本分类、跨模态检索、少样本学习、视觉定位与概念遗忘上均可用，效果取决于编码器与任务，同时显著减少需存储和适配的不同块数量。<br>
  [论文](https://arxiv.org/abs/2610.34563)

- **[Accordion: Elastic-Depth Inference via Fixed-Prefix Layer Looping](https://arxiv.org/abs/2610.32492)**<br>
  Yudong Zhang et al. · *arXiv 2026*<br>
  Accordion 是一个通过固定前缀层循环提供五档推理预算的混合专家模型，最小预算即未循环模型；联合预训练时每个 micro-batch 采样一档预算，并在监督微调与强化学习阶段通过参数组合并与预算匹配的多教师蒸馏保留各档能力。经 3.6T token 预训练后，Accordion-6B-A0.5B 增加推理深度使其在 37 个任务上的五类宏平均提升 3.01 个百分点，中间预算以一半的额外层执行量取得 89% 的增益。<br>
  [论文](https://arxiv.org/abs/2610.32492)

- **[LSTM-Style Looped Transformers with Shared KV Caches](https://arxiv.org/abs/2610.33360)**<br>
  Andreas Kirsch · *arXiv 2026*<br>
  一种 LSTM 风格的循环 Transformer 在其循环核心中共享同一份 KV 缓存。宽度 1024 时，它在几乎匹配前向 FLOPs 的条件下比非绑定对照少 40.4% 参数，并把持久缓存组从十五个减到四个；训练最后 10% 加入一致性损失，使并行与递归两条路径产生的缓存条目对齐，在 FineWeb 三个宽度上消除 81%–89% 的续写损失惩罚，且权重绑定带来的损失代价在 token 预算较低时最小。<br>
  [论文](https://arxiv.org/abs/2610.33360)

- **[Looped Uniform Diffusion Language Models](https://arxiv.org/abs/2610.30066)**<br>
  Saiteja Utpala et al. · *arXiv 2026*<br>
  在均匀扩散语言模型的每个去噪步内加入选择性循环，在相同验证 NLL 下最多减少 3.3 倍训练算力，并在固定去噪步数下降低生成困惑度；训练时偏向较小循环次数的分布更高效。<br>
  [论文](https://arxiv.org/abs/2610.30066)

- **[Asymmetric Looped Transformers: Fixed Global Representations for an Iterative Decoder](https://arxiv.org/abs/2610.28489)**<br>
  Cheng Liang et al. · *arXiv 2026*<br>
  将上下文构建与状态精修分离：单遍编码器写出固定的全局 KV 缓存，权重共享的循环解码器在同一次 softmax 中同时关注全局 KV 与自身局部 KV，在 1B 规模上改善困惑度与零样本准确率。<br>
  [论文](https://arxiv.org/abs/2610.28489)

- **[Block Recursive Transformers for Structured Parameter Sharing](https://arxiv.org/abs/2610.24998)**<br>
  Josep Marques et al. · *EMNLP Findings 2026*<br>
  指出共享粒度是与共享比例并列的关键因素：将层划分为连续块并逐块递归复用，在局部精修与深度差异化之间取得平衡，在 1.7B 参数以内优于逐层共享与整栈循环复用。<br>
  [论文](https://arxiv.org/abs/2610.24998) · [主页](https://aim-skku.github.io/BRT/)

- **[UpLoop: Upcycling Large Language Models with Gated Loop](https://arxiv.org/abs/2610.25004)**<br>
  Tieyuan Chen et al. · *arXiv 2026*<br>
  通过逐层局部循环，并在注意力与 MLP 残差分支上加入隐维门控，把预训练 LLM 升级为循环模型，突破以往两轮即饱和的限制，三轮时在 20 个基准上平均提升 6.17 个百分点。<br>
  [论文](https://arxiv.org/abs/2610.25004)

- **[Dual-Slot: From Serial Loops to Parallel Slots in Language Models](https://arxiv.org/abs/2610.25086)**<br>
  Yiqin Hao et al. · *arXiv 2026*<br>
  将循环迭代拆分为潜在槽与预测槽，使当前 token 复用上一 token 的深层状态，用成对调用取代串行调用，在保持自回归生成的同时保留原始解码吞吐：稠密模型 93.1%–96.5%，MoE 模型 98.1%–99.6%。<br>
  [论文](https://arxiv.org/abs/2610.25086)

- **[Towards Looped Models Done Right, Part I: Topology, Input Injection, Recurrent-State Design](https://arxiv.org/abs/2610.23036)**<br>
  Benhao Huang et al. · *arXiv 2026*<br>
  系统拆解循环语言模型的三个设计轴——循环位于何处、输入如何注入、循环状态如何组织，发现以 prelude-recurrent block-coda 夹层为核心的完整 Huginn 式设计在 730M 规模上优于 Ouro，并可迁移到 8B-A0.8B（展开后 32B-A3B）的 MoE 模型。<br>
  [论文](https://arxiv.org/abs/2610.23036) · [代码](https://github.com/ifm-ai/xllm-loop)

- **[LoopREG: Representation Supervision Enables Test-Time Recurrent Depth in Diffusion Transformers](https://arxiv.org/abs/2610.17877)**<br>
  Zipeng Wang et al. · *arXiv 2026*<br>
  用预训练视觉编码器的表征监督循环扩散 Transformer 的共享块，使额外推理轮次能外推到训练深度之外：将 SiT-B/2 的局部 REG 基线 FID 从 15.08 降至 4.91，第三次访问则把两轮检查点的 FID 从 14.71 改善到 5.34。<br>
  [论文](https://arxiv.org/abs/2610.17877)

- **[Scaling to Tens of Thousands of Test-Time Iterations with Loop-Native Attention Residuals](https://arxiv.org/abs/2610.11570)**<br>
  Pengxiang Li et al. · *arXiv 2026*<br>
  主张循环 Transformer 需要专属的循环原生残差：以内容加权与时间衰减聚合历史循环状态，抑制不可靠更新，使 7M 参数模型在数独极限版上超过两万次测试时迭代仍持续提升。<br>
  [论文](https://arxiv.org/abs/2610.11570) · [代码](https://github.com/pixeli99/InfiLoop)

- **[One Block, Multiple Depths: Recurrent Vision Transformers with Depth-Programmed Experts](https://arxiv.org/abs/2610.12448)**<br>
  Adrian Bulat, Yassine Ouali, Georgios Tzimiropoulos · *arXiv 2026*<br>
  反复应用单个 ViT 块，并用连续深度坐标混合一个小型共享专家库来恢复各循环深度特有的 FFN，以约少 70% 的存储参数达到全深度编码器精度，并支持重采样的弹性部署深度。<br>
  [论文](https://arxiv.org/abs/2610.12448)

- **[Recurrent Looped Transformer](https://arxiv.org/abs/2610.07591)**<br>
  Yifan Zhang et al. · *arXiv 2026*<br>
  把层拆分为并行因果编码器与循环解码器，解码器将当前 token 的编码输出与上一 token 的解码状态合并，使计算深度随序列长度增长而单 token 成本固定，奇偶校验可泛化到 256 位。<br>
  [论文](https://arxiv.org/abs/2610.07591) · [代码](https://github.com/yifanzhang-pro/recurrent-looped-tranformer)

- **[Looping Beyond Twice: A Scalable Recipe for Looped Mixture-of-Experts](https://arxiv.org/abs/2610.01153)**<br>
  Di He et al. · *arXiv 2026*<br>
  诊断循环 MoE 在两轮之后收益消失的原因——残差方差随迭代增长与专家选择塌缩，再用残差缩放、输入重注入、逐循环路由器与循环残差加以稳定，在 100M–1.7B 规模上稳定循环 9–12 轮。<br>
  [论文](https://arxiv.org/abs/2610.01153) · [代码](https://github.com/hed-ucas/LOOM)

- **[The Surprising Effectiveness of Shared Memory in Looped Transformers](https://arxiv.org/abs/2610.02383)**<br>
  Giovanni Monea et al. · *arXiv 2026*<br>
  预训练时只让第一轮循环写入 KV 缓存，后续循环读取该缓存并保留一小段本地窗口；共享记忆不但没有损害质量反而提升质量，在 150M–1B 规模、五轮循环下将上下文内存降低 76%–79%。<br>
  [论文](https://arxiv.org/abs/2610.02383)

- **[Scaling Laws for Looped Mixture of Experts](https://arxiv.org/abs/2609.40316)**<br>
  Yanbei Chen, Anirudh Goyal, Raghuraman Krishnamoorthi · *arXiv 2026*<br>
  通过有界的稀疏条件循环映射，把模型规模、数据、稀疏度与循环次数纳入统一缩放律，发现稀疏度带来约 3 倍激活参数效率，而循环在推理任务上带来约 2 倍总参数效率。<br>
  [论文](https://arxiv.org/abs/2609.40316)

- **[How to Loop MoE: Flatten the Experts, Untie the Attention](https://arxiv.org/abs/2609.35751)**<br>
  Shouren Wang et al. · *arXiv 2026*<br>
  研究 MoE 应当如何循环，提出 Foil：压平专家层使每一轮从大一倍的专家池中路由，并让每轮拥有独立注意力参数而专家与路由器保持共享，在 100B token 上降低损失并改善路由均衡。<br>
  [论文](https://arxiv.org/abs/2609.35751) · [代码](https://github.com/SR-A-W/how-to-loop-moe)

- **[Storing Is Not Remembering: LSTM-UT and Bounded Gated Memory for Looped Transformers](https://arxiv.org/abs/2609.19521)**<br>
  Aras Kavuncu, Muhammad Burhan Hafez · *arXiv 2026*<br>
  指出保留更多历史并不等于历史可用，并在共享块中加入小型有界门控单元状态；仅在深度 12 训练，即在深度 60 保持 99.7% 精确精度，深度 1000 时仍高于 99.95%。<br>
  [论文](https://arxiv.org/abs/2609.19521)

- **[MoRE: Mixture of Reused Experts](https://arxiv.org/abs/2609.18176)**<br>
  Eric S. Qiu et al. · *COLM 2026*<br>
  在相邻层组之间共享专家池，同时为每层保留独立路由器并加入轻量深度嵌入，在不增加参数的情况下扩大路由组合，在 114M–1.15B 规模上优于标准 MoE 与权重共享基线。<br>
  [论文](https://arxiv.org/abs/2609.18176)

- **[How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents](https://arxiv.org/abs/2609.19107)**<br>
  Zixi Chen et al. · *arXiv 2026*<br>
  证明架构干预可以改变缩放指数而不只是常数：无论是否共享权重，模型增长都带来最大指数增益，7.4B 的模型增长架构以约少 20 倍计算在 CORE 上匹敌 GPT-3 13B，且在有数据约束的多轮训练情形下循环次数应随规模增加。<br>
  [论文](https://arxiv.org/abs/2609.19107) · [代码](https://github.com/qlabs-eng/scaling-exponents)

- **[SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers](https://arxiv.org/abs/2609.01343)**<br>
  Shaowen Wang et al. · *arXiv 2026*<br>
  在同时匹配 FLOPs、非嵌入参数量和 KV 缓存的条件下评估循环 MoE，区分架构收益与额外计算收益。<br>
  [论文](https://arxiv.org/abs/2609.01343)

- **[Squeezing More from Limited Data with Recursive Transformers](https://arxiv.org/abs/2608.26973)**<br>
  Serdar Gülbahar et al. · *arXiv 2026*<br>
  研究预训练数据稀缺时的递归权重共享，并结合因式分解嵌入，在不盲目扩大参数容量的情况下增加计算。<br>
  [论文](https://arxiv.org/abs/2608.26973)

- **[Allocating Recurrent Compute in Looped Language Models](https://arxiv.org/abs/2608.18230)**<br>
  Ruhai Lin et al. · *arXiv 2026*<br>
  追问究竟哪些子层应循环，发现只重复序列混合器可保留大量循环收益，而无需每轮都执行 FFN。<br>
  [论文](https://arxiv.org/abs/2608.18230)

- **[Gated Recurrent Transformers: Expressive Depth through Recurrent Modulation](https://arxiv.org/abs/2608.15062)**<br>
  Amr Hegazy et al. · *arXiv 2026*<br>
  用学习到的更新门和逐步噪声调制共享循环核心，使同一模块在不同循环中形成专门化。<br>
  [论文](https://arxiv.org/abs/2608.15062)

- **[Looped Transformers with Source-Centered State Evolution](https://arxiv.org/abs/2607.27656)**<br>
  Bum Jun Kim et al. · *arXiv 2026*<br>
  围绕学习到的输入条件锚点定义循环，使零偏差严格不变，从而消除重复加性输入注入产生的强迫偏置。<br>
  [论文](https://arxiv.org/abs/2607.27656)

- **[Mobius Learning: Cyclic Depth Folding in Transformers](https://arxiv.org/abs/2607.17843)**<br>
  Tongtian Zhu · *arXiv 2026*<br>
  在不同数据流间轮换模块顺序，使每个共享模块组同时学习浅层与深层角色，探索超越固定循环顺序的环形深度折叠。<br>
  [论文](https://arxiv.org/abs/2607.17843)

- **[Loop the Loopies!](https://arxiv.org/abs/2607.16051)**<br>
  Zitian Gao et al. · *arXiv 2026*<br>
  提出大规模循环 MoE 配方，把参数内存节省重新投入训练，并与计算匹配的稀疏基线比较。<br>
  [论文](https://arxiv.org/abs/2607.16051)

- **[LoopMoE: Unifying Iterative Computation with Mixture-of-Experts for Language Modeling](https://arxiv.org/abs/2606.04438)**<br>
  Wenkai Chen et al. · *arXiv 2026*<br>
  把共享计算的重复迭代与稀疏专家路由结合，同时追求迭代细化与可扩展参数容量。<br>
  [论文](https://arxiv.org/abs/2606.04438)

- **[CART: Context-Anchored Recurrent Transformer -- A Parameter-Efficient Architecture with Learned Stability](https://arxiv.org/abs/2606.01495)**<br>
  Chad A. Capps · *arXiv 2026*<br>
  让循环核心在学习式稳定门控下交叉注意固定上下文的键值，并通过受控实验记录该方案未能击败稠密基线或进行深度外推的情形。<br>
  [论文](https://arxiv.org/abs/2606.01495)

- **[A Dual-Path Architecture for Scaling Compute and Capacity in LLMs](https://arxiv.org/abs/2605.30202)**<br>
  Markus Frey et al. · *arXiv 2026*<br>
  将反复执行的深路径与单次执行的宽前馈路径并列，让 token 级门控在迭代计算与单步参数容量间分配资源。<br>
  [论文](https://arxiv.org/abs/2605.30202)

- **[Latent Recurrent Transformer: Architecture Exploration, Training Strategies, and Scaling Behavior](https://arxiv.org/abs/2605.26797)**<br>
  Zeyi Huang et al. · *arXiv 2026*<br>
  把前一 token 的高层隐藏状态传递到下一 token，同时保留标准 KV-cache 接口，并提出交错并行训练处理跨 token 循环。<br>
  [论文](https://arxiv.org/abs/2605.26797)

- **[LoopUS: Recasting Pretrained LLMs into Looped Latent Refinement Models](https://arxiv.org/abs/2605.11011)**<br>
  Taekhyun Park et al. · *arXiv 2026*<br>
  把现有预训练大模型改造成循环隐空间细化模型，避免完全从头训练循环深度。<br>
  [论文](https://arxiv.org/abs/2605.11011) · [代码](https://github.com/Thrillcrazyer/LoopUS) · [主页](https://thrillcrazyer.github.io/LoopUS)

- **[Sparse Layers are Critical to Scaling Looped Language Models](https://arxiv.org/abs/2605.09165)**<br>
  Ryan Lee et al. · *arXiv 2026*<br>
  发现稀疏容量对循环语言模型扩展尤为关键，可改善质量—内存权衡及提前退出表现。<br>
  [论文](https://arxiv.org/abs/2605.09165)

- **[Hyperloop Transformers](https://arxiv.org/abs/2604.21254)**<br>
  Abbas Zeitoun et al. · *arXiv 2026*<br>
  只循环中间层块，并在各次访问之间加入 Hyper-Connections，面向模型内存受限与量化场景提升语言建模效率。<br>
  [论文](https://arxiv.org/abs/2604.21254)

- **[How Much Is One Recurrence Worth? Iso-Depth Scaling Laws for Looped Language Models](https://arxiv.org/abs/2604.21106)**<br>
  Kristian Schwethelm et al. · *arXiv 2026*<br>
  在匹配有效深度与训练计算的条件下，量化重复层相对于独立层的性能价值。<br>
  [论文](https://arxiv.org/abs/2604.21106) · [代码](https://github.com/kschwethelm/looped-lm-scaling)

- **[Ouroboros: Dynamic Weight Generation for Recursive Transformers via Input-Conditioned LoRA Modulation](https://arxiv.org/abs/2604.02051)**<br>
  Jaber Jaber, Osama Jaber · *arXiv 2026*<br>
  用紧凑控制器在共享 LoRA 基底上生成输入与步数条件调制，使递归模块每次访问时具有不同的有效变换。<br>
  [论文](https://arxiv.org/abs/2604.02051) · [代码](https://github.com/RightNow-AI/ouroboros)

- **[Adaptive Loops and Memory in Transformers: Think Harder or Know More?](https://arxiv.org/abs/2603.08391)**<br>
  Markus Frey et al. · *arXiv 2026*<br>
  结合逐层自适应循环与门控记忆库，将额外迭代计算和额外学习存储分离，并揭示二者在不同任务上的作用差异。<br>
  [论文](https://arxiv.org/abs/2603.08391)

- **[SpiralFormer: Looped Transformers Can Learn Hierarchical Dependencies via Multi-Resolution Recursion](https://arxiv.org/abs/2602.11698)**<br>
  Chengting Yu et al. · *arXiv 2026*<br>
  在多种序列分辨率上执行递归，把分辨率变成高效层次计算的新维度。<br>
  [论文](https://arxiv.org/abs/2602.11698)

- **[Depth-Recurrent Attention Mixtures: Giving Latent Reasoning the Attention it Deserves](https://arxiv.org/abs/2601.21582)**<br>
  Jonas Knupp et al. · *arXiv 2026*<br>
  在保留循环核心的同时，为不同重复深度提供更丰富的注意力变换。<br>
  [论文](https://arxiv.org/abs/2601.21582)

</details>

<details>
<summary><strong>2025</strong> · 4 篇</summary>

- **[Improving Recursive Transformers with Mixture of LoRAs](https://arxiv.org/abs/2512.12880)**<br>
  Mohammadmahdi Nouriborji et al. · *arXiv 2025*<br>
  在共享前馈网络中加入 token 条件化的 LoRA 专家，补回递归权重共享所损失的部分逐层表达能力。<br>
  [论文](https://arxiv.org/abs/2512.12880)

- **[Teaching Pretrained Language Models to Think Deeper with Retrofitted Recurrence](https://arxiv.org/abs/2511.07384)**<br>
  Sean McLeish et al. · *arXiv 2025*<br>
  通过继续训练把稠密预训练模型改造成循环深度模型，检验能否在预训练后补装循环推理能力。<br>
  [论文](https://arxiv.org/abs/2511.07384) · [代码](https://github.com/mcleish7/retrofitting-recurrence)

- **[MeSH: Memory-as-State-Highways for Recursive Transformers](https://arxiv.org/abs/2510.07739)**<br>
  Chengting Yu et al. · *arXiv 2025*<br>
  引入显式记忆缓冲区和轻量路由器，分离长期与瞬时状态，并促使不同递归步形成差异化计算。<br>
  [论文](https://arxiv.org/abs/2510.07739) · [代码](https://github.com/LivingFutureLab/MeSH)

- **[Two-Scale Latent Dynamics for Recurrent-Depth Transformers](https://arxiv.org/abs/2509.23314)**<br>
  Francesco Pappone et al. · *arXiv 2025*<br>
  引入快慢两种隐状态动力学，让循环深度模型分离局部细化与长程状态演化。<br>
  [论文](https://arxiv.org/abs/2509.23314)

</details>

<details>
<summary><strong>2024</strong> · 3 篇</summary>

- **[Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA](https://openreview.net/forum?id=WwpYSOkkCt)**<br>
  Sangmin Bae et al. · *ICLR 2025*<br>
  把预训练 Transformer 折叠为重复块，再用轻量 LoRA 恢复层间差异，并提出连续深度批处理的设想。<br>
  [论文](https://openreview.net/forum?id=WwpYSOkkCt)

- **[MoEUT: Mixture-of-Experts Universal Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/hash/321387ba926b8e58d3591c0aeb52ffc2-Abstract-Conference.html)**<br>
  Róbert Csordás et al. · *NeurIPS 2024*<br>
  在 Universal Transformer 中加入稀疏专家与改进的循环机制，缩小其与常规语言模型的性能差距。<br>
  [论文](https://proceedings.neurips.cc/paper_files/paper/2024/hash/321387ba926b8e58d3591c0aeb52ffc2-Abstract-Conference.html) · [代码](https://github.com/robertcsordas/moeut)

- **[AlgoFormer: An Efficient Transformer Framework with Algorithmic Structures](https://openreview.net/forum?id=oYP2Pd5aQt)**<br>
  Yihang Gao et al. · *TMLR 2025*<br>
  用任务相关的前后处理模块包围可复用的中间循环块，把迭代算法先验注入 Transformer。<br>
  [论文](https://openreview.net/forum?id=oYP2Pd5aQt) · [代码](https://github.com/chuanyang-Zheng/Algoformer)

</details>

[↑ 返回目录](#complete-catalog)

<a id="latent-reasoning"></a>

### 潜在推理

<details>
<summary><strong>2026</strong> · 16 篇</summary>

- **[Present but Hard to Read: Probing Latent Reasoning with Minimal Pairs](https://arxiv.org/abs/2610.28498)**<br>
  Aur Shalev Merin · *arXiv 2026*<br>
  对 Ouro-1.4B 与 Qwen 2.5-1.5B 做最小对比探测：被复制的数字存在于跨问题共享的编码中（读出值约 0.9），而一次只看一个提示的探针几乎读不出；未写出的中间和虽有微弱信号且可读，却并未真正被使用。<br>
  [论文](https://arxiv.org/abs/2610.28498)

- **[Causal Latent Workspaces for Looped Transformers](https://arxiv.org/abs/2610.22796)**<br>
  Ilia Zaznov · *arXiv 2026*<br>
  在锚定的四轮共享深度循环 Transformer 中加入因果、按内容寻址的前缀工作区：每个位置把门控向量写入前缀专属的潜在槽位，并在下一次共享块运算前取回摘要；在六种设置中的五种取得最优平均留出困惑度，优于五个 Transformer 对照组。<br>
  [论文](https://arxiv.org/abs/2610.22796)

- **[Learning to Compute Is Not Learning to Retain or Reuse in Looped Transformers](https://arxiv.org/abs/2610.19768)**<br>
  Peilong Zhou et al. · *arXiv 2026*<br>
  用带有精确隐状态反事实的上下文 Mealy 机，把循环 Transformer 的失败拆分为计算失败、保持丢失与状态不可复用：训练在 32 次循环作答的模型到 64 次循环只剩 22% 的答案，而随机位置监督可保留 99.8%。<br>
  [论文](https://arxiv.org/abs/2610.19768)

- **[From Chain-of-Thought to Loops: Non-Autoregressive Latent Reasoning via Looped Transformers](https://arxiv.org/abs/2610.11472)**<br>
  Gerard Grau García et al. · *arXiv 2026*<br>
  用对紧凑潜在工作区的迭代精炼取代从左到右的潜在生成：共享 Transformer 反复应用若干次后，由概率头并行采样潜在 token 来条件化自回归解码器；在 HumanEval 与 MBPP 上准确率与显式 CoT 相当，而推理阶段延迟降至约 1/42。<br>
  [论文](https://arxiv.org/abs/2610.11472)

- **[What Matters for Latent Reasoning with Flow Matching](https://arxiv.org/abs/2610.06666)**<br>
  Yassine Ouali, Adrian Bulat, Georgios Tzimiropoulos · *arXiv 2026*<br>
  从潜在思考应满足的五项要求（有用、多样、可解释、可精炼、高效）出发提出 FLaRe：一套流匹配训练配方，涵盖潜在空间编码什么、在何处训练流以及如何读出答案，以四分之一延迟达到显式 CoT 97% 的准确率。<br>
  [论文](https://arxiv.org/abs/2610.06666)

- **[Shared Weights, Selected Computations: How Looped Transformers Route What Each Loop Does](https://arxiv.org/abs/2609.39892)**<br>
  Jiaju Wu, Yi Hu, Muhan Zhang · *arXiv 2026*<br>
  追问循环 Transformer 的每一次循环是否执行相同计算。在图游走任务上，不同循环可前进不同步数，而作用在输入隐状态上的学习到的线性映射 J 会选择共享块执行哪一种已学会的转移。<br>
  [论文](https://arxiv.org/abs/2609.39892)

- **[What Makes Recurrence Effective in Looped Language Models?](https://arxiv.org/abs/2609.36636)**<br>
  Xinlin Zhuang et al. · *arXiv 2026*<br>
  系统研究循环语言模型在何种条件下受益于额外循环：推理表现可在超出训练深度后继续提升，而知识类性能下降；仅凭有效深度不足以预测表现，层与迭代的分配方式同样重要；逐通道历史状态注入配合时间步条件化，比常规初始状态注入更稳健。<br>
  [论文](https://arxiv.org/abs/2609.36636)

- **[Principled Thoughts for Latent Recursive LLM Systems](https://arxiv.org/abs/2609.36159)**<br>
  Fahd Seddik, Fatemeh Fard · *arXiv 2026*<br>
  指出仅用交叉熵训练会使连续思考缺乏约束，证明由此产生的四种失效模式，并把因果性、最小性、可分离性与稳定性转化为可微辅助损失；REST 在单智能体与多智能体潜在递归中最多提升 7.5 个点。<br>
  [论文](https://arxiv.org/abs/2609.36159) · [主页](https://fard-lab.github.io/REST)

- **[Trading Depth for Time in Recurrent Transformers](https://arxiv.org/abs/2609.21605)**<br>
  Zeyi Huang et al. · *arXiv 2026*<br>
  在相邻词表 token 之间插入一个潜在思考 token，让共享骨干在预测下一个词前精炼隐状态。在训练 FLOPs 匹配的情况下，它优于 PonderLM-2，并随计算量增加超过两循环 Transformer；以约一半参数取得 LRT 深度加倍所带来增益的 89%。<br>
  [论文](https://arxiv.org/abs/2609.21605)

- **[Penelope: Localized Latent Recurrence for Efficient Structured Reasoning](https://arxiv.org/abs/2607.25915)**<br>
  Yutong Chen et al. · *arXiv 2026*<br>
  把循环细化限制在由缓存前缀锚定的解码器中间区间，避免为潜在推理反复执行完整模型。<br>
  [论文](https://arxiv.org/abs/2607.25915)

- **[T^2MLR: Transformer with Temporal Middle-Layer Recurrence](https://arxiv.org/abs/2607.15178)**<br>
  Ziyang Cai et al. · *arXiv 2026*<br>
  把前一 token 的中层表示送入当前 token 的更早层，以局部循环在解码步之间保留潜在计算。<br>
  [论文](https://arxiv.org/abs/2607.15178)

- **[DiscoLoop: Looping Discrete Embeddings and Continuous Hidden States for Multi-hop Reasoning](https://arxiv.org/abs/2607.00341)**<br>
  Hengyu Fu et al. · *arXiv 2026*<br>
  在循环中同时传递离散嵌入与连续隐藏状态通道，缓解可解码桥接实体与 token 对齐表示之间的落差。<br>
  [论文](https://arxiv.org/abs/2607.00341)

- **[Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers](https://arxiv.org/abs/2606.31779)**<br>
  Ying Fan, Anej Svete, Kangwook Lee · *arXiv 2026*<br>
  LOTUS 用显式推理步骤并行监督潜变量，使循环隐推理更接近 CoT 质量，同时降低思考阶段延迟。<br>
  [论文](https://arxiv.org/abs/2606.31779)

- **[Solve the Loop: Attractor Models for Language and Reasoning](https://arxiv.org/abs/2605.12466)**<br>
  Jacob Fein-Ashley, Paria Rashidinejad · *arXiv 2026*<br>
  用求解至收敛的吸引子模块取代固定展开，并通过隐式微分训练，实现训练内存恒定的自适应有效深度。<br>
  [论文](https://arxiv.org/abs/2605.12466)

- **[Latent Chain-of-Thought Improves Structured-Data Transformers](https://arxiv.org/abs/2605.11262)**<br>
  Carson Dudley, Samet Oymak · *arXiv 2026*<br>
  把查询位置的压缩状态作为额外 token 反馈给模型反复处理，将潜在测试时计算扩展到表格预测与时间序列预测。<br>
  [论文](https://arxiv.org/abs/2605.11262)

- **[Thinking Deeper, Not Longer: Depth-Recurrent Transformers for Compositional Generalization](https://arxiv.org/abs/2603.21676)**<br>
  Hung-Hsuan Chen · *arXiv 2026*<br>
  检验循环隐空间深度能否比更长的显式推理文本更好地提升分布外系统组合能力。<br>
  [论文](https://arxiv.org/abs/2603.21676)

</details>

<details>
<summary><strong>2025</strong> · 5 篇</summary>

- **[Closed-Loop Transformers: Autoregressive Modeling as Iterative Latent Equilibrium](https://arxiv.org/abs/2511.21882)**<br>
  Akbar Anbar Jafari, Gholamreza Anbarjafari · *arXiv 2025*<br>
  在生成每个 token 前，把潜在状态迭代细化到学习到的能量平衡点，将自回归预测重述为闭环纠错过程。<br>
  [论文](https://arxiv.org/abs/2511.21882)

- **[Scaling Latent Reasoning via Looped Language Models](https://arxiv.org/abs/2510.25741)**<br>
  Rui-Jie Zhu et al. · *arXiv 2025*<br>
  提出 Ouro 预训练循环语言模型，以熵正则进行深度分配，并把循环深度作为独立的扩展维度研究。<br>
  [论文](https://arxiv.org/abs/2510.25741) · [主页](https://ouro-llm.github.io/)

- **[Reasoning with Latent Thoughts: On the Power of Looped Transformers](https://openreview.net/forum?id=din0lGfZFd)**<br>
  Nikunj Saunshi et al. · *ICLR 2025*<br>
  从理论与实验上连接循环和隐空间多步推理，指出有效计算深度可能比独立参数层数更关键。<br>
  [论文](https://openreview.net/forum?id=din0lGfZFd)

- **[Enhancing Auto-regressive Chain-of-Thought through Loop-Aligned Reasoning](https://arxiv.org/abs/2502.08482)**<br>
  Qifan Yu et al. · *arXiv 2025*<br>
  RELAY 将显式推理步骤与循环迭代对齐，通过中间监督生成可进行长度外推的推理链，再用于增强自回归模型。<br>
  [论文](https://arxiv.org/abs/2502.08482) · [代码](https://github.com/qifanyu/RELAY)

- **[Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach](https://arxiv.org/abs/2502.05171)**<br>
  Jonas Geiping et al. · *NeurIPS 2025*<br>
  把循环深度扩展到 35 亿参数、8000 亿 token 的语言模型，并显示增加测试时循环可在不生成更多 token 的情况下增强推理。<br>
  [论文](https://arxiv.org/abs/2502.05171) · [代码](https://github.com/seal-rg/recurrent-pretraining) · [主页](https://huggingface.co/tomg-group-umd/huginn-0125)

</details>

[↑ 返回目录](#complete-catalog)

<a id="adaptive-compute"></a>

### 自适应计算

<details>
<summary><strong>2026</strong> · 22 篇</summary>

- **[Do Halting Heads Really Save Compute in Looped Language Models?](https://arxiv.org/abs/2610.32246)**<br>
  Tsung-Han Wu, Minsuk Heo, Kenny Tan · *arXiv 2026*<br>
  作者从零预训练最多 1.3B 参数的循环语言模型，发现用所有迭代混合训练的停机头预测 token 只需不到一半迭代，但标准停止规则仍几乎每轮都运行，因为训练从未单独给 token 真正停止的那一轮打分。逐轮打分只有在很强的早停惩罚下才有效；按 token 平均迭代数会高估节省，因为批量生成要等到最慢 token 停止。作者建议报告实际执行迭代数、停止阈值与批量大小，并给出训练停机头前即可界定其收益的测试。<br>
  [论文](https://arxiv.org/abs/2610.32246)

- **[Loop to Look Better: Learning Adaptive Depth for Question-Guided Perception in Vision-Language Models](https://arxiv.org/abs/2610.30824)**<br>
  Wencheng Ye et al. · *arXiv 2026*<br>
  LoopLook 为预训练视觉语言模型引入编码器侧的循环感知：带问题注入地反复访问视觉编码器中后段，用学习到的停机机制决定视觉深度，并以 token 级 Mixture-of-Looks 融合各轮表示，最高提升 8.6%，首 token 时间仅增加 5.1-6.5%。<br>
  [论文](https://arxiv.org/abs/2610.30824)

- **[Think Harder Where It Matters: Item-Level Adaptive Recursion for Sequential Recommendation](https://arxiv.org/abs/2610.30128)**<br>
  Zhanshuo Cao et al. · *arXiv 2026*<br>
  LoopRec 在序列推荐中反复应用单个权重共享块，并在每个递归边界设置轻量二分类“退出或继续”门，把固定深度变成逐物品的自适应属性；学习到的分配会把更深计算给低频物品与近期交互。<br>
  [论文](https://arxiv.org/abs/2610.30128) · [代码](https://github.com/Elpmis117/LoopRec)

- **[Spherical Fixed-Point Reasoners: Adaptive Loop Halting on the Hypersphere](https://arxiv.org/abs/2610.25646)**<br>
  Arber Zela et al. · *arXiv 2026*<br>
  SFPRM 把 FPRM 的阻尼不动点循环搬到单位超球面上，使输入注入、阻尼与停机都成为测地线操作并天然有界；在 Sudoku-Extreme、Maze-Hard 与 Mini-ARC 上优于 FPRM，且测试时计算分配更有效。<br>
  [论文](https://arxiv.org/abs/2610.25646) · [代码](https://github.com/arberzela/sfprm)

- **[recAMPLIFY: Large-Scale Pretraining of Recursive Protein Language Models](https://arxiv.org/abs/2610.26747)**<br>
  Saurav Jha et al. · *arXiv 2026*<br>
  recAMPLIFY 预训练一个权重共享的蛋白质语言模型，其核心以可变循环次数精炼残基表示，并提出 Gated Mixture Recurrence：用学习到的残差门把停机与门控统一为单一自适应计算目标，使期望层深最多降低 37%，且停机深度与生物学性质相关。<br>
  [论文](https://arxiv.org/abs/2610.26747) · [代码](https://github.com/chandar-lab/AMPLIFY/tree/recamplify)

- **[One Model to Loop Them All: Elastic Latent Recurrence for Language Models](https://arxiv.org/abs/2610.12582)**<br>
  Faisal Ladhak et al. · *arXiv 2026*<br>
  Elastic Latent Recurrence 训练出的循环语言模型在单循环时即可接近同规模非循环模型的精度，并随循环次数增加持续提升；其关键在于门控状态更新、混合循环数训练以及按循环序号与预算进行条件化，4B 模型四循环时提升 7.25 分。<br>
  [论文](https://arxiv.org/abs/2610.12582)

- **[Enabling Dynamic Computation in Looped LMs](https://arxiv.org/abs/2610.09013)**<br>
  Aayush Mishra et al. · *arXiv 2026*<br>
  作者指出 Ouro 式循环语言模型因每一轮循环都需要独立 KV 缓存，在实践中并未真正实现动态计算；“最佳可用”KV 缓存策略在保持全深度性能的同时把 FLOPs 与 KV 内存最多减少 30%，修正后的早退先验则让 token 按难度在不同深度退出。<br>
  [论文](https://arxiv.org/abs/2610.09013)

- **[ALoDLM: Adaptively Looped Diffusion Language Models](https://arxiv.org/abs/2610.04198)**<br>
  Liancheng Fang et al. · *arXiv 2026*<br>
  ALoDLM 用 token 自适应的潜在递归取代扩散语言模型中统一的去噪深度：已经可以确定的位置提前提交，未解决的位置继续精炼，并通过条件 NELBO 学习 token 级计算调度，在 1.7B 与 8B 规模上改善质量-效率权衡。<br>
  [论文](https://arxiv.org/abs/2610.04198) · [代码](https://github.com/amazon-science/ALoDLM) · [主页](https://alo-dlm.github.io)

- **[AdaLoop: Adaptive-Depth Latent Reasoning for Audio Language Models](https://arxiv.org/abs/2610.06949)**<br>
  Lee Seung-woo, Bowen Qi · *arXiv 2026*<br>
  AdaLoop 增加一个轻量循环模块，用共享 Transformer 块反复精炼音频表示，并为每个音频-问题对学习何时停止，参数量增加不足 3%，在三个音频大模型上平均提升 2.9 至 3.8 分，最大增益出现在感知密集型子任务上。<br>
  [论文](https://arxiv.org/abs/2610.06949)

- **[Scheduling Recursive Reasoning in Looped Transformers](https://arxiv.org/abs/2609.36653)**<br>
  Boyuan Wang et al. · *arXiv 2026*<br>
  TAPS 把终端损失对递归更新尺度的敏感性分解为持续进展项与去中心波动项，并在推理时在线调整步长；无需重新训练即可提升终端精度，将该原则写入训练还可再获提升，并在匹配基线精度时实现最高 1.56 倍墙钟加速。<br>
  [论文](https://arxiv.org/abs/2609.36653)

- **[Looped Actor: Depth-Recurrent Reasoning Models for Reinforcement Learning](https://arxiv.org/abs/2609.37432)**<br>
  T. Konstantin Rusch et al. · *arXiv 2026*<br>
  Looped Actor 是一种深度循环策略，用共享块把隐状态迭代推向不动点，并按状态改变循环次数；它以远少参数追平 16 倍参数的非共享基线，且在 Boxoban 上循环次数随剩余推动步数增加。<br>
  [论文](https://arxiv.org/abs/2609.37432) · [代码](https://github.com/camail-official/LoopedActor)

- **[Improving Test-Time Scaling with Adaptive Looped Transformers](https://arxiv.org/abs/2609.35748)**<br>
  Yichen You et al. · *arXiv 2026*<br>
  TaH2 将循环主干与迭代决策器联合后训练，用前瞻标签标注再做一次循环是否有益，从而把额外迭代集中在真正受益的 token 上，在 AIME 上把精度-计算斜率相对非循环基线提升 53%。<br>
  [论文](https://arxiv.org/abs/2609.35748) · [代码](https://github.com/thu-nics/TaH)

- **[MoR-MLLM: Mixture of Recursions for Efficient Multimodal Large Language Models](https://arxiv.org/abs/2610.08830)**<br>
  Pengcheng Zheng et al. · *arXiv 2026*<br>
  MoR-MLLM 把 Mixture-of-Recursions 引入多模态大模型，为每个 token 学习递归深度，使视觉或语言上困难的 token 获得更多计算、简单 token 跳过冗余操作，并用三阶段调优与熵正则路由损失稳定训练。<br>
  [论文](https://arxiv.org/abs/2610.08830)

- **[T-LoopFormer: Token-Level Elastic-Depth Looped Transformers with Dynamic Routing](https://arxiv.org/abs/2609.15160)**<br>
  Mingqian Yu et al. · *arXiv 2026*<br>
  T-LoopFormer 通过动态 token 选择路由器让每个 token 自行决定循环次数，并为每一轮递归维护独立的 KV 缓存，使不同深度的 token 只访问对应的缓存状态，从而在保持语言建模与零样本推理性能的同时降低解码延迟。<br>
  [论文](https://arxiv.org/abs/2609.15160) · [代码](https://github.com/YuMingQian1234/T-LoopFormer)

- **[RecurTrace: Adaptive Latent Reasoning with Loop-Time Memory](https://arxiv.org/abs/2609.03379)**<br>
  Yuxiang Wang et al. · *arXiv 2026*<br>
  让每个重复层关注自身此前各循环状态，并用损失改善监督训练停止头，把循环时间记忆与输入自适应深度结合起来。<br>
  [论文](https://arxiv.org/abs/2609.03379)

- **[Per-Token Fixed-Point Convergence in Depth-Recurrent Transformers](https://arxiv.org/abs/2607.14427)**<br>
  Joe Logan · *arXiv 2026*<br>
  测量不同 token 的收敛深度，并显示在所研究规模上，免训练的稳定性规则可比学习式路由器更早停止已收敛 token。<br>
  [论文](https://arxiv.org/abs/2607.14427)

- **[Adaptive Depth in Looped Transformers: Diagnosing Learned Halting Gates and Trajectory Readouts](https://arxiv.org/abs/2607.20519)**<br>
  Andrei Cristian Popescu et al. · *arXiv 2026*<br>
  区分循环轨迹形成与出口读出，并发现当轨迹独立塑形时，简单的事后置信度规则可与学习式停止门相当。<br>
  [论文](https://arxiv.org/abs/2607.20519)

- **[Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping](https://arxiv.org/abs/2606.29983)**<br>
  Hsun-Yu Kuo et al. · *arXiv 2026*<br>
  随机化训练监督的停止深度并学习何时停止，降低长度泛化对单一训练循环数的敏感性。<br>
  [论文](https://arxiv.org/abs/2606.29983)

- **[Fixed-Point Reasoners: Stable and Adaptive Deep Looped Transformers](https://arxiv.org/abs/2606.18206)**<br>
  Sajad Movahedi et al. · *arXiv 2026*<br>
  围绕稳定吸引子训练深循环 Transformer，使推理可依据收敛而非固定迭代次数停止。<br>
  [论文](https://arxiv.org/abs/2606.18206) · [代码](https://github.com/nilskiKonjIzDunava/fprm)

- **[Skip a Layer or Loop It? Learning Program-of-Layers in LLMs](https://arxiv.org/abs/2606.06574)**<br>
  Ziyue Li, Yang Li, Tianyi Zhou · *ICML 2026*<br>
  学习由输入条件决定的层程序，可在预训练 Transformer 层栈中顺序执行、跳过或回访模块。<br>
  [论文](https://arxiv.org/abs/2606.06574) · [代码](https://github.com/tianyi-lab/PoLar)

- **[AdaPonderLM: Gated Pondering Language Models with Token-Wise Adaptive Depth](https://arxiv.org/abs/2603.01914)**<br>
  Shixiang Song et al. · *arXiv 2026*<br>
  学习 token 级思考门控，使共享语言模型块能让简单 token 提前停止、困难 token 继续细化。<br>
  [论文](https://arxiv.org/abs/2603.01914)

- **[LoopFormer: Elastic-Depth Looped Transformers for Latent Reasoning via Shortcut Modulation](https://openreview.net/forum?id=RzYXb5YWBs)**<br>
  Ahmadreza Jeddi et al. · *ICLR 2026*<br>
  约束不同长度的循环轨迹保持一致，使同一模型能在多种推理预算下平滑工作。<br>
  [论文](https://openreview.net/forum?id=RzYXb5YWBs) · [代码](https://github.com/armenjeddi/loopformer) · [主页](https://loopformer.github.io/)

</details>

<details>
<summary><strong>2025</strong> · 3 篇</summary>

- **[Think-at-Hard: Selective Latent Iterations to Improve Reasoning Language Models](https://openreview.net/forum?id=eQaJSRZiGn)**<br>
  Tianyu Fu et al. · *ICML 2026*<br>
  用轻量决策器为困难 token 选择额外的隐空间迭代，并结合深度感知 LoRA 与双因果注意力进行针对性细化。<br>
  [论文](https://openreview.net/forum?id=eQaJSRZiGn) · [代码](https://github.com/thu-nics/TaH)

- **[Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation](https://arxiv.org/abs/2507.10524)**<br>
  Sangmin Bae et al. · *NeurIPS 2025*<br>
  在共享 Transformer 层栈中为每个 token 学习递归深度，把参数复用与 token 级稀疏计算结合起来。<br>
  [论文](https://arxiv.org/abs/2507.10524) · [代码](https://github.com/raymin0223/mixture_of_recursions)

- **[Skip a Layer or Loop it? Test-Time Depth Adaptation of Pretrained LLMs](https://arxiv.org/abs/2507.07996)**<br>
  Ziyue Li, Yang Li, Tianyi Zhou · *arXiv 2025*<br>
  研究预训练大模型在推理时跳过或重复层，把既有层栈视为可调整的深度程序而非固定路径。<br>
  [论文](https://arxiv.org/abs/2507.07996)

</details>

[↑ 返回目录](#complete-catalog)

<a id="training--analysis"></a>

### 训练与机制分析

<details>
<summary><strong>2026</strong> · 32 篇</summary>

- **[Cross-Loop Query Handoff: How Later Loops Redirect Two-Hop Retrieval in the Ouro Looped Language Models](https://arxiv.org/abs/2610.34639)**<br>
  Ziyu Mu, Zehua Wang · *arXiv 2026*<br>
  作者在 Ouro-1.4B 与 Ouro-2.6B 中，于相同层、注意力头与最终提示位置之间移植不同循环的注意力 query：把 loop-3 的 query 注入 loop 1，可挽救 90% 与 97% 在 loop 1 答错、在 loop 3 答对的合成两跳问题，而打乱来源的对照仅 24% 与 21%。后轮 key/value 能挽救的目标少得多；在自然问题上效果更小且仅在 Ouro-2.6B 复现，说明可迁移的是后轮 query 集合而非单向量交接。<br>
  [论文](https://arxiv.org/abs/2610.34639) · [代码](https://github.com/Muuzzziiy/cql-handoff)

- **[One Model, Two Paths: Balancing Single-Pass and Looped Performance in Language Models](https://arxiv.org/abs/2610.33517)**<br>
  Jiarun Shen, Lei Zhao, Xiao Li · *arXiv 2026*<br>
  预训练模型可以复用中间层权重做额外计算，从而同时支持单遍与循环推理，但只训练循环路径会损害单遍质量。用加权损失联合监督两路输出，并加入冻结原模型的指导，可在保留循环增益的同时基本消除单遍性能退化；其中大部分收益来自调整单遍损失的权重。<br>
  [论文](https://arxiv.org/abs/2610.33517)

- **[How Much Gradient Does Truncated Backprop Lose in Looped Transformers?](https://arxiv.org/abs/2610.28871)**<br>
  Aur Shalev Merin · *arXiv 2026*<br>
  在九个循环语言模型上，用一次反向传播精确算出每种截断长度所丢弃的权重梯度：该梯度集中在输出端、在微调过程中变小，且未能证明比无需测量的简单规则更能预测截断的训练代价。<br>
  [论文](https://arxiv.org/abs/2610.28871)

- **[Truncate or Not? A Scaling Study of Looped Transformers with Truncated Backpropagation](https://arxiv.org/abs/2610.26030)**<br>
  Xuyuan Xiong et al. · *arXiv 2026*<br>
  在近600次训练中联合改变模型规模、token预算与前向/反向循环数，并用有效参数拟合统一的缩放律；等算力下，用更少循环做完整BPTT优于截断训练，训练两个循环是循环模型的最优设置。<br>
  [论文](https://arxiv.org/abs/2610.26030)

- **[Inside the Loop: A Mechanistic Study of Weight-Tied Transformers on Depth-Bound Algorithmic Tasks](https://arxiv.org/abs/2610.24135)**<br>
  Magnus Sesodia et al. · *NeurIPS 2026*<br>
  在有逐跳真值的有向置换遍历任务上，四层块迭代八次可在所有随机种子下解出，而同等有效深度、同样训练的非绑定模型除非降低学习率或监督其中间层，否则始终做不到；探针与干预显示循环模型形成随迭代预算调整的逐步推进阶梯。<br>
  [论文](https://arxiv.org/abs/2610.24135) · [代码](https://github.com/magnus-sesodia/insidetheloop)

- **[Adaptive-Depth Is a Finishing Stage](https://arxiv.org/abs/2610.14252)**<br>
  Andrei Piterbarg et al. · *NeurIPS 2026 AXIOM Workshop*<br>
  固定优先训练在大部分训练中保持较浅的固定深度，只在最后阶段改变深度；在2亿参数下把建模训练算力降低45%、在10亿参数下降低31-37%，NLL分别控制在0.5%与0.8%以内。<br>
  [论文](https://arxiv.org/abs/2610.14252)

- **[Recurrent Self-Improvement: Dynamic Cross-Loop On-Policy Distillation for Looped Language Models](https://arxiv.org/abs/2610.10623)**<br>
  Yi Wang et al. · *arXiv 2026*<br>
  把循环模型自身冻结的末端循环当作算力更强的教师，在学生自生成的轨迹上指导中间循环，无需外部教师即可获得跨循环的稠密监督；动态版本随共享权重更新持续刷新教师。<br>
  [论文](https://arxiv.org/abs/2610.10623)

- **[Towards Looped Models Done Right, Part II: Rethinking at Fixed Points](https://arxiv.org/abs/2610.06833)**<br>
  Benhao Huang et al. · *arXiv 2026*<br>
  指出接近不动点的循环状态可支撑截断反传、末端KV共享、更快的蒸馏预填充与基于回放的强化学习，并改进塑造这些不动点的两个训练要素：带熵正则的可学习深度先验与正交输入注入。<br>
  [论文](https://arxiv.org/abs/2610.06833)

- **[Closing the Loop: Practical Training Recipes for Looped Language Models](https://arxiv.org/abs/2610.00673)**<br>
  Andrei Marchenko et al. · *arXiv 2026*<br>
  通过中期训练、学习率预热与更强的退出门正则，把循环语言模型的从零训练成本从7.7T降到310B token；1.4B循环模型在全部12项基准上胜过参数匹配的稠密基线，而仅用一个可学习输入混合标量加平滑退出损失，即可把预训练稠密模型转为循环模型。<br>
  [论文](https://arxiv.org/abs/2610.00673)

- **[Loop Dropout: Regularizing Shared Updates in Looped Language Models](https://arxiv.org/abs/2609.34218)**<br>
  Zirui Zhu et al. · *arXiv 2026*<br>
  发现LoRA用于循环语言模型时存在后循环偏置、前几个循环几乎得不到适配，并用适配器应用的随机掩码加逆生存重标定来修正，在不增加推理开销的情况下提升数学、指令微调与代码表现。<br>
  [论文](https://arxiv.org/abs/2609.34218) · [代码](https://github.com/NUS-HPC-AI-Lab/loop-dropout)

- **[Prediction Dynamics in Depth-Recurrent Language Models](https://arxiv.org/abs/2609.21383)**<br>
  Xinyue Luo, Fei Yu · *arXiv 2026*<br>
  用间隔分解刻画为何中间循环的答案已与最终答案一致、而分数仍在变化；在Huginn-3.5B与Ouro-1.4B上表明，计入更新方向与竞争者配对后，平均最早合格深度在去除共同平移的基础上再降低总深度的22.5-34.4%。<br>
  [论文](https://arxiv.org/abs/2609.21383)

- **[Looped Transformers under the Jacobian Lens: Does the Global Workspace Survive Recurrence?](https://arxiv.org/abs/2609.01924)**<br>
  Wenlong Wang, Fergal Reid · *arXiv 2026*<br>
  把 Jacobian Lens 干预扩展到 Ouro 与 Huginn 的虚拟展开，发现二者都形成类似全局工作空间的表示，但跨循环传递与暴露方式不同。<br>
  [论文](https://arxiv.org/abs/2609.01924)

- **[Dynamical phase selection controls compute scaling in looped transformers](https://arxiv.org/abs/2608.26556)**<br>
  Gunn Kim · *arXiv 2026*<br>
  说明相同架构与目标的循环模型可能落入不同分岔相，其松弛动力学会决定测试时计算扩展行为。<br>
  [论文](https://arxiv.org/abs/2608.26556)

- **[Think Shallow, Solve Deep: Controlling Recurrent Dynamics for Reliable Test-Time Depth](https://arxiv.org/abs/2608.18222)**<br>
  Ivan Viakhirev et al. · *arXiv 2026*<br>
  分类循环动力学，并引入终端不动点目标，使额外测试时深度更安全可靠。<br>
  [论文](https://arxiv.org/abs/2608.18222)

- **[LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction](https://arxiv.org/abs/2608.03624)**<br>
  Behzad Shomali et al. · *arXiv 2026*<br>
  让每轮状态对齐更远的未来 token，以密集监督减少无方向的隐状态细化与过度思考。<br>
  [论文](https://arxiv.org/abs/2608.03624)

- **[Operational Proto-Introspection in Looped Language Models: Process-Quality Taps, Executable Branching, and the Readout-Control Boundary](https://arxiv.org/abs/2607.18553)**<br>
  Jan Kirin · *arXiv 2026*<br>
  检验 Ouro 与 Huginn 状态能否反映当前解题质量，发现其读出可支持决策，但直接生成式操控未能可靠转化为收益。<br>
  [论文](https://arxiv.org/abs/2607.18553)

- **[DeepLoop: Depth Scaling for Looped Transformers](https://arxiv.org/abs/2607.13491)**<br>
  Shuzhen Li et al. · *arXiv 2026*<br>
  依据共享参数被访问的次数推导残差初始化规则，稳定深度展开的 Post-LN 循环 Transformer。<br>
  [论文](https://arxiv.org/abs/2607.13491) · [代码](https://github.com/lszshu/DeepLoop)

- **[LayerNorm as Implicit Gain Control in Looped Transformers](https://arxiv.org/abs/2607.10681)**<br>
  Matthias M. M. Buehlmaier · *arXiv 2026*<br>
  把 Pre-LayerNorm 分析为循环动力学的隐式增益控制器，区分谱稳定性与算子范数界，也区分稳定作用与记忆作用。<br>
  [论文](https://arxiv.org/abs/2607.10681)

- **[Repeated Shared Access Enables Grokking, but Edit Propagation Depends on an Addressable Memory](https://arxiv.org/abs/2606.20737)**<br>
  Yanan Niu · *arXiv 2026*<br>
  在受控实验中分离循环与共享记忆访问：二者都可能促进 grokking，但可靠的多跳编辑传播取决于可寻址记忆，而非循环本身。<br>
  [论文](https://arxiv.org/abs/2606.20737)

- **[On the Residual Scaling of Looped Transformers: Stability and Transferability](https://arxiv.org/abs/2606.18524)**<br>
  Shaowen Wang et al. · *arXiv 2026*<br>
  指出权重重复造成的相关更新会改变残差增长规律，并推导支持稳定深度与超参数迁移的循环感知缩放。<br>
  [论文](https://arxiv.org/abs/2606.18524)

- **[Dense Supervision Is Not Enough: The Readout Blind Spot in Looped Language Models](https://arxiv.org/abs/2606.24898)**<br>
  Rituraj Sharma, Tu Vu · *arXiv 2026*<br>
  说明逐循环交叉熵虽能训练可用出口，但归一化读出会遮蔽径向尺度，使循环状态规模失控，因此需要显式尺度约束。<br>
  [论文](https://arxiv.org/abs/2606.24898)

- **[Stabilizing Recurrent Dynamics for Test-Time Scalable Latent Reasoning in Looped Language Models](https://arxiv.org/abs/2605.26733)**<br>
  Xiao-Wen Yang et al. · *ICML 2026*<br>
  在训练中采样循环深度并正则化循环 Jacobian，目标是在推理循环超过训练范围时仍能稳定提升。<br>
  [论文](https://arxiv.org/abs/2605.26733) · [代码](https://github.com/njuyxw/STARS)

- **[Simply Stabilizing the Loop via Fully Looped Transformer](https://arxiv.org/abs/2605.18797)**<br>
  Rao Fu et al. · *arXiv 2026*<br>
  研究全循环架构与简化稳定方案，旨在规避部分循环设计中的脆弱动力学。<br>
  [论文](https://arxiv.org/abs/2605.18797) · [代码](https://github.com/FuRuF-11/FullyLoopedTransformer)

- **[Parcae: Scaling Laws For Stable Looped Language Models](https://arxiv.org/abs/2604.12946)**<br>
  Hayden Prairie et al. · *ICLR 2026 LIT Workshop*<br>
  从循环动力系统角度诊断残差不稳定，并约束注入算子以获得更可预测的训练和测试时扩展。<br>
  [论文](https://arxiv.org/abs/2604.12946)

- **[A Mechanistic Analysis of Looped Reasoning Language Models](https://arxiv.org/abs/2604.11791)**<br>
  Hugh Blayney et al. · *arXiv 2026*<br>
  跟踪 Ouro、Huginn 等模型的循环表示，识别反复出现的推理阶段与收敛模式。<br>
  [论文](https://arxiv.org/abs/2604.11791)

- **[Relational Preference Encoding in Looped Transformer Internal States](https://arxiv.org/abs/2604.09870)**<br>
  Jan Kirin · *arXiv 2026*<br>
  研究 Ouro 各循环步中的偏好读出；追加审计撤回了被高估的主要结果，但保留了较小的关系式优于逐点式解码效应及重要评估警示。<br>
  [论文](https://arxiv.org/abs/2604.09870)

- **[LoopRPT: Reinforcement Pre-Training for Looped Language Models](https://arxiv.org/abs/2603.19714)**<br>
  Guo Tang et al. · *arXiv 2026*<br>
  在预训练阶段把强化信号直接施加到中间潜在步骤，使 Ouro 式模型更早形成高质量的困难 token 表示。<br>
  [论文](https://arxiv.org/abs/2603.19714)

- **[Prioritize the Process, Not Just the Outcome: Rewarding Latent Thought Trajectories Improves Reasoning in Looped Language Models](https://arxiv.org/abs/2602.10520)**<br>
  Jonathan Williams, Esin Tureci · *arXiv 2026*<br>
  RLTT 将强化学习信用分配到 Ouro 的完整潜在轨迹，而不只奖励最后一个循环状态，从而直接训练隐式推理过程。<br>
  [论文](https://arxiv.org/abs/2602.10520) · [代码](https://github.com/jonwill8/RLTT)

- **[Step-resolved data attribution for looped transformers](https://arxiv.org/abs/2602.10097)**<br>
  Georgios Kaissis et al. · *arXiv 2026*<br>
  把训练样本影响分解到各个循环步，并用 TensorSketch 在不显式保存逐样本完整梯度的情况下实现逐步归因。<br>
  [论文](https://arxiv.org/abs/2602.10097)

- **[Understanding Dynamic Compute Allocation in Recurrent Transformers](https://arxiv.org/abs/2602.08864)**<br>
  Ibraheem Muhammad Moosa et al. · *arXiv 2026*<br>
  用受控算法任务衡量 token 级动态深度是否对应难度，以及路由策略能否外推。<br>
  [论文](https://arxiv.org/abs/2602.08864)

- **[Loop as a Bridge: Can Looped Transformers Truly Link Representation Space and Natural Language Outputs?](https://arxiv.org/abs/2601.10242)**<br>
  Guanxu Chen et al. · *arXiv 2026*<br>
  检验额外循环能否改善内部知识的表达，发现部分表面增益来自表示退化，从而揭示现有循环模型的内省局限。<br>
  [论文](https://arxiv.org/abs/2601.10242)

- **[Energy-Entropy Regularization: The True Power of Minimal Looped Transformers](https://arxiv.org/abs/2601.09588)**<br>
  Wai-Lun Lam · *arXiv 2026*<br>
  利用 Tsallis 熵与受 Hamilton 动力学启发的优化方法，训练极小的单头循环 Transformer 完成长程归纳任务。<br>
  [论文](https://arxiv.org/abs/2601.09588)

</details>

<details>
<summary><strong>2025</strong> · 2 篇</summary>

- **[What Makes Looped Transformers Perform Better Than Non-Recursive Ones](https://arxiv.org/abs/2510.10089)**<br>
  Zixuan Gong et al. · *arXiv 2025*<br>
  从损失景观几何解释循环注意力的优化优势，并据此提出分阶段训练方法。<br>
  [论文](https://arxiv.org/abs/2510.10089)

- **[Latent Chain-of-Thought? Decoding the Depth-Recurrent Transformer](https://openreview.net/forum?id=roIQdXMuEj)**<br>
  Wenquan Lu et al. · *COLM 2025 Workshop*<br>
  沿 Huginn 的循环步探测隐藏状态，检验其轨迹是否形成可解码的潜在思维链。<br>
  [论文](https://openreview.net/forum?id=roIQdXMuEj) · [代码](https://github.com/wenquanlu/huginn-latent-cot)

</details>

[↑ 返回目录](#complete-catalog)

<a id="systems--applications"></a>

### 系统与应用

<details>
<summary><strong>2026</strong> · 41 篇</summary>

- **[LoopFold: Parallelizing Recurrent Depth in Looped Transformers](https://arxiv.org/abs/2610.35556)**<br>
  Feichen Song et al. · *arXiv 2026*<br>
  LoopFold 把同一 token 前缀在多个循环深度上的计算折叠成并行批次：轻量预测器估计后续循环的输入，使其能在前序循环完成前启动，校正器再利用新到的前序结果精修这些输出，全部组件仅用最终下一 token 预测损失训练。在 1.4B 参数下，更深的配置把八个任务的零样本平均准确率从 53.41% 提升到 56.38%，九循环模型以五个串行阶段运行，解码延迟降低 46%。<br>
  [论文](https://arxiv.org/abs/2610.35556)

- **[LoopGR: Parameter-Efficient Scaling for Generative Recommendation via Recurrent Depth](https://arxiv.org/abs/2610.34157)**<br>
  Huizhe Zhang et al. · *arXiv 2026*<br>
  LoopGR 沿循环深度扩展生成式推荐：共享生成解码器与轻量上下文更新器交替运行，并用循环轨迹自蒸馏把高预算教师蒸馏为低预算学生，同时对齐预测分布与演化方向。它在多个强生成式推荐基线上稳定领先；相较代表性编码器-解码器基线，以最多减少 52% 的模型规模取得更优性能。<br>
  [论文](https://arxiv.org/abs/2610.34157)

- **[ScaleRLT: Exact Log-Probabilities and Fast Deferred Rollouts for Reinforcement Learning on Looped Transformers](https://arxiv.org/abs/2610.34427)**<br>
  Dezhen Lu, Zixiang Ni, Runguo Li · *arXiv 2026*<br>
  ScaleRLT 让循环模型在 on-policy 强化学习中的延迟 rollout 变得精确：混合对数概率用无梯度回放按 rollout 调度得到数值、用稠密学习器提供梯度，在 167 个 FP32 与 28 个 bf16 单元中逐位复现 rollout，并使完整 GRPO 损失与 float64 参考匹配到 3.1e-4。单 GPU 上延迟调度把 rollout 吞吐提高 1.47–1.56 倍；两节点 GRPO 中，单波 KV 准入与 CUDA graph 把一次更新缩短 2.71 倍；100 次更新后，混合深度读出让留出集 GSM8K 准确率从 23% 升到 82%。<br>
  [论文](https://arxiv.org/abs/2610.34427)

- **[BeNice! Closing Looping's Inference-Memory Gap via KV-Sharing](https://arxiv.org/abs/2610.31633)**<br>
  Hayden Prairie et al. · *arXiv 2026*<br>
  循环模型每轮递归都会单独生成一份 KV 缓存，推理显存随深度线性增长。该工作采用两阶段方案：先用随机深度预训练诱导收缩型残差动力学，再用 BeNice! 把最后一轮递归的 KV 缓存广播到第一轮，在达到与非共享微调相当困惑度的同时消除逐轮缓存。<br>
  [论文](https://arxiv.org/abs/2610.31633)

- **[Exploring Recurrent-Depth Language Models for Multitask Clinical Text Processing](https://arxiv.org/abs/2610.27559)**<br>
  Xi Yang et al. · *arXiv 2026*<br>
  作者在 9 个临床数据集上联合微调 Ouro-1.4B/2.6B-Thinking、HRM-Text-1B 与 Qwen3 基线，并在 4 个留出集（共 13 个数据集）上评估：Ouro-1.4B-Thinking 在 11 个数据集上优于 Qwen3-1.7B，Ouro-2.6B-Thinking 在多数任务上可与 Qwen3-8B 匹敌，HRM-Text-1B 表现不一，推理与问答类任务提升最大。<br>
  [论文](https://arxiv.org/abs/2610.27559)

- **[HistoLoop: Iterative Contextual Inference with a Looped Transformer for Histology-Based Spatial Gene Expression Prediction](https://arxiv.org/abs/2610.28339)**<br>
  Ziang Liu et al. · *arXiv 2026*<br>
  HistoLoop 把空间基因表达预测建模为迭代上下文推断：共享空间 Transformer 将 spot 状态聚合为多分辨率上下文 token，交叉注意力检索 spot 专属上下文，再经记忆介导的更新把状态带到下一分辨率，在 HEST-Bench HVG50 上领先。<br>
  [论文](https://arxiv.org/abs/2610.28339)

- **[LoopAhead: Speculating Ahead for Faster Decoding in Looped Language Models](https://arxiv.org/abs/2610.21594)**<br>
  Zixuan Liu et al. · *arXiv 2026*<br>
  LoopAhead 引入轻量前瞻起草器，利用早期循环状态一次预测多个未来 token，再由更深轮次决定哪些推测分支继续或暂停，最终由全深度模型裁决，相对自回归解码最高取得 7.82 倍加速。<br>
  [论文](https://arxiv.org/abs/2610.21594)

- **[Retrofitting Recurrent Vision-Language Models from Pretrained Backbones](https://arxiv.org/abs/2610.22075)**<br>
  Madhav Iyengar, Andreas Geiger, Hilde Kühne · *arXiv 2026*<br>
  作者裁剪预训练 VLM 语言骨干的层数，用融合前层 token 的线性适配器循环剩余层中的一部分，并通过纯语言预训练、投影器对齐与视觉指令微调恢复性能，在语言参数减少 23.3% 的同时超过未剪枝基线。<br>
  [论文](https://arxiv.org/abs/2610.22075) · [主页](https://madhavesdios.github.io/recurrent-vlms)

- **[LoopQuant: Accurate and Efficient Post-Training Quantization for Looped Transformers](https://arxiv.org/abs/2610.16368)**<br>
  Zhixiong Zhao et al. · *arXiv 2026*<br>
  LoopQuant 统一跨轮递归状态的激活分布，在固定比特预算下按轮次敏感度分配激活精度，并在任务空间校准，使量化推理贴合低比特递归轨迹；在 Ouro-2.6B 上其 W4A4 配置超过所有 W4A8 基线。<br>
  [论文](https://arxiv.org/abs/2610.16368)

- **[RAMP: Recurrent Adaptive Mixed Precision for Efficient Prefill in Recurrent-Depth Language Models](https://arxiv.org/abs/2610.13041)**<br>
  Ke Wan, Chen Chen · *arXiv 2026*<br>
  递归早期注入的量化误差会被后续轮次逐步衰减。RAMP 因此让前段递归使用低精度权重-激活计算，仅在末端若干轮恢复高精度，在 4K 上下文下保持预填充质量并获得最高 1.16 倍的首次预填充加速。<br>
  [论文](https://arxiv.org/abs/2610.13041)

- **[Scaling RNA Foundation Models through Iterative Refinement](https://arxiv.org/abs/2610.13106)**<br>
  Pengan Chen et al. · *arXiv 2026*<br>
  Eco-RNA 是 80M 参数的 RNA 基础模型，其共享的输入条件 Transformer 核心被反复应用，使推理深度成为训练后可调的旋钮；在参数固定时，把精炼轮次从 1 增加到 4 可提升 RNAGym 适应度预测。<br>
  [论文](https://arxiv.org/abs/2610.13106)

- **[ResidualQuant: KV Cache Quantization for Looped Transformers with 2-Bit Residuals](https://arxiv.org/abs/2610.10381)**<br>
  Heejun Kim et al. · *arXiv 2026*<br>
  循环 Transformer 各轮的 KV 状态高度相似。ResidualQuant 以最后一轮 KV 为高精度参考，把前面各轮编码为带最小二乘缩放与旋转的 INT2 残差，并配合逐轮混合精度，将 KV 存储压缩 80.7%，精度仍接近 BF16。<br>
  [论文](https://arxiv.org/abs/2610.10381)

- **[Looped Diffusion Transformer](https://arxiv.org/abs/2609.40305)**<br>
  Yong Xien Chng et al. · *arXiv 2026*<br>
  Looped-DiT 在每个去噪步内重复执行共享 Transformer 块，并用跨轮深监督与自调制注意力稳定额外深度；260M 参数的循环模型超过大 6.5 倍的基线，推理算力低 4.9 倍。<br>
  [论文](https://arxiv.org/abs/2609.40305)

- **[Depth through recurrence: Looped transformers for flow-matching TTS](https://arxiv.org/abs/2609.29768)**<br>
  Jiabao Ai et al. · *arXiv 2026*<br>
  该工作系统比较流匹配 TTS 中的权重复用布局：七种循环方案每次评估均执行 18 次块调用，其中把九个块各连续执行两次的方案在保持可懂度与说话人相似度的同时，比非共享基线少 47.1% 参数。<br>
  [论文](https://arxiv.org/abs/2609.29768)

- **[FlashLoop: Fast and Memory-Efficient Looped Transformers via Lazy Updates](https://arxiv.org/abs/2609.29812)**<br>
  Wanqi Yang, Shiwei Liu · *arXiv 2026*<br>
  循环中的大部分计算是冗余的：状态变化集中在少数 token，注意力输出差异由稀疏而稳定的 key 列主导，相邻轮 KV 残差也易于低比特量化。FlashLoop 据此采用惰性更新，在保持精度的同时降低逐轮算力与 KV 显存。<br>
  [论文](https://arxiv.org/abs/2609.29812) · [代码](https://github.com/Superone77/FlashLoop) · [主页](https://superone77.github.io/FlashLoop/)

- **[Attention Routing Stabilizes Early: Working-Set Inference for Recurrent Language Models](https://arxiv.org/abs/2609.27373)**<br>
  Ke Wan, Chen Chen · *arXiv 2026*<br>
  循环语言模型的注意力路由比隐状态更早稳定。WISE 在前几轮用完整注意力发现块结构工作集，随后复用该支撑集而保留动态注意力权重与递归精炼，在 4K 上下文下取得 1.76 倍的后期注意力加速。<br>
  [论文](https://arxiv.org/abs/2609.27373)

- **[WaveFront Decoding: Parallelized Self-Speculative Decoding for Looped Language Models](https://arxiv.org/abs/2609.23033)**<br>
  Hyeongju Ha, Jae-Joon Kim · *arXiv 2026*<br>
  WaveFront 解码把处于不同递归深度的 token 状态压进同一次循环块调用，排成对角波前，使浅层起草与全深度验证并发执行，从而消除自推测解码中“先起草后验证”的阶段划分。<br>
  [论文](https://arxiv.org/abs/2609.23033)

- **[LoopSpec: Pipelined Self-Speculative Decoding for Looped Transformers](https://arxiv.org/abs/2609.17184)**<br>
  SangLyul Cho et al. · *arXiv 2026*<br>
  LoopSpec 用早期递归状态生成草稿 token，再由完整深度验证，同时把后续 token 的起草与当前 token 的验证流水线化，并可从更深轮次追加第二次提议，从而无需额外草稿模型即可实现无损自推测解码。<br>
  [论文](https://arxiv.org/abs/2609.17184)

- **[Recirculation](https://arxiv.org/abs/2608.17981)**<br>
  Michael C. Mozer et al. · *arXiv 2026*<br>
  在冻结基础模型的预填充阶段加入一种不同于常规深度循环的递归，改善信念状态跟踪且不增加生成阶段延迟。<br>
  [论文](https://arxiv.org/abs/2608.17981)

- **[Looped Language Models Improve Compositional Tool Calling](https://arxiv.org/abs/2608.18171)**<br>
  Andrei Cristian Popescu et al. · *arXiv 2026*<br>
  在工具调用任务上评估循环深度，发现其收益主要出现在具有组合或依赖结构的调用中。<br>
  [论文](https://arxiv.org/abs/2608.18171)

- **[Nanbeige4.2-3B on Apple Silicon: Fixing Deployment Bugs and Decreasing Looped Transformer Memory Overhead](https://arxiv.org/abs/2608.13987)**<br>
  John T. Halloran · *arXiv 2026*<br>
  审计循环 Agent 模型在 Apple Silicon 上的实际部署故障，并用分块预填充降低第二次层栈执行带来的峰值注意力内存开销。<br>
  [论文](https://arxiv.org/abs/2608.13987) · [代码](https://github.com/johnhalloran321/Nanbeige4.2-3B-mps-fix)

- **[MergeOver: Post-Training Token Merging for Recursive Vision Transformers](https://arxiv.org/abs/2608.13141)**<br>
  Junseo Kim et al. · *arXiv 2026*<br>
  在递归权重共享视觉 Transformer 中加入免重训的 token 合并，并跨重复阶段维护空间反合并约束。<br>
  [论文](https://arxiv.org/abs/2608.13141)

- **[Depth-Adaptive Inference of Looped Language Models via Continuous Depth Batching](https://arxiv.org/abs/2608.09444)**<br>
  Kristian Schwethelm et al. · *arXiv 2026*<br>
  把可变循环深度变成服务系统原语，持续批处理在不同循环次数进入和退出的样本。<br>
  [论文](https://arxiv.org/abs/2608.09444)

- **[bioMoR: Biology-Guided Mixture-of-Recursions for Effective Genomic Learning](https://arxiv.org/abs/2608.06727)**<br>
  Koushik Howlader et al. · *arXiv 2026*<br>
  把生物图知识注入 token 嵌入、注意力偏置与递归路由器，依据结构知识为基因和通路分配更深计算。<br>
  [论文](https://arxiv.org/abs/2608.06727)

- **[Nanbeige4.2-3B: Unlocking Agentic Capabilities in a Compact Model](https://arxiv.org/abs/2607.22083)**<br>
  Nanbeige Lab et al. · *arXiv 2026*<br>
  基于复用层栈的循环 Transformer 预训练紧凑型 3B Agent 模型，并结合大规模 Agent 后训练流程。<br>
  [论文](https://arxiv.org/abs/2607.22083)

- **[Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers](https://arxiv.org/abs/2607.15456)**<br>
  James O'Neill, Fergal Reid · *arXiv 2026*<br>
  把不同循环中的 K/V 轨迹压缩到紧凑隐表示中，以提高循环模型的服务容量。<br>
  [论文](https://arxiv.org/abs/2607.15456)

- **[LoopCoder: Scaling Code Intelligence via Looped Language Models](https://aclanthology.org/2026.findings-acl.796/)**<br>
  Jian Yang et al. · *Findings of ACL 2026*<br>
  把循环式预训练与后训练扩展到总参数 400 亿、激活参数 80 亿的代码模型，并用稠密到循环初始化增强稳定性。<br>
  [论文](https://aclanthology.org/2026.findings-acl.796/) · [代码](https://github.com/CSJianYang/LoopCoder)

- **[Soft Mixture-of-Recursions: Going Deeper with Recursive Vision Transformers](https://arxiv.org/abs/2607.00774)**<br>
  Sang In Lee, Jihun Park · *arXiv 2026*<br>
  对所有递归步输出学习 token 级软混合，使递归视觉 Transformer 能利用中间状态，而非只读取最后一次访问。<br>
  [论文](https://arxiv.org/abs/2607.00774)

- **[LoopCoder-v2: Only Loop Once for Efficient Test-Time Computation Scaling](https://arxiv.org/abs/2606.18023)**<br>
  Jian Yang et al. · *arXiv 2026*<br>
  在 70 亿规模比较并行循环次数，发现收益并不单调：一次重复已获得主要提升，更多循环会受位置错配影响。<br>
  [论文](https://arxiv.org/abs/2606.18023) · [代码](https://github.com/CSJianYang/LoopCoder)

- **[Rethinking Depth: A study of the Recursive-Transformer for Speech Recognition](https://arxiv.org/abs/2606.09357)**<br>
  Thomas Rolland et al. · *arXiv 2026*<br>
  系统研究语音编码器应在何处、以多大深度递归，发现有限循环可在显著减少独立参数的同时保持有竞争力的识别效果。<br>
  [论文](https://arxiv.org/abs/2606.09357)

- **[Test-Time Compute Scaling for ASR with Depth-Conditioned Looped Transformers](https://arxiv.org/abs/2606.04678)**<br>
  Yacouba Kaloga et al. · *arXiv 2026*<br>
  通过稀疏 CTC 检查点、深度条件调制和延迟后验反馈，把循环编码器深度变成语音识别的推理预算。<br>
  [论文](https://arxiv.org/abs/2606.04678)

- **[Déjà View: Looping Transformers for Multi-View 3D Reconstruction](https://arxiv.org/abs/2605.30215)**<br>
  Alessandro Burzio et al. · *arXiv 2026*<br>
  通过循环应用单一 Transformer 块显式实现多视角重建的渐进细化，并把细化次数变成推理时计算旋钮。<br>
  [论文](https://arxiv.org/abs/2605.30215)

- **[Training-Free Looped Transformers](https://arxiv.org/abs/2605.23872)**<br>
  Lizhang Chen et al. · *arXiv 2026*<br>
  在推理时把冻结的中间层作为阻尼数值细化步骤循环，显示某些循环能力可在无需训练时加入。<br>
  [论文](https://arxiv.org/abs/2605.23872)

- **[LT2: Linear-Time Looped Transformers](https://arxiv.org/abs/2605.20670)**<br>
  Chunyuan Deng et al. · *arXiv 2026*<br>
  把循环深度与线性时间序列混合结合，避免长上下文注意力开销随循环次数成倍增加。<br>
  [论文](https://arxiv.org/abs/2605.20670)

- **[Memory-Efficient Looped Transformer: Decoupling Compute from Memory in Looped Language Models](https://arxiv.org/abs/2605.07721)**<br>
  Victor Conchello Vendrell et al. · *arXiv 2026*<br>
  重构循环推理，使增加循环计算不再要求中间状态存储按比例增长。<br>
  [论文](https://arxiv.org/abs/2605.07721)

- **[LoopQ: Quantization for Recursive Transformers](https://arxiv.org/abs/2605.16343)**<br>
  Rui Fang et al. · *arXiv 2026*<br>
  识别循环模型特有的训练后量化失效，并结合激活缩放、状态对齐与轨迹感知优化来抑制递归误差累积。<br>
  [论文](https://arxiv.org/abs/2605.16343)

- **[ELT: Elastic Looped Transformers for Visual Generation](https://arxiv.org/abs/2604.09168)**<br>
  Sahil Goyal et al. · *arXiv 2026*<br>
  用循环内自蒸馏训练图像与视频生成模型，使单一检查点在推理时支持弹性的算力—质量权衡。<br>
  [论文](https://arxiv.org/abs/2604.09168)

- **[LA-Sign: Looped Transformers with Geometry-aware Alignment for Skeleton-based Sign Language Recognition](https://arxiv.org/abs/2603.29057)**<br>
  Muxin Pu et al. · *arXiv 2026*<br>
  利用编码器—解码器循环细化骨骼动作表示，并加入几何感知的跨模态对齐以完成孤立手语识别。<br>
  [论文](https://arxiv.org/abs/2603.29057)

- **[Looping Back to Move Forward: Recursive Transformers for Efficient and Flexible Large Multimodal Models](https://arxiv.org/abs/2602.09080)**<br>
  Ruihan Xu et al. · *arXiv 2026*<br>
  构建多模态递归 Transformer，通过模态感知的状态对齐和逐轮监督推动性能随循环改善。<br>
  [论文](https://arxiv.org/abs/2602.09080)

- **[Recurrent-Depth VLA: Implicit Test-Time Compute Scaling of Vision-Language-Action Models via Latent Iterative Reasoning](https://arxiv.org/abs/2602.07845)**<br>
  Yalcin Tur et al. · *arXiv 2026*<br>
  把循环深度的隐空间细化用于视觉—语言—动作策略，使推理计算可扩展而无需生成更长动作轨迹。<br>
  [论文](https://arxiv.org/abs/2602.07845) · [代码](https://github.com/rd-vla/rd-vla) · [主页](https://rd-vla.github.io/)

- **[LoopViT: Scaling Visual ARC with Looped Transformers](https://arxiv.org/abs/2602.02156)**<br>
  Wen-Jie Shu et al. · *arXiv 2026*<br>
  构建用于 ARC-AGI 的 1800 万参数循环视觉 Transformer，并以预测熵作为无需额外参数的动态停止信号。<br>
  [论文](https://arxiv.org/abs/2602.02156) · [代码](https://github.com/WenjieShu/LoopViT)

</details>

<details>
<summary><strong>2025</strong> · 1 篇</summary>

- **[Parallel Loop Transformer for Efficient Test-Time Computation Scaling](https://arxiv.org/abs/2510.24824)**<br>
  Bohong Wu et al. · *arXiv 2025*<br>
  通过跨 token 重叠执行循环步，并结合首轮 KV 共享与门控滑动窗口注意力，降低串行延迟与缓存开销。<br>
  [论文](https://arxiv.org/abs/2510.24824)

</details>

[↑ 返回目录](#complete-catalog)

<a id="safety--monitoring"></a>

### 安全与监控

<details>
<summary><strong>2026</strong> · 5 篇</summary>

- **[Monitoring latent reasoning in looped language models](https://arxiv.org/abs/2610.18127)**<br>
  Pawel Olszowiec et al. · *arXiv 2026*<br>
  提出包含五个视角的机制可解释性检查流程，并应用于四个家族的八个循环语言模型，区分“携带式循环”（Ouro、LoopUS，提示仅随循环状态传递）与“重读式循环”（Parcae、Huginn、Rec-OLMo，每次迭代重新注入提示）。<br>
  [论文](https://arxiv.org/abs/2610.18127)

- **[Running Fewer Loops Removes Refusal Behaviour in Recurrent-Depth Language Models](https://arxiv.org/abs/2610.15218)**<br>
  Seyedarmin Azizi et al. · *arXiv 2026*<br>
  作者在四个 Ouro 检查点与 Huginn 上减少循环次数，发现安全性下降远大于精度损失——半深度时有害请求获得帮助的比例上升 5.3 倍；现有早退规则不会为有害请求分配更多循环，而随机深度训练能修复这一缺口。<br>
  [论文](https://arxiv.org/abs/2610.15218)

- **[Safe at One Loop, Risky at Another: Aligning Safety Across Recurrent Depths in Looped Language Models](https://arxiv.org/abs/2610.10625)**<br>
  Yi Wang et al. · *arXiv 2026*<br>
  揭示同一循环语言模型在不同推理深度上可能一边安全、一边可被越狱，且攻击可跨深度迁移；提出 SafeBridge，在共享循环层上加入深度特定控制与选择性状态桥接，并跨深度联合施加安全监督。<br>
  [论文](https://arxiv.org/abs/2610.10625)

- **[On the Chain-of-Thought Monitorability of Looped Language Models](https://arxiv.org/abs/2610.02741)**<br>
  Han Wang, Ishwar B Balappanawar, Huan Zhang · *arXiv 2026*<br>
  首次系统评估循环语言模型的思维链可监控性：在 MonitorBench 八个任务的标准与压力测试设置下，更深的循环只在特定的逻辑、科学、工程类线索—答案任务上削弱监控；与参数量或深度匹配的非循环模型相比，循环模型并未系统性更难监控。<br>
  [论文](https://arxiv.org/abs/2610.02741)

- **[When Steering Fails in Latent Reasoning: A Latent-to-Language Transition Gap](https://arxiv.org/abs/2609.21662)**<br>
  Gaoxiang Huang, Lei Qi · *arXiv 2026*<br>
  发现对连续思考做激活引导时，其对最终生成的影响远弱于对显式思维链的引导，即便表征位移幅度相当；潜空间到语言边界处输出分布的突变以及更弱的双向控制支持“潜在—语言转接鸿沟”的假设。<br>
  [论文](https://arxiv.org/abs/2609.21662)

</details>

[↑ 返回目录](#complete-catalog)

<a id="broader-latent-reasoning"></a>

### 广义潜在推理

<details>
<summary><strong>2026</strong> · 23 篇</summary>

- **[Joint Latent Reasoning and Observation for Agentic Video Understanding](https://arxiv.org/abs/2610.35229)**<br>
  Junzhang Liu et al. · *arXiv 2026*<br>
  LARVA 通过联合学习潜在推理与视觉观察来蒸馏多轮视频智能体：观察者把紧凑连续表示传给推理者，由推理者选择下一次取景动作或给出答案，动作与答案监督会穿过该接口回传；观察重建与推理分布对齐则从文本教师轨迹提供辅助监督。以 4B 与 7B 骨干在五个视频基准上表现强劲，7B 模型在 VideoHolmes、Video-MME 与 LVBench 上分别比文本思维链学生高 5.1、2.5 与 3.7 个百分点。<br>
  [论文](https://arxiv.org/abs/2610.35229)

- **[Reasoning or Just Prompting? Probing the Mechanism of Latent Chemical Reasoning](https://arxiv.org/abs/2610.34173)**<br>
  Kaiyuan Lu, Jiatong Li, Yatao Bian · *arXiv 2026*<br>
  作者探测 LatentChem 式潜在化学推理，发现替换或适度扰动中间潜在状态几乎不改变准确率，而完全移除它们会造成明显下降：这些状态本身重要，但其分子特异内容影响很小。一个跨分子共享的固定前缀即可复现 LatentChem 的性能，在受控模型中学习到的静态 soft prompt 也能媲美逐输入生成潜在状态，说明潜在化学推理更像 soft prompting 而非隐藏的推理链。<br>
  [论文](https://arxiv.org/abs/2610.34173)

- **[Curriculum Learning Teaches LLMs Long-Horizon Implicit Reasoning, Up To A Limit](https://arxiv.org/abs/2610.25612)**<br>
  Jimson Huang et al. · *arXiv 2026*<br>
  通过逐步增大词表与前瞻步数的课程微调，使 Qwen3-0.6B 在前瞻 256 步时达到 98%（无课程仅 45%），但进步呈饱和指数趋势，说明隐式推理深度存在随模型规模增长的内在上限。<br>
  [论文](https://arxiv.org/abs/2610.25612)

- **[Nested Shared-Operator Recursion on ARC-AGI-1: An Empirical Study of HRM, TRM and URM](https://arxiv.org/abs/2610.26666)**<br>
  Sara Neri et al. · *arXiv 2026*<br>
  在 HRM、TRM 与 URM 中加入持久的中间状态，使快速状态的反复更新经同一算子整合，检验嵌套递归能否提升 ARC-AGI-1 表现；在参数匹配且单卡预算下未发现一致优势，并给出后续确证实验方案。<br>
  [论文](https://arxiv.org/abs/2610.26666)

- **[Sep-Latent: Separator Tokens as Natural Compression Anchors for Implicit Reasoning](https://arxiv.org/abs/2610.22924)**<br>
  Yinlong Xu et al. · *arXiv 2026*<br>
  以分隔符 token 作为结构锚点，配合注意力衰减与多层蒸馏，使潜在推理可按问题难度自适应终止，在 GSM8k-Aug 上平均仅用 5.4 个潜在 token 即达到 56.8% 准确率。<br>
  [论文](https://arxiv.org/abs/2610.22924)

- **[Does Latent Chain-of-Thought Actually Reason? A Single, Unifying Taxonomy for Latent Reasoning](https://arxiv.org/abs/2610.21182)**<br>
  Jingjie Qiu et al. · *arXiv 2026*<br>
  在 21 组模型-任务配置中结合链删除、内容替换、探针与轨迹分析，发现在逻辑任务上 COCONUT 往往在链开始前就已编码可读答案，并提出区分潜在链所表示的内容与模型实际使用方式的统一分类法。<br>
  [论文](https://arxiv.org/abs/2610.21182)

- **[Tiny Recursive Message Passing](https://arxiv.org/abs/2610.18649)**<br>
  Tommaso Salvatori et al. · *arXiv 2026*<br>
  把 TRM 的深监督、截断递归与测试时演绎流程移植到消息传递网络，仅用 16k 参数、十分钟训练的模型即在数独极限版上达到约 99%，并零样本迁移到更大规模的 N 皇后与 SAT 实例。<br>
  [论文](https://arxiv.org/abs/2610.18649)

- **[Think Before You Paint: Recursive Latent Reasoning for Diffusion Models](https://arxiv.org/abs/2610.09876)**<br>
  Paweł Skierś et al. · *arXiv 2026*<br>
  在冻结扩散模型的每个去噪步内嵌入小型 TRM 式 Thinker，在学到的 token 网格上推理并通过 ControlNet 引导生成，仅用 10M 参数、无需符号监督即解出 92.5% 的困难 MNIST 数独。<br>
  [论文](https://arxiv.org/abs/2610.09876)

- **[Continuous Memory Machines](https://arxiv.org/abs/2610.07907)**<br>
  Ciaran Regan et al. · *arXiv 2026*<br>
  把循环状态拆分为承担不同角色的矩阵值短期与长期记忆，由 Transformer 联合读写，在算法、上下文学习与循环推理任务上优于既有记忆增强网络，同时保留连续思维机可解释的注意力模式。<br>
  [论文](https://arxiv.org/abs/2610.07907)

- **[LatentHarness: Learning Latent Actions for Memory and Reasoning via Counterfactual Policy Distillation](https://arxiv.org/abs/2609.39740)**<br>
  Xiaoqiang Wang, Suyuchen Wang, Bang Liu · *arXiv 2026*<br>
  把记忆访问与潜在计算统一为 THINK、RECALL、EXIT 三类潜在动作的序列决策，用反事实策略蒸馏对每个动作分支打分训练，在通用与长上下文推理基准上分别相对提升 2.8% 与 10.0%，并快 5.9 倍。<br>
  [论文](https://arxiv.org/abs/2609.39740)

- **[What Limits Recursive Reasoning Models: Optimization, Architecture and Test-Time Scaling](https://arxiv.org/abs/2609.39967)**<br>
  Yuliana Shakhvalieva et al. · *arXiv 2026*<br>
  在同一实验流程中分离 HRM、TRM 与 URM 的架构、梯度视野与状态更新控制，发现显式层级结构并非必需：采用中等梯度视野与大物理批次的稳定 13.6M 模型把算术分布外准确率从 36.2% 提升到 71.2%。<br>
  [论文](https://arxiv.org/abs/2609.39967)

- **[Where Do Embodied Decisions Come From? Rethinking Latent and Explicit Reasoning](https://arxiv.org/abs/2609.34794)**<br>
  Yuan Lin et al. · *arXiv 2026*<br>
  发现干预显式 CoT 会使 VLA 导航 F1 从 72.14% 跌至 11.84%，进而提出先决策后解释的范式：先预测动作再生成解释，在自动驾驶与机器人操作上优于先思考后行动与无 CoT 基线，且更依赖感知驱动的潜在计算。<br>
  [论文](https://arxiv.org/abs/2609.34794) · [代码](https://github.com/ocean-luna/openvla-decide-then-explain)

- **[Not All Thinking is Created Equal: Latent Reasoning Discovers a Recurrent Search Algorithm for Depth Generalization](https://arxiv.org/abs/2609.35643)**<br>
  Huzi Cheng, Zhewei Zhang · *arXiv 2026*<br>
  在同一主干上比较原始、CoT、停顿 token 与两种潜在推理变体，发现潜在模型能泛化到更多跳数，因为它们学到的是传播可达性的稀疏循环搜索回路，而非依赖局部图特征。<br>
  [论文](https://arxiv.org/abs/2609.35643)

- **[Next Thoughts Are Distributions: Generative Autoregressive Reasoning in the Latent Space](https://arxiv.org/abs/2609.33271)**<br>
  Yang Li et al. · *arXiv 2026*<br>
  用扩散头在自回归推理器上把下一个连续思维建模为多峰分布，使潜在推理可以分支；ATF 提升数学准确率，并能从强化学习与额外测试时思考中获益，多次采样覆盖更多解法。<br>
  [论文](https://arxiv.org/abs/2609.33271)

- **[Stream Recursion Model (SRM)](https://arxiv.org/abs/2609.28809)**<br>
  Asael Sorensen et al. · *arXiv 2026*<br>
  将 HRM 改造为多个相互作用的潜在流并以递归精修更新，使流的动态、因果贡献与路由可直接分析；在单参数效率上匹敌 GPT-2，并显示各流具有稳定的专门化分工。<br>
  [论文](https://arxiv.org/abs/2609.28809)

- **[When Recursive Models Finish Computing](https://arxiv.org/abs/2609.26487)**<br>
  Hare Krishna et al. · *arXiv 2026*<br>
  把 TRM 的循环从 16 步延长到 512 步，在 1000 道困难数独上使 MLP 变体的精确求解率升至 91.9%，并发现计算完成的共同标志：沿轨迹方向局部收缩，而其他方向仍可扩张。<br>
  [论文](https://arxiv.org/abs/2609.26487)

- **[Think Wider: Mitigating Latent Rank Collapse in Implicit Chain-of-Thought Reasoning](https://arxiv.org/abs/2609.07406)**<br>
  Yuwen Hao, Menglin Yang · *arXiv 2026*<br>
  指出隐式 CoT 中相邻潜在状态会向同一主方向塌缩的潜在秩塌缩现象，并提出即插即用的谱正则项惩罚该方向上的投影，在不改动主干与解码流程的前提下提升有效秩。<br>
  [论文](https://arxiv.org/abs/2609.07406) · [代码](https://github.com/whitesweater/WIDER)

- **[BDH-CQ: In-Context Learning with Recurrent Latent Reasoning](https://arxiv.org/abs/2608.09888)**<br>
  Björn Engdahl et al. · *arXiv 2026*<br>
  根据示例持续更新循环记忆，再在高维潜在空间中迭代求解查询，而无需语言化中间步骤。<br>
  [论文](https://arxiv.org/abs/2608.09888)

- **[Think Deep, Speak Once: Relit, A Recursive Latent Implicit Transformer Framework](https://arxiv.org/abs/2608.08113)**<br>
  Abhishek Panwar et al. · *arXiv 2026*<br>
  在冻结语言模型上加入轻量递归潜在模块，把语义表示与深层隐式推理结合后再一次性输出语言答案。<br>
  [论文](https://arxiv.org/abs/2608.08113)

- **[Learning to Refine Hidden States for Reliable LLM Reasoning](https://arxiv.org/abs/2606.17524)**<br>
  Chia-Hsuan Hsu, Jui-Ming Yao · *arXiv 2026*<br>
  用学习到的深度与动作控制器决定解码前进行多少次潜在细化及其方向，并以逐步似然改善作为训练信号。<br>
  [论文](https://arxiv.org/abs/2606.17524)

- **[Demystifying Hidden-State Recurrence: Switchable Latent Reasoning with On-Policy Reinforcement Learning](https://arxiv.org/abs/2606.13106)**<br>
  Jiayu Yang et al. · *arXiv 2026*<br>
  在循环隐藏状态推理前后加入显式进入与退出 token，使潜在模块既能使用在策略强化学习，也便于进行因果探测。<br>
  [论文](https://arxiv.org/abs/2606.13106)

- **[State Stream Transformer (SST) V2: Parallel Training of Nonlinear Recurrence for Latent Space Reasoning](https://arxiv.org/abs/2605.00206)**<br>
  Thea Aviss · *arXiv 2026*<br>
  在解码位置间横向传递非线性循环状态，并用两遍近似实现该顺序潜在通路的并行训练。<br>
  [论文](https://arxiv.org/abs/2605.00206)

- **[One Step Forward and K Steps Back: Better Reasoning with Denoising Recursion Models](https://arxiv.org/abs/2604.18839)**<br>
  Chris Cameron et al. · *arXiv 2026*<br>
  训练递归推理器通过多步细化逆转可控扰动，为具有搜索性质的结构化推理提供中间状态课程。<br>
  [论文](https://arxiv.org/abs/2604.18839)

</details>

<details>
<summary><strong>2025</strong> · 14 篇</summary>

- **[Learning When to Stop: Adaptive Latent Reasoning via Reinforcement Learning](https://arxiv.org/abs/2511.21581)**<br>
  Alex Ning et al. · *arXiv 2025*<br>
  为潜在推理优化停止策略，显式权衡连续推理长度与答案准确率。<br>
  [论文](https://arxiv.org/abs/2511.21581) · [代码](https://github.com/apning/adaptive-latent-reasoning)

- **[LLM Latent Reasoning as Chain of Superposition](https://arxiv.org/abs/2510.15522)**<br>
  Jingcheng Deng et al. · *arXiv 2025*<br>
  把潜在思维限制在词表空间的叠加表示中，为隐空间增加结构并建立返回显式 token 的直接桥梁。<br>
  [论文](https://arxiv.org/abs/2510.15522)

- **[Less is More: Recursive Reasoning with Tiny Networks](https://arxiv.org/abs/2510.04871)**<br>
  Alexia Jolicoeur-Martineau · *arXiv 2025*<br>
  提出 Tiny Recursive Model：用小型共享网络交替更新隐状态与候选答案，并在结构化推理任务上比较自注意力与无注意力两种实现。<br>
  [论文](https://arxiv.org/abs/2510.04871) · [代码](https://github.com/SamsungSAILMontreal/TinyRecursiveModels)

- **[SIM-CoT: Supervised Implicit Chain-of-Thought](https://arxiv.org/abs/2509.20317)**<br>
  InternLM Team · *arXiv 2025*<br>
  利用显式思维链轨迹派生的监督信号训练隐式推理状态。<br>
  [论文](https://arxiv.org/abs/2509.20317) · [代码](https://github.com/InternLM/SIM-CoT)

- **[SynAdapt: Learning Adaptive Reasoning in Large Language Models via Synthetic Continuous Chain-of-Thought](https://arxiv.org/abs/2508.00574)**<br>
  Jianwei Wang et al. · *arXiv 2025*<br>
  构造合成连续思维监督目标，并仅在学习到的难度信号判定问题较难时追加推理。<br>
  [论文](https://arxiv.org/abs/2508.00574)

- **[A Survey on Latent Reasoning](https://arxiv.org/abs/2507.06203)**<br>
  Rui-Jie Zhu et al. · *arXiv 2025*<br>
  系统梳理激活循环、隐藏状态传递、压缩推理与隐式深度等更广泛的潜在推理路线。<br>
  [论文](https://arxiv.org/abs/2507.06203) · [代码](https://github.com/multimodal-art-projection/LatentCoT-Horizon)

- **[Hierarchical Reasoning Model](https://arxiv.org/abs/2506.21734)**<br>
  Guan Wang et al. · *arXiv 2025*<br>
  使用工作在不同时间尺度的两个循环模块，以紧凑的非 Transformer 推理器解决高难符号任务。<br>
  [论文](https://arxiv.org/abs/2506.21734) · [代码](https://github.com/sapientinc/HRM)

- **[Parallel Continuous Chain-of-Thought with Jacobi Iteration](https://arxiv.org/abs/2506.18582)**<br>
  Zhenyu Zhang et al. · *arXiv 2025*<br>
  使用 Jacobi 式更新并行细化多个连续思维位置，而不是串行生成推理文本。<br>
  [论文](https://arxiv.org/abs/2506.18582) · [代码](https://github.com/whyNLP/PCCoT)

- **[PonderLM: Pretraining Language Models to Ponder in Continuous Space](https://arxiv.org/abs/2505.20674)**<br>
  Boyi Zeng et al. · *ICLR 2026*<br>
  在预训练中学习连续思考，将预测分布加权得到的 token 嵌入回送模型，在输出 token 前执行额外的前向计算。<br>
  [论文](https://arxiv.org/abs/2505.20674) · [代码](https://github.com/LUMIA-Group/PonderingLM)

- **[Hybrid Latent Reasoning via Reinforcement Learning](https://arxiv.org/abs/2505.18454)**<br>
  Zhenrui Yue et al. · *NeurIPS 2025*<br>
  用强化学习融合采样 token 和先前隐藏状态，在保留离散生成的同时引入隐空间计算。<br>
  [论文](https://arxiv.org/abs/2505.18454) · [代码](https://github.com/Yueeeeeeee/HRPO)

- **[Soft Thinking: Unlocking the Reasoning Potential of LLMs in Continuous Concept Space](https://arxiv.org/abs/2505.15778)**<br>
  Yuhui Xu et al. · *arXiv 2025*<br>
  把词表上的软分布作为连续概念表示传递，避免每一步都过早确定为单个离散推理 token。<br>
  [论文](https://arxiv.org/abs/2505.15778) · [代码](https://github.com/eric-ai-lab/Soft-Thinking)

- **[CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation](https://arxiv.org/abs/2502.21074)**<br>
  Zhengyu Chen et al. · *arXiv 2025*<br>
  通过自蒸馏把显式推理压入连续隐藏轨迹，使模型用更少的解码 token 完成推理。<br>
  [论文](https://arxiv.org/abs/2502.21074) · [代码](https://github.com/zhenyi4/codi)

- **[Token Assorted: Mixing Latent and Text Tokens for Improved Language Model Reasoning](https://arxiv.org/abs/2502.03275)**<br>
  Jiaxin Huang et al. · *ICML 2025*<br>
  交错使用连续潜 token 与普通文本 token，探索静默推理和显式推理之间的混合媒介。<br>
  [论文](https://arxiv.org/abs/2502.03275)

- **[Efficient Reasoning with Hidden Thinking](https://arxiv.org/abs/2501.19201)**<br>
  Huanjin Yao et al. · *arXiv 2025*<br>
  学习紧凑的隐藏推理状态，替代部分显式思维链并尽量保持答案质量。<br>
  [论文](https://arxiv.org/abs/2501.19201) · [代码](https://github.com/shawnricecake/Heima)

</details>

<details>
<summary><strong>2024</strong> · 6 篇</summary>

- **[Compressed Chain of Thought: Efficient Reasoning through Dense Representations](https://arxiv.org/abs/2412.13171)**<br>
  Zhiyuan Deng et al. · *arXiv 2024*<br>
  把较长的文本推理轨迹压缩成更少的稠密表示，以降低自回归推理成本。<br>
  [论文](https://arxiv.org/abs/2412.13171)

- **[Training Large Language Models to Reason in a Continuous Latent Space](https://arxiv.org/abs/2412.06769)**<br>
  Shibo Hao et al. · *COLM 2025*<br>
  Coconut 把生成的隐藏状态直接作为下一步输入嵌入，形成可同时承载多个候选路径的连续思维链。<br>
  [论文](https://arxiv.org/abs/2412.06769) · [代码](https://github.com/facebookresearch/coconut)

- **[Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding](https://arxiv.org/abs/2411.04282)**<br>
  Zayne Sprague et al. · *arXiv 2024*<br>
  利用模型自生成的偏好信号优化隐式推理行为，而不要求把每个中间步骤写出来。<br>
  [论文](https://arxiv.org/abs/2411.04282) · [代码](https://github.com/SalesforceAIResearch/LaTRO)

- **[Uncovering Latent Chain of Thought Vectors in Language Models](https://arxiv.org/abs/2409.14026)**<br>
  Jason Zhang, Scott Viteri · *arXiv 2024*<br>
  提取与思维链行为相关的激活方向，并用它在不依赖自然语言提示的情况下引导推理。<br>
  [论文](https://arxiv.org/abs/2409.14026)

- **[From Explicit CoT to Implicit CoT: Learning to Internalize CoT Step by Step](https://arxiv.org/abs/2405.14838)**<br>
  Xuezhi Wang et al. · *arXiv 2024*<br>
  在训练中逐步移除显式推理步骤，使其功能被模型内部的隐式计算吸收。<br>
  [论文](https://arxiv.org/abs/2405.14838)

- **[Let’s Think Dot by Dot: Hidden Computation in Transformer Language Models](https://arxiv.org/abs/2404.15758)**<br>
  Jacob Pfau et al. · *COLM 2024*<br>
  使用语义为空的填充 token 为 Transformer 提供额外计算步，而无需生成语言化推理过程。<br>
  [论文](https://arxiv.org/abs/2404.15758) · [代码](https://github.com/JacobPfau/fillerTokens)

</details>

[↑ 返回目录](#complete-catalog)

## 整理方式

- 论文链接优先使用 arXiv、OpenReview、正式会议论文页或作者项目主页。
- 代码和模型链接只收录作者或项目方公开的版本。
- 日期以论文首次公开时间为准；会议状态随公开信息更新。
- 短评均为原创概述，不直接复制论文摘要。
- Loop Transformer 核心路线尽量完整；范围更大的广义潜在推理只选代表性工作。
- Agent 工作流、重复调用完整模型的 API 流程，以及无关的普通序列循环不在核心范围内。

<a id="contributing"></a>

## 参与贡献

欢迎[推荐论文](https://github.com/Mrkkew/Awesome-Loop-Transformers/issues/new?template=paper-suggestion.yml)、[反馈错误](https://github.com/Mrkkew/Awesome-Loop-Transformers/issues/new?template=correction.yml)，或按照[贡献指南](CONTRIBUTING.md)提交 Pull Request。中英文均可。

---

CC BY 4.0 · Maintained by [Yulin Li](https://github.com/Mrkkew/Awesome-Loop-Transformers) · 数据源：[lib/papers.ts](lib/papers.ts) · 机器可读数据：[data/papers.json](data/papers.json) · [引用信息](CITATION.cff)
