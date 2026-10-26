<!-- This file is generated from lib/papers.ts. Edit the data source, then run npm run artifacts. -->
<a id="top"></a>

<p align="center"><strong>English</strong>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="README.zh-CN.md">简体中文</a></p>

<p align="center"><a href="https://awesome-loop-transformers.liyulin.workers.dev"><img src="public/readme-hero.png" alt="Awesome Loop Transformers: a shared Transformer block updates a latent state over repeated steps before readout." width="100%" /></a></p>

<h1 align="center">Awesome Loop Transformers</h1>

<p align="center"><strong>Looped Transformers, latent reasoning, and test-time compute.<br>A bilingual reading guide with papers, official code, and research summaries.</strong></p>

<p align="center"><a href="https://github.com/Mrkkew/Awesome-Loop-Transformers/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Mrkkew/Awesome-Loop-Transformers?style=flat-square&labelColor=080b18&color=d8ff55"></a>&nbsp;<a href="#complete-catalog"><img alt="Papers in the full catalog" src="https://img.shields.io/badge/papers-235-5df2ff?style=flat-square&labelColor=080b18"></a>&nbsp;<a href="https://github.com/Mrkkew/Awesome-Loop-Transformers/actions/workflows/ci.yml"><img alt="Data and build" src="https://img.shields.io/github/actions/workflow/status/Mrkkew/Awesome-Loop-Transformers/ci.yml?style=flat-square&label=build&labelColor=080b18"></a>&nbsp;<a href="LICENSE"><img alt="License: CC BY 4.0" src="https://img.shields.io/badge/license-CC%20BY%204.0-a78bfa?style=flat-square&labelColor=080b18"></a>&nbsp;<a href="data/papers.json"><img alt="JSON catalog" src="https://img.shields.io/badge/data-JSON-c6ff4a?style=flat-square&labelColor=080b18"></a></p>

<p align="center"><a href="https://awesome-loop-transformers.liyulin.workers.dev/#catalog"><strong>Search the interactive catalog ↗</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="https://github.com/Mrkkew/Awesome-Loop-Transformers/issues/new?template=paper-suggestion.yml">Suggest a paper</a></p>

<p align="center"><a href="#start-here"><strong>🧭 Start here</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#essential-reading"><strong>📌 Essential reading</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#complete-catalog"><strong>📚 Full catalog</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#contributing"><strong>🤝 Contribute</strong></a></p>

<p align="center"><sub>235 papers · 8 research topics · English / 简体中文 · Last research update: 2026-10-25</sub></p>

---

<a id="start-here"></a>

## Start here

- **Understand the architecture** — [Universal Transformers](https://arxiv.org/abs/1807.03819) → [programmable loops](https://proceedings.mlr.press/v202/giannou23a.html) → [foundations and theory](#foundations--theory).
- **Study reasoning and scaling** — [Huginn](https://arxiv.org/abs/2502.05171) → [Ouro](https://arxiv.org/abs/2510.25741) → [adaptive compute](#adaptive-compute) and [parallel loops](https://arxiv.org/abs/2510.24824).
- **Explore related methods** — [Coconut](https://arxiv.org/abs/2412.06769), [HRM](https://arxiv.org/abs/2506.21734), and [TRM](https://arxiv.org/abs/2510.04871) → [broader latent reasoning](#broader-latent-reasoning).

→ [Compare the mechanisms and learn what to measure](docs/reading-guide.md): recurrent depth, continuous thoughts, routing, and parallel loops.

<a id="essential-reading"></a>

## Essential reading

Eight entry points, from shared-depth architectures to latent reasoning. Short names link to the original papers; this is a reading selection, not a ranking.

| Paper / model | Research question |
| --- | --- |
| **[Universal Transformers](https://arxiv.org/abs/1807.03819)**<br><sub>2018</sub> | How can one shared Transformer transition replace a fixed stack of layers? |
| **[Programmable Looped Transformers](https://proceedings.mlr.press/v202/giannou23a.html)**<br><sub>2023</sub> | What kinds of iterative algorithms can a looped Transformer execute? |
| **[Huginn](https://arxiv.org/abs/2502.05171)**<br><sub>2025</sub> | Can additional recurrent depth improve reasoning without generating more tokens? |
| **[Ouro](https://arxiv.org/abs/2510.25741)**<br><sub>2025</sub> | How can looped language models be pretrained and their depth allocation learned? |
| **[Mixture-of-Recursions](https://arxiv.org/abs/2507.10524)**<br><sub>2025</sub> | How can a shared model assign different recursion depths to individual tokens? |
| **[Parallel Loop Transformer](https://arxiv.org/abs/2510.24824)**<br><sub>2025</sub> | How can loop execution reduce sequential latency and KV-cache overhead? |
| **[Coconut](https://arxiv.org/abs/2412.06769)**<br><sub>2024</sub> | How can hidden states serve as intermediate thoughts? · Broader latent reasoning |
| **[Tiny Recursive Model (TRM)](https://arxiv.org/abs/2510.04871)**<br><sub>2025</sub> | How can a small shared network alternately refine latent states and candidate answers? · Broader latent reasoning |

<a id="scope"></a>

## What this list covers

**Looped Transformers:** models that reuse a learned Transformer layer, block, or stack through depth within a forward pass, alongside related theory, training, systems, and applications.

**Broader latent reasoning:** selected work on continuous thoughts, implicit CoT, and recursive reasoning, including Coconut, HRM, and TRM. These methods need not use a looped Transformer and are listed separately.

Of the **230 works from 2024 onward**, **189** belong to the core track and **41** to broader latent reasoning. Earlier foundations are also included.

<a id="complete-catalog"></a>

## Complete catalog

Choose a topic below, then expand a year. Papers are ordered newest first within each group. For title, author, or model search, use the [interactive catalog](https://awesome-loop-transformers.liyulin.workers.dev/#catalog).

| Track | Works | What it covers |
| --- | :---: | --- |
| **[Foundations & Theory](#foundations--theory)** | 30 | Expressivity, programmability, in-context optimization, length and depth generalization. |
| **[Architectures & Scaling](#architectures--scaling)** | 43 | Weight sharing, recurrent cores, MoE, multi-resolution designs, and scaling laws. |
| **[Latent Reasoning](#latent-reasoning)** | 21 | Test-time depth, silent multi-step computation, Huginn, Ouro, and latent CoT. |
| **[Adaptive Compute](#adaptive-compute)** | 24 | Token routing, learned halting, early exit, and budget-conditioned depth. |
| **[Training & Analysis](#training--analysis)** | 32 | Optimization, stability, residual scaling, fixed points, and mechanistic studies. |
| **[Systems & Applications](#systems--applications)** | 39 | Serving, KV memory, parallel loops, code, multimodal, robotics, and tool use. |
| **[Safety & Monitoring](#safety--monitoring)** | 5 | Depth-dependent jailbreaks, latent monitoring, steering, and depth-robust alignment. |
| **[Broader Latent Reasoning](#broader-latent-reasoning)** | 41 | Continuous thoughts, implicit CoT, hierarchical recurrence, HRM, and TRM. |

<a id="foundations--theory"></a>

### Foundations & Theory

<details>
<summary><strong>2026</strong> · 14 papers</summary>

- **[Predictive Latents for Autoregressive Language Models: Possibility, Gauge, and Obstruction](https://arxiv.org/abs/2610.28540)**<br>
  Yuzhou Hong · *arXiv 2026*<br>
  Separates token, teacher-forced and open-loop risks for iterated latents, showing that under a full-rank-covariance statistic, a linear least-squares transition and a refit unembedding a width-k latent matches the Bayes token predictor up to an invertible gauge, and that small one-step losses do not certify token prediction or free rollout unless a rank/injectivity condition is stated.<br>
  [Paper](https://arxiv.org/abs/2610.28540)

- **[Internalizing Chain-of-thought into Looped Transformers](https://arxiv.org/abs/2610.25998)**<br>
  Kehang Zhou, Pinyan Lu · *arXiv 2026*<br>
  Constructs constant-bit-size looped Transformers that interpolate between explicit chain-of-thought and latent thought, proving that L loops cut a time-t, space-s Turing-machine simulation's context and emitted-token counts by a factor of L (given s(n)^{1/k}=Ω(L)) relative to the unlooped queue-machine baseline.<br>
  [Paper](https://arxiv.org/abs/2610.25998)

- **[Looped Reasoning Finishes Earlier Than You Think](https://arxiv.org/abs/2610.18174)**<br>
  Sumin Park, T. Konstantin Rusch · *arXiv 2026*<br>
  Shows that slowly decaying oscillatory modes can impose their convergence rate on coupled latent dynamics, then introduces QRR, a gauge-equivariant recurrent reasoner with exact per-token phase-rotation symmetry that avoids forming a dominant slow oscillatory bottleneck while leaving reasoning-relevant quotient dynamics decoupled, converging faster on Sudoku, Maze and Mini-ARC.<br>
  [Paper](https://arxiv.org/abs/2610.18174)

- **[Learning to Extrapolate in Depth with Looped Transformers](https://arxiv.org/abs/2610.14456)**<br>
  Huitao Yang et al. · *arXiv 2026*<br>
  Analyses depth extrapolation on all-pairs graph connectivity and shows that, under exchangeability and symmetric positive initialization, population training at depth K converges to an update rule governed by a single propagation-versus-fitting parameter, yielding a finite window of safe test depths with explicit endpoints and a certified depth gain that grows exponentially as training depth outpaces training hardness.<br>
  [Paper](https://arxiv.org/abs/2610.14456)

- **[Invariant-Measure Reasoners: Stable Representations for Latent Reasoning](https://arxiv.org/abs/2610.10996)**<br>
  Yuto Inui, Takuya Konishi, Yoshinobu Kawahara · *arXiv 2026*<br>
  Observes that recurrently updated latents can settle on a compact set without reaching a fixed point, and predicts from the invariant measure over that set, stabilising answers across depths and sometimes exploiting non-fixed-point dynamics rather than suppressing them.<br>
  [Paper](https://arxiv.org/abs/2610.10996)

- **[Universal interpolation for deep residual self-attention networks](https://arxiv.org/abs/2610.01981)**<br>
  Sibylle Marcotte, Joan Bruna · *arXiv 2026*<br>
  Asks how much a depth-only, heavily weight-tied attention stack can represent and proves that two frozen single-head residual softmax blocks with Gaussian-initialized projections can interpolate any collection of N token sequences of length n to any other such collection at continuous or finite depth, while characterizing the restrictions imposed by causal masking.<br>
  [Paper](https://arxiv.org/abs/2610.01981)

- **[Looped Transformers as Optimizers](https://arxiv.org/abs/2609.37379)**<br>
  Yulong Huang et al. · *arXiv 2026*<br>
  Treats the looped hidden state as fast weights and derives loop transitions in closed form from a projection, a local objective and an optimizer rule; aligning existing transitions' input maps reduces training loss and improves commonsense accuracy, and the derived OperLoop improves generative performance at matched training FLOPs.<br>
  [Paper](https://arxiv.org/abs/2609.37379)

- **[Beyond the Training Horizon: Mechanisms and Limits of Length Generalization in Looped Transformers](https://arxiv.org/abs/2609.33144)**<br>
  Jia Liang, Xi Jin, Liangming Pan · *arXiv 2026*<br>
  Contrasts two looped-Transformer recurrence schemes on polynomial iteration, finite-state composition and graph traversal, finding both generalize past the training horizon yet degrade at greater depth, and that recurrent states encode computational status as well as content.<br>
  [Paper](https://arxiv.org/abs/2609.33144)

- **[Statistical Gains from Looped Estimation under Parameter Budgets](https://arxiv.org/abs/2609.25778)**<br>
  Xinyu Tian, Xiaotong Shen · *arXiv 2026*<br>
  Compares looped and untied estimators under a common parameter budget: a squared-Hellinger risk bound for looped sieve MLE and a minimax lower bound for untied families, with looped nets reaching the minimax rate up to log factors for Hölder-smooth targets and untied risk staying positive at sufficiently large fixed budgets.<br>
  [Paper](https://arxiv.org/abs/2609.25778)

- **[Right Direction, Wrong Step: Geometric Analysis of Finite-Step Failure in Looped Transformers](https://arxiv.org/abs/2609.16665)**<br>
  Zhihao Guo et al. · *arXiv 2026*<br>
  Decomposes looped-Transformer update steps with a pathwise curvature decomposition to explain how a locally improving direction can still hurt when applied in full, and finds that a fixed quarter step yields positive reference-utility gains for 72.2-83.2% of selected failures across four settings.<br>
  [Paper](https://arxiv.org/abs/2609.16665)

- **[When Does Recurrence Become an Algorithm? Convergence Selection in Weight-Tied Looped Transformers](https://arxiv.org/abs/2607.20594)**<br>
  Tong Zhang et al. · *arXiv 2026*<br>
  Uses controlled group-word tasks to show how weight tying and training budgets select serial computation frontiers, and introduces convergence-time scaling as a mechanistic diagnostic.<br>
  [Paper](https://arxiv.org/abs/2607.20594)

- **[Looped Transformers with Layer Normalization Provably Learn the Power Method](https://arxiv.org/abs/2606.00605)**<br>
  Lyumin Wu, Chenyang Zhang, Yuan Cao · *arXiv 2026*<br>
  Proves that gradient descent selects a looped, layer-normalized solution implementing one power iteration per attention application.<br>
  [Paper](https://arxiv.org/abs/2606.00605)

- **[Chain-of-Thought and Compressed Looped Transformers: A Memory-Budget Separation](https://arxiv.org/abs/2605.30757)**<br>
  Haozhou Zhang · *arXiv 2026*<br>
  Formalizes a memory-capacity separation: extra iterations do not give compressed latent loops the growing scratchpad available to polynomial-length chain of thought.<br>
  [Paper](https://arxiv.org/abs/2605.30757)

- **[Stability and Generalization in Looped Transformers](https://arxiv.org/abs/2604.15259)**<br>
  Asher Labovich · *arXiv 2026*<br>
  Characterizes how recall connections and normalization affect reachable, input-dependent fixed points and depth generalization.<br>
  [Paper](https://arxiv.org/abs/2604.15259) · [Code](https://github.com/ashlab11/generalization)

</details>

<details>
<summary><strong>2025</strong> · 4 papers</summary>

- **[To CoT or To Loop? A Formal Comparison Between Chain-of-Thought and Looped Transformers](https://arxiv.org/abs/2505.19245)**<br>
  Kevin Xu, Issei Sato · *arXiv 2025*<br>
  Separates the strengths of the two compute axes: loops efficiently simulate parallel deterministic computation, while stochastic CoT favors some self-reducible problems.<br>
  [Paper](https://arxiv.org/abs/2505.19245)

- **[A Little Depth Goes a Long Way: The Expressive Power of Log-Depth Transformers](https://openreview.net/forum?id=njycONK0JG)**<br>
  William Merrill, Ashish Sabharwal · *ICLR 2025*<br>
  Shows that a universally shared block unrolled only logarithmically with input length can recognize regular languages and solve graph connectivity beyond fixed-depth limits.<br>
  [Paper](https://openreview.net/forum?id=njycONK0JG)

- **[Transformers Learn to Implement Multi-step Gradient Descent with Chain of Thought](https://arxiv.org/abs/2502.21212)**<br>
  Jianhao Huang, Zixuan Wang, Jason D. Lee · *arXiv 2025*<br>
  Analyzes how CoT training induces multi-step in-context gradient descent and uses the same tools to show a performance gain from looping.<br>
  [Paper](https://arxiv.org/abs/2502.21212)

- **[Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers](https://arxiv.org/abs/2501.10688)**<br>
  Zekai Huang et al. · *arXiv 2025*<br>
  Extends constructive looped-Transformer simulations from graphs to hypergraphs through graph reductions and hyperedge-aware encodings for algorithms such as Dijkstra and Helly.<br>
  [Paper](https://arxiv.org/abs/2501.10688)

</details>

<details>
<summary><strong>2024</strong> · 7 papers</summary>

- **[On the Role of Depth and Looping for In-Context Learning with Task Diversity](https://arxiv.org/abs/2410.21698)**<br>
  Khashayar Gatmiry et al. · *arXiv 2024*<br>
  Establishes depth requirements for diverse in-context regression tasks and argues that weight-tied looping retains expressivity while improving robustness and monotonicity across depth.<br>
  [Paper](https://arxiv.org/abs/2410.21698)

- **[Bypassing the Exponential Dependency: Looped Transformers Efficiently Learn In-context by Multi-step Gradient Descent](https://arxiv.org/abs/2410.11268)**<br>
  Bo Chen et al. · *arXiv 2024*<br>
  Proves that linear looped Transformers can implement multi-step gradient descent for in-context learning without requiring exponentially many demonstrations.<br>
  [Paper](https://arxiv.org/abs/2410.11268)

- **[Looped ReLU MLPs May Be All You Need as Practical Programmable Computers](https://arxiv.org/abs/2410.09375)**<br>
  Yingyu Liang et al. · *arXiv 2024*<br>
  Shows that a compact looped ReLU MLP can implement the primitive operations of a programmable computer, providing a non-attention comparison point for looped Transformer expressivity.<br>
  [Paper](https://arxiv.org/abs/2410.09375)

- **[Can Looped Transformers Learn to Implement Multi-step Gradient Descent for In-context Learning?](https://arxiv.org/abs/2410.08292)**<br>
  Khashayar Gatmiry et al. · *arXiv 2024*<br>
  Moves beyond construction results by analyzing optimization: population-risk minimizers and gradient flow learn a data-adapted multi-step preconditioned gradient method.<br>
  [Paper](https://arxiv.org/abs/2410.08292)

- **[On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding](https://proceedings.mlr.press/v267/xu25x.html)**<br>
  Kevin Xu, Issei Sato · *ICML 2025*<br>
  Derives approximation guarantees and a loop-specific limitation, then uses timestep-conditioned scaling to give repeated blocks distinct behavior.<br>
  [Paper](https://proceedings.mlr.press/v267/xu25x.html) · [Code](https://github.com/kevin671/tmlt)

- **[Looped Transformers for Length Generalization](https://openreview.net/forum?id=2edigk8yoU)**<br>
  Ying Fan et al. · *ICLR 2025*<br>
  Trains a decoder-only looped Transformer to match iteration count to problem length, enabling strong extrapolation on iterative algorithmic tasks.<br>
  [Paper](https://openreview.net/forum?id=2edigk8yoU) · [Code](https://github.com/UW-Madison-Lee-Lab/looped-tf)

- **[Simulation of Graph Algorithms with Looped Transformers](https://arxiv.org/abs/2402.01107)**<br>
  Artur Back de Luca, Kimon Fountoulakis · *arXiv 2024*<br>
  Constructs looped Transformers that execute shortest-path, traversal, and connectivity algorithms on arbitrary-size graphs, while making finite-precision limits explicit.<br>
  [Paper](https://arxiv.org/abs/2402.01107) · [Code](https://github.com/watcl-lab/graphalgosimulation)

</details>

<details>
<summary><strong>2023</strong> · 2 papers</summary>

- **[Looped Transformers are Better at Learning Learning Algorithms](https://openreview.net/forum?id=HHbRxoDTxE)**<br>
  Liu Yang et al. · *ICLR 2024*<br>
  Shows that repeatedly applying a small shared Transformer can learn iterative in-context fitting algorithms with far fewer parameters than a deep untied model.<br>
  [Paper](https://openreview.net/forum?id=HHbRxoDTxE) · [Code](https://github.com/Leiay/looped_transformer)

- **[Looped Transformers as Programmable Computers](https://proceedings.mlr.press/v202/giannou23a.html)**<br>
  Angeliki Giannou et al. · *ICML 2023*<br>
  Constructs constant-size Transformer blocks that execute iterative programs when looped, making the computational role of recurrent depth explicit.<br>
  [Paper](https://proceedings.mlr.press/v202/giannou23a.html) · [Code](https://github.com/jysohn1108/Looped-Transformer)

</details>

<details>
<summary><strong>2019</strong> · 1 paper</summary>

- **[Deep Equilibrium Models](https://arxiv.org/abs/1909.01377)**<br>
  Shaojie Bai, J. Zico Kolter, Vladlen Koltun · *NeurIPS 2019*<br>
  Treats infinitely deep weight-tied networks as fixed-point systems, providing an implicit-depth counterpart to explicitly unrolled loops.<br>
  [Paper](https://arxiv.org/abs/1909.01377) · [Code](https://github.com/locuslab/deq)

</details>

<details>
<summary><strong>2018</strong> · 1 paper</summary>

- **[Universal Transformers](https://arxiv.org/abs/1807.03819)**<br>
  Mostafa Dehghani et al. · *ICLR 2019*<br>
  Establishes the canonical depth-recurrent Transformer: one shared transition repeatedly refines every token, optionally with adaptive halting.<br>
  [Paper](https://arxiv.org/abs/1807.03819) · [Code](https://github.com/tensorflow/tensor2tensor)

</details>

<details>
<summary><strong>2016</strong> · 1 paper</summary>

- **[Adaptive Computation Time for Recurrent Neural Networks](https://arxiv.org/abs/1603.08983)**<br>
  Alex Graves · *arXiv 2016*<br>
  Introduces a differentiable halting mechanism that lets recurrent models spend different amounts of computation on different inputs.<br>
  [Paper](https://arxiv.org/abs/1603.08983)

</details>

[↑ Back to catalog](#complete-catalog)

<a id="architectures--scaling"></a>

### Architectures & Scaling

<details>
<summary><strong>2026</strong> · 36 papers</summary>

- **[Looped Uniform Diffusion Language Models](https://arxiv.org/abs/2610.30066)**<br>
  Saiteja Utpala et al. · *arXiv 2026*<br>
  Adds selective looping inside each denoising step of uniform diffusion language models, cutting training FLOPs by up to 3.3x at matched validation NLL and lowering generation perplexity at a fixed denoising budget, with loop-count distributions favoring smaller counts.<br>
  [Paper](https://arxiv.org/abs/2610.30066)

- **[Asymmetric Looped Transformers: Fixed Global Representations for an Iterative Decoder](https://arxiv.org/abs/2610.28489)**<br>
  Cheng Liang et al. · *arXiv 2026*<br>
  Separates context construction from state refinement: a single-pass encoder writes global KV caches that stay fixed while a weight-tied recurrent decoder attends to them jointly with its own local KV, improving perplexity and zero-shot accuracy up to 1B.<br>
  [Paper](https://arxiv.org/abs/2610.28489)

- **[Block Recursive Transformers for Structured Parameter Sharing](https://arxiv.org/abs/2610.24998)**<br>
  Josep Marques et al. · *EMNLP Findings 2026*<br>
  Shows that sharing granularity is a key factor alongside sharing amount: partitioning layers into contiguous blocks that are each reused before advancing balances local refinement against depth-wise differentiation, beating layer-wise and whole-stack recursive sharing up to 1.7B parameters.<br>
  [Paper](https://arxiv.org/abs/2610.24998) · [Project](https://aim-skku.github.io/BRT/)

- **[UpLoop: Upcycling Large Language Models with Gated Loop](https://arxiv.org/abs/2610.25004)**<br>
  Tieyuan Chen et al. · *arXiv 2026*<br>
  Upcycles a pretrained LLM into a looped one by recurring each selected layer locally and adding hidden-wise gates on the attention and MLP residual branches, breaking the two-loop saturation of prior looped models and gaining 6.17 points across 20 benchmarks at three loops.<br>
  [Paper](https://arxiv.org/abs/2610.25004)

- **[Dual-Slot: From Serial Loops to Parallel Slots in Language Models](https://arxiv.org/abs/2610.25086)**<br>
  Yiqin Hao et al. · *arXiv 2026*<br>
  Removes the serial dependency between loop iterations by splitting computation into a latent slot and a prediction slot, so the current token consumes the previous token's deep state and paired invocations replace sequential ones, retaining 93.1-96.5% (dense) and 98.1-99.6% (MoE) of vanilla decoding throughput.<br>
  [Paper](https://arxiv.org/abs/2610.25086)

- **[Towards Looped Models Done Right, Part I: Topology, Input Injection, Recurrent-State Design](https://arxiv.org/abs/2610.23036)**<br>
  Benhao Huang et al. · *arXiv 2026*<br>
  Isolates three design axes of looped LMs - where recurrence sits, how inputs are injected, and how recurrent state is organized - and finds the complete Huginn-style design, built on a prelude-recurrent block-coda sandwich, beats Ouro at 730M and transfers to MoE at 8B-A0.8B (32B-A3B unrolled).<br>
  [Paper](https://arxiv.org/abs/2610.23036) · [Code](https://github.com/ifm-ai/xllm-loop)

- **[LoopREG: Representation Supervision Enables Test-Time Recurrent Depth in Diffusion Transformers](https://arxiv.org/abs/2610.17877)**<br>
  Zipeng Wang et al. · *arXiv 2026*<br>
  Supervises a recurrent diffusion Transformer's shared block with a pretrained visual encoder's representation, so extra inference visits extrapolate beyond training depth, cutting a SiT-B/2 local-REG baseline's FID from 15.08 to 4.91, with a third visit improving a two-visit checkpoint from 14.71 to 5.34.<br>
  [Paper](https://arxiv.org/abs/2610.17877)

- **[Scaling to Tens of Thousands of Test-Time Iterations with Loop-Native Attention Residuals](https://arxiv.org/abs/2610.11570)**<br>
  Pengxiang Li et al. · *arXiv 2026*<br>
  Argues looped Transformers need loop-native residuals: content-weighted, temporally decayed aggregation of past recurrent states suppresses unreliable updates and lets a 7M model keep improving beyond 20,000 test-time iterations on Sudoku-Extreme.<br>
  [Paper](https://arxiv.org/abs/2610.11570) · [Code](https://github.com/pixeli99/InfiLoop)

- **[One Block, Multiple Depths: Recurrent Vision Transformers with Depth-Programmed Experts](https://arxiv.org/abs/2610.12448)**<br>
  Adrian Bulat, Yassine Ouali, Georgios Tzimiropoulos · *arXiv 2026*<br>
  Applies a single ViT block repeatedly and restores depth-specific FFNs through a continuous depth coordinate that mixes a small shared expert bank, matching full-depth encoders with about 70% fewer stored parameters and supporting resampled elastic deployment depths.<br>
  [Paper](https://arxiv.org/abs/2610.12448)

- **[Recurrent Looped Transformer](https://arxiv.org/abs/2610.07591)**<br>
  Yifan Zhang et al. · *arXiv 2026*<br>
  Splits layers into a parallel causal encoder and a recurrent decoder that merges each token's encoder output with the previous token's decoder state, so computation depth grows with sequence length at fixed per-token cost and parity generalizes to 256 bits.<br>
  [Paper](https://arxiv.org/abs/2610.07591) · [Code](https://github.com/yifanzhang-pro/recurrent-looped-tranformer)

- **[Looping Beyond Twice: A Scalable Recipe for Looped Mixture-of-Experts](https://arxiv.org/abs/2610.01153)**<br>
  Di He et al. · *arXiv 2026*<br>
  Diagnoses why looped MoE stops paying off past two passes - residual variance growth and expert-selection collapse - then stabilizes recurrence with scaled residual updates, input re-injection, per-loop routers and a looping residual to reach 9-12 stable loops from 100M to 1.7B.<br>
  [Paper](https://arxiv.org/abs/2610.01153) · [Code](https://github.com/hed-ucas/LOOM)

- **[The Surprising Effectiveness of Shared Memory in Looped Transformers](https://arxiv.org/abs/2610.02383)**<br>
  Giovanni Monea et al. · *arXiv 2026*<br>
  Pretrains looped LMs so only the first recursion writes a KV cache while later recursions read it plus a short local window; sharing memory improves quality instead of costing it, cutting context memory 76-79% at five recursions from 150M to 1B.<br>
  [Paper](https://arxiv.org/abs/2610.02383)

- **[Scaling Laws for Looped Mixture of Experts](https://arxiv.org/abs/2609.40316)**<br>
  Yanbei Chen, Anirudh Goyal, Raghuraman Krishnamoorthi · *arXiv 2026*<br>
  Derives a joint scaling law over model size, data, sparsity and loop count through a bounded sparsity-conditional recurrence mapping, finding that sparsity buys roughly 3x active-parameter efficiency while recurrence buys roughly 2x total-parameter efficiency on reasoning.<br>
  [Paper](https://arxiv.org/abs/2609.40316)

- **[How to Loop MoE: Flatten the Experts, Untie the Attention](https://arxiv.org/abs/2609.35751)**<br>
  Shouren Wang et al. · *arXiv 2026*<br>
  Asks how an MoE should be looped and answers with Foil: flatten expert layers so each pass routes over twice as many experts, and untie attention per pass while experts and routers stay shared, lowering loss and balancing routing at 100B tokens.<br>
  [Paper](https://arxiv.org/abs/2609.35751) · [Code](https://github.com/SR-A-W/how-to-loop-moe)

- **[Storing Is Not Remembering: LSTM-UT and Bounded Gated Memory for Looped Transformers](https://arxiv.org/abs/2609.19521)**<br>
  Aras Kavuncu, Muhammad Burhan Hafez · *arXiv 2026*<br>
  Shows that keeping more history is not the same as making it usable, then adds a small bounded gated cell state to the shared block; trained to depth 12, it holds 99.7% exact accuracy at depth 60 and stays above 99.95% at depth 1,000.<br>
  [Paper](https://arxiv.org/abs/2609.19521)

- **[MoRE: Mixture of Reused Experts](https://arxiv.org/abs/2609.18176)**<br>
  Eric S. Qiu et al. · *COLM 2026*<br>
  Shares expert pools across groups of adjacent layers while keeping a router per layer and adding lightweight depth embeddings, expanding routing combinations without extra parameters and outperforming standard MoE and weight-sharing baselines from 114M to 1.15B.<br>
  [Paper](https://arxiv.org/abs/2609.18176)

- **[How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents](https://arxiv.org/abs/2609.19107)**<br>
  Zixi Chen et al. · *arXiv 2026*<br>
  Shows architectural interventions can move scaling exponents, not just constants: model growth with or without weight sharing gives the largest exponent gains, a 7.4B model-growth architecture matches GPT-3 13B on CORE with roughly 20x less compute, and loop count should rise with scale in data-constrained multi-epoch regimes.<br>
  [Paper](https://arxiv.org/abs/2609.19107) · [Code](https://github.com/qlabs-eng/scaling-exponents)

- **[SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers](https://arxiv.org/abs/2609.01343)**<br>
  Shaowen Wang et al. · *arXiv 2026*<br>
  Evaluates looped MoE models while jointly matching FLOPs, non-embedding parameters, and KV cache, separating architectural effects from extra compute.<br>
  [Paper](https://arxiv.org/abs/2609.01343)

- **[Squeezing More from Limited Data with Recursive Transformers](https://arxiv.org/abs/2608.26973)**<br>
  Serdar Gülbahar et al. · *arXiv 2026*<br>
  Studies recursive weight sharing when pretraining data are scarce, coupling it with factorized embeddings to spend compute without over-expanding parameter capacity.<br>
  [Paper](https://arxiv.org/abs/2608.26973)

- **[Allocating Recurrent Compute in Looped Language Models](https://arxiv.org/abs/2608.18230)**<br>
  Ruhai Lin et al. · *arXiv 2026*<br>
  Asks which sublayer should recur and finds that repeatedly applying the sequence mixer can retain much of the loop benefit without repeating every FFN.<br>
  [Paper](https://arxiv.org/abs/2608.18230)

- **[Gated Recurrent Transformers: Expressive Depth through Recurrent Modulation](https://arxiv.org/abs/2608.15062)**<br>
  Amr Hegazy et al. · *arXiv 2026*<br>
  Modulates a shared recurrent core with a learned update gate and fresh noise, allowing repeated applications to specialize by step.<br>
  [Paper](https://arxiv.org/abs/2608.15062)

- **[Looped Transformers with Source-Centered State Evolution](https://arxiv.org/abs/2607.27656)**<br>
  Bum Jun Kim et al. · *arXiv 2026*<br>
  Defines recurrence around a learned input-conditioned anchor whose zero deviation is exactly invariant, removing the forcing bias created by repeated additive input injection.<br>
  [Paper](https://arxiv.org/abs/2607.27656)

- **[Mobius Learning: Cyclic Depth Folding in Transformers](https://arxiv.org/abs/2607.17843)**<br>
  Tongtian Zhu · *arXiv 2026*<br>
  Rotates block order across data streams so each shared group learns both shallow and deep roles, exploring cyclic depth folding beyond a fixed loop order.<br>
  [Paper](https://arxiv.org/abs/2607.17843)

- **[Loop the Loopies!](https://arxiv.org/abs/2607.16051)**<br>
  Zitian Gao et al. · *arXiv 2026*<br>
  Develops a large-scale looped MoE recipe that reinvests parameter-memory savings while comparing against compute-matched sparse baselines.<br>
  [Paper](https://arxiv.org/abs/2607.16051)

- **[LoopMoE: Unifying Iterative Computation with Mixture-of-Experts for Language Modeling](https://arxiv.org/abs/2606.04438)**<br>
  Wenkai Chen et al. · *arXiv 2026*<br>
  Couples repeated shared computation with sparse expert routing, seeking both iterative refinement and expandable parameter capacity.<br>
  [Paper](https://arxiv.org/abs/2606.04438)

- **[CART: Context-Anchored Recurrent Transformer -- A Parameter-Efficient Architecture with Learned Stability](https://arxiv.org/abs/2606.01495)**<br>
  Chad A. Capps · *arXiv 2026*<br>
  Cross-attends a recurrent core to frozen context keys and values under a learned stability gate; controlled experiments also document where this recipe fails to beat dense baselines or extrapolate in depth.<br>
  [Paper](https://arxiv.org/abs/2606.01495)

- **[A Dual-Path Architecture for Scaling Compute and Capacity in LLMs](https://arxiv.org/abs/2605.30202)**<br>
  Markus Frey et al. · *arXiv 2026*<br>
  Pairs a repeatedly applied deep sublayer with a single-pass wide feed-forward path, allowing token-wise gates to trade iterative compute against one-step parameter capacity.<br>
  [Paper](https://arxiv.org/abs/2605.30202)

- **[Latent Recurrent Transformer: Architecture Exploration, Training Strategies, and Scaling Behavior](https://arxiv.org/abs/2605.26797)**<br>
  Zeyi Huang et al. · *arXiv 2026*<br>
  Carries a high-level hidden state from one token into the next while preserving the standard KV-cache interface, and introduces interleaved parallel training for the cross-token recurrence.<br>
  [Paper](https://arxiv.org/abs/2605.26797)

- **[LoopUS: Recasting Pretrained LLMs into Looped Latent Refinement Models](https://arxiv.org/abs/2605.11011)**<br>
  Taekhyun Park et al. · *arXiv 2026*<br>
  Transforms an existing pretrained LLM into a looped latent-refinement model instead of training recurrent depth entirely from scratch.<br>
  [Paper](https://arxiv.org/abs/2605.11011) · [Code](https://github.com/Thrillcrazyer/LoopUS) · [Project](https://thrillcrazyer.github.io/LoopUS)

- **[Sparse Layers are Critical to Scaling Looped Language Models](https://arxiv.org/abs/2605.09165)**<br>
  Ryan Lee et al. · *arXiv 2026*<br>
  Finds that adding sparse capacity is especially important when scaling recurrent language models, improving their quality–memory trade-off and exit behavior.<br>
  [Paper](https://arxiv.org/abs/2605.09165)

- **[Hyperloop Transformers](https://arxiv.org/abs/2604.21254)**<br>
  Abbas Zeitoun et al. · *arXiv 2026*<br>
  Loops only a middle layer block and adds hyper-connections between visits, targeting strong language modeling under model-memory constraints and quantization.<br>
  [Paper](https://arxiv.org/abs/2604.21254)

- **[How Much Is One Recurrence Worth? Iso-Depth Scaling Laws for Looped Language Models](https://arxiv.org/abs/2604.21106)**<br>
  Kristian Schwethelm et al. · *arXiv 2026*<br>
  Quantifies the quality value of a repeated layer relative to a unique layer under matched effective depth and training compute.<br>
  [Paper](https://arxiv.org/abs/2604.21106) · [Code](https://github.com/kschwethelm/looped-lm-scaling)

- **[Ouroboros: Dynamic Weight Generation for Recursive Transformers via Input-Conditioned LoRA Modulation](https://arxiv.org/abs/2604.02051)**<br>
  Jaber Jaber, Osama Jaber · *arXiv 2026*<br>
  Uses a compact controller to generate input- and step-conditioned modulation over shared LoRA bases, giving a recursive block different effective transformations at each visit.<br>
  [Paper](https://arxiv.org/abs/2604.02051) · [Code](https://github.com/RightNow-AI/ouroboros)

- **[Adaptive Loops and Memory in Transformers: Think Harder or Know More?](https://arxiv.org/abs/2603.08391)**<br>
  Markus Frey et al. · *arXiv 2026*<br>
  Combines learned per-layer looping with gated memory banks, separating extra iterative computation from additional learned storage and revealing different benefits across task types.<br>
  [Paper](https://arxiv.org/abs/2603.08391)

- **[SpiralFormer: Looped Transformers Can Learn Hierarchical Dependencies via Multi-Resolution Recursion](https://arxiv.org/abs/2602.11698)**<br>
  Chengting Yu et al. · *arXiv 2026*<br>
  Runs successive recurrences at multiple sequence resolutions, turning resolution into another axis for efficient hierarchical computation.<br>
  [Paper](https://arxiv.org/abs/2602.11698)

- **[Depth-Recurrent Attention Mixtures: Giving Latent Reasoning the Attention it Deserves](https://arxiv.org/abs/2601.21582)**<br>
  Jonas Knupp et al. · *arXiv 2026*<br>
  Diversifies the attention transformations available across repeated depth while preserving a recurrent core.<br>
  [Paper](https://arxiv.org/abs/2601.21582)

</details>

<details>
<summary><strong>2025</strong> · 4 papers</summary>

- **[Improving Recursive Transformers with Mixture of LoRAs](https://arxiv.org/abs/2512.12880)**<br>
  Mohammadmahdi Nouriborji et al. · *arXiv 2025*<br>
  Restores some layer-wise expressivity lost to recursive weight sharing by inserting token-conditioned LoRA experts into a shared feed-forward network.<br>
  [Paper](https://arxiv.org/abs/2512.12880)

- **[Teaching Pretrained Language Models to Think Deeper with Retrofitted Recurrence](https://arxiv.org/abs/2511.07384)**<br>
  Sean McLeish et al. · *arXiv 2025*<br>
  Converts dense pretrained models into recurrent-depth models through continued training, testing how much loop behavior can be installed after pretraining.<br>
  [Paper](https://arxiv.org/abs/2511.07384) · [Code](https://github.com/mcleish7/retrofitting-recurrence)

- **[MeSH: Memory-as-State-Highways for Recursive Transformers](https://arxiv.org/abs/2510.07739)**<br>
  Chengting Yu et al. · *arXiv 2025*<br>
  Adds an explicit memory buffer and lightweight routers to separate long-lived from transient state and encourage distinct computation at different recursive steps.<br>
  [Paper](https://arxiv.org/abs/2510.07739) · [Code](https://github.com/LivingFutureLab/MeSH)

- **[Two-Scale Latent Dynamics for Recurrent-Depth Transformers](https://arxiv.org/abs/2509.23314)**<br>
  Francesco Pappone et al. · *arXiv 2025*<br>
  Introduces fast and slow latent dynamics so a recurrent-depth model can separate local refinement from longer-horizon state evolution.<br>
  [Paper](https://arxiv.org/abs/2509.23314)

</details>

<details>
<summary><strong>2024</strong> · 3 papers</summary>

- **[Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA](https://openreview.net/forum?id=WwpYSOkkCt)**<br>
  Sangmin Bae et al. · *ICLR 2025*<br>
  Folds pretrained Transformers into repeated blocks and restores depth-specific flexibility with small LoRA adapters, while motivating continuous depth-wise batching.<br>
  [Paper](https://openreview.net/forum?id=WwpYSOkkCt)

- **[MoEUT: Mixture-of-Experts Universal Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/hash/321387ba926b8e58d3591c0aeb52ffc2-Abstract-Conference.html)**<br>
  Róbert Csordás et al. · *NeurIPS 2024*<br>
  Adds sparse expert capacity and improved recurrent dynamics to Universal Transformers, narrowing the quality gap with standard language models.<br>
  [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/321387ba926b8e58d3591c0aeb52ffc2-Abstract-Conference.html) · [Code](https://github.com/robertcsordas/moeut)

- **[AlgoFormer: An Efficient Transformer Framework with Algorithmic Structures](https://openreview.net/forum?id=oYP2Pd5aQt)**<br>
  Yihang Gao et al. · *TMLR 2025*<br>
  Combines task-specific pre- and post-processing blocks with a reusable middle block, injecting an iterative algorithmic prior into Transformer learning.<br>
  [Paper](https://openreview.net/forum?id=oYP2Pd5aQt) · [Code](https://github.com/chuanyang-Zheng/Algoformer)

</details>

[↑ Back to catalog](#complete-catalog)

<a id="latent-reasoning"></a>

### Latent Reasoning

<details>
<summary><strong>2026</strong> · 16 papers</summary>

- **[Present but Hard to Read: Probing Latent Reasoning with Minimal Pairs](https://arxiv.org/abs/2610.28498)**<br>
  Aur Shalev Merin · *arXiv 2026*<br>
  Minimal-pair probing of Ouro-1.4B and Qwen 2.5-1.5B finds a copied digit in a code shared across questions (readout about 0.9), while a one-prompt-at-a-time probe barely reads it; a small signal for the unwritten intermediate sum is readable but not used.<br>
  [Paper](https://arxiv.org/abs/2610.28498)

- **[Causal Latent Workspaces for Looped Transformers](https://arxiv.org/abs/2610.22796)**<br>
  Ilia Zaznov · *arXiv 2026*<br>
  Adds a causal, content-addressable prefix workspace to an anchored four-round shared-depth Transformer: each position writes gated vectors into prefix-specific latent slots and retrieves a summary before the next block application, achieving the best mean held-out perplexity in five of six settings against five Transformer controls.<br>
  [Paper](https://arxiv.org/abs/2610.22796)

- **[Learning to Compute Is Not Learning to Retain or Reuse in Looped Transformers](https://arxiv.org/abs/2610.19768)**<br>
  Peilong Zhou et al. · *arXiv 2026*<br>
  Separates failed computation, lost retention, and non-reusable states in looped Transformers using in-context Mealy machines with exact hidden-state counterfactuals: models trained to answer at loop 32 keep only 22% of those answers at loop 64, while random-position supervision keeps 99.8%.<br>
  [Paper](https://arxiv.org/abs/2610.19768)

- **[From Chain-of-Thought to Loops: Non-Autoregressive Latent Reasoning via Looped Transformers](https://arxiv.org/abs/2610.11472)**<br>
  Gerard Grau García et al. · *arXiv 2026*<br>
  Replaces left-to-right latent generation with iterative refinement of a compact latent workspace: a shared Transformer is reapplied several times, a probabilistic head samples latent tokens in parallel, and those condition an autoregressive decoder. Matches explicit-CoT accuracy on HumanEval and MBPP at 42x lower reasoning-phase latency.<br>
  [Paper](https://arxiv.org/abs/2610.11472)

- **[What Matters for Latent Reasoning with Flow Matching](https://arxiv.org/abs/2610.06666)**<br>
  Yassine Ouali, Adrian Bulat, Georgios Tzimiropoulos · *arXiv 2026*<br>
  Derives FLaRe from five requirements for a latent thought (useful, diverse, explainable, refinable, efficient): a flow-matching recipe covering what the latent encodes, where to train the flow and how to read out, reaching 97% of explicit-CoT accuracy at a quarter of the latency.<br>
  [Paper](https://arxiv.org/abs/2610.06666)

- **[Shared Weights, Selected Computations: How Looped Transformers Route What Each Loop Does](https://arxiv.org/abs/2609.39892)**<br>
  Jiaju Wu, Yi Hu, Muhan Zhang · *arXiv 2026*<br>
  Asks whether every loop of a looped Transformer performs the same computation. On graph walks, loops can advance by different numbers of steps, and a learned linear map acting on the entering hidden state selects which learned transition the shared block executes.<br>
  [Paper](https://arxiv.org/abs/2609.39892)

- **[What Makes Recurrence Effective in Looped Language Models?](https://arxiv.org/abs/2609.36636)**<br>
  Xinlin Zhuang et al. · *arXiv 2026*<br>
  Controlled study of when extra recurrence helps looped language models: reasoning improves beyond the training horizon while knowledge degrades, effective depth alone does not predict performance, and channel-wise history-state injection with timestep conditioning is more robust than conventional initial-state injection.<br>
  [Paper](https://arxiv.org/abs/2609.36636)

- **[Principled Thoughts for Latent Recursive LLM Systems](https://arxiv.org/abs/2609.36159)**<br>
  Fahd Seddik, Fatemeh Fard · *arXiv 2026*<br>
  Argues that cross-entropy-only training leaves continuous thoughts unconstrained, proves four resulting failure modes, and turns causality, minimality, separability and stability into differentiable auxiliary losses. REST gains up to 7.5 points in single-agent and multi-agent latent recursion.<br>
  [Paper](https://arxiv.org/abs/2609.36159) · [Project](https://fard-lab.github.io/REST)

- **[Trading Depth for Time in Recurrent Transformers](https://arxiv.org/abs/2609.21605)**<br>
  Zeyi Huang et al. · *arXiv 2026*<br>
  Inserts a latent thought token between vocabulary tokens so a shared backbone refines the hidden state before predicting. Under matched training FLOPs it beats PonderLM-2 and overtakes a two-loop Transformer as compute rises, recovering 89% of the LRT depth-doubling gain at about half the parameters.<br>
  [Paper](https://arxiv.org/abs/2609.21605)

- **[Penelope: Localized Latent Recurrence for Efficient Structured Reasoning](https://arxiv.org/abs/2607.25915)**<br>
  Yutong Chen et al. · *arXiv 2026*<br>
  Restricts recurrent refinement to a middle decoder interval anchored by a cached prefix, reducing the cost of latent reasoning without repeatedly running the full model.<br>
  [Paper](https://arxiv.org/abs/2607.25915)

- **[T^2MLR: Transformer with Temporal Middle-Layer Recurrence](https://arxiv.org/abs/2607.15178)**<br>
  Ziyang Cai et al. · *arXiv 2026*<br>
  Feeds a cached middle-layer representation from the previous token into an earlier layer of the current token, preserving latent computation across decoding steps with localized recurrence.<br>
  [Paper](https://arxiv.org/abs/2607.15178)

- **[DiscoLoop: Looping Discrete Embeddings and Continuous Hidden States for Multi-hop Reasoning](https://arxiv.org/abs/2607.00341)**<br>
  Hengyu Fu et al. · *arXiv 2026*<br>
  Carries both a discrete embedding channel and a continuous hidden-state channel through recurrence, addressing a gap between decodable bridge entities and token-aligned representations.<br>
  [Paper](https://arxiv.org/abs/2607.00341)

- **[Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers](https://arxiv.org/abs/2606.31779)**<br>
  Ying Fan, Anej Svete, Kangwook Lee · *arXiv 2026*<br>
  LOTUS supervises parallel latent slots against explicit reasoning steps, bringing latent looped reasoning closer to chain-of-thought quality with lower thought latency.<br>
  [Paper](https://arxiv.org/abs/2606.31779)

- **[Solve the Loop: Attractor Models for Language and Reasoning](https://arxiv.org/abs/2605.12466)**<br>
  Jacob Fein-Ashley, Paria Rashidinejad · *arXiv 2026*<br>
  Replaces fixed unrolling with an attractor module solved to convergence and trained by implicit differentiation, enabling adaptive effective depth with constant training memory.<br>
  [Paper](https://arxiv.org/abs/2605.12466)

- **[Latent Chain-of-Thought Improves Structured-Data Transformers](https://arxiv.org/abs/2605.11262)**<br>
  Carson Dudley, Samet Oymak · *arXiv 2026*<br>
  Feeds compressed query-position states back as extra tokens for repeated processing, extending latent test-time computation to tabular prediction and time-series forecasting.<br>
  [Paper](https://arxiv.org/abs/2605.11262)

- **[Thinking Deeper, Not Longer: Depth-Recurrent Transformers for Compositional Generalization](https://arxiv.org/abs/2603.21676)**<br>
  Hung-Hsuan Chen · *arXiv 2026*<br>
  Tests whether recurrent latent depth, rather than longer decoded rationales, improves systematic composition outside the training distribution.<br>
  [Paper](https://arxiv.org/abs/2603.21676)

</details>

<details>
<summary><strong>2025</strong> · 5 papers</summary>

- **[Closed-Loop Transformers: Autoregressive Modeling as Iterative Latent Equilibrium](https://arxiv.org/abs/2511.21882)**<br>
  Akbar Anbar Jafari, Gholamreza Anbarjafari · *arXiv 2025*<br>
  Proposes refining each token’s latent state toward a learned energy-based equilibrium before generation, framing autoregressive prediction as a closed-loop correction process.<br>
  [Paper](https://arxiv.org/abs/2511.21882)

- **[Scaling Latent Reasoning via Looped Language Models](https://arxiv.org/abs/2510.25741)**<br>
  Rui-Jie Zhu et al. · *arXiv 2025*<br>
  Introduces Ouro, pretrained looped language models with entropy-regularized depth allocation, and studies recurrent depth as a distinct scaling direction.<br>
  [Paper](https://arxiv.org/abs/2510.25741) · [Project](https://ouro-llm.github.io/)

- **[Reasoning with Latent Thoughts: On the Power of Looped Transformers](https://openreview.net/forum?id=din0lGfZFd)**<br>
  Nikunj Saunshi et al. · *ICLR 2025*<br>
  Connects recurrence to latent multi-step reasoning theoretically and empirically, showing that effective depth can matter more than unique parameter depth.<br>
  [Paper](https://openreview.net/forum?id=din0lGfZFd)

- **[Enhancing Auto-regressive Chain-of-Thought through Loop-Aligned Reasoning](https://arxiv.org/abs/2502.08482)**<br>
  Qifan Yu et al. · *arXiv 2025*<br>
  RELAY aligns visible reasoning steps with loop iterations, using intermediate supervision to generate length-generalizing rationales that then improve an autoregressive model.<br>
  [Paper](https://arxiv.org/abs/2502.08482) · [Code](https://github.com/qifanyu/RELAY)

- **[Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach](https://arxiv.org/abs/2502.05171)**<br>
  Jonas Geiping et al. · *NeurIPS 2025*<br>
  Scales recurrent depth to a 3.5B-parameter, 800B-token language model and shows that extra test-time loops can improve reasoning without emitting more tokens.<br>
  [Paper](https://arxiv.org/abs/2502.05171) · [Code](https://github.com/seal-rg/recurrent-pretraining) · [Project](https://huggingface.co/tomg-group-umd/huginn-0125)

</details>

[↑ Back to catalog](#complete-catalog)

<a id="adaptive-compute"></a>

### Adaptive Compute

<details>
<summary><strong>2026</strong> · 21 papers</summary>

- **[Loop to Look Better: Learning Adaptive Depth for Question-Guided Perception in Vision-Language Models](https://arxiv.org/abs/2610.30824)**<br>
  Wencheng Ye et al. · *arXiv 2026*<br>
  LoopLook gives pretrained VLMs encoder-side recurrent perception: a middle-to-late vision-encoder window is revisited with question injection, a learned stopping mechanism sets visual depth, and a token-wise Mixture-of-Looks merges loop representations, gaining up to 8.6% for 5.1-6.5% TTFT overhead.<br>
  [Paper](https://arxiv.org/abs/2610.30824)

- **[Think Harder Where It Matters: Item-Level Adaptive Recursion for Sequential Recommendation](https://arxiv.org/abs/2610.30128)**<br>
  Zhanshuo Cao et al. · *arXiv 2026*<br>
  LoopRec applies one weight-shared block recurrently in sequential recommendation and puts a lightweight binary exit-or-continue gate at each recursion boundary, turning fixed depth into a per-item property; learned allocation sends deeper computation to lower-frequency items and recent interactions.<br>
  [Paper](https://arxiv.org/abs/2610.30128) · [Code](https://github.com/Elpmis117/LoopRec)

- **[Spherical Fixed-Point Reasoners: Adaptive Loop Halting on the Hypersphere](https://arxiv.org/abs/2610.25646)**<br>
  Arber Zela et al. · *arXiv 2026*<br>
  SFPRM moves the damped fixed-point loop of FPRM onto the unit hypersphere, turning input injection, damping, and halting into geodesic operations that are bounded by construction; it beats FPRM on Sudoku-Extreme, Maze-Hard, and Mini-ARC while allocating test-time compute more effectively.<br>
  [Paper](https://arxiv.org/abs/2610.25646) · [Code](https://github.com/arberzela/sfprm)

- **[recAMPLIFY: Large-Scale Pretraining of Recursive Protein Language Models](https://arxiv.org/abs/2610.26747)**<br>
  Saurav Jha et al. · *arXiv 2026*<br>
  recAMPLIFY pretrains a weight-tied protein language model whose core refines residues over an adjustable number of cycles, then adds Gated Mixture Recurrence, a learned residual gate unifying halting and gating that cuts expected layer depth by up to 37% while halt depth tracks biological properties.<br>
  [Paper](https://arxiv.org/abs/2610.26747) · [Code](https://github.com/chandar-lab/AMPLIFY/tree/recamplify)

- **[One Model to Loop Them All: Elastic Latent Recurrence for Language Models](https://arxiv.org/abs/2610.12582)**<br>
  Faisal Ladhak et al. · *arXiv 2026*<br>
  Elastic Latent Recurrence trains looped LMs so one checkpoint reaches near-parity with a non-recurrent model at a single loop and gains accuracy with each extra loop, using gated state updates, mixed loop counts, and loop-index/budget conditioning; the 4B model adds 7.25 points at four loops.<br>
  [Paper](https://arxiv.org/abs/2610.12582)

- **[Enabling Dynamic Computation in Looped LMs](https://arxiv.org/abs/2610.09013)**<br>
  Aayush Mishra et al. · *arXiv 2026*<br>
  Ouro-style looped LMs do not realize dynamic computation in practice because every loop needs its own KV cache; a best-available KV caching scheme cuts FLOPs and KV memory by up to 30% at full-depth performance, and a corrected early-exit prior lets tokens exit at heterogeneous depths.<br>
  [Paper](https://arxiv.org/abs/2610.09013)

- **[ALoDLM: Adaptively Looped Diffusion Language Models](https://arxiv.org/abs/2610.04198)**<br>
  Liancheng Fang et al. · *arXiv 2026*<br>
  ALoDLM replaces the uniform denoising depth of diffusion language models with token-adaptive latent recurrence: ready positions commit early while unresolved ones keep refining, and a token-wise schedule learned through a conditional NELBO improves quality-efficiency at 1.7B and 8B.<br>
  [Paper](https://arxiv.org/abs/2610.04198) · [Code](https://github.com/amazon-science/ALoDLM) · [Project](https://alo-dlm.github.io)

- **[AdaLoop: Adaptive-Depth Latent Reasoning for Audio Language Models](https://arxiv.org/abs/2610.06949)**<br>
  Lee Seung-woo, Bowen Qi · *arXiv 2026*<br>
  AdaLoop adds a lightweight recurrent module that iterates a shared Transformer block over an audio representation and learns when to halt per audio-question pair, adding under 3% parameters and improving three audio LLMs by 2.9 to 3.8 points, with the largest gains on perception-heavy subtasks.<br>
  [Paper](https://arxiv.org/abs/2610.06949)

- **[Scheduling Recursive Reasoning in Looped Transformers](https://arxiv.org/abs/2609.36653)**<br>
  Boyuan Wang et al. · *arXiv 2026*<br>
  TAPS decomposes the sensitivity of terminal loss to recurrent update scale into persistent-progress and centered-fluctuation terms and adapts the step size online; it improves terminal accuracy without retraining and, when folded into training, yields further gains with up to 1.56x wall-clock speedup at matched baseline accuracy.<br>
  [Paper](https://arxiv.org/abs/2609.36653)

- **[Looped Actor: Depth-Recurrent Reasoning Models for Reinforcement Learning](https://arxiv.org/abs/2609.37432)**<br>
  T. Konstantin Rusch et al. · *arXiv 2026*<br>
  Looped Actor is a depth-recurrent policy that refines a latent state toward a fixed point and varies its loop count with the state; it matches an untied baseline with 16x more parameters, and on Boxoban loop counts grow with the number of remaining pushes.<br>
  [Paper](https://arxiv.org/abs/2609.37432) · [Code](https://github.com/camail-official/LoopedActor)

- **[Improving Test-Time Scaling with Adaptive Looped Transformers](https://arxiv.org/abs/2609.35748)**<br>
  Yichen You et al. · *arXiv 2026*<br>
  TaH2 jointly post-trains a looped backbone and an iteration decider supervised by lookahead labels marking whether another loop helps, concentrating extra iterations on tokens that benefit and raising the AIME accuracy-compute slope by 53% over the non-looped baseline.<br>
  [Paper](https://arxiv.org/abs/2609.35748) · [Code](https://github.com/thu-nics/TaH)

- **[MoR-MLLM: Mixture of Recursions for Efficient Multimodal Large Language Models](https://arxiv.org/abs/2610.08830)**<br>
  Pengcheng Zheng et al. · *arXiv 2026*<br>
  MoR-MLLM brings Mixture-of-Recursions to multimodal LLMs, giving each token a learned recursive depth so visually or linguistically hard tokens get more computation while easy ones skip it, stabilized by three-stage tuning and an entropy-regularized routing loss.<br>
  [Paper](https://arxiv.org/abs/2610.08830)

- **[T-LoopFormer: Token-Level Elastic-Depth Looped Transformers with Dynamic Routing](https://arxiv.org/abs/2609.15160)**<br>
  Mingqian Yu et al. · *arXiv 2026*<br>
  T-LoopFormer lets every token pick its own loop count through a dynamic token-choice router and pairs it with a per-recursion KV cache so tokens at different depths attend only to matching states, lowering decoding latency while holding language-modeling and zero-shot reasoning accuracy.<br>
  [Paper](https://arxiv.org/abs/2609.15160) · [Code](https://github.com/YuMingQian1234/T-LoopFormer)

- **[RecurTrace: Adaptive Latent Reasoning with Loop-Time Memory](https://arxiv.org/abs/2609.03379)**<br>
  Yuxiang Wang et al. · *arXiv 2026*<br>
  Lets each repeated layer attend over its own prior loop states and trains a halting head from loss-improvement supervision, combining loop-time memory with input-adaptive depth.<br>
  [Paper](https://arxiv.org/abs/2609.03379)

- **[Per-Token Fixed-Point Convergence in Depth-Recurrent Transformers](https://arxiv.org/abs/2607.14427)**<br>
  Joe Logan · *arXiv 2026*<br>
  Measures token-specific convergence depths and shows that a training-free stability rule can halt settled tokens earlier than a learned router at the studied scale.<br>
  [Paper](https://arxiv.org/abs/2607.14427)

- **[Adaptive Depth in Looped Transformers: Diagnosing Learned Halting Gates and Trajectory Readouts](https://arxiv.org/abs/2607.20519)**<br>
  Andrei Cristian Popescu et al. · *arXiv 2026*<br>
  Separates trajectory formation from exit readout and finds that simple post-hoc confidence rules can rival learned gates when the recurrent trajectory is shaped independently.<br>
  [Paper](https://arxiv.org/abs/2607.20519)

- **[Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping](https://arxiv.org/abs/2606.29983)**<br>
  Hsun-Yu Kuo et al. · *arXiv 2026*<br>
  Randomizes supervised stopping depth and learns when to halt, reducing sensitivity to a single training horizon on length-generalization tasks.<br>
  [Paper](https://arxiv.org/abs/2606.29983)

- **[Fixed-Point Reasoners: Stable and Adaptive Deep Looped Transformers](https://arxiv.org/abs/2606.18206)**<br>
  Sajad Movahedi et al. · *arXiv 2026*<br>
  Trains deep looped Transformers around stable attractors so inference can stop by convergence rather than a fixed iteration count.<br>
  [Paper](https://arxiv.org/abs/2606.18206) · [Code](https://github.com/nilskiKonjIzDunava/fprm)

- **[Skip a Layer or Loop It? Learning Program-of-Layers in LLMs](https://arxiv.org/abs/2606.06574)**<br>
  Ziyue Li, Yang Li, Tianyi Zhou · *ICML 2026*<br>
  Learns input-conditioned programs that can traverse, skip, or revisit modules from a pretrained Transformer stack.<br>
  [Paper](https://arxiv.org/abs/2606.06574) · [Code](https://github.com/tianyi-lab/PoLar)

- **[AdaPonderLM: Gated Pondering Language Models with Token-Wise Adaptive Depth](https://arxiv.org/abs/2603.01914)**<br>
  Shixiang Song et al. · *arXiv 2026*<br>
  Learns token-wise pondering gates so a shared language-model block can stop easy tokens early and continue refining harder ones.<br>
  [Paper](https://arxiv.org/abs/2603.01914)

- **[LoopFormer: Elastic-Depth Looped Transformers for Latent Reasoning via Shortcut Modulation](https://openreview.net/forum?id=RzYXb5YWBs)**<br>
  Ahmadreza Jeddi et al. · *ICLR 2026*<br>
  Trains loop trajectories of different lengths to agree, enabling one model to operate smoothly across inference budgets.<br>
  [Paper](https://openreview.net/forum?id=RzYXb5YWBs) · [Code](https://github.com/armenjeddi/loopformer) · [Project](https://loopformer.github.io/)

</details>

<details>
<summary><strong>2025</strong> · 3 papers</summary>

- **[Think-at-Hard: Selective Latent Iterations to Improve Reasoning Language Models](https://openreview.net/forum?id=eQaJSRZiGn)**<br>
  Tianyu Fu et al. · *ICML 2026*<br>
  Uses a lightweight decider to select hard tokens for additional latent iterations, with depth-aware LoRA and duo-causal attention supporting targeted refinement.<br>
  [Paper](https://openreview.net/forum?id=eQaJSRZiGn) · [Code](https://github.com/thu-nics/TaH)

- **[Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation](https://arxiv.org/abs/2507.10524)**<br>
  Sangmin Bae et al. · *NeurIPS 2025*<br>
  Routes each token to a learned recursion depth inside a shared Transformer stack, coupling parameter reuse with token-level sparse computation.<br>
  [Paper](https://arxiv.org/abs/2507.10524) · [Code](https://github.com/raymin0223/mixture_of_recursions)

- **[Skip a Layer or Loop it? Test-Time Depth Adaptation of Pretrained LLMs](https://arxiv.org/abs/2507.07996)**<br>
  Ziyue Li, Yang Li, Tianyi Zhou · *arXiv 2025*<br>
  Studies inference-time layer skipping and repetition in pretrained LLMs, treating the existing stack as a flexible depth program rather than a fixed path.<br>
  [Paper](https://arxiv.org/abs/2507.07996)

</details>

[↑ Back to catalog](#complete-catalog)

<a id="training--analysis"></a>

### Training & Analysis

<details>
<summary><strong>2026</strong> · 30 papers</summary>

- **[How Much Gradient Does Truncated Backprop Lose in Looped Transformers?](https://arxiv.org/abs/2610.28871)**<br>
  Aur Shalev Merin · *arXiv 2026*<br>
  Measures, exactly and for every truncation length from one backward pass, the weight gradient discarded by last-k-loop training on nine looped language models: it sits near the output, shrinks during fine-tuning, and shows no demonstrated advantage over simple rules in predicting truncation's training cost.<br>
  [Paper](https://arxiv.org/abs/2610.28871)

- **[Truncate or Not? A Scaling Study of Looped Transformers with Truncated Backpropagation](https://arxiv.org/abs/2610.26030)**<br>
  Xuyuan Xiong et al. · *arXiv 2026*<br>
  Varies model size, tokens, and forward/backward loop counts across nearly 600 runs and fits one scaling law in effective parameters; at matched compute, full BPTT through fewer loops beats truncated training, and two trained loops is the best looped setting.<br>
  [Paper](https://arxiv.org/abs/2610.26030)

- **[Inside the Loop: A Mechanistic Study of Weight-Tied Transformers on Depth-Bound Algorithmic Tasks](https://arxiv.org/abs/2610.24135)**<br>
  Magnus Sesodia et al. · *NeurIPS 2026*<br>
  On directed permutation traversal with per-hop ground truth, a four-layer block iterated eight times solves every seed, whereas an identically trained untied model of equal effective depth fails unless given a lower learning rate or intermediate-layer supervision; probing and interventions show an iteration-budget-aware staircase.<br>
  [Paper](https://arxiv.org/abs/2610.24135) · [Code](https://github.com/magnus-sesodia/insidetheloop)

- **[Adaptive-Depth Is a Finishing Stage](https://arxiv.org/abs/2610.14252)**<br>
  Andrei Piterbarg et al. · *NeurIPS 2026 AXIOM Workshop*<br>
  Fixed-first training holds a fixed shallow depth for most of the run and varies depth only in a short final phase, cutting modeled training compute by 45% at 200M and 31-37% at 1B parameters while keeping NLL within 0.5% and 0.8% respectively.<br>
  [Paper](https://arxiv.org/abs/2610.14252)

- **[Recurrent Self-Improvement: Dynamic Cross-Loop On-Policy Distillation for Looped Language Models](https://arxiv.org/abs/2610.10623)**<br>
  Yi Wang et al. · *arXiv 2026*<br>
  Uses a looped model's own frozen terminal loop as a compute-privileged teacher for its intermediate loops on student-generated rollouts, giving dense cross-loop supervision without external teachers; a dynamic variant refreshes the teacher as shared weights update.<br>
  [Paper](https://arxiv.org/abs/2610.10623)

- **[Towards Looped Models Done Right, Part II: Rethinking at Fixed Points](https://arxiv.org/abs/2610.06833)**<br>
  Benhao Huang et al. · *arXiv 2026*<br>
  Argues that near-fixed-point recurrent states license truncated backprop, terminal KV sharing, faster distilled prefill, and replay-based RL, then improves the two ingredients shaping those fixed points: a learned entropy-regularized depth prior and orthogonal input injection.<br>
  [Paper](https://arxiv.org/abs/2610.06833)

- **[Closing the Loop: Practical Training Recipes for Looped Language Models](https://arxiv.org/abs/2610.00673)**<br>
  Andrei Marchenko et al. · *arXiv 2026*<br>
  Cuts from-scratch looped-LM training from 7.7T to 310B tokens with mid-training, warmup and stronger exit-gate regularization; a 1.4B looped model beats a parameter-matched dense baseline on all 12 benchmarks, and a single learned input-mixing scalar plus a smoothed exit loss converts a pretrained dense checkpoint.<br>
  [Paper](https://arxiv.org/abs/2610.00673)

- **[Loop Dropout: Regularizing Shared Updates in Looped Language Models](https://arxiv.org/abs/2609.34218)**<br>
  Zirui Zhu et al. · *arXiv 2026*<br>
  Identifies a late-loop bias in LoRA on looped LMs, where early loops receive little adaptation, and fixes it with stochastic masking of adapter applications plus inverse-survival rescaling, improving math, instruction tuning, and code at no inference cost.<br>
  [Paper](https://arxiv.org/abs/2609.34218) · [Code](https://github.com/NUS-HPC-AI-Lab/loop-dropout)

- **[Prediction Dynamics in Depth-Recurrent Language Models](https://arxiv.org/abs/2609.21383)**<br>
  Xinyue Luo, Fei Yu · *arXiv 2026*<br>
  Derives a margin decomposition of why intermediate loop answers already match the final one while their scores keep moving; on Huginn-3.5B and Ouro-1.4B, accounting for update direction and competitor pairing lowers mean earliest qualifying depth by a further 22.5-34.4% of total depth beyond translation removal.<br>
  [Paper](https://arxiv.org/abs/2609.21383)

- **[Looped Transformers under the Jacobian Lens: Does the Global Workspace Survive Recurrence?](https://arxiv.org/abs/2609.01924)**<br>
  Wenlong Wang, Fergal Reid · *arXiv 2026*<br>
  Extends Jacobian-lens interventions to virtual unrollings of Ouro and Huginn, finding that both form workspace-like representations but transport and expose them differently across recurrence.<br>
  [Paper](https://arxiv.org/abs/2609.01924)

- **[Dynamical phase selection controls compute scaling in looped transformers](https://arxiv.org/abs/2608.26556)**<br>
  Gunn Kim · *arXiv 2026*<br>
  Shows that identically trained looped architectures can settle into distinct bifurcation regimes whose relaxation dynamics determine test-time compute scaling.<br>
  [Paper](https://arxiv.org/abs/2608.26556)

- **[Think Shallow, Solve Deep: Controlling Recurrent Dynamics for Reliable Test-Time Depth](https://arxiv.org/abs/2608.18222)**<br>
  Ivan Viakhirev et al. · *arXiv 2026*<br>
  Classifies recurrent dynamics and introduces a terminal fixed-point objective to make extra test-time depth safer and more reliable.<br>
  [Paper](https://arxiv.org/abs/2608.18222)

- **[LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction](https://arxiv.org/abs/2608.03624)**<br>
  Behzad Shomali et al. · *arXiv 2026*<br>
  Aligns each loop state with progressively farther future tokens, adding dense guidance intended to reduce undirected refinement and overthinking.<br>
  [Paper](https://arxiv.org/abs/2608.03624)

- **[Operational Proto-Introspection in Looped Language Models: Process-Quality Taps, Executable Branching, and the Readout-Control Boundary](https://arxiv.org/abs/2607.18553)**<br>
  Jan Kirin · *arXiv 2026*<br>
  Tests whether Ouro and Huginn states reveal ongoing solution quality, finding useful decision-level readouts while reporting that direct generative steering does not reliably convert.<br>
  [Paper](https://arxiv.org/abs/2607.18553)

- **[DeepLoop: Depth Scaling for Looped Transformers](https://arxiv.org/abs/2607.13491)**<br>
  Shuzhen Li et al. · *arXiv 2026*<br>
  Derives residual initialization rules based on how often shared parameters are revisited, stabilizing deeply unrolled post-LN Transformers.<br>
  [Paper](https://arxiv.org/abs/2607.13491) · [Code](https://github.com/lszshu/DeepLoop)

- **[LayerNorm as Implicit Gain Control in Looped Transformers](https://arxiv.org/abs/2607.10681)**<br>
  Matthias M. M. Buehlmaier · *arXiv 2026*<br>
  Analyzes pre-LayerNorm as an implicit gain controller for recurrent dynamics, distinguishing spectral stability from operator-norm bounds and stabilization from memory.<br>
  [Paper](https://arxiv.org/abs/2607.10681)

- **[Repeated Shared Access Enables Grokking, but Edit Propagation Depends on an Addressable Memory](https://arxiv.org/abs/2606.20737)**<br>
  Yanan Niu · *arXiv 2026*<br>
  Separates recurrence from shared-memory access in a controlled grid, finding that either can enable grokking but reliable multi-hop edit propagation follows addressable memory rather than looping alone.<br>
  [Paper](https://arxiv.org/abs/2606.20737)

- **[On the Residual Scaling of Looped Transformers: Stability and Transferability](https://arxiv.org/abs/2606.18524)**<br>
  Shaowen Wang et al. · *arXiv 2026*<br>
  Shows that correlated reuse changes residual-growth laws and derives loop-aware scaling that supports stable depth and hyperparameter transfer.<br>
  [Paper](https://arxiv.org/abs/2606.18524)

- **[Dense Supervision Is Not Enough: The Readout Blind Spot in Looped Language Models](https://arxiv.org/abs/2606.24898)**<br>
  Rituraj Sharma, Tu Vu · *arXiv 2026*<br>
  Shows that per-loop cross-entropy can train usable exits while leaving recurrent-state scale uncontrolled when normalized readouts hide radial information, motivating explicit scale control.<br>
  [Paper](https://arxiv.org/abs/2606.24898)

- **[Stabilizing Recurrent Dynamics for Test-Time Scalable Latent Reasoning in Looped Language Models](https://arxiv.org/abs/2605.26733)**<br>
  Xiao-Wen Yang et al. · *ICML 2026*<br>
  Regularizes the loop Jacobian while sampling depths during training, targeting stable improvement when inference uses more iterations than training.<br>
  [Paper](https://arxiv.org/abs/2605.26733) · [Code](https://github.com/njuyxw/STARS)

- **[Simply Stabilizing the Loop via Fully Looped Transformer](https://arxiv.org/abs/2605.18797)**<br>
  Rao Fu et al. · *arXiv 2026*<br>
  Studies a fully recurrent design and a simplified stabilization recipe intended to avoid fragile partial-loop dynamics.<br>
  [Paper](https://arxiv.org/abs/2605.18797) · [Code](https://github.com/FuRuF-11/FullyLoopedTransformer)

- **[Parcae: Scaling Laws For Stable Looped Language Models](https://arxiv.org/abs/2604.12946)**<br>
  Hayden Prairie et al. · *ICLR 2026 LIT Workshop*<br>
  Diagnoses residual instability through the loop’s dynamical system and constrains injection operators to obtain more predictable training and test-time scaling.<br>
  [Paper](https://arxiv.org/abs/2604.12946)

- **[A Mechanistic Analysis of Looped Reasoning Language Models](https://arxiv.org/abs/2604.11791)**<br>
  Hugh Blayney et al. · *arXiv 2026*<br>
  Tracks representations through repeated blocks in models such as Ouro and Huginn, identifying recurring inference stages and convergence patterns.<br>
  [Paper](https://arxiv.org/abs/2604.11791)

- **[Relational Preference Encoding in Looped Transformer Internal States](https://arxiv.org/abs/2604.09870)**<br>
  Jan Kirin · *arXiv 2026*<br>
  Studies preference readout across Ouro iterations; its appended audit retracts inflated headline results but preserves a smaller relational-over-pointwise decoding effect and useful evaluation warnings.<br>
  [Paper](https://arxiv.org/abs/2604.09870)

- **[LoopRPT: Reinforcement Pre-Training for Looped Language Models](https://arxiv.org/abs/2603.19714)**<br>
  Guo Tang et al. · *arXiv 2026*<br>
  Applies reinforcement signals directly to intermediate latent steps during pretraining, aiming to improve hard-token representations earlier in Ouro-style computation.<br>
  [Paper](https://arxiv.org/abs/2603.19714)

- **[Prioritize the Process, Not Just the Outcome: Rewarding Latent Thought Trajectories Improves Reasoning in Looped Language Models](https://arxiv.org/abs/2602.10520)**<br>
  Jonathan Williams, Esin Tureci · *arXiv 2026*<br>
  RLTT distributes reinforcement credit across Ouro’s entire latent trajectory instead of rewarding only the final recurrent state, directly training the hidden reasoning process.<br>
  [Paper](https://arxiv.org/abs/2602.10520) · [Code](https://github.com/jonwill8/RLTT)

- **[Step-resolved data attribution for looped transformers](https://arxiv.org/abs/2602.10097)**<br>
  Georgios Kaissis et al. · *arXiv 2026*<br>
  Decomposes training-example influence across individual recurrent steps and uses TensorSketch to make per-loop attribution practical without materializing full per-example gradients.<br>
  [Paper](https://arxiv.org/abs/2602.10097)

- **[Understanding Dynamic Compute Allocation in Recurrent Transformers](https://arxiv.org/abs/2602.08864)**<br>
  Ibraheem Muhammad Moosa et al. · *arXiv 2026*<br>
  Uses controlled algorithmic tasks to measure whether learned token-wise depth tracks difficulty and whether the routing policy extrapolates.<br>
  [Paper](https://arxiv.org/abs/2602.08864)

- **[Loop as a Bridge: Can Looped Transformers Truly Link Representation Space and Natural Language Outputs?](https://arxiv.org/abs/2601.10242)**<br>
  Guanxu Chen et al. · *arXiv 2026*<br>
  Tests whether extra loops improve access to internal knowledge and finds that some apparent bridging gains instead reflect degraded representations, exposing a limit of current looped models.<br>
  [Paper](https://arxiv.org/abs/2601.10242)

- **[Energy-Entropy Regularization: The True Power of Minimal Looped Transformers](https://arxiv.org/abs/2601.09588)**<br>
  Wai-Lun Lam · *arXiv 2026*<br>
  Uses Tsallis-entropy and Hamiltonian-inspired optimization to train an unusually small single-head looped Transformer on a long-range induction task.<br>
  [Paper](https://arxiv.org/abs/2601.09588)

</details>

<details>
<summary><strong>2025</strong> · 2 papers</summary>

- **[What Makes Looped Transformers Perform Better Than Non-Recursive Ones](https://arxiv.org/abs/2510.10089)**<br>
  Zixuan Gong et al. · *arXiv 2025*<br>
  Uses loss-landscape geometry to explain an optimization advantage of recurrent attention and turns the analysis into a staged training strategy.<br>
  [Paper](https://arxiv.org/abs/2510.10089)

- **[Latent Chain-of-Thought? Decoding the Depth-Recurrent Transformer](https://openreview.net/forum?id=roIQdXMuEj)**<br>
  Wenquan Lu et al. · *COLM 2025 Workshop*<br>
  Probes Huginn across recurrent steps to test whether its hidden-state trajectory behaves like a decodable latent chain of thought.<br>
  [Paper](https://openreview.net/forum?id=roIQdXMuEj) · [Code](https://github.com/wenquanlu/huginn-latent-cot)

</details>

[↑ Back to catalog](#complete-catalog)

<a id="systems--applications"></a>

### Systems & Applications

<details>
<summary><strong>2026</strong> · 38 papers</summary>

- **[BeNice! Closing Looping's Inference-Memory Gap via KV-Sharing](https://arxiv.org/abs/2610.31633)**<br>
  Hayden Prairie et al. · *arXiv 2026*<br>
  Looped models build a separate KV cache per recurrence, so inference memory grows with depth. A two-stage recipe uses stochastic-depth pretraining to induce contractive residual dynamics, then BeNice! broadcasts the final loop's cache into the first, matching unshared finetuning perplexity without per-loop caches.<br>
  [Paper](https://arxiv.org/abs/2610.31633)

- **[Exploring Recurrent-Depth Language Models for Multitask Clinical Text Processing](https://arxiv.org/abs/2610.27559)**<br>
  Xi Yang et al. · *arXiv 2026*<br>
  Jointly fine-tuning Ouro-1.4B-Thinking, Ouro-2.6B-Thinking, HRM-Text-1B and Qwen3 baselines on nine clinical datasets, the authors evaluate on four held-out sets (13 total): Ouro-1.4B-Thinking beats Qwen3-1.7B on 11 datasets, Ouro-2.6B-Thinking is competitive with Qwen3-8B on most tasks, and HRM-Text-1B is mixed, with the largest gains on inference and question answering.<br>
  [Paper](https://arxiv.org/abs/2610.27559)

- **[HistoLoop: Iterative Contextual Inference with a Looped Transformer for Histology-Based Spatial Gene Expression Prediction](https://arxiv.org/abs/2610.28339)**<br>
  Ziang Liu et al. · *arXiv 2026*<br>
  HistoLoop casts spatial gene-expression prediction as iterative contextual inference: a shared spatial Transformer aggregates spot states into multi-resolution context tokens, cross-attention retrieves spot-specific context, and a memory-mediated update carries state to the next resolution, giving the highest macro-average under HEST-Bench HVG50.<br>
  [Paper](https://arxiv.org/abs/2610.28339)

- **[LoopAhead: Speculating Ahead for Faster Decoding in Looped Language Models](https://arxiv.org/abs/2610.21594)**<br>
  Zixuan Liu et al. · *arXiv 2026*<br>
  LoopAhead adds a lightweight lookahead drafter that predicts several future tokens from early-loop states, lets deeper loops decide which speculative branches to continue or pause, and keeps the full-depth model as final arbiter, reaching up to 7.82x decoding speedup over autoregressive decoding.<br>
  [Paper](https://arxiv.org/abs/2610.21594)

- **[Retrofitting Recurrent Vision-Language Models from Pretrained Backbones](https://arxiv.org/abs/2610.22075)**<br>
  Madhav Iyengar, Andreas Geiger, Hilde Kühne · *arXiv 2026*<br>
  The authors prune layers from a pretrained VLM's language backbone, loop over a subset of survivors with a linear adapter that fuses preceding-layer tokens, and recover quality through language-only pretraining, projector alignment and visual instruction tuning, outperforming the unpruned baseline with 23.3% fewer language parameters.<br>
  [Paper](https://arxiv.org/abs/2610.22075) · [Project](https://madhavesdios.github.io/recurrent-vlms)

- **[LoopQuant: Accurate and Efficient Post-Training Quantization for Looped Transformers](https://arxiv.org/abs/2610.16368)**<br>
  Zhixiong Zhao et al. · *arXiv 2026*<br>
  LoopQuant canonicalizes activations across recurrent states, allocates per-loop activation precision under a fixed bit budget, and calibrates in task space so quantized inference follows the low-bit recurrent trajectory; on Ouro-2.6B its W4A4 setting outperforms all W4A8 baselines.<br>
  [Paper](https://arxiv.org/abs/2610.16368)

- **[RAMP: Recurrent Adaptive Mixed Precision for Efficient Prefill in Recurrent-Depth Language Models](https://arxiv.org/abs/2610.13041)**<br>
  Ke Wan, Chen Chen · *arXiv 2026*<br>
  Quantization error injected early in a recurrent trajectory is attenuated by later loops, so RAMP runs early refinement in low-precision weight-activation arithmetic and restores full precision for terminal loops, keeping prefill quality with up to 1.16x first-prefill speedup at 4K context.<br>
  [Paper](https://arxiv.org/abs/2610.13041)

- **[Scaling RNA Foundation Models through Iterative Refinement](https://arxiv.org/abs/2610.13106)**<br>
  Pengan Chen et al. · *arXiv 2026*<br>
  Eco-RNA is an 80M-parameter RNA foundation model whose shared, input-conditioned Transformer core is applied repeatedly, making inference depth a post-training knob; increasing refinement from one to four iterations improves RNAGym fitness prediction at fixed parameters.<br>
  [Paper](https://arxiv.org/abs/2610.13106)

- **[ResidualQuant: KV Cache Quantization for Looped Transformers with 2-Bit Residuals](https://arxiv.org/abs/2610.10381)**<br>
  Heejun Kim et al. · *arXiv 2026*<br>
  KV states in looped Transformers repeat across loops. ResidualQuant stores the final loop at higher precision and encodes earlier loops as INT2 residuals with least-squares scaling and rotations, plus loop-wise mixed precision, cutting KV storage 80.7% while keeping accuracy near BF16.<br>
  [Paper](https://arxiv.org/abs/2610.10381)

- **[Looped Diffusion Transformer](https://arxiv.org/abs/2609.40305)**<br>
  Yong Xien Chng et al. · *arXiv 2026*<br>
  Looped-DiT repeats shared Transformer blocks inside each denoising step and stabilizes the extra depth with deep supervision across loops plus self-modulating attention. A 260M looped model surpasses a 6.5x larger baseline while using 4.9x less inference compute.<br>
  [Paper](https://arxiv.org/abs/2609.40305)

- **[Depth through recurrence: Looped transformers for flow-matching TTS](https://arxiv.org/abs/2609.29768)**<br>
  Jiabao Ai et al. · *arXiv 2026*<br>
  A controlled study of weight reuse in flow-matching TTS: seven loop layouts all execute 18 block calls per evaluation, and applying each of nine blocks twice preserves intelligibility and speaker similarity while using 47.1% fewer parameters than the unshared baseline.<br>
  [Paper](https://arxiv.org/abs/2609.29768)

- **[FlashLoop: Fast and Memory-Efficient Looped Transformers via Lazy Updates](https://arxiv.org/abs/2609.29812)**<br>
  Wanqi Yang, Shiwei Liu · *arXiv 2026*<br>
  Most loop-time work is redundant: state changes concentrate on few tokens, attention-output differences on a sparse stable set of key columns, and inter-loop KV residuals quantize well. FlashLoop exploits these with lazy updates to cut loop FLOPs and KV memory while preserving accuracy.<br>
  [Paper](https://arxiv.org/abs/2609.29812) · [Code](https://github.com/Superone77/FlashLoop) · [Project](https://superone77.github.io/FlashLoop/)

- **[Attention Routing Stabilizes Early: Working-Set Inference for Recurrent Language Models](https://arxiv.org/abs/2609.27373)**<br>
  Ke Wan, Chen Chen · *arXiv 2026*<br>
  Attention routing in looped LMs stabilizes well before hidden states do. WISE discovers a block-structured working set with full attention in early loops, then reuses that support while keeping attention weights and recurrent refinement dynamic, reaching 1.76x late-step attention speedup at 4K context.<br>
  [Paper](https://arxiv.org/abs/2609.27373)

- **[WaveFront Decoding: Parallelized Self-Speculative Decoding for Looped Language Models](https://arxiv.org/abs/2609.23033)**<br>
  Hyeongju Ha, Jae-Joon Kim · *arXiv 2026*<br>
  Wavefront Decoding packs token states from mixed recurrence depths into a single recurrent-block call, arranging them as a diagonal wavefront so shallow-depth drafting and full-depth verification run concurrently and the draft-then-verify phases of self-speculation disappear.<br>
  [Paper](https://arxiv.org/abs/2609.23033)

- **[LoopSpec: Pipelined Self-Speculative Decoding for Looped Transformers](https://arxiv.org/abs/2609.17184)**<br>
  SangLyul Cho et al. · *arXiv 2026*<br>
  LoopSpec drafts tokens from early recurrent states and verifies them at full depth, pipelining future-token drafting with current-token verification and adding a selective second proposal from deeper loops, giving lossless self-speculative decoding without any auxiliary draft model.<br>
  [Paper](https://arxiv.org/abs/2609.17184)

- **[Recirculation](https://arxiv.org/abs/2608.17981)**<br>
  Michael C. Mozer et al. · *arXiv 2026*<br>
  Adds a distinct inference-time recurrence to frozen foundation models during prefill, targeting belief-state tracking without generation-time latency.<br>
  [Paper](https://arxiv.org/abs/2608.17981)

- **[Looped Language Models Improve Compositional Tool Calling](https://arxiv.org/abs/2608.18171)**<br>
  Andrei Cristian Popescu et al. · *arXiv 2026*<br>
  Evaluates recurrent depth on tool-use tasks and finds its clearest gains when calls have compositional or dependency structure.<br>
  [Paper](https://arxiv.org/abs/2608.18171)

- **[Nanbeige4.2-3B on Apple Silicon: Fixing Deployment Bugs and Decreasing Looped Transformer Memory Overhead](https://arxiv.org/abs/2608.13987)**<br>
  John T. Halloran · *arXiv 2026*<br>
  Audits practical deployment failures of a looped agentic model on Apple Silicon and uses chunked prefill to reduce the peak attention-memory penalty from its second stack pass.<br>
  [Paper](https://arxiv.org/abs/2608.13987) · [Code](https://github.com/johnhalloran321/Nanbeige4.2-3B-mps-fix)

- **[MergeOver: Post-Training Token Merging for Recursive Vision Transformers](https://arxiv.org/abs/2608.13141)**<br>
  Junseo Kim et al. · *arXiv 2026*<br>
  Adds retraining-free token merging to a recursively weight-shared vision Transformer while tracking spatial unmerging constraints across repeated stages.<br>
  [Paper](https://arxiv.org/abs/2608.13141)

- **[Depth-Adaptive Inference of Looped Language Models via Continuous Depth Batching](https://arxiv.org/abs/2608.09444)**<br>
  Kristian Schwethelm et al. · *arXiv 2026*<br>
  Turns variable recurrent depth into a serving primitive by continuously batching examples that enter and leave at different loop counts.<br>
  [Paper](https://arxiv.org/abs/2608.09444)

- **[bioMoR: Biology-Guided Mixture-of-Recursions for Effective Genomic Learning](https://arxiv.org/abs/2608.06727)**<br>
  Koushik Howlader et al. · *arXiv 2026*<br>
  Injects biological graphs into token embeddings, attention bias, and the recursion router, allocating deeper computation to genes and pathways according to structured knowledge.<br>
  [Paper](https://arxiv.org/abs/2608.06727)

- **[Nanbeige4.2-3B: Unlocking Agentic Capabilities in a Compact Model](https://arxiv.org/abs/2607.22083)**<br>
  Nanbeige Lab et al. · *arXiv 2026*<br>
  Pretrains a compact 3B agentic model on a looped Transformer that reuses its layer stack, pairing recurrent depth with a large-scale agentic post-training pipeline.<br>
  [Paper](https://arxiv.org/abs/2607.22083)

- **[Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers](https://arxiv.org/abs/2607.15456)**<br>
  James O'Neill, Fergal Reid · *arXiv 2026*<br>
  Compresses the trajectory of keys and values across loop iterations into a compact latent representation for higher serving capacity.<br>
  [Paper](https://arxiv.org/abs/2607.15456)

- **[LoopCoder: Scaling Code Intelligence via Looped Language Models](https://aclanthology.org/2026.findings-acl.796/)**<br>
  Jian Yang et al. · *Findings of ACL 2026*<br>
  Scales looped pretraining and post-training to a 40B-total/8B-active coding model, using dense-to-loop initialization for stability.<br>
  [Paper](https://aclanthology.org/2026.findings-acl.796/) · [Code](https://github.com/CSJianYang/LoopCoder)

- **[Soft Mixture-of-Recursions: Going Deeper with Recursive Vision Transformers](https://arxiv.org/abs/2607.00774)**<br>
  Sang In Lee, Jihun Park · *arXiv 2026*<br>
  Learns token-wise mixtures over every recursion output so recursive vision Transformers can exploit intermediate states instead of reading only the final visit.<br>
  [Paper](https://arxiv.org/abs/2607.00774)

- **[LoopCoder-v2: Only Loop Once for Efficient Test-Time Computation Scaling](https://arxiv.org/abs/2606.18023)**<br>
  Jian Yang et al. · *arXiv 2026*<br>
  Compares parallel-loop counts at 7B scale and finds a non-monotonic trade-off: one repeated pass captures most gains before positional mismatch dominates.<br>
  [Paper](https://arxiv.org/abs/2606.18023) · [Code](https://github.com/CSJianYang/LoopCoder)

- **[Rethinking Depth: A study of the Recursive-Transformer for Speech Recognition](https://arxiv.org/abs/2606.09357)**<br>
  Thomas Rolland et al. · *arXiv 2026*<br>
  Systematically studies where and how much recursion to use in speech encoders, finding competitive recognition with substantially fewer unique parameters in limited-loop regimes.<br>
  [Paper](https://arxiv.org/abs/2606.09357)

- **[Test-Time Compute Scaling for ASR with Depth-Conditioned Looped Transformers](https://arxiv.org/abs/2606.04678)**<br>
  Yacouba Kaloga et al. · *arXiv 2026*<br>
  Turns recurrent encoder depth into an inference budget for speech recognition using sparse CTC checkpoints, depth conditioning, and delayed posterior feedback.<br>
  [Paper](https://arxiv.org/abs/2606.04678)

- **[Déjà View: Looping Transformers for Multi-View 3D Reconstruction](https://arxiv.org/abs/2605.30215)**<br>
  Alessandro Burzio et al. · *arXiv 2026*<br>
  Makes progressive multi-view reconstruction explicit by recurrently applying one Transformer block, exposing refinement count as an inference-time compute knob.<br>
  [Paper](https://arxiv.org/abs/2605.30215)

- **[Training-Free Looped Transformers](https://arxiv.org/abs/2605.23872)**<br>
  Lizhang Chen et al. · *arXiv 2026*<br>
  Loops frozen mid-stack layers at inference as damped numerical refinement steps, showing that useful recurrence can sometimes be added without training.<br>
  [Paper](https://arxiv.org/abs/2605.23872)

- **[LT2: Linear-Time Looped Transformers](https://arxiv.org/abs/2605.20670)**<br>
  Chunyuan Deng et al. · *arXiv 2026*<br>
  Combines recurrent depth with linear-time sequence mixing to prevent long-context attention cost from multiplying across loops.<br>
  [Paper](https://arxiv.org/abs/2605.20670)

- **[Memory-Efficient Looped Transformer: Decoupling Compute from Memory in Looped Language Models](https://arxiv.org/abs/2605.07721)**<br>
  Victor Conchello Vendrell et al. · *arXiv 2026*<br>
  Redesigns recurrent inference so adding loop computation does not force proportional growth in stored intermediate state.<br>
  [Paper](https://arxiv.org/abs/2605.07721)

- **[LoopQ: Quantization for Recursive Transformers](https://arxiv.org/abs/2605.16343)**<br>
  Rui Fang et al. · *arXiv 2026*<br>
  Identifies loop-specific post-training quantization failures and combines scaling, state alignment, and trajectory-aware optimization to limit recursively accumulated error.<br>
  [Paper](https://arxiv.org/abs/2605.16343)

- **[ELT: Elastic Looped Transformers for Visual Generation](https://arxiv.org/abs/2604.09168)**<br>
  Sahil Goyal et al. · *arXiv 2026*<br>
  Trains recurrent image and video generators with intra-loop self-distillation so one checkpoint supports elastic compute-quality trade-offs at inference.<br>
  [Paper](https://arxiv.org/abs/2604.09168)

- **[LA-Sign: Looped Transformers with Geometry-aware Alignment for Skeleton-based Sign Language Recognition](https://arxiv.org/abs/2603.29057)**<br>
  Muxin Pu et al. · *arXiv 2026*<br>
  Uses encoder-decoder recurrence to refine skeletal motion representations and adds geometry-aware cross-modal alignment for isolated sign-language recognition.<br>
  [Paper](https://arxiv.org/abs/2603.29057)

- **[Looping Back to Move Forward: Recursive Transformers for Efficient and Flexible Large Multimodal Models](https://arxiv.org/abs/2602.09080)**<br>
  Ruihan Xu et al. · *arXiv 2026*<br>
  Builds a multimodal recursive Transformer with modality-aware state alignment and supervision that encourages quality to improve with each loop.<br>
  [Paper](https://arxiv.org/abs/2602.09080)

- **[Recurrent-Depth VLA: Implicit Test-Time Compute Scaling of Vision-Language-Action Models via Latent Iterative Reasoning](https://arxiv.org/abs/2602.07845)**<br>
  Yalcin Tur et al. · *arXiv 2026*<br>
  Applies recurrent-depth latent refinement to embodied vision-language-action policies so inference compute can scale without longer action traces.<br>
  [Paper](https://arxiv.org/abs/2602.07845) · [Code](https://github.com/rd-vla/rd-vla) · [Project](https://rd-vla.github.io/)

- **[LoopViT: Scaling Visual ARC with Looped Transformers](https://arxiv.org/abs/2602.02156)**<br>
  Wen-Jie Shu et al. · *arXiv 2026*<br>
  Builds an 18M-parameter recurrent vision Transformer for ARC-AGI and uses predictive entropy as a parameter-free stopping signal for adaptive visual reasoning depth.<br>
  [Paper](https://arxiv.org/abs/2602.02156) · [Code](https://github.com/WenjieShu/LoopViT)

</details>

<details>
<summary><strong>2025</strong> · 1 paper</summary>

- **[Parallel Loop Transformer for Efficient Test-Time Computation Scaling](https://arxiv.org/abs/2510.24824)**<br>
  Bohong Wu et al. · *arXiv 2025*<br>
  Overlaps loop steps across tokens and combines first-loop KV sharing with gated sliding-window attention to reduce sequential latency and cache overhead.<br>
  [Paper](https://arxiv.org/abs/2510.24824)

</details>

[↑ Back to catalog](#complete-catalog)

<a id="safety--monitoring"></a>

### Safety & Monitoring

<details>
<summary><strong>2026</strong> · 5 papers</summary>

- **[Monitoring latent reasoning in looped language models](https://arxiv.org/abs/2610.18127)**<br>
  Pawel Olszowiec et al. · *arXiv 2026*<br>
  Builds a five-lens mechanistic inspection protocol and applies it to eight looped language models from four families, separating carry loops (Ouro, LoopUS), which pass the prompt only inside the looped state, from re-read loops (Parcae, Huginn, Rec-OLMo), which re-supply it at every iteration.<br>
  [Paper](https://arxiv.org/abs/2610.18127)

- **[Running Fewer Loops Removes Refusal Behaviour in Recurrent-Depth Language Models](https://arxiv.org/abs/2610.15218)**<br>
  Seyedarmin Azizi et al. · *arXiv 2026*<br>
  Across four Ouro checkpoints and Huginn, cutting loop counts degrades safety far more than accuracy, with harmful-help rate rising 5.3x at half depth; existing early-exit rules do not spend extra loops on harmful requests, whereas training at randomized depths repairs the gap.<br>
  [Paper](https://arxiv.org/abs/2610.15218)

- **[Safe at One Loop, Risky at Another: Aligning Safety Across Recurrent Depths in Looped Language Models](https://arxiv.org/abs/2610.10625)**<br>
  Yi Wang et al. · *arXiv 2026*<br>
  Shows that one looped LM can be safe at one inference depth and jailbreakable at another, with attacks transferring across depths; proposes SafeBridge, which adds depth-specific control and selective state bridging over shared recurrent layers with joint safety supervision across depths.<br>
  [Paper](https://arxiv.org/abs/2610.10625)

- **[On the Chain-of-Thought Monitorability of Looped Language Models](https://arxiv.org/abs/2610.02741)**<br>
  Han Wang, Ishwar B Balappanawar, Huan Zhang · *arXiv 2026*<br>
  First systematic evaluation of chain-of-thought monitorability in looped language models: across eight MonitorBench tasks in standard and stress-test settings, deeper loops reduce monitoring only on specific Logic/Science/Engineering cue-answer tasks, and looped models are not systematically less monitorable than size- or depth-matched non-looped ones.<br>
  [Paper](https://arxiv.org/abs/2610.02741)

- **[When Steering Fails in Latent Reasoning: A Latent-to-Language Transition Gap](https://arxiv.org/abs/2609.21662)**<br>
  Gaoxiang Huang, Lei Qi · *arXiv 2026*<br>
  Finds that steering continuous thoughts transfers far more weakly to the generated answer than steering explicit chain-of-thought, even at comparable representation movement; abrupt output-distribution change at the latent-to-language boundary and weaker bidirectional control support a latent-to-language transition gap.<br>
  [Paper](https://arxiv.org/abs/2609.21662)

</details>

[↑ Back to catalog](#complete-catalog)

<a id="broader-latent-reasoning"></a>

### Broader Latent Reasoning

<details>
<summary><strong>2026</strong> · 21 papers</summary>

- **[Curriculum Learning Teaches LLMs Long-Horizon Implicit Reasoning, Up To A Limit](https://arxiv.org/abs/2610.25612)**<br>
  Jimson Huang et al. · *arXiv 2026*<br>
  Fine-tunes on progressively larger vocabularies and lookaheads, letting Qwen3-0.6B reach 98% accuracy at lookahead 256 versus 45% without curriculum, but progress follows a saturating exponential implying a finite intrinsic implicit-reasoning depth that grows with model size.<br>
  [Paper](https://arxiv.org/abs/2610.25612)

- **[Nested Shared-Operator Recursion on ARC-AGI-1: An Empirical Study of HRM, TRM and URM](https://arxiv.org/abs/2610.26666)**<br>
  Sara Neri et al. · *arXiv 2026*<br>
  Tests whether nesting a persistent intermediate state inside HRM, TRM and URM, so repeated fast-state updates are integrated through the same operator, helps on ARC-AGI-1; at matched parameters and a single-GPU budget it finds no consistent advantage and specifies a confirmatory protocol.<br>
  [Paper](https://arxiv.org/abs/2610.26666)

- **[Sep-Latent: Separator Tokens as Natural Compression Anchors for Implicit Reasoning](https://arxiv.org/abs/2610.22924)**<br>
  Yinlong Xu et al. · *arXiv 2026*<br>
  Uses separator tokens as structural anchors with an attention-decay mechanism and multi-level distillation so latent reasoning can terminate adaptively by query difficulty, reaching 56.8% on GSM8k-Aug with only 5.4 latent tokens on average.<br>
  [Paper](https://arxiv.org/abs/2610.22924)

- **[Does Latent Chain-of-Thought Actually Reason? A Single, Unifying Taxonomy for Latent Reasoning](https://arxiv.org/abs/2610.21182)**<br>
  Jingjie Qiu et al. · *arXiv 2026*<br>
  Across 21 model-task configurations, combines chain deletion, content replacement, probing and trajectory analysis to show that on logical tasks COCONUT often carries an answer readable before the chain begins, and proposes a taxonomy separating what a latent chain represents from how the model uses it.<br>
  [Paper](https://arxiv.org/abs/2610.21182)

- **[Tiny Recursive Message Passing](https://arxiv.org/abs/2610.18649)**<br>
  Tommaso Salvatori et al. · *arXiv 2026*<br>
  Ports the TRM recipe - deep supervision, truncated recursions and test-time deduction - onto message passing networks, reaching about 99% on Sudoku-Extreme with a 16k-parameter model trained in ten minutes and transferring zero-shot to larger N-queens and SAT instances.<br>
  [Paper](https://arxiv.org/abs/2610.18649)

- **[Think Before You Paint: Recursive Latent Reasoning for Diffusion Models](https://arxiv.org/abs/2610.09876)**<br>
  Paweł Skierś et al. · *arXiv 2026*<br>
  Places a small TRM-style Thinker inside every denoising step of a frozen diffusion model, reasoning over learned tokens and steering generation through ControlNet, which solves 92.5% of hard MNIST Sudoku with 10M parameters and no symbolic supervision.<br>
  [Paper](https://arxiv.org/abs/2610.09876)

- **[Continuous Memory Machines](https://arxiv.org/abs/2610.07907)**<br>
  Ciaran Regan et al. · *arXiv 2026*<br>
  Splits recurrent state into matrix-valued short- and long-term memories with distinct roles, jointly read and written by a Transformer, improving generalization over memory-augmented baselines on algorithmic, in-context and recurrent reasoning while keeping the Continuous Thought Machine's interpretable attention.<br>
  [Paper](https://arxiv.org/abs/2610.07907)

- **[LatentHarness: Learning Latent Actions for Memory and Reasoning via Counterfactual Policy Distillation](https://arxiv.org/abs/2609.39740)**<br>
  Xiaoqiang Wang, Suyuchen Wang, Bang Liu · *arXiv 2026*<br>
  Treats memory access and latent computation as one sequential latent-action policy - THINK, RECALL or EXIT - trained by counterfactual policy distillation that branches each action and scores its effect, improving general and long-context reasoning by 2.8% and 10.0% relative, respectively, while running 5.9x faster.<br>
  [Paper](https://arxiv.org/abs/2609.39740)

- **[What Limits Recursive Reasoning Models: Optimization, Architecture and Test-Time Scaling](https://arxiv.org/abs/2609.39967)**<br>
  Yuliana Shakhvalieva et al. · *arXiv 2026*<br>
  Separates architecture, gradient horizon and state-update control across HRM, TRM and URM in one pipeline and finds an explicit hierarchy is unnecessary: a stable 13.6M model with an intermediate gradient horizon and large batches lifts Arithmetic OOD accuracy from 36.2% to 71.2%.<br>
  [Paper](https://arxiv.org/abs/2609.39967)

- **[Where Do Embodied Decisions Come From? Rethinking Latent and Explicit Reasoning](https://arxiv.org/abs/2609.34794)**<br>
  Yuan Lin et al. · *arXiv 2026*<br>
  Shows that intervening on explicit CoT collapses VLA navigation F1 from 72.14% to 11.84%, then proposes decide-then-explain, which predicts actions before explanations and beats think-then-act and no-CoT baselines while relying more on perception-grounded latent computation.<br>
  [Paper](https://arxiv.org/abs/2609.34794) · [Code](https://github.com/ocean-luna/openvla-decide-then-explain)

- **[Not All Thinking is Created Equal: Latent Reasoning Discovers a Recurrent Search Algorithm for Depth Generalization](https://arxiv.org/abs/2609.35643)**<br>
  Huzi Cheng, Zhewei Zhang · *arXiv 2026*<br>
  Compares vanilla, CoT, pause-token and two latent-reasoning variants of one backbone on multi-hop reasoning, finding latent models generalize to longer hops because they learn a sparse recurrent search circuit that propagates reachability instead of relying on local graph features.<br>
  [Paper](https://arxiv.org/abs/2609.35643)

- **[Next Thoughts Are Distributions: Generative Autoregressive Reasoning in the Latent Space](https://arxiv.org/abs/2609.33271)**<br>
  Yang Li et al. · *arXiv 2026*<br>
  Models each next continuous thought as a multimodal distribution produced by a diffusion head over an autoregressive reasoner, so latent reasoning can branch; ATF improves math accuracy, benefits from reinforcement learning and extra test-time thinking, and covers more solutions across samples.<br>
  [Paper](https://arxiv.org/abs/2609.33271)

- **[Stream Recursion Model (SRM)](https://arxiv.org/abs/2609.28809)**<br>
  Asael Sorensen et al. · *arXiv 2026*<br>
  Modifies HRM into multiple interacting latent streams updated by recursive refinement so that stream dynamics, causal contribution and routing become directly analyzable, matching GPT-2 per parameter while showing consistent specialization across streams.<br>
  [Paper](https://arxiv.org/abs/2609.28809)

- **[When Recursive Models Finish Computing](https://arxiv.org/abs/2609.26487)**<br>
  Hare Krishna et al. · *arXiv 2026*<br>
  Extends TRM recurrence from 16 to 512 steps on 1,000 hard Sudokus, lifting exact-solve accuracy to 91.9% for the MLP variant, and identifies a shared signature of completed computation: locally contractive motion along the trajectory despite expanding directions elsewhere.<br>
  [Paper](https://arxiv.org/abs/2609.26487)

- **[Think Wider: Mitigating Latent Rank Collapse in Implicit Chain-of-Thought Reasoning](https://arxiv.org/abs/2609.07406)**<br>
  Yuwen Hao, Menglin Yang · *arXiv 2026*<br>
  Identifies latent rank collapse, where successive implicit-CoT states drift toward one dominant direction, and fixes it with a plug-and-play spectral regularizer that penalizes projections onto that direction, raising effective rank without touching the backbone or decoding.<br>
  [Paper](https://arxiv.org/abs/2609.07406) · [Code](https://github.com/whitesweater/WIDER)

- **[BDH-CQ: In-Context Learning with Recurrent Latent Reasoning](https://arxiv.org/abs/2608.09888)**<br>
  Björn Engdahl et al. · *arXiv 2026*<br>
  Continuously updates recurrent memory from demonstrations and then solves a query by iterating in a high-dimensional latent space without verbalizing intermediate steps.<br>
  [Paper](https://arxiv.org/abs/2608.09888)

- **[Think Deep, Speak Once: Relit, A Recursive Latent Implicit Transformer Framework](https://arxiv.org/abs/2608.08113)**<br>
  Abhishek Panwar et al. · *arXiv 2026*<br>
  Adds a lightweight recursive latent block to a frozen language model, aiming to combine semantic representations with deep implicit reasoning before a single verbal response.<br>
  [Paper](https://arxiv.org/abs/2608.08113)

- **[Learning to Refine Hidden States for Reliable LLM Reasoning](https://arxiv.org/abs/2606.17524)**<br>
  Chia-Hsuan Hsu, Jui-Ming Yao · *arXiv 2026*<br>
  Uses learned depth and action controllers to choose how many latent refinements to perform and in which direction before decoding, trained from step-wise likelihood improvement.<br>
  [Paper](https://arxiv.org/abs/2606.17524)

- **[Demystifying Hidden-State Recurrence: Switchable Latent Reasoning with On-Policy Reinforcement Learning](https://arxiv.org/abs/2606.13106)**<br>
  Jiayu Yang et al. · *arXiv 2026*<br>
  Introduces explicit entry and exit tokens around recurrent hidden-state reasoning, making the latent block compatible with on-policy RL and accessible to causal probing.<br>
  [Paper](https://arxiv.org/abs/2606.13106)

- **[State Stream Transformer (SST) V2: Parallel Training of Nonlinear Recurrence for Latent Space Reasoning](https://arxiv.org/abs/2605.00206)**<br>
  Thea Aviss · *arXiv 2026*<br>
  Streams nonlinear recurrent state horizontally across decoder positions and uses a two-pass approximation to train this sequential latent pathway in parallel.<br>
  [Paper](https://arxiv.org/abs/2605.00206)

- **[One Step Forward and K Steps Back: Better Reasoning with Denoising Recursion Models](https://arxiv.org/abs/2604.18839)**<br>
  Chris Cameron et al. · *arXiv 2026*<br>
  Trains recursive reasoners to reverse controlled corruption over multiple refinement steps, providing intermediate-state curricula for search-like structured reasoning.<br>
  [Paper](https://arxiv.org/abs/2604.18839)

</details>

<details>
<summary><strong>2025</strong> · 14 papers</summary>

- **[Learning When to Stop: Adaptive Latent Reasoning via Reinforcement Learning](https://arxiv.org/abs/2511.21581)**<br>
  Alex Ning et al. · *arXiv 2025*<br>
  Optimizes a stopping policy for latent reasoning, explicitly trading continuous reasoning length against answer accuracy.<br>
  [Paper](https://arxiv.org/abs/2511.21581) · [Code](https://github.com/apning/adaptive-latent-reasoning)

- **[LLM Latent Reasoning as Chain of Superposition](https://arxiv.org/abs/2510.15522)**<br>
  Jingcheng Deng et al. · *arXiv 2025*<br>
  Constrains latent thoughts to superpositions in vocabulary space, adding structure and a direct bridge back to explicit reasoning tokens.<br>
  [Paper](https://arxiv.org/abs/2510.15522)

- **[Less is More: Recursive Reasoning with Tiny Networks](https://arxiv.org/abs/2510.04871)**<br>
  Alexia Jolicoeur-Martineau · *arXiv 2025*<br>
  Proposes the Tiny Recursive Model: a small shared network alternately refines a latent state and a candidate answer, with both self-attention and attention-free variants evaluated on structured reasoning tasks.<br>
  [Paper](https://arxiv.org/abs/2510.04871) · [Code](https://github.com/SamsungSAILMontreal/TinyRecursiveModels)

- **[SIM-CoT: Supervised Implicit Chain-of-Thought](https://arxiv.org/abs/2509.20317)**<br>
  InternLM Team · *arXiv 2025*<br>
  Trains implicit reasoning states with supervision derived from explicit chain-of-thought trajectories.<br>
  [Paper](https://arxiv.org/abs/2509.20317) · [Code](https://github.com/InternLM/SIM-CoT)

- **[SynAdapt: Learning Adaptive Reasoning in Large Language Models via Synthetic Continuous Chain-of-Thought](https://arxiv.org/abs/2508.00574)**<br>
  Jianwei Wang et al. · *arXiv 2025*<br>
  Creates synthetic continuous-thought targets and invokes additional reasoning only when a learned difficulty signal marks an example as hard.<br>
  [Paper](https://arxiv.org/abs/2508.00574)

- **[A Survey on Latent Reasoning](https://arxiv.org/abs/2507.06203)**<br>
  Rui-Jie Zhu et al. · *arXiv 2025*<br>
  Surveys activation recurrence, hidden-state propagation, compressed reasoning, and implicit-depth approaches across the broader latent-reasoning landscape.<br>
  [Paper](https://arxiv.org/abs/2507.06203) · [Code](https://github.com/multimodal-art-projection/LatentCoT-Horizon)

- **[Hierarchical Reasoning Model](https://arxiv.org/abs/2506.21734)**<br>
  Guan Wang et al. · *arXiv 2025*<br>
  Uses two recurrent modules operating at different timescales to solve difficult symbolic tasks with a compact non-Transformer reasoner.<br>
  [Paper](https://arxiv.org/abs/2506.21734) · [Code](https://github.com/sapientinc/HRM)

- **[Parallel Continuous Chain-of-Thought with Jacobi Iteration](https://arxiv.org/abs/2506.18582)**<br>
  Zhenyu Zhang et al. · *arXiv 2025*<br>
  Uses Jacobi-style updates to refine multiple continuous thought positions in parallel rather than generating a serial rationale.<br>
  [Paper](https://arxiv.org/abs/2506.18582) · [Code](https://github.com/whyNLP/PCCoT)

- **[PonderLM: Pretraining Language Models to Ponder in Continuous Space](https://arxiv.org/abs/2505.20674)**<br>
  Boyi Zeng et al. · *ICLR 2026*<br>
  Learns continuous pondering during pretraining by feeding a probability-weighted sum of token embeddings back into additional forward passes before emitting a token.<br>
  [Paper](https://arxiv.org/abs/2505.20674) · [Code](https://github.com/LUMIA-Group/PonderingLM)

- **[Hybrid Latent Reasoning via Reinforcement Learning](https://arxiv.org/abs/2505.18454)**<br>
  Zhenrui Yue et al. · *NeurIPS 2025*<br>
  Uses reinforcement learning to combine sampled tokens with prior hidden states, preserving discrete generation while introducing latent computation.<br>
  [Paper](https://arxiv.org/abs/2505.18454) · [Code](https://github.com/Yueeeeeeee/HRPO)

- **[Soft Thinking: Unlocking the Reasoning Potential of LLMs in Continuous Concept Space](https://arxiv.org/abs/2505.15778)**<br>
  Yuhui Xu et al. · *arXiv 2025*<br>
  Propagates soft vocabulary distributions as continuous concept representations instead of committing to a single discrete reasoning token.<br>
  [Paper](https://arxiv.org/abs/2505.15778) · [Code](https://github.com/eric-ai-lab/Soft-Thinking)

- **[CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation](https://arxiv.org/abs/2502.21074)**<br>
  Zhengyu Chen et al. · *arXiv 2025*<br>
  Self-distills explicit rationales into continuous hidden trajectories so the model can reason with fewer decoded tokens.<br>
  [Paper](https://arxiv.org/abs/2502.21074) · [Code](https://github.com/zhenyi4/codi)

- **[Token Assorted: Mixing Latent and Text Tokens for Improved Language Model Reasoning](https://arxiv.org/abs/2502.03275)**<br>
  Jiaxin Huang et al. · *ICML 2025*<br>
  Interleaves continuous latent tokens with ordinary text tokens, exploring a hybrid medium between silent and explicit reasoning.<br>
  [Paper](https://arxiv.org/abs/2502.03275)

- **[Efficient Reasoning with Hidden Thinking](https://arxiv.org/abs/2501.19201)**<br>
  Huanjin Yao et al. · *arXiv 2025*<br>
  Learns compact hidden reasoning states that replace portions of an explicit chain while retaining answer quality.<br>
  [Paper](https://arxiv.org/abs/2501.19201) · [Code](https://github.com/shawnricecake/Heima)

</details>

<details>
<summary><strong>2024</strong> · 6 papers</summary>

- **[Compressed Chain of Thought: Efficient Reasoning through Dense Representations](https://arxiv.org/abs/2412.13171)**<br>
  Zhiyuan Deng et al. · *arXiv 2024*<br>
  Compresses longer textual reasoning traces into fewer dense representations to reduce autoregressive reasoning cost.<br>
  [Paper](https://arxiv.org/abs/2412.13171)

- **[Training Large Language Models to Reason in a Continuous Latent Space](https://arxiv.org/abs/2412.06769)**<br>
  Shibo Hao et al. · *COLM 2025*<br>
  Coconut feeds a generated hidden state back as the next input embedding, creating a continuous chain of thought that can represent multiple candidate paths.<br>
  [Paper](https://arxiv.org/abs/2412.06769) · [Code](https://github.com/facebookresearch/coconut)

- **[Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding](https://arxiv.org/abs/2411.04282)**<br>
  Zayne Sprague et al. · *arXiv 2024*<br>
  Optimizes hidden reasoning behavior with self-generated preference signals instead of requiring every intermediate step to be written out.<br>
  [Paper](https://arxiv.org/abs/2411.04282) · [Code](https://github.com/SalesforceAIResearch/LaTRO)

- **[Uncovering Latent Chain of Thought Vectors in Language Models](https://arxiv.org/abs/2409.14026)**<br>
  Jason Zhang, Scott Viteri · *arXiv 2024*<br>
  Derives activation directions associated with chain-of-thought behavior and uses them to steer reasoning without a natural-language trigger.<br>
  [Paper](https://arxiv.org/abs/2409.14026)

- **[From Explicit CoT to Implicit CoT: Learning to Internalize CoT Step by Step](https://arxiv.org/abs/2405.14838)**<br>
  Xuezhi Wang et al. · *arXiv 2024*<br>
  Progressively removes explicit reasoning steps during training so their function is absorbed into hidden computation.<br>
  [Paper](https://arxiv.org/abs/2405.14838)

- **[Let’s Think Dot by Dot: Hidden Computation in Transformer Language Models](https://arxiv.org/abs/2404.15758)**<br>
  Jacob Pfau et al. · *COLM 2024*<br>
  Uses semantically empty filler tokens to expose additional Transformer computation without requiring a verbalized rationale.<br>
  [Paper](https://arxiv.org/abs/2404.15758) · [Code](https://github.com/JacobPfau/fillerTokens)

</details>

[↑ Back to catalog](#complete-catalog)

## Sources and selection

- Every paper link points to arXiv, OpenReview, an official proceedings page, or the authors’ project page.
- Code and model links are included only when an official author/project source could be identified.
- Dates refer to first public release; venues reflect the latest verified publication status in this snapshot.
- Summaries are original editorial notes, not copied abstracts.
- The core looped/recursive-Transformer track is searched for comprehensive coverage; the much larger broader latent-reasoning track is intentionally representative.
- Agent loops, repeated full-model API calls, and ordinary sequence recurrence without a direct latent-reasoning connection are out of core scope.

<a id="contributing"></a>

## Contributing

Missing a paper or found an error? [Suggest a paper](https://github.com/Mrkkew/Awesome-Loop-Transformers/issues/new?template=paper-suggestion.yml), [report a correction](https://github.com/Mrkkew/Awesome-Loop-Transformers/issues/new?template=correction.yml), or open a pull request using the [contribution guide](CONTRIBUTING.md). English and Chinese contributions are both welcome.

---

CC BY 4.0 · Maintained by [Yulin Li](https://github.com/Mrkkew/Awesome-Loop-Transformers) · Data source: [lib/papers.ts](lib/papers.ts) · Machine-readable export: [data/papers.json](data/papers.json) · [Citation](CITATION.cff)
