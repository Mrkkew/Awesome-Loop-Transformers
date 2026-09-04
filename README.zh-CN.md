<!-- This file is generated from lib/papers.ts. Edit the data source, then run npm run readme. -->
# Awesome Loop Transformers

**中文** | [English](README.md)

[![Curated papers](https://img.shields.io/badge/curated-81%20works-d8ff55?style=flat-square&labelColor=181814)](https://github.com/Mrkkew/Awesome-Loop-Transformers)
[![Link check](https://img.shields.io/github/actions/workflow/status/Mrkkew/Awesome-Loop-Transformers/links.yml?style=flat-square&label=links)](https://github.com/Mrkkew/Awesome-Loop-Transformers/actions/workflows/links.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-2b59ff?style=flat-square)](LICENSE)

> 经过链接核验、按综述方式组织的循环与递归深度 Transformer 图谱，并扩展收录广义潜在推理工作。

**最近调研更新:** 2026-09-04  
**收录数量:** 81 篇 2024 年以来的工作 · 86 篇（含基础工作）

## 收录范围

主目录聚焦在一次前向过程中沿深度重复使用 Transformer 层、模块或层栈的模型。另设明确标注的 **广义潜在推理** 板块，收录 Coconut、HRM、TRM、隐式 CoT 等具有共同目标的工作：它们都在学习到的隐状态中进行多步计算，但不一定采用循环 Transformer。

## 综述分类

| 方向 | 关注问题 |
| --- | --- |
| **基础与理论** | 表达能力、可编程性、上下文优化、长度泛化与深度泛化。 |
| **架构与扩展** | 权重共享、循环核心、MoE、多分辨率设计与扩展规律。 |
| **潜在推理** | 测试时深度、静默多步计算、Huginn、Ouro 与潜在 CoT。 |
| **自适应计算** | Token 路由、学习式停止、提前退出与预算条件深度。 |
| **训练与机制分析** | 优化、稳定性、残差缩放、不动点与机制研究。 |
| **系统与应用** | 服务系统、KV 内存、并行循环、代码、多模态、机器人与工具调用。 |
| **广义潜在推理** | 连续思维、隐式 CoT、层次循环、HRM 与 TRM。 |

## 核心必读

- **[Adaptive Computation Time for Recurrent Neural Networks](https://arxiv.org/abs/1603.08983)** — 提出可微分的停止机制，使循环模型能够针对不同输入动态分配计算步数。
- **[Universal Transformers](https://arxiv.org/abs/1807.03819)** — 奠定深度循环 Transformer 的经典形式：共享变换反复更新各 token，并可结合自适应停止。
- **[Deep Equilibrium Models](https://arxiv.org/abs/1909.01377)** — 把无限深的权重共享网络视为不动点系统，为显式展开循环提供隐式深度的对应框架。
- **[Looped Transformers as Programmable Computers](https://proceedings.mlr.press/v202/giannou23a.html)** — 构造可在循环中执行迭代程序的常数规模 Transformer 块，明确展示循环深度的计算能力。
- **[Looped Transformers are Better at Learning Learning Algorithms](https://openreview.net/forum?id=HHbRxoDTxE)** — 表明小型共享 Transformer 经多次循环后可以学习迭代式上下文拟合算法，并显著减少参数量。
- **[Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach](https://arxiv.org/abs/2502.05171)** — 把循环深度扩展到 35 亿参数、8000 亿 token 的语言模型，并显示增加测试时循环可在不生成更多 token 的情况下增强推理。
- **[Scaling Latent Reasoning via Looped Language Models](https://arxiv.org/abs/2510.25741)** — 提出 Ouro 预训练循环语言模型，以熵正则进行深度分配，并把循环深度作为独立的扩展维度研究。
- **[Training Large Language Models to Reason in a Continuous Latent Space](https://arxiv.org/abs/2412.06769)** — Coconut 把生成的隐藏状态直接作为下一步输入嵌入，形成可同时承载多个候选路径的连续思维链。
- **[Hierarchical Reasoning Model](https://arxiv.org/abs/2506.21734)** — 使用工作在不同时间尺度的两个循环模块，以紧凑的非 Transformer 推理器解决高难符号任务。
- **[Less is More: Recursive Reasoning with Tiny Networks](https://arxiv.org/abs/2510.04871)** — 提出 Tiny Recursive Model：不依赖 Transformer 主干，用极小循环网络反复改进结构化推理问题的答案。

## 完整目录

### 基础与理论

<details open>
<summary><strong>2026</strong> · 2 篇</summary>

- **Looped Transformers with Layer Normalization Provably Learn the Power Method** — Lyumin Wu, Chenyang Zhang, Yuan Cao. *arXiv 2026*.  
  证明梯度下降会选择一种带 LayerNorm 的循环解，使每次注意力调用对应一次幂迭代。  
  [论文](https://arxiv.org/abs/2606.00605)

- **Stability and Generalization in Looped Transformers** — Asher Labovich. *arXiv 2026*.  
  刻画回忆连接与归一化如何影响可达、依赖输入的不动点及深度泛化。  
  [论文](https://arxiv.org/abs/2604.15259) · [代码](https://github.com/ashlab11/generalization)

</details>

<details open>
<summary><strong>2025</strong> · 3 篇</summary>

- **To CoT or To Loop? A Formal Comparison Between Chain-of-Thought and Looped Transformers** — Kevin Xu, Issei Sato. *arXiv 2025*.  
  形式化区分两种计算扩展方式：循环更擅长并行确定性计算，而随机 CoT 在部分自归约问题上更有优势。  
  [论文](https://arxiv.org/abs/2505.19245)

- **A Little Depth Goes a Long Way: The Expressive Power of Log-Depth Transformers** — William Merrill, Ashish Sabharwal. *ICLR 2025*.  
  证明共享模块只需随输入长度对数级展开，就能识别正则语言并解决超出固定深度能力边界的图连通问题。  
  [论文](https://openreview.net/forum?id=njycONK0JG)

- **Transformers Learn to Implement Multi-step Gradient Descent with Chain of Thought** — Jianhao Huang, Zixuan Wang, Jason D. Lee. *arXiv 2025*.  
  分析 CoT 训练如何诱导多步上下文梯度下降，并用同一套理论工具说明循环带来的性能提升。  
  [论文](https://arxiv.org/abs/2502.21212)

</details>

<details open>
<summary><strong>2024</strong> · 5 篇</summary>

- **Bypassing the Exponential Dependency: Looped Transformers Efficiently Learn In-context by Multi-step Gradient Descent** — Bo Chen et al.. *arXiv 2024*.  
  证明线性循环 Transformer 能用多步梯度下降完成上下文学习，而不需要指数数量的示例。  
  [论文](https://arxiv.org/abs/2410.11268)

- **Can Looped Transformers Learn to Implement Multi-step Gradient Descent for In-context Learning?** — Khashayar Gatmiry et al.. *arXiv 2024*.  
  从可表达性推进到可学习性分析：总体风险最优解与梯度流会学习适应数据分布的多步预条件梯度法。  
  [论文](https://arxiv.org/abs/2410.08292)

- **On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding** — Kevin Xu, Issei Sato. *ICML 2025*.  
  推导循环 Transformer 的逼近保证与特有瓶颈，并用时间步条件调制让共享块在不同循环中产生差异化行为。  
  [论文](https://proceedings.mlr.press/v267/xu25x.html) · [代码](https://github.com/kevin671/tmlt)

- **Looped Transformers for Length Generalization** — Ying Fan et al.. *ICLR 2025*.  
  训练解码器式循环 Transformer 让循环次数随问题长度变化，从而在迭代算法任务上获得更强的长度外推。  
  [论文](https://openreview.net/forum?id=2edigk8yoU) · [代码](https://github.com/UW-Madison-Lee-Lab/looped-tf)

- **Simulation of Graph Algorithms with Looped Transformers** — Artur Back de Luca, Kimon Fountoulakis. *arXiv 2024*.  
  构造可在任意规模图上执行最短路、遍历和连通性算法的循环 Transformer，并明确讨论有限精度带来的限制。  
  [论文](https://arxiv.org/abs/2402.01107) · [代码](https://github.com/watcl-lab/graphalgosimulation)

</details>

<details>
<summary><strong>2023</strong> · 2 篇</summary>

- **Looped Transformers are Better at Learning Learning Algorithms** — Liu Yang et al.. *ICLR 2024*.  
  表明小型共享 Transformer 经多次循环后可以学习迭代式上下文拟合算法，并显著减少参数量。  
  [论文](https://openreview.net/forum?id=HHbRxoDTxE) · [代码](https://github.com/Leiay/looped_transformer)

- **Looped Transformers as Programmable Computers** — Angeliki Giannou et al.. *ICML 2023*.  
  构造可在循环中执行迭代程序的常数规模 Transformer 块，明确展示循环深度的计算能力。  
  [论文](https://proceedings.mlr.press/v202/giannou23a.html) · [代码](https://github.com/jysohn1108/Looped-Transformer)

</details>

<details>
<summary><strong>2019</strong> · 1 篇</summary>

- **Deep Equilibrium Models** — Shaojie Bai, J. Zico Kolter, Vladlen Koltun. *NeurIPS 2019*.  
  把无限深的权重共享网络视为不动点系统，为显式展开循环提供隐式深度的对应框架。  
  [论文](https://arxiv.org/abs/1909.01377) · [代码](https://github.com/locuslab/deq)

</details>

<details>
<summary><strong>2018</strong> · 1 篇</summary>

- **Universal Transformers** — Mostafa Dehghani et al.. *ICLR 2019*.  
  奠定深度循环 Transformer 的经典形式：共享变换反复更新各 token，并可结合自适应停止。  
  [论文](https://arxiv.org/abs/1807.03819) · [代码](https://github.com/tensorflow/tensor2tensor)

</details>

<details>
<summary><strong>2016</strong> · 1 篇</summary>

- **Adaptive Computation Time for Recurrent Neural Networks** — Alex Graves. *arXiv 2016*.  
  提出可微分的停止机制，使循环模型能够针对不同输入动态分配计算步数。  
  [论文](https://arxiv.org/abs/1603.08983)

</details>

### 架构与扩展

<details open>
<summary><strong>2026</strong> · 10 篇</summary>

- **SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers** — Shaowen Wang et al.. *arXiv 2026*.  
  在同时匹配 FLOPs、非嵌入参数量和 KV 缓存的条件下评估循环 MoE，区分架构收益与额外计算收益。  
  [论文](https://arxiv.org/abs/2609.01343)

- **Allocating Recurrent Compute in Looped Language Models** — Ruhai Lin et al.. *arXiv 2026*.  
  追问究竟哪些子层应循环，发现只重复序列混合器可保留大量循环收益，而无需每轮都执行 FFN。  
  [论文](https://arxiv.org/abs/2608.18230)

- **Gated Recurrent Transformers: Expressive Depth through Recurrent Modulation** — Amr Hegazy et al.. *arXiv 2026*.  
  用学习到的更新门和逐步噪声调制共享循环核心，使同一模块在不同循环中形成专门化。  
  [论文](https://arxiv.org/abs/2608.15062)

- **Loop the Loopies!** — Zitian Gao et al.. *arXiv 2026*.  
  提出大规模循环 MoE 配方，把参数内存节省重新投入训练，并与计算匹配的稀疏基线比较。  
  [论文](https://arxiv.org/abs/2607.16051)

- **LoopMoE: Unifying Iterative Computation with Mixture-of-Experts for Language Modeling** — Wenkai Chen et al.. *arXiv 2026*.  
  把共享计算的重复迭代与稀疏专家路由结合，同时追求迭代细化与可扩展参数容量。  
  [论文](https://arxiv.org/abs/2606.04438)

- **LoopUS: Recasting Pretrained LLMs into Looped Latent Refinement Models** — Taekhyun Park et al.. *arXiv 2026*.  
  把现有预训练大模型改造成循环隐空间细化模型，避免完全从头训练循环深度。  
  [论文](https://arxiv.org/abs/2605.11011) · [代码](https://github.com/Thrillcrazyer/LoopUS) · [主页](https://thrillcrazyer.github.io/LoopUS)

- **Sparse Layers are Critical to Scaling Looped Language Models** — Ryan Lee et al.. *arXiv 2026*.  
  发现稀疏容量对循环语言模型扩展尤为关键，可改善质量—内存权衡及提前退出表现。  
  [论文](https://arxiv.org/abs/2605.09165)

- **How Much Is One Recurrence Worth? Iso-Depth Scaling Laws for Looped Language Models** — Kristian Schwethelm et al.. *arXiv 2026*.  
  在匹配有效深度与训练计算的条件下，量化重复层相对于独立层的性能价值。  
  [论文](https://arxiv.org/abs/2604.21106) · [代码](https://github.com/kschwethelm/looped-lm-scaling)

- **SpiralFormer: Looped Transformers Can Learn Hierarchical Dependencies via Multi-Resolution Recursion** — Chengting Yu et al.. *arXiv 2026*.  
  在多种序列分辨率上执行递归，把分辨率变成高效层次计算的新维度。  
  [论文](https://arxiv.org/abs/2602.11698)

- **Depth-Recurrent Attention Mixtures: Giving Latent Reasoning the Attention it Deserves** — Jonas Knupp et al.. *arXiv 2026*.  
  在保留循环核心的同时，为不同重复深度提供更丰富的注意力变换。  
  [论文](https://arxiv.org/abs/2601.21582)

</details>

<details open>
<summary><strong>2025</strong> · 2 篇</summary>

- **Teaching Pretrained Language Models to Think Deeper with Retrofitted Recurrence** — Sean McLeish et al.. *arXiv 2025*.  
  通过继续训练把稠密预训练模型改造成循环深度模型，检验能否在预训练后补装循环推理能力。  
  [论文](https://arxiv.org/abs/2511.07384) · [代码](https://github.com/mcleish7/retrofitting-recurrence)

- **Two-Scale Latent Dynamics for Recurrent-Depth Transformers** — Francesco Pappone et al.. *arXiv 2025*.  
  引入快慢两种隐状态动力学，让循环深度模型分离局部细化与长程状态演化。  
  [论文](https://arxiv.org/abs/2509.23314)

</details>

<details open>
<summary><strong>2024</strong> · 3 篇</summary>

- **Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA** — Sangmin Bae et al.. *ICLR 2025*.  
  把预训练 Transformer 折叠为重复块，再用轻量 LoRA 恢复层间差异，并提出连续深度批处理的设想。  
  [论文](https://openreview.net/forum?id=WwpYSOkkCt)

- **MoEUT: Mixture-of-Experts Universal Transformers** — Róbert Csordás et al.. *NeurIPS 2024*.  
  在 Universal Transformer 中加入稀疏专家与改进的循环机制，缩小其与常规语言模型的性能差距。  
  [论文](https://proceedings.neurips.cc/paper_files/paper/2024/hash/321387ba926b8e58d3591c0aeb52ffc2-Abstract-Conference.html) · [代码](https://github.com/robertcsordas/moeut)

- **AlgoFormer: An Efficient Transformer Framework with Algorithmic Structures** — Yihang Gao et al.. *TMLR 2025*.  
  用任务相关的前后处理模块包围可复用的中间循环块，把迭代算法先验注入 Transformer。  
  [论文](https://openreview.net/forum?id=oYP2Pd5aQt) · [代码](https://github.com/chuanyang-Zheng/Algoformer)

</details>

### 潜在推理

<details open>
<summary><strong>2026</strong> · 2 篇</summary>

- **Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers** — Ying Fan, Anej Svete, Kangwook Lee. *arXiv 2026*.  
  LOTUS 用显式推理步骤并行监督潜变量，使循环隐推理更接近 CoT 质量，同时降低思考阶段延迟。  
  [论文](https://arxiv.org/abs/2606.31779)

- **Thinking Deeper, Not Longer: Depth-Recurrent Transformers for Compositional Generalization** — Hung-Hsuan Chen. *arXiv 2026*.  
  检验循环隐空间深度能否比更长的显式推理文本更好地提升分布外系统组合能力。  
  [论文](https://arxiv.org/abs/2603.21676)

</details>

<details open>
<summary><strong>2025</strong> · 3 篇</summary>

- **Scaling Latent Reasoning via Looped Language Models** — Rui-Jie Zhu et al.. *arXiv 2025*.  
  提出 Ouro 预训练循环语言模型，以熵正则进行深度分配，并把循环深度作为独立的扩展维度研究。  
  [论文](https://arxiv.org/abs/2510.25741) · [主页](https://ouro-llm.github.io/)

- **Reasoning with Latent Thoughts: On the Power of Looped Transformers** — Nikunj Saunshi et al.. *ICLR 2025*.  
  从理论与实验上连接循环和隐空间多步推理，指出有效计算深度可能比独立参数层数更关键。  
  [论文](https://openreview.net/forum?id=din0lGfZFd)

- **Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach** — Jonas Geiping et al.. *NeurIPS 2025*.  
  把循环深度扩展到 35 亿参数、8000 亿 token 的语言模型，并显示增加测试时循环可在不生成更多 token 的情况下增强推理。  
  [论文](https://arxiv.org/abs/2502.05171) · [代码](https://github.com/seal-rg/recurrent-pretraining) · [主页](https://huggingface.co/tomg-group-umd/huginn-0125)

</details>

### 自适应计算

<details open>
<summary><strong>2026</strong> · 5 篇</summary>

- **Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping** — Hsun-Yu Kuo et al.. *arXiv 2026*.  
  随机化训练监督的停止深度并学习何时停止，降低长度泛化对单一训练循环数的敏感性。  
  [论文](https://arxiv.org/abs/2606.29983)

- **Fixed-Point Reasoners: Stable and Adaptive Deep Looped Transformers** — Sajad Movahedi et al.. *arXiv 2026*.  
  围绕稳定吸引子训练深循环 Transformer，使推理可依据收敛而非固定迭代次数停止。  
  [论文](https://arxiv.org/abs/2606.18206) · [代码](https://github.com/nilskiKonjIzDunava/fprm)

- **Skip a Layer or Loop It? Learning Program-of-Layers in LLMs** — Ziyue Li, Yang Li, Tianyi Zhou. *ICML 2026*.  
  学习由输入条件决定的层程序，可在预训练 Transformer 层栈中顺序执行、跳过或回访模块。  
  [论文](https://arxiv.org/abs/2606.06574) · [代码](https://github.com/tianyi-lab/PoLar)

- **AdaPonderLM: Gated Pondering Language Models with Token-Wise Adaptive Depth** — Shixiang Song et al.. *arXiv 2026*.  
  学习 token 级思考门控，使共享语言模型块能让简单 token 提前停止、困难 token 继续细化。  
  [论文](https://arxiv.org/abs/2603.01914)

- **LoopFormer: Elastic-Depth Looped Transformers for Latent Reasoning via Shortcut Modulation** — Ahmadreza Jeddi et al.. *ICLR 2026*.  
  约束不同长度的循环轨迹保持一致，使同一模型能在多种推理预算下平滑工作。  
  [论文](https://openreview.net/forum?id=RzYXb5YWBs) · [代码](https://github.com/armenjeddi/loopformer) · [主页](https://loopformer.github.io/)

</details>

<details open>
<summary><strong>2025</strong> · 3 篇</summary>

- **Think-at-Hard: Selective Latent Iterations to Improve Reasoning Language Models** — Tianyu Fu et al.. *ICML 2026*.  
  分析 Ouro 的额外循环在何处有效，并把循环计算选择性投入更困难的 token 或推理阶段。  
  [论文](https://openreview.net/forum?id=eQaJSRZiGn) · [代码](https://github.com/thu-nics/TaH)

- **Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation** — Sangmin Bae et al.. *NeurIPS 2025*.  
  在共享 Transformer 层栈中为每个 token 学习递归深度，把参数复用与 token 级稀疏计算结合起来。  
  [论文](https://arxiv.org/abs/2507.10524) · [代码](https://github.com/raymin0223/mixture_of_recursions)

- **Skip a Layer or Loop it? Test-Time Depth Adaptation of Pretrained LLMs** — Ziyue Li, Yang Li, Tianyi Zhou. *arXiv 2025*.  
  研究预训练大模型在推理时跳过或重复层，把既有层栈视为可调整的深度程序而非固定路径。  
  [论文](https://arxiv.org/abs/2507.07996)

</details>

### 训练与机制分析

<details open>
<summary><strong>2026</strong> · 9 篇</summary>

- **Think Shallow, Solve Deep: Controlling Recurrent Dynamics for Reliable Test-Time Depth** — Ivan Viakhirev et al.. *arXiv 2026*.  
  分类循环动力学，并引入终端不动点目标，使额外测试时深度更安全可靠。  
  [论文](https://arxiv.org/abs/2608.18222)

- **LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction** — Behzad Shomali et al.. *arXiv 2026*.  
  让每轮状态对齐更远的未来 token，以密集监督减少无方向的隐状态细化与过度思考。  
  [论文](https://arxiv.org/abs/2608.03624)

- **DeepLoop: Depth Scaling for Looped Transformers** — Shuzhen Li et al.. *arXiv 2026*.  
  依据共享参数被访问的次数推导残差初始化规则，稳定深度展开的 Post-LN 循环 Transformer。  
  [论文](https://arxiv.org/abs/2607.13491) · [代码](https://github.com/lszshu/DeepLoop)

- **On the Residual Scaling of Looped Transformers: Stability and Transferability** — Shaowen Wang et al.. *arXiv 2026*.  
  指出权重重复造成的相关更新会改变残差增长规律，并推导支持稳定深度与超参数迁移的循环感知缩放。  
  [论文](https://arxiv.org/abs/2606.18524)

- **Stabilizing Recurrent Dynamics for Test-Time Scalable Latent Reasoning in Looped Language Models** — Xiao-Wen Yang et al.. *ICML 2026*.  
  在训练中采样循环深度并正则化循环 Jacobian，目标是在推理循环超过训练范围时仍能稳定提升。  
  [论文](https://arxiv.org/abs/2605.26733) · [代码](https://github.com/njuyxw/STARS)

- **Simply Stabilizing the Loop via Fully Looped Transformer** — Rao Fu et al.. *arXiv 2026*.  
  研究全循环架构与简化稳定方案，旨在规避部分循环设计中的脆弱动力学。  
  [论文](https://arxiv.org/abs/2605.18797) · [代码](https://github.com/FuRuF-11/FullyLoopedTransformer)

- **Parcae: Scaling Laws For Stable Looped Language Models** — Hayden Prairie et al.. *ICLR 2026 LIT Workshop*.  
  从循环动力系统角度诊断残差不稳定，并约束注入算子以获得更可预测的训练和测试时扩展。  
  [论文](https://arxiv.org/abs/2604.12946)

- **A Mechanistic Analysis of Looped Reasoning Language Models** — Hugh Blayney et al.. *arXiv 2026*.  
  跟踪 Ouro、Huginn 等模型的循环表示，识别反复出现的推理阶段与收敛模式。  
  [论文](https://arxiv.org/abs/2604.11791)

- **Understanding Dynamic Compute Allocation in Recurrent Transformers** — Ibraheem Muhammad Moosa et al.. *arXiv 2026*.  
  用受控算法任务衡量 token 级动态深度是否对应难度，以及路由策略能否外推。  
  [论文](https://arxiv.org/abs/2602.08864)

</details>

<details open>
<summary><strong>2025</strong> · 2 篇</summary>

- **What Makes Looped Transformers Perform Better Than Non-Recursive Ones (Provably)** — Zixuan Gong et al.. *arXiv 2025*.  
  从损失景观几何解释循环注意力的优化优势，并据此提出分阶段训练方法。  
  [论文](https://arxiv.org/abs/2510.10089)

- **Latent Chain-of-Thought? Decoding the Depth-Recurrent Transformer** — Wenquan Lu et al.. *COLM 2025 Workshop*.  
  沿 Huginn 的循环步探测隐藏状态，检验其轨迹是否形成可解码的潜在思维链。  
  [论文](https://openreview.net/forum?id=roIQdXMuEj) · [代码](https://github.com/wenquanlu/huginn-latent-cot)

</details>

### 系统与应用

<details open>
<summary><strong>2026</strong> · 11 篇</summary>

- **Recirculation** — Michael C. Mozer et al.. *arXiv 2026*.  
  在冻结基础模型的预填充阶段加入一种不同于常规深度循环的递归，改善信念状态跟踪且不增加生成阶段延迟。  
  [论文](https://arxiv.org/abs/2608.17981)

- **Looped Language Models Improve Compositional Tool Calling** — Andrei Cristian Popescu et al.. *arXiv 2026*.  
  在工具调用任务上评估循环深度，发现其收益主要出现在具有组合或依赖结构的调用中。  
  [论文](https://arxiv.org/abs/2608.18171)

- **Depth-Adaptive Inference of Looped Language Models via Continuous Depth Batching** — Kristian Schwethelm et al.. *arXiv 2026*.  
  把可变循环深度变成服务系统原语，持续批处理在不同循环次数进入和退出的样本。  
  [论文](https://arxiv.org/abs/2608.09444)

- **Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers** — James O'Neill, Fergal Reid. *arXiv 2026*.  
  把不同循环中的 K/V 轨迹压缩到紧凑隐表示中，以提高循环模型的服务容量。  
  [论文](https://arxiv.org/abs/2607.15456)

- **LoopCoder: Scaling Code Intelligence via Looped Language Models** — Jian Yang et al.. *Findings of ACL 2026*.  
  把循环式预训练与后训练扩展到总参数 400 亿、激活参数 80 亿的代码模型，并用稠密到循环初始化增强稳定性。  
  [论文](https://aclanthology.org/2026.findings-acl.796/) · [代码](https://github.com/CSJianYang/LoopCoder)

- **LoopCoder-v2: Only Loop Once for Efficient Test-Time Computation Scaling** — Jian Yang et al.. *arXiv 2026*.  
  在 70 亿规模比较并行循环次数，发现收益并不单调：一次重复已获得主要提升，更多循环会受位置错配影响。  
  [论文](https://arxiv.org/abs/2606.18023) · [代码](https://github.com/CSJianYang/LoopCoder)

- **Training-Free Looped Transformers** — Lizhang Chen et al.. *arXiv 2026*.  
  在推理时把冻结的中间层作为阻尼数值细化步骤循环，显示某些循环能力可在无需训练时加入。  
  [论文](https://arxiv.org/abs/2605.23872)

- **LT2: Linear-Time Looped Transformers** — Chunyuan Deng et al.. *arXiv 2026*.  
  把循环深度与线性时间序列混合结合，避免长上下文注意力开销随循环次数成倍增加。  
  [论文](https://arxiv.org/abs/2605.20670)

- **Memory-Efficient Looped Transformer: Decoupling Compute from Memory in Looped Language Models** — Victor Conchello Vendrell et al.. *arXiv 2026*.  
  重构循环推理，使增加循环计算不再要求中间状态存储按比例增长。  
  [论文](https://arxiv.org/abs/2605.07721)

- **Looping Back to Move Forward: Recursive Transformers for Efficient and Flexible Large Multimodal Models** — Ruihan Xu et al.. *arXiv 2026*.  
  构建多模态递归 Transformer，通过模态感知的状态对齐和逐轮监督推动性能随循环改善。  
  [论文](https://arxiv.org/abs/2602.09080)

- **Recurrent-Depth VLA: Implicit Test-Time Compute Scaling of Vision-Language-Action Models via Latent Iterative Reasoning** — Yalcin Tur et al.. *arXiv 2026*.  
  把循环深度的隐空间细化用于视觉—语言—动作策略，使推理计算可扩展而无需生成更长动作轨迹。  
  [论文](https://arxiv.org/abs/2602.07845) · [代码](https://github.com/rd-vla/rd-vla) · [主页](https://rd-vla.github.io/)

</details>

<details open>
<summary><strong>2025</strong> · 1 篇</summary>

- **Parallel Loop Transformer for Efficient Test-Time Computation Scaling** — Bohong Wu et al.. *arXiv 2025*.  
  重组循环迭代以释放并行性，降低传统循环深度带来的串行延迟与缓存增长。  
  [论文](https://arxiv.org/abs/2510.24824)

</details>

### 广义潜在推理

<details open>
<summary><strong>2025</strong> · 14 篇</summary>

- **Learning When to Stop: Adaptive Latent Reasoning via Reinforcement Learning** — Alex Ning et al.. *arXiv 2025*.  
  为潜在推理优化停止策略，显式权衡连续推理长度与答案准确率。  
  [论文](https://arxiv.org/abs/2511.21581) · [代码](https://github.com/apning/adaptive-latent-reasoning)

- **LLM Latent Reasoning as Chain of Superposition** — Jingcheng Deng et al.. *arXiv 2025*.  
  把潜在思维限制在词表空间的叠加表示中，为隐空间增加结构并建立返回显式 token 的直接桥梁。  
  [论文](https://arxiv.org/abs/2510.15522)

- **Less is More: Recursive Reasoning with Tiny Networks** — Alexia Jolicoeur-Martineau. *arXiv 2025*.  
  提出 Tiny Recursive Model：不依赖 Transformer 主干，用极小循环网络反复改进结构化推理问题的答案。  
  [论文](https://arxiv.org/abs/2510.04871) · [代码](https://github.com/SamsungSAILMontreal/TinyRecursiveModels)

- **SIM-CoT: Supervised Implicit Chain-of-Thought** — InternLM Team. *arXiv 2025*.  
  利用显式思维链轨迹派生的监督信号训练隐式推理状态。  
  [论文](https://arxiv.org/abs/2509.20317) · [代码](https://github.com/InternLM/SIM-CoT)

- **SynAdapt: Learning Adaptive Reasoning in Large Language Models via Synthetic Continuous Chain-of-Thought** — Jianwei Wang et al.. *arXiv 2025*.  
  构造合成连续思维监督目标，并仅在学习到的难度信号判定问题较难时追加推理。  
  [论文](https://arxiv.org/abs/2508.00574)

- **A Survey on Latent Reasoning** — Rui-Jie Zhu et al.. *arXiv 2025*.  
  系统梳理激活循环、隐藏状态传递、压缩推理与隐式深度等更广泛的潜在推理路线。  
  [论文](https://arxiv.org/abs/2507.06203) · [代码](https://github.com/multimodal-art-projection/LatentCoT-Horizon)

- **Hierarchical Reasoning Model** — Guan Wang et al.. *arXiv 2025*.  
  使用工作在不同时间尺度的两个循环模块，以紧凑的非 Transformer 推理器解决高难符号任务。  
  [论文](https://arxiv.org/abs/2506.21734) · [代码](https://github.com/sapientinc/HRM)

- **Parallel Continuous Chain-of-Thought with Jacobi Iteration** — Zhenyu Zhang et al.. *arXiv 2025*.  
  使用 Jacobi 式更新并行细化多个连续思维位置，而不是串行生成推理文本。  
  [论文](https://arxiv.org/abs/2506.18582) · [代码](https://github.com/whyNLP/PCCoT)

- **Pretraining Language Models to Ponder in Continuous Space** — Yuhang Zang et al.. *arXiv 2025*.  
  把连续思考纳入预训练，使隐空间推理成为原生能力，而不是只在任务微调阶段加入。  
  [论文](https://arxiv.org/abs/2505.20674) · [代码](https://github.com/LUMIA-Group/PonderingLM)

- **Hybrid Latent Reasoning via Reinforcement Learning** — Zhenrui Yue et al.. *NeurIPS 2025*.  
  用强化学习融合采样 token 和先前隐藏状态，在保留离散生成的同时引入隐空间计算。  
  [论文](https://arxiv.org/abs/2505.18454) · [代码](https://github.com/Yueeeeeeee/HRPO)

- **Soft Thinking: Unlocking the Reasoning Potential of LLMs in Continuous Concept Space** — Yuhui Xu et al.. *arXiv 2025*.  
  把词表上的软分布作为连续概念表示传递，避免每一步都过早确定为单个离散推理 token。  
  [论文](https://arxiv.org/abs/2505.15778) · [代码](https://github.com/eric-ai-lab/Soft-Thinking)

- **CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation** — Zhengyu Chen et al.. *arXiv 2025*.  
  通过自蒸馏把显式推理压入连续隐藏轨迹，使模型用更少的解码 token 完成推理。  
  [论文](https://arxiv.org/abs/2502.21074) · [代码](https://github.com/zhenyi4/codi)

- **Token Assorted: Mixing Latent and Text Tokens for Improved Language Model Reasoning** — Jiaxin Huang et al.. *ICML 2025*.  
  交错使用连续潜 token 与普通文本 token，探索静默推理和显式推理之间的混合媒介。  
  [论文](https://arxiv.org/abs/2502.03275)

- **Efficient Reasoning with Hidden Thinking** — Huanjin Yao et al.. *arXiv 2025*.  
  学习紧凑的隐藏推理状态，替代部分显式思维链并尽量保持答案质量。  
  [论文](https://arxiv.org/abs/2501.19201) · [代码](https://github.com/shawnricecake/Heima)

</details>

<details open>
<summary><strong>2024</strong> · 6 篇</summary>

- **Compressed Chain of Thought: Efficient Reasoning through Dense Representations** — Zhiyuan Deng et al.. *arXiv 2024*.  
  把较长的文本推理轨迹压缩成更少的稠密表示，以降低自回归推理成本。  
  [论文](https://arxiv.org/abs/2412.13171)

- **Training Large Language Models to Reason in a Continuous Latent Space** — Shibo Hao et al.. *COLM 2025*.  
  Coconut 把生成的隐藏状态直接作为下一步输入嵌入，形成可同时承载多个候选路径的连续思维链。  
  [论文](https://arxiv.org/abs/2412.06769) · [代码](https://github.com/facebookresearch/coconut)

- **Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding** — Zayne Sprague et al.. *arXiv 2024*.  
  利用模型自生成的偏好信号优化隐式推理行为，而不要求把每个中间步骤写出来。  
  [论文](https://arxiv.org/abs/2411.04282) · [代码](https://github.com/SalesforceAIResearch/LaTRO)

- **Uncovering Latent Chain of Thought Vectors in Language Models** — Jason Zhang, Scott Viteri. *arXiv 2024*.  
  提取与思维链行为相关的激活方向，并用它在不依赖自然语言提示的情况下引导推理。  
  [论文](https://arxiv.org/abs/2409.14026)

- **From Explicit CoT to Implicit CoT: Learning to Internalize CoT Step by Step** — Xuezhi Wang et al.. *arXiv 2024*.  
  在训练中逐步移除显式推理步骤，使其功能被模型内部的隐式计算吸收。  
  [论文](https://arxiv.org/abs/2405.14838)

- **Let’s Think Dot by Dot: Hidden Computation in Transformer Language Models** — Jacob Pfau et al.. *COLM 2024*.  
  使用语义为空的填充 token 为 Transformer 提供额外计算步，而无需生成语言化推理过程。  
  [论文](https://arxiv.org/abs/2404.15758) · [代码](https://github.com/JacobPfau/fillerTokens)

</details>

## 链接核验与编辑规范

- 每个论文链接必须指向 arXiv、OpenReview、正式会议论文页或作者官方项目页。
- 代码和模型链接只有在确认来自作者或官方项目时才会收录。
- 日期采用首次公开时间；会议状态采用本次快照中能够确认的最新状态。
- 所有短评均为原创编辑概述，不复制论文摘要。
- Agent 循环、重复调用完整模型的 API 流程，以及与潜在推理无直接关系的普通序列循环不属于核心范围。

## 参与贡献

欢迎修正信息或补充论文。请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，并提供论文原始链接及其循环或潜在推理机制的依据。

---

CC BY 4.0 · Maintained by [Mrkkew](https://github.com/Mrkkew/Awesome-Loop-Transformers) · Data source: [lib/papers.ts](lib/papers.ts)
