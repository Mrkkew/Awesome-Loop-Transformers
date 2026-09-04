<!-- This file is generated from lib/papers.ts. Edit the data source, then run npm run readme. -->
# Awesome Loop Transformers

[中文](README.zh-CN.md) | **English**

[![Curated papers](https://img.shields.io/badge/curated-81%20works-d8ff55?style=flat-square&labelColor=181814)](https://github.com/Mrkkew/Awesome-Loop-Transformers)
[![Link check](https://img.shields.io/github/actions/workflow/status/Mrkkew/Awesome-Loop-Transformers/links.yml?style=flat-square&label=links)](https://github.com/Mrkkew/Awesome-Loop-Transformers/actions/workflows/links.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-2b59ff?style=flat-square)](LICENSE)

> A verified, survey-style atlas of looped and recurrent-depth Transformers, with a broader track for latent reasoning.

**Last research update:** 2026-09-04  
**Coverage:** 81 works from 2024 onward · 86 total including foundations

## What this list covers

The core catalog focuses on models that reuse a learned Transformer layer, block, or stack through depth within one forward process. A separately labeled **Broader Latent Reasoning** track covers Coconut, HRM, TRM, implicit CoT, and related work that shares the goal of multi-step computation in learned hidden states but does not necessarily use a looped Transformer.

## Survey map

| Track | Focus |
| --- | --- |
| **Foundations & Theory** | Expressivity, programmability, in-context optimization, length and depth generalization. |
| **Architectures & Scaling** | Weight sharing, recurrent cores, MoE, multi-resolution designs, and scaling laws. |
| **Latent Reasoning** | Test-time depth, silent multi-step computation, Huginn, Ouro, and latent CoT. |
| **Adaptive Compute** | Token routing, learned halting, early exit, and budget-conditioned depth. |
| **Training & Analysis** | Optimization, stability, residual scaling, fixed points, and mechanistic studies. |
| **Systems & Applications** | Serving, KV memory, parallel loops, code, multimodal, robotics, and tool use. |
| **Broader Latent Reasoning** | Continuous thoughts, implicit CoT, hierarchical recurrence, HRM, and TRM. |

## Essential reading

- **[Adaptive Computation Time for Recurrent Neural Networks](https://arxiv.org/abs/1603.08983)** — Introduces a differentiable halting mechanism that lets recurrent models spend different amounts of computation on different inputs.
- **[Universal Transformers](https://arxiv.org/abs/1807.03819)** — Establishes the canonical depth-recurrent Transformer: one shared transition repeatedly refines every token, optionally with adaptive halting.
- **[Deep Equilibrium Models](https://arxiv.org/abs/1909.01377)** — Treats infinitely deep weight-tied networks as fixed-point systems, providing an implicit-depth counterpart to explicitly unrolled loops.
- **[Looped Transformers as Programmable Computers](https://proceedings.mlr.press/v202/giannou23a.html)** — Constructs constant-size Transformer blocks that execute iterative programs when looped, making the computational role of recurrent depth explicit.
- **[Looped Transformers are Better at Learning Learning Algorithms](https://openreview.net/forum?id=HHbRxoDTxE)** — Shows that repeatedly applying a small shared Transformer can learn iterative in-context fitting algorithms with far fewer parameters than a deep untied model.
- **[Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach](https://arxiv.org/abs/2502.05171)** — Scales recurrent depth to a 3.5B-parameter, 800B-token language model and shows that extra test-time loops can improve reasoning without emitting more tokens.
- **[Scaling Latent Reasoning via Looped Language Models](https://arxiv.org/abs/2510.25741)** — Introduces Ouro, pretrained looped language models with entropy-regularized depth allocation, and studies recurrent depth as a distinct scaling direction.
- **[Training Large Language Models to Reason in a Continuous Latent Space](https://arxiv.org/abs/2412.06769)** — Coconut feeds a generated hidden state back as the next input embedding, creating a continuous chain of thought that can represent multiple candidate paths.
- **[Hierarchical Reasoning Model](https://arxiv.org/abs/2506.21734)** — Uses two recurrent modules operating at different timescales to solve difficult symbolic tasks with a compact non-Transformer reasoner.
- **[Less is More: Recursive Reasoning with Tiny Networks](https://arxiv.org/abs/2510.04871)** — Proposes the Tiny Recursive Model, a very small recurrent network that iteratively improves solutions to structured reasoning problems without a Transformer backbone.

## Complete catalog

### Foundations & Theory

<details open>
<summary><strong>2026</strong> · 2 papers</summary>

- **Looped Transformers with Layer Normalization Provably Learn the Power Method** — Lyumin Wu, Chenyang Zhang, Yuan Cao. *arXiv 2026*.  
  Proves that gradient descent selects a looped, layer-normalized solution implementing one power iteration per attention application.  
  [Paper](https://arxiv.org/abs/2606.00605)

- **Stability and Generalization in Looped Transformers** — Asher Labovich. *arXiv 2026*.  
  Characterizes how recall connections and normalization affect reachable, input-dependent fixed points and depth generalization.  
  [Paper](https://arxiv.org/abs/2604.15259) · [Code](https://github.com/ashlab11/generalization)

</details>

<details open>
<summary><strong>2025</strong> · 3 papers</summary>

- **To CoT or To Loop? A Formal Comparison Between Chain-of-Thought and Looped Transformers** — Kevin Xu, Issei Sato. *arXiv 2025*.  
  Separates the strengths of the two compute axes: loops efficiently simulate parallel deterministic computation, while stochastic CoT favors some self-reducible problems.  
  [Paper](https://arxiv.org/abs/2505.19245)

- **A Little Depth Goes a Long Way: The Expressive Power of Log-Depth Transformers** — William Merrill, Ashish Sabharwal. *ICLR 2025*.  
  Shows that a universally shared block unrolled only logarithmically with input length can recognize regular languages and solve graph connectivity beyond fixed-depth limits.  
  [Paper](https://openreview.net/forum?id=njycONK0JG)

- **Transformers Learn to Implement Multi-step Gradient Descent with Chain of Thought** — Jianhao Huang, Zixuan Wang, Jason D. Lee. *arXiv 2025*.  
  Analyzes how CoT training induces multi-step in-context gradient descent and uses the same tools to show a performance gain from looping.  
  [Paper](https://arxiv.org/abs/2502.21212)

</details>

<details open>
<summary><strong>2024</strong> · 5 papers</summary>

- **Bypassing the Exponential Dependency: Looped Transformers Efficiently Learn In-context by Multi-step Gradient Descent** — Bo Chen et al.. *arXiv 2024*.  
  Proves that linear looped Transformers can implement multi-step gradient descent for in-context learning without requiring exponentially many demonstrations.  
  [Paper](https://arxiv.org/abs/2410.11268)

- **Can Looped Transformers Learn to Implement Multi-step Gradient Descent for In-context Learning?** — Khashayar Gatmiry et al.. *arXiv 2024*.  
  Moves beyond construction results by analyzing optimization: population-risk minimizers and gradient flow learn a data-adapted multi-step preconditioned gradient method.  
  [Paper](https://arxiv.org/abs/2410.08292)

- **On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding** — Kevin Xu, Issei Sato. *ICML 2025*.  
  Derives approximation guarantees and a loop-specific limitation, then uses timestep-conditioned scaling to give repeated blocks distinct behavior.  
  [Paper](https://proceedings.mlr.press/v267/xu25x.html) · [Code](https://github.com/kevin671/tmlt)

- **Looped Transformers for Length Generalization** — Ying Fan et al.. *ICLR 2025*.  
  Trains a decoder-only looped Transformer to match iteration count to problem length, enabling strong extrapolation on iterative algorithmic tasks.  
  [Paper](https://openreview.net/forum?id=2edigk8yoU) · [Code](https://github.com/UW-Madison-Lee-Lab/looped-tf)

- **Simulation of Graph Algorithms with Looped Transformers** — Artur Back de Luca, Kimon Fountoulakis. *arXiv 2024*.  
  Constructs looped Transformers that execute shortest-path, traversal, and connectivity algorithms on arbitrary-size graphs, while making finite-precision limits explicit.  
  [Paper](https://arxiv.org/abs/2402.01107) · [Code](https://github.com/watcl-lab/graphalgosimulation)

</details>

<details>
<summary><strong>2023</strong> · 2 papers</summary>

- **Looped Transformers are Better at Learning Learning Algorithms** — Liu Yang et al.. *ICLR 2024*.  
  Shows that repeatedly applying a small shared Transformer can learn iterative in-context fitting algorithms with far fewer parameters than a deep untied model.  
  [Paper](https://openreview.net/forum?id=HHbRxoDTxE) · [Code](https://github.com/Leiay/looped_transformer)

- **Looped Transformers as Programmable Computers** — Angeliki Giannou et al.. *ICML 2023*.  
  Constructs constant-size Transformer blocks that execute iterative programs when looped, making the computational role of recurrent depth explicit.  
  [Paper](https://proceedings.mlr.press/v202/giannou23a.html) · [Code](https://github.com/jysohn1108/Looped-Transformer)

</details>

<details>
<summary><strong>2019</strong> · 1 paper</summary>

- **Deep Equilibrium Models** — Shaojie Bai, J. Zico Kolter, Vladlen Koltun. *NeurIPS 2019*.  
  Treats infinitely deep weight-tied networks as fixed-point systems, providing an implicit-depth counterpart to explicitly unrolled loops.  
  [Paper](https://arxiv.org/abs/1909.01377) · [Code](https://github.com/locuslab/deq)

</details>

<details>
<summary><strong>2018</strong> · 1 paper</summary>

- **Universal Transformers** — Mostafa Dehghani et al.. *ICLR 2019*.  
  Establishes the canonical depth-recurrent Transformer: one shared transition repeatedly refines every token, optionally with adaptive halting.  
  [Paper](https://arxiv.org/abs/1807.03819) · [Code](https://github.com/tensorflow/tensor2tensor)

</details>

<details>
<summary><strong>2016</strong> · 1 paper</summary>

- **Adaptive Computation Time for Recurrent Neural Networks** — Alex Graves. *arXiv 2016*.  
  Introduces a differentiable halting mechanism that lets recurrent models spend different amounts of computation on different inputs.  
  [Paper](https://arxiv.org/abs/1603.08983)

</details>

### Architectures & Scaling

<details open>
<summary><strong>2026</strong> · 10 papers</summary>

- **SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers** — Shaowen Wang et al.. *arXiv 2026*.  
  Evaluates looped MoE models while jointly matching FLOPs, non-embedding parameters, and KV cache, separating architectural effects from extra compute.  
  [Paper](https://arxiv.org/abs/2609.01343)

- **Allocating Recurrent Compute in Looped Language Models** — Ruhai Lin et al.. *arXiv 2026*.  
  Asks which sublayer should recur and finds that repeatedly applying the sequence mixer can retain much of the loop benefit without repeating every FFN.  
  [Paper](https://arxiv.org/abs/2608.18230)

- **Gated Recurrent Transformers: Expressive Depth through Recurrent Modulation** — Amr Hegazy et al.. *arXiv 2026*.  
  Modulates a shared recurrent core with a learned update gate and fresh noise, allowing repeated applications to specialize by step.  
  [Paper](https://arxiv.org/abs/2608.15062)

- **Loop the Loopies!** — Zitian Gao et al.. *arXiv 2026*.  
  Develops a large-scale looped MoE recipe that reinvests parameter-memory savings while comparing against compute-matched sparse baselines.  
  [Paper](https://arxiv.org/abs/2607.16051)

- **LoopMoE: Unifying Iterative Computation with Mixture-of-Experts for Language Modeling** — Wenkai Chen et al.. *arXiv 2026*.  
  Couples repeated shared computation with sparse expert routing, seeking both iterative refinement and expandable parameter capacity.  
  [Paper](https://arxiv.org/abs/2606.04438)

- **LoopUS: Recasting Pretrained LLMs into Looped Latent Refinement Models** — Taekhyun Park et al.. *arXiv 2026*.  
  Transforms an existing pretrained LLM into a looped latent-refinement model instead of training recurrent depth entirely from scratch.  
  [Paper](https://arxiv.org/abs/2605.11011) · [Code](https://github.com/Thrillcrazyer/LoopUS) · [Project](https://thrillcrazyer.github.io/LoopUS)

- **Sparse Layers are Critical to Scaling Looped Language Models** — Ryan Lee et al.. *arXiv 2026*.  
  Finds that adding sparse capacity is especially important when scaling recurrent language models, improving their quality–memory trade-off and exit behavior.  
  [Paper](https://arxiv.org/abs/2605.09165)

- **How Much Is One Recurrence Worth? Iso-Depth Scaling Laws for Looped Language Models** — Kristian Schwethelm et al.. *arXiv 2026*.  
  Quantifies the quality value of a repeated layer relative to a unique layer under matched effective depth and training compute.  
  [Paper](https://arxiv.org/abs/2604.21106) · [Code](https://github.com/kschwethelm/looped-lm-scaling)

- **SpiralFormer: Looped Transformers Can Learn Hierarchical Dependencies via Multi-Resolution Recursion** — Chengting Yu et al.. *arXiv 2026*.  
  Runs successive recurrences at multiple sequence resolutions, turning resolution into another axis for efficient hierarchical computation.  
  [Paper](https://arxiv.org/abs/2602.11698)

- **Depth-Recurrent Attention Mixtures: Giving Latent Reasoning the Attention it Deserves** — Jonas Knupp et al.. *arXiv 2026*.  
  Diversifies the attention transformations available across repeated depth while preserving a recurrent core.  
  [Paper](https://arxiv.org/abs/2601.21582)

</details>

<details open>
<summary><strong>2025</strong> · 2 papers</summary>

- **Teaching Pretrained Language Models to Think Deeper with Retrofitted Recurrence** — Sean McLeish et al.. *arXiv 2025*.  
  Converts dense pretrained models into recurrent-depth models through continued training, testing how much loop behavior can be installed after pretraining.  
  [Paper](https://arxiv.org/abs/2511.07384) · [Code](https://github.com/mcleish7/retrofitting-recurrence)

- **Two-Scale Latent Dynamics for Recurrent-Depth Transformers** — Francesco Pappone et al.. *arXiv 2025*.  
  Introduces fast and slow latent dynamics so a recurrent-depth model can separate local refinement from longer-horizon state evolution.  
  [Paper](https://arxiv.org/abs/2509.23314)

</details>

<details open>
<summary><strong>2024</strong> · 3 papers</summary>

- **Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA** — Sangmin Bae et al.. *ICLR 2025*.  
  Folds pretrained Transformers into repeated blocks and restores depth-specific flexibility with small LoRA adapters, while motivating continuous depth-wise batching.  
  [Paper](https://openreview.net/forum?id=WwpYSOkkCt)

- **MoEUT: Mixture-of-Experts Universal Transformers** — Róbert Csordás et al.. *NeurIPS 2024*.  
  Adds sparse expert capacity and improved recurrent dynamics to Universal Transformers, narrowing the quality gap with standard language models.  
  [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/321387ba926b8e58d3591c0aeb52ffc2-Abstract-Conference.html) · [Code](https://github.com/robertcsordas/moeut)

- **AlgoFormer: An Efficient Transformer Framework with Algorithmic Structures** — Yihang Gao et al.. *TMLR 2025*.  
  Combines task-specific pre- and post-processing blocks with a reusable middle block, injecting an iterative algorithmic prior into Transformer learning.  
  [Paper](https://openreview.net/forum?id=oYP2Pd5aQt) · [Code](https://github.com/chuanyang-Zheng/Algoformer)

</details>

### Latent Reasoning

<details open>
<summary><strong>2026</strong> · 2 papers</summary>

- **Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers** — Ying Fan, Anej Svete, Kangwook Lee. *arXiv 2026*.  
  LOTUS supervises parallel latent slots against explicit reasoning steps, bringing latent looped reasoning closer to chain-of-thought quality with lower thought latency.  
  [Paper](https://arxiv.org/abs/2606.31779)

- **Thinking Deeper, Not Longer: Depth-Recurrent Transformers for Compositional Generalization** — Hung-Hsuan Chen. *arXiv 2026*.  
  Tests whether recurrent latent depth, rather than longer decoded rationales, improves systematic composition outside the training distribution.  
  [Paper](https://arxiv.org/abs/2603.21676)

</details>

<details open>
<summary><strong>2025</strong> · 3 papers</summary>

- **Scaling Latent Reasoning via Looped Language Models** — Rui-Jie Zhu et al.. *arXiv 2025*.  
  Introduces Ouro, pretrained looped language models with entropy-regularized depth allocation, and studies recurrent depth as a distinct scaling direction.  
  [Paper](https://arxiv.org/abs/2510.25741) · [Project](https://ouro-llm.github.io/)

- **Reasoning with Latent Thoughts: On the Power of Looped Transformers** — Nikunj Saunshi et al.. *ICLR 2025*.  
  Connects recurrence to latent multi-step reasoning theoretically and empirically, showing that effective depth can matter more than unique parameter depth.  
  [Paper](https://openreview.net/forum?id=din0lGfZFd)

- **Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach** — Jonas Geiping et al.. *NeurIPS 2025*.  
  Scales recurrent depth to a 3.5B-parameter, 800B-token language model and shows that extra test-time loops can improve reasoning without emitting more tokens.  
  [Paper](https://arxiv.org/abs/2502.05171) · [Code](https://github.com/seal-rg/recurrent-pretraining) · [Project](https://huggingface.co/tomg-group-umd/huginn-0125)

</details>

### Adaptive Compute

<details open>
<summary><strong>2026</strong> · 5 papers</summary>

- **Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping** — Hsun-Yu Kuo et al.. *arXiv 2026*.  
  Randomizes supervised stopping depth and learns when to halt, reducing sensitivity to a single training horizon on length-generalization tasks.  
  [Paper](https://arxiv.org/abs/2606.29983)

- **Fixed-Point Reasoners: Stable and Adaptive Deep Looped Transformers** — Sajad Movahedi et al.. *arXiv 2026*.  
  Trains deep looped Transformers around stable attractors so inference can stop by convergence rather than a fixed iteration count.  
  [Paper](https://arxiv.org/abs/2606.18206) · [Code](https://github.com/nilskiKonjIzDunava/fprm)

- **Skip a Layer or Loop It? Learning Program-of-Layers in LLMs** — Ziyue Li, Yang Li, Tianyi Zhou. *ICML 2026*.  
  Learns input-conditioned programs that can traverse, skip, or revisit modules from a pretrained Transformer stack.  
  [Paper](https://arxiv.org/abs/2606.06574) · [Code](https://github.com/tianyi-lab/PoLar)

- **AdaPonderLM: Gated Pondering Language Models with Token-Wise Adaptive Depth** — Shixiang Song et al.. *arXiv 2026*.  
  Learns token-wise pondering gates so a shared language-model block can stop easy tokens early and continue refining harder ones.  
  [Paper](https://arxiv.org/abs/2603.01914)

- **LoopFormer: Elastic-Depth Looped Transformers for Latent Reasoning via Shortcut Modulation** — Ahmadreza Jeddi et al.. *ICLR 2026*.  
  Trains loop trajectories of different lengths to agree, enabling one model to operate smoothly across inference budgets.  
  [Paper](https://openreview.net/forum?id=RzYXb5YWBs) · [Code](https://github.com/armenjeddi/loopformer) · [Project](https://loopformer.github.io/)

</details>

<details open>
<summary><strong>2025</strong> · 3 papers</summary>

- **Think-at-Hard: Selective Latent Iterations to Improve Reasoning Language Models** — Tianyu Fu et al.. *ICML 2026*.  
  Analyzes where extra Ouro iterations help and selectively spends recurrent computation on harder tokens or stages.  
  [Paper](https://openreview.net/forum?id=eQaJSRZiGn) · [Code](https://github.com/thu-nics/TaH)

- **Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation** — Sangmin Bae et al.. *NeurIPS 2025*.  
  Routes each token to a learned recursion depth inside a shared Transformer stack, coupling parameter reuse with token-level sparse computation.  
  [Paper](https://arxiv.org/abs/2507.10524) · [Code](https://github.com/raymin0223/mixture_of_recursions)

- **Skip a Layer or Loop it? Test-Time Depth Adaptation of Pretrained LLMs** — Ziyue Li, Yang Li, Tianyi Zhou. *arXiv 2025*.  
  Studies inference-time layer skipping and repetition in pretrained LLMs, treating the existing stack as a flexible depth program rather than a fixed path.  
  [Paper](https://arxiv.org/abs/2507.07996)

</details>

### Training & Analysis

<details open>
<summary><strong>2026</strong> · 9 papers</summary>

- **Think Shallow, Solve Deep: Controlling Recurrent Dynamics for Reliable Test-Time Depth** — Ivan Viakhirev et al.. *arXiv 2026*.  
  Classifies recurrent dynamics and introduces a terminal fixed-point objective to make extra test-time depth safer and more reliable.  
  [Paper](https://arxiv.org/abs/2608.18222)

- **LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction** — Behzad Shomali et al.. *arXiv 2026*.  
  Aligns each loop state with progressively farther future tokens, adding dense guidance intended to reduce undirected refinement and overthinking.  
  [Paper](https://arxiv.org/abs/2608.03624)

- **DeepLoop: Depth Scaling for Looped Transformers** — Shuzhen Li et al.. *arXiv 2026*.  
  Derives residual initialization rules based on how often shared parameters are revisited, stabilizing deeply unrolled post-LN Transformers.  
  [Paper](https://arxiv.org/abs/2607.13491) · [Code](https://github.com/lszshu/DeepLoop)

- **On the Residual Scaling of Looped Transformers: Stability and Transferability** — Shaowen Wang et al.. *arXiv 2026*.  
  Shows that correlated reuse changes residual-growth laws and derives loop-aware scaling that supports stable depth and hyperparameter transfer.  
  [Paper](https://arxiv.org/abs/2606.18524)

- **Stabilizing Recurrent Dynamics for Test-Time Scalable Latent Reasoning in Looped Language Models** — Xiao-Wen Yang et al.. *ICML 2026*.  
  Regularizes the loop Jacobian while sampling depths during training, targeting stable improvement when inference uses more iterations than training.  
  [Paper](https://arxiv.org/abs/2605.26733) · [Code](https://github.com/njuyxw/STARS)

- **Simply Stabilizing the Loop via Fully Looped Transformer** — Rao Fu et al.. *arXiv 2026*.  
  Studies a fully recurrent design and a simplified stabilization recipe intended to avoid fragile partial-loop dynamics.  
  [Paper](https://arxiv.org/abs/2605.18797) · [Code](https://github.com/FuRuF-11/FullyLoopedTransformer)

- **Parcae: Scaling Laws For Stable Looped Language Models** — Hayden Prairie et al.. *ICLR 2026 LIT Workshop*.  
  Diagnoses residual instability through the loop’s dynamical system and constrains injection operators to obtain more predictable training and test-time scaling.  
  [Paper](https://arxiv.org/abs/2604.12946)

- **A Mechanistic Analysis of Looped Reasoning Language Models** — Hugh Blayney et al.. *arXiv 2026*.  
  Tracks representations through repeated blocks in models such as Ouro and Huginn, identifying recurring inference stages and convergence patterns.  
  [Paper](https://arxiv.org/abs/2604.11791)

- **Understanding Dynamic Compute Allocation in Recurrent Transformers** — Ibraheem Muhammad Moosa et al.. *arXiv 2026*.  
  Uses controlled algorithmic tasks to measure whether learned token-wise depth tracks difficulty and whether the routing policy extrapolates.  
  [Paper](https://arxiv.org/abs/2602.08864)

</details>

<details open>
<summary><strong>2025</strong> · 2 papers</summary>

- **What Makes Looped Transformers Perform Better Than Non-Recursive Ones (Provably)** — Zixuan Gong et al.. *arXiv 2025*.  
  Uses loss-landscape geometry to explain an optimization advantage of recurrent attention and turns the analysis into a staged training strategy.  
  [Paper](https://arxiv.org/abs/2510.10089)

- **Latent Chain-of-Thought? Decoding the Depth-Recurrent Transformer** — Wenquan Lu et al.. *COLM 2025 Workshop*.  
  Probes Huginn across recurrent steps to test whether its hidden-state trajectory behaves like a decodable latent chain of thought.  
  [Paper](https://openreview.net/forum?id=roIQdXMuEj) · [Code](https://github.com/wenquanlu/huginn-latent-cot)

</details>

### Systems & Applications

<details open>
<summary><strong>2026</strong> · 11 papers</summary>

- **Recirculation** — Michael C. Mozer et al.. *arXiv 2026*.  
  Adds a distinct inference-time recurrence to frozen foundation models during prefill, targeting belief-state tracking without generation-time latency.  
  [Paper](https://arxiv.org/abs/2608.17981)

- **Looped Language Models Improve Compositional Tool Calling** — Andrei Cristian Popescu et al.. *arXiv 2026*.  
  Evaluates recurrent depth on tool-use tasks and finds its clearest gains when calls have compositional or dependency structure.  
  [Paper](https://arxiv.org/abs/2608.18171)

- **Depth-Adaptive Inference of Looped Language Models via Continuous Depth Batching** — Kristian Schwethelm et al.. *arXiv 2026*.  
  Turns variable recurrent depth into a serving primitive by continuously batching examples that enter and leave at different loop counts.  
  [Paper](https://arxiv.org/abs/2608.09444)

- **Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers** — James O'Neill, Fergal Reid. *arXiv 2026*.  
  Compresses the trajectory of keys and values across loop iterations into a compact latent representation for higher serving capacity.  
  [Paper](https://arxiv.org/abs/2607.15456)

- **LoopCoder: Scaling Code Intelligence via Looped Language Models** — Jian Yang et al.. *Findings of ACL 2026*.  
  Scales looped pretraining and post-training to a 40B-total/8B-active coding model, using dense-to-loop initialization for stability.  
  [Paper](https://aclanthology.org/2026.findings-acl.796/) · [Code](https://github.com/CSJianYang/LoopCoder)

- **LoopCoder-v2: Only Loop Once for Efficient Test-Time Computation Scaling** — Jian Yang et al.. *arXiv 2026*.  
  Compares parallel-loop counts at 7B scale and finds a non-monotonic trade-off: one repeated pass captures most gains before positional mismatch dominates.  
  [Paper](https://arxiv.org/abs/2606.18023) · [Code](https://github.com/CSJianYang/LoopCoder)

- **Training-Free Looped Transformers** — Lizhang Chen et al.. *arXiv 2026*.  
  Loops frozen mid-stack layers at inference as damped numerical refinement steps, showing that useful recurrence can sometimes be added without training.  
  [Paper](https://arxiv.org/abs/2605.23872)

- **LT2: Linear-Time Looped Transformers** — Chunyuan Deng et al.. *arXiv 2026*.  
  Combines recurrent depth with linear-time sequence mixing to prevent long-context attention cost from multiplying across loops.  
  [Paper](https://arxiv.org/abs/2605.20670)

- **Memory-Efficient Looped Transformer: Decoupling Compute from Memory in Looped Language Models** — Victor Conchello Vendrell et al.. *arXiv 2026*.  
  Redesigns recurrent inference so adding loop computation does not force proportional growth in stored intermediate state.  
  [Paper](https://arxiv.org/abs/2605.07721)

- **Looping Back to Move Forward: Recursive Transformers for Efficient and Flexible Large Multimodal Models** — Ruihan Xu et al.. *arXiv 2026*.  
  Builds a multimodal recursive Transformer with modality-aware state alignment and supervision that encourages quality to improve with each loop.  
  [Paper](https://arxiv.org/abs/2602.09080)

- **Recurrent-Depth VLA: Implicit Test-Time Compute Scaling of Vision-Language-Action Models via Latent Iterative Reasoning** — Yalcin Tur et al.. *arXiv 2026*.  
  Applies recurrent-depth latent refinement to embodied vision-language-action policies so inference compute can scale without longer action traces.  
  [Paper](https://arxiv.org/abs/2602.07845) · [Code](https://github.com/rd-vla/rd-vla) · [Project](https://rd-vla.github.io/)

</details>

<details open>
<summary><strong>2025</strong> · 1 paper</summary>

- **Parallel Loop Transformer for Efficient Test-Time Computation Scaling** — Bohong Wu et al.. *arXiv 2025*.  
  Reorganizes loop iterations to expose more parallelism and reduce the sequential latency and cache growth of conventional recurrent depth.  
  [Paper](https://arxiv.org/abs/2510.24824)

</details>

### Broader Latent Reasoning

<details open>
<summary><strong>2025</strong> · 14 papers</summary>

- **Learning When to Stop: Adaptive Latent Reasoning via Reinforcement Learning** — Alex Ning et al.. *arXiv 2025*.  
  Optimizes a stopping policy for latent reasoning, explicitly trading continuous reasoning length against answer accuracy.  
  [Paper](https://arxiv.org/abs/2511.21581) · [Code](https://github.com/apning/adaptive-latent-reasoning)

- **LLM Latent Reasoning as Chain of Superposition** — Jingcheng Deng et al.. *arXiv 2025*.  
  Constrains latent thoughts to superpositions in vocabulary space, adding structure and a direct bridge back to explicit reasoning tokens.  
  [Paper](https://arxiv.org/abs/2510.15522)

- **Less is More: Recursive Reasoning with Tiny Networks** — Alexia Jolicoeur-Martineau. *arXiv 2025*.  
  Proposes the Tiny Recursive Model, a very small recurrent network that iteratively improves solutions to structured reasoning problems without a Transformer backbone.  
  [Paper](https://arxiv.org/abs/2510.04871) · [Code](https://github.com/SamsungSAILMontreal/TinyRecursiveModels)

- **SIM-CoT: Supervised Implicit Chain-of-Thought** — InternLM Team. *arXiv 2025*.  
  Trains implicit reasoning states with supervision derived from explicit chain-of-thought trajectories.  
  [Paper](https://arxiv.org/abs/2509.20317) · [Code](https://github.com/InternLM/SIM-CoT)

- **SynAdapt: Learning Adaptive Reasoning in Large Language Models via Synthetic Continuous Chain-of-Thought** — Jianwei Wang et al.. *arXiv 2025*.  
  Creates synthetic continuous-thought targets and invokes additional reasoning only when a learned difficulty signal marks an example as hard.  
  [Paper](https://arxiv.org/abs/2508.00574)

- **A Survey on Latent Reasoning** — Rui-Jie Zhu et al.. *arXiv 2025*.  
  Surveys activation recurrence, hidden-state propagation, compressed reasoning, and implicit-depth approaches across the broader latent-reasoning landscape.  
  [Paper](https://arxiv.org/abs/2507.06203) · [Code](https://github.com/multimodal-art-projection/LatentCoT-Horizon)

- **Hierarchical Reasoning Model** — Guan Wang et al.. *arXiv 2025*.  
  Uses two recurrent modules operating at different timescales to solve difficult symbolic tasks with a compact non-Transformer reasoner.  
  [Paper](https://arxiv.org/abs/2506.21734) · [Code](https://github.com/sapientinc/HRM)

- **Parallel Continuous Chain-of-Thought with Jacobi Iteration** — Zhenyu Zhang et al.. *arXiv 2025*.  
  Uses Jacobi-style updates to refine multiple continuous thought positions in parallel rather than generating a serial rationale.  
  [Paper](https://arxiv.org/abs/2506.18582) · [Code](https://github.com/whyNLP/PCCoT)

- **Pretraining Language Models to Ponder in Continuous Space** — Yuhang Zang et al.. *arXiv 2025*.  
  Moves continuous pondering into pretraining so latent reasoning is learned as a native capability rather than added only by task fine-tuning.  
  [Paper](https://arxiv.org/abs/2505.20674) · [Code](https://github.com/LUMIA-Group/PonderingLM)

- **Hybrid Latent Reasoning via Reinforcement Learning** — Zhenrui Yue et al.. *NeurIPS 2025*.  
  Uses reinforcement learning to combine sampled tokens with prior hidden states, preserving discrete generation while introducing latent computation.  
  [Paper](https://arxiv.org/abs/2505.18454) · [Code](https://github.com/Yueeeeeeee/HRPO)

- **Soft Thinking: Unlocking the Reasoning Potential of LLMs in Continuous Concept Space** — Yuhui Xu et al.. *arXiv 2025*.  
  Propagates soft vocabulary distributions as continuous concept representations instead of committing to a single discrete reasoning token.  
  [Paper](https://arxiv.org/abs/2505.15778) · [Code](https://github.com/eric-ai-lab/Soft-Thinking)

- **CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation** — Zhengyu Chen et al.. *arXiv 2025*.  
  Self-distills explicit rationales into continuous hidden trajectories so the model can reason with fewer decoded tokens.  
  [Paper](https://arxiv.org/abs/2502.21074) · [Code](https://github.com/zhenyi4/codi)

- **Token Assorted: Mixing Latent and Text Tokens for Improved Language Model Reasoning** — Jiaxin Huang et al.. *ICML 2025*.  
  Interleaves continuous latent tokens with ordinary text tokens, exploring a hybrid medium between silent and explicit reasoning.  
  [Paper](https://arxiv.org/abs/2502.03275)

- **Efficient Reasoning with Hidden Thinking** — Huanjin Yao et al.. *arXiv 2025*.  
  Learns compact hidden reasoning states that replace portions of an explicit chain while retaining answer quality.  
  [Paper](https://arxiv.org/abs/2501.19201) · [Code](https://github.com/shawnricecake/Heima)

</details>

<details open>
<summary><strong>2024</strong> · 6 papers</summary>

- **Compressed Chain of Thought: Efficient Reasoning through Dense Representations** — Zhiyuan Deng et al.. *arXiv 2024*.  
  Compresses longer textual reasoning traces into fewer dense representations to reduce autoregressive reasoning cost.  
  [Paper](https://arxiv.org/abs/2412.13171)

- **Training Large Language Models to Reason in a Continuous Latent Space** — Shibo Hao et al.. *COLM 2025*.  
  Coconut feeds a generated hidden state back as the next input embedding, creating a continuous chain of thought that can represent multiple candidate paths.  
  [Paper](https://arxiv.org/abs/2412.06769) · [Code](https://github.com/facebookresearch/coconut)

- **Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding** — Zayne Sprague et al.. *arXiv 2024*.  
  Optimizes hidden reasoning behavior with self-generated preference signals instead of requiring every intermediate step to be written out.  
  [Paper](https://arxiv.org/abs/2411.04282) · [Code](https://github.com/SalesforceAIResearch/LaTRO)

- **Uncovering Latent Chain of Thought Vectors in Language Models** — Jason Zhang, Scott Viteri. *arXiv 2024*.  
  Derives activation directions associated with chain-of-thought behavior and uses them to steer reasoning without a natural-language trigger.  
  [Paper](https://arxiv.org/abs/2409.14026)

- **From Explicit CoT to Implicit CoT: Learning to Internalize CoT Step by Step** — Xuezhi Wang et al.. *arXiv 2024*.  
  Progressively removes explicit reasoning steps during training so their function is absorbed into hidden computation.  
  [Paper](https://arxiv.org/abs/2405.14838)

- **Let’s Think Dot by Dot: Hidden Computation in Transformer Language Models** — Jacob Pfau et al.. *COLM 2024*.  
  Uses semantically empty filler tokens to expose additional Transformer computation without requiring a verbalized rationale.  
  [Paper](https://arxiv.org/abs/2404.15758) · [Code](https://github.com/JacobPfau/fillerTokens)

</details>

## Verification and editorial policy

- Every paper link points to arXiv, OpenReview, an official proceedings page, or the authors’ project page.
- Code and model links are included only when an official author/project source could be identified.
- Dates refer to first public release; venues reflect the latest verified publication status in this snapshot.
- Summaries are original editorial notes, not copied abstracts.
- Agent loops, repeated full-model API calls, and ordinary sequence recurrence without a direct latent-reasoning connection are out of core scope.

## Contributing

Corrections and new papers are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and include a primary-source link plus evidence of the loop or latent-reasoning mechanism.

---

CC BY 4.0 · Maintained by [Mrkkew](https://github.com/Mrkkew/Awesome-Loop-Transformers) · Data source: [lib/papers.ts](lib/papers.ts)
