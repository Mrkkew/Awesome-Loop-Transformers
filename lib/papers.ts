export type Lang = 'en' | 'zh';

export type Category =
  | 'Foundations & Theory'
  | 'Architectures & Scaling'
  | 'Latent Reasoning'
  | 'Adaptive Compute'
  | 'Training & Analysis'
  | 'Systems & Applications'
  | 'Broader Latent Reasoning';

export type Paper = {
  id: string;
  date: string;
  title: string;
  authors: string;
  venue: string;
  category: Category;
  tags: string[];
  summary: Record<Lang, string>;
  paper: string;
  code?: string;
  project?: string;
  foundation?: boolean;
};

export const categories: Category[] = [
  'Foundations & Theory',
  'Architectures & Scaling',
  'Latent Reasoning',
  'Adaptive Compute',
  'Training & Analysis',
  'Systems & Applications',
  'Broader Latent Reasoning',
];

export const categoryZh: Record<Category, string> = {
  'Foundations & Theory': '基础与理论',
  'Architectures & Scaling': '架构与扩展',
  'Latent Reasoning': '潜在推理',
  'Adaptive Compute': '自适应计算',
  'Training & Analysis': '训练与机制分析',
  'Systems & Applications': '系统与应用',
  'Broader Latent Reasoning': '广义潜在推理',
};

export const papers: Paper[] = [
  {
    id: '1603.08983', date: '2016-03-29', title: 'Adaptive Computation Time for Recurrent Neural Networks', authors: 'Alex Graves', venue: 'arXiv 2016', category: 'Foundations & Theory', tags: ['halting', 'adaptive-depth'], foundation: true,
    summary: { en: 'Introduces a differentiable halting mechanism that lets recurrent models spend different amounts of computation on different inputs.', zh: '提出可微分的停止机制，使循环模型能够针对不同输入动态分配计算步数。' }, paper: 'https://arxiv.org/abs/1603.08983'
  },
  {
    id: '1807.03819', date: '2018-07-10', title: 'Universal Transformers', authors: 'Mostafa Dehghani et al.', venue: 'ICLR 2019', category: 'Foundations & Theory', tags: ['universal-transformer', 'weight-sharing', 'halting'], foundation: true,
    summary: { en: 'Establishes the canonical depth-recurrent Transformer: one shared transition repeatedly refines every token, optionally with adaptive halting.', zh: '奠定深度循环 Transformer 的经典形式：共享变换反复更新各 token，并可结合自适应停止。' }, paper: 'https://arxiv.org/abs/1807.03819', code: 'https://github.com/tensorflow/tensor2tensor'
  },
  {
    id: '1909.01377', date: '2019-09-03', title: 'Deep Equilibrium Models', authors: 'Shaojie Bai, J. Zico Kolter, Vladlen Koltun', venue: 'NeurIPS 2019', category: 'Foundations & Theory', tags: ['fixed-point', 'implicit-depth'], foundation: true,
    summary: { en: 'Treats infinitely deep weight-tied networks as fixed-point systems, providing an implicit-depth counterpart to explicitly unrolled loops.', zh: '把无限深的权重共享网络视为不动点系统，为显式展开循环提供隐式深度的对应框架。' }, paper: 'https://arxiv.org/abs/1909.01377', code: 'https://github.com/locuslab/deq'
  },
  {
    id: '2301.13196', date: '2023-01-30', title: 'Looped Transformers as Programmable Computers', authors: 'Angeliki Giannou et al.', venue: 'ICML 2023', category: 'Foundations & Theory', tags: ['programmability', 'algorithms'], foundation: true,
    summary: { en: 'Constructs constant-size Transformer blocks that execute iterative programs when looped, making the computational role of recurrent depth explicit.', zh: '构造可在循环中执行迭代程序的常数规模 Transformer 块，明确展示循环深度的计算能力。' }, paper: 'https://proceedings.mlr.press/v202/giannou23a.html', code: 'https://github.com/jysohn1108/Looped-Transformer'
  },
  {
    id: '2311.12424', date: '2023-11-21', title: 'Looped Transformers are Better at Learning Learning Algorithms', authors: 'Liu Yang et al.', venue: 'ICLR 2024', category: 'Foundations & Theory', tags: ['in-context-learning', 'optimization'], foundation: true,
    summary: { en: 'Shows that repeatedly applying a small shared Transformer can learn iterative in-context fitting algorithms with far fewer parameters than a deep untied model.', zh: '表明小型共享 Transformer 经多次循环后可以学习迭代式上下文拟合算法，并显著减少参数量。' }, paper: 'https://openreview.net/forum?id=HHbRxoDTxE', code: 'https://github.com/Leiay/looped_transformer'
  },
  {
    id: '2402.13572', date: '2024-02-21', title: 'AlgoFormer: An Efficient Transformer Framework with Algorithmic Structures', authors: 'Yihang Gao et al.', venue: 'TMLR 2025', category: 'Architectures & Scaling', tags: ['algorithmic-structure', 'prelude-loop-coda'],
    summary: { en: 'Combines task-specific pre- and post-processing blocks with a reusable middle block, injecting an iterative algorithmic prior into Transformer learning.', zh: '用任务相关的前后处理模块包围可复用的中间循环块，把迭代算法先验注入 Transformer。' }, paper: 'https://openreview.net/forum?id=oYP2Pd5aQt', code: 'https://github.com/chuanyang-Zheng/Algoformer'
  },
  {
    id: '2405.16039', date: '2024-05-25', title: 'MoEUT: Mixture-of-Experts Universal Transformers', authors: 'Róbert Csordás et al.', venue: 'NeurIPS 2024', category: 'Architectures & Scaling', tags: ['mixture-of-experts', 'language-modeling'],
    summary: { en: 'Adds sparse expert capacity and improved recurrent dynamics to Universal Transformers, narrowing the quality gap with standard language models.', zh: '在 Universal Transformer 中加入稀疏专家与改进的循环机制，缩小其与常规语言模型的性能差距。' }, paper: 'https://proceedings.neurips.cc/paper_files/paper/2024/hash/321387ba926b8e58d3591c0aeb52ffc2-Abstract-Conference.html', code: 'https://github.com/robertcsordas/moeut'
  },
  {
    id: '2409.15647', date: '2024-09-24', title: 'Looped Transformers for Length Generalization', authors: 'Ying Fan et al.', venue: 'ICLR 2025', category: 'Foundations & Theory', tags: ['length-generalization', 'algorithms', 'adaptive-depth'],
    summary: { en: 'Trains a decoder-only looped Transformer to match iteration count to problem length, enabling strong extrapolation on iterative algorithmic tasks.', zh: '训练解码器式循环 Transformer 让循环次数随问题长度变化，从而在迭代算法任务上获得更强的长度外推。' }, paper: 'https://openreview.net/forum?id=2edigk8yoU', code: 'https://github.com/UW-Madison-Lee-Lab/looped-tf'
  },
  {
    id: '2410.01405', date: '2024-10-02', title: 'On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding', authors: 'Kevin Xu, Issei Sato', venue: 'ICML 2025', category: 'Foundations & Theory', tags: ['expressivity', 'timestep-encoding'],
    summary: { en: 'Derives approximation guarantees and a loop-specific limitation, then uses timestep-conditioned scaling to give repeated blocks distinct behavior.', zh: '推导循环 Transformer 的逼近保证与特有瓶颈，并用时间步条件调制让共享块在不同循环中产生差异化行为。' }, paper: 'https://proceedings.mlr.press/v267/xu25x.html', code: 'https://github.com/kevin671/tmlt'
  },
  {
    id: '2410.11268', date: '2024-10-15', title: 'Bypassing the Exponential Dependency: Looped Transformers Efficiently Learn In-context by Multi-step Gradient Descent', authors: 'Bo Chen et al.', venue: 'arXiv 2024', category: 'Foundations & Theory', tags: ['in-context-learning', 'gradient-descent'],
    summary: { en: 'Proves that linear looped Transformers can implement multi-step gradient descent for in-context learning without requiring exponentially many demonstrations.', zh: '证明线性循环 Transformer 能用多步梯度下降完成上下文学习，而不需要指数数量的示例。' }, paper: 'https://arxiv.org/abs/2410.11268'
  },
  {
    id: '2410.20672', date: '2024-10-28', title: 'Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA', authors: 'Sangmin Bae et al.', venue: 'ICLR 2025', category: 'Architectures & Scaling', tags: ['layer-tying', 'lora', 'early-exit'],
    summary: { en: 'Folds pretrained Transformers into repeated blocks and restores depth-specific flexibility with small LoRA adapters, while motivating continuous depth-wise batching.', zh: '把预训练 Transformer 折叠为重复块，再用轻量 LoRA 恢复层间差异，并提出连续深度批处理的设想。' }, paper: 'https://openreview.net/forum?id=WwpYSOkkCt'
  },
  {
    id: '2502.05171', date: '2025-02-07', title: 'Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach', authors: 'Jonas Geiping et al.', venue: 'NeurIPS 2025', category: 'Latent Reasoning', tags: ['huginn', 'test-time-compute', 'pretraining'], foundation: true,
    summary: { en: 'Scales recurrent depth to a 3.5B-parameter, 800B-token language model and shows that extra test-time loops can improve reasoning without emitting more tokens.', zh: '把循环深度扩展到 35 亿参数、8000 亿 token 的语言模型，并显示增加测试时循环可在不生成更多 token 的情况下增强推理。' }, paper: 'https://arxiv.org/abs/2502.05171', code: 'https://github.com/seal-rg/recurrent-pretraining', project: 'https://huggingface.co/tomg-group-umd/huginn-0125'
  },
  {
    id: '2502.17416', date: '2025-02-24', title: 'Reasoning with Latent Thoughts: On the Power of Looped Transformers', authors: 'Nikunj Saunshi et al.', venue: 'ICLR 2025', category: 'Latent Reasoning', tags: ['latent-thoughts', 'chain-of-thought', 'theory'],
    summary: { en: 'Connects recurrence to latent multi-step reasoning theoretically and empirically, showing that effective depth can matter more than unique parameter depth.', zh: '从理论与实验上连接循环和隐空间多步推理，指出有效计算深度可能比独立参数层数更关键。' }, paper: 'https://openreview.net/forum?id=din0lGfZFd'
  },
  {
    id: '2505.19245', date: '2025-05-25', title: 'To CoT or To Loop? A Formal Comparison Between Chain-of-Thought and Looped Transformers', authors: 'Kevin Xu, Issei Sato', venue: 'arXiv 2025', category: 'Foundations & Theory', tags: ['chain-of-thought', 'complexity', 'parallelism'],
    summary: { en: 'Separates the strengths of the two compute axes: loops efficiently simulate parallel deterministic computation, while stochastic CoT favors some self-reducible problems.', zh: '形式化区分两种计算扩展方式：循环更擅长并行确定性计算，而随机 CoT 在部分自归约问题上更有优势。' }, paper: 'https://arxiv.org/abs/2505.19245'
  },
  {
    id: '2507.02199', date: '2025-07-02', title: 'Latent Chain-of-Thought? Decoding the Depth-Recurrent Transformer', authors: 'Wenquan Lu et al.', venue: 'COLM 2025 Workshop', category: 'Training & Analysis', tags: ['interpretability', 'huginn', 'probing'],
    summary: { en: 'Probes Huginn across recurrent steps to test whether its hidden-state trajectory behaves like a decodable latent chain of thought.', zh: '沿 Huginn 的循环步探测隐藏状态，检验其轨迹是否形成可解码的潜在思维链。' }, paper: 'https://openreview.net/forum?id=roIQdXMuEj', code: 'https://github.com/wenquanlu/huginn-latent-cot'
  },
  {
    id: '2507.07996', date: '2025-07-10', title: 'Skip a Layer or Loop it? Test-Time Depth Adaptation of Pretrained LLMs', authors: 'Ziyue Li, Yang Li, Tianyi Zhou', venue: 'arXiv 2025', category: 'Adaptive Compute', tags: ['pretrained-llm', 'layer-routing', 'test-time'],
    summary: { en: 'Studies inference-time layer skipping and repetition in pretrained LLMs, treating the existing stack as a flexible depth program rather than a fixed path.', zh: '研究预训练大模型在推理时跳过或重复层，把既有层栈视为可调整的深度程序而非固定路径。' }, paper: 'https://arxiv.org/abs/2507.07996'
  },
  {
    id: '2507.10524', date: '2025-07-14', title: 'Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation', authors: 'Sangmin Bae et al.', venue: 'NeurIPS 2025', category: 'Adaptive Compute', tags: ['token-routing', 'recursive-transformer', 'efficiency'],
    summary: { en: 'Routes each token to a learned recursion depth inside a shared Transformer stack, coupling parameter reuse with token-level sparse computation.', zh: '在共享 Transformer 层栈中为每个 token 学习递归深度，把参数复用与 token 级稀疏计算结合起来。' }, paper: 'https://arxiv.org/abs/2507.10524', code: 'https://github.com/raymin0223/mixture_of_recursions'
  },
  {
    id: '2509.23314', date: '2025-09-27', title: 'Two-Scale Latent Dynamics for Recurrent-Depth Transformers', authors: 'Francesco Pappone et al.', venue: 'arXiv 2025', category: 'Architectures & Scaling', tags: ['multi-timescale', 'dynamics'],
    summary: { en: 'Introduces fast and slow latent dynamics so a recurrent-depth model can separate local refinement from longer-horizon state evolution.', zh: '引入快慢两种隐状态动力学，让循环深度模型分离局部细化与长程状态演化。' }, paper: 'https://arxiv.org/abs/2509.23314'
  },
  {
    id: '2510.10089', date: '2025-10-11', title: 'What Makes Looped Transformers Perform Better Than Non-Recursive Ones', authors: 'Zixuan Gong et al.', venue: 'arXiv 2025', category: 'Training & Analysis', tags: ['optimization', 'loss-landscape', 'theory'],
    summary: { en: 'Uses loss-landscape geometry to explain an optimization advantage of recurrent attention and turns the analysis into a staged training strategy.', zh: '从损失景观几何解释循环注意力的优化优势，并据此提出分阶段训练方法。' }, paper: 'https://arxiv.org/abs/2510.10089'
  },
  {
    id: '2510.24824', date: '2025-10-28', title: 'Parallel Loop Transformer for Efficient Test-Time Computation Scaling', authors: 'Bohong Wu et al.', venue: 'arXiv 2025', category: 'Systems & Applications', tags: ['parallel-loops', 'kv-cache', 'latency'],
    summary: { en: 'Overlaps loop steps across tokens and combines first-loop KV sharing with gated sliding-window attention to reduce sequential latency and cache overhead.', zh: '通过跨 token 重叠执行循环步，并结合首轮 KV 共享与门控滑动窗口注意力，降低串行延迟与缓存开销。' }, paper: 'https://arxiv.org/abs/2510.24824'
  },
  {
    id: '2510.25741', date: '2025-10-29', title: 'Scaling Latent Reasoning via Looped Language Models', authors: 'Rui-Jie Zhu et al.', venue: 'arXiv 2025', category: 'Latent Reasoning', tags: ['ouro', 'pretraining', 'learned-depth'], foundation: true,
    summary: { en: 'Introduces Ouro, pretrained looped language models with entropy-regularized depth allocation, and studies recurrent depth as a distinct scaling direction.', zh: '提出 Ouro 预训练循环语言模型，以熵正则进行深度分配，并把循环深度作为独立的扩展维度研究。' }, paper: 'https://arxiv.org/abs/2510.25741', project: 'https://ouro-llm.github.io/'
  },
  {
    id: '2511.07384', date: '2025-11-10', title: 'Teaching Pretrained Language Models to Think Deeper with Retrofitted Recurrence', authors: 'Sean McLeish et al.', venue: 'arXiv 2025', category: 'Architectures & Scaling', tags: ['retrofit', 'continued-pretraining', 'depth-extrapolation'],
    summary: { en: 'Converts dense pretrained models into recurrent-depth models through continued training, testing how much loop behavior can be installed after pretraining.', zh: '通过继续训练把稠密预训练模型改造成循环深度模型，检验能否在预训练后补装循环推理能力。' }, paper: 'https://arxiv.org/abs/2511.07384', code: 'https://github.com/mcleish7/retrofitting-recurrence'
  },
  {
    id: '2511.08577', date: '2025-11-11', title: 'Think-at-Hard: Selective Latent Iterations to Improve Reasoning Language Models', authors: 'Tianyu Fu et al.', venue: 'ICML 2026', category: 'Adaptive Compute', tags: ['selective-compute', 'hard-token', 'routing'],
    summary: { en: 'Uses a lightweight decider to select hard tokens for additional latent iterations, with depth-aware LoRA and duo-causal attention supporting targeted refinement.', zh: '用轻量决策器为困难 token 选择额外的隐空间迭代，并结合深度感知 LoRA 与双因果注意力进行针对性细化。' }, paper: 'https://openreview.net/forum?id=eQaJSRZiGn', code: 'https://github.com/thu-nics/TaH'
  },
  {
    id: '2601.21582', date: '2026-01-29', title: 'Depth-Recurrent Attention Mixtures: Giving Latent Reasoning the Attention it Deserves', authors: 'Jonas Knupp et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['attention-mixture', 'recurrent-depth'],
    summary: { en: 'Diversifies the attention transformations available across repeated depth while preserving a recurrent core.', zh: '在保留循环核心的同时，为不同重复深度提供更丰富的注意力变换。' }, paper: 'https://arxiv.org/abs/2601.21582'
  },
  {
    id: '2602.07845', date: '2026-02-08', title: 'Recurrent-Depth VLA: Implicit Test-Time Compute Scaling of Vision-Language-Action Models via Latent Iterative Reasoning', authors: 'Yalcin Tur et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['vision-language-action', 'robotics', 'test-time-compute'],
    summary: { en: 'Applies recurrent-depth latent refinement to embodied vision-language-action policies so inference compute can scale without longer action traces.', zh: '把循环深度的隐空间细化用于视觉—语言—动作策略，使推理计算可扩展而无需生成更长动作轨迹。' }, paper: 'https://arxiv.org/abs/2602.07845', code: 'https://github.com/rd-vla/rd-vla', project: 'https://rd-vla.github.io/'
  },
  {
    id: '2602.08864', date: '2026-02-09', title: 'Understanding Dynamic Compute Allocation in Recurrent Transformers', authors: 'Ibraheem Muhammad Moosa et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['dynamic-compute', 'token-complexity', 'length-extrapolation'],
    summary: { en: 'Uses controlled algorithmic tasks to measure whether learned token-wise depth tracks difficulty and whether the routing policy extrapolates.', zh: '用受控算法任务衡量 token 级动态深度是否对应难度，以及路由策略能否外推。' }, paper: 'https://arxiv.org/abs/2602.08864'
  },
  {
    id: '2602.09080', date: '2026-02-09', title: 'Looping Back to Move Forward: Recursive Transformers for Efficient and Flexible Large Multimodal Models', authors: 'Ruihan Xu et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['multimodal', 'recursive-connector', 'anytime-prediction'],
    summary: { en: 'Builds a multimodal recursive Transformer with modality-aware state alignment and supervision that encourages quality to improve with each loop.', zh: '构建多模态递归 Transformer，通过模态感知的状态对齐和逐轮监督推动性能随循环改善。' }, paper: 'https://arxiv.org/abs/2602.09080'
  },
  {
    id: '2602.11451', date: '2026-02-11', title: 'LoopFormer: Elastic-Depth Looped Transformers for Latent Reasoning via Shortcut Modulation', authors: 'Ahmadreza Jeddi et al.', venue: 'ICLR 2026', category: 'Adaptive Compute', tags: ['elastic-depth', 'consistency', 'budget-control'],
    summary: { en: 'Trains loop trajectories of different lengths to agree, enabling one model to operate smoothly across inference budgets.', zh: '约束不同长度的循环轨迹保持一致，使同一模型能在多种推理预算下平滑工作。' }, paper: 'https://openreview.net/forum?id=RzYXb5YWBs', code: 'https://github.com/armenjeddi/loopformer', project: 'https://loopformer.github.io/'
  },
  {
    id: '2602.11698', date: '2026-02-12', title: 'SpiralFormer: Looped Transformers Can Learn Hierarchical Dependencies via Multi-Resolution Recursion', authors: 'Chengting Yu et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['multi-resolution', 'hierarchy', 'compression'],
    summary: { en: 'Runs successive recurrences at multiple sequence resolutions, turning resolution into another axis for efficient hierarchical computation.', zh: '在多种序列分辨率上执行递归，把分辨率变成高效层次计算的新维度。' }, paper: 'https://arxiv.org/abs/2602.11698'
  },
  {
    id: '2603.01914', date: '2026-03-02', title: 'AdaPonderLM: Gated Pondering Language Models with Token-Wise Adaptive Depth', authors: 'Shixiang Song et al.', venue: 'arXiv 2026', category: 'Adaptive Compute', tags: ['gating', 'token-wise-depth', 'pondering'],
    summary: { en: 'Learns token-wise pondering gates so a shared language-model block can stop easy tokens early and continue refining harder ones.', zh: '学习 token 级思考门控，使共享语言模型块能让简单 token 提前停止、困难 token 继续细化。' }, paper: 'https://arxiv.org/abs/2603.01914'
  },
  {
    id: '2603.21676', date: '2026-03-23', title: 'Thinking Deeper, Not Longer: Depth-Recurrent Transformers for Compositional Generalization', authors: 'Hung-Hsuan Chen', venue: 'arXiv 2026', category: 'Latent Reasoning', tags: ['compositional-generalization', 'depth-extrapolation'],
    summary: { en: 'Tests whether recurrent latent depth, rather than longer decoded rationales, improves systematic composition outside the training distribution.', zh: '检验循环隐空间深度能否比更长的显式推理文本更好地提升分布外系统组合能力。' }, paper: 'https://arxiv.org/abs/2603.21676'
  },
  {
    id: '2604.11791', date: '2026-04-13', title: 'A Mechanistic Analysis of Looped Reasoning Language Models', authors: 'Hugh Blayney et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['mechanistic-interpretability', 'fixed-points', 'dynamics'],
    summary: { en: 'Tracks representations through repeated blocks in models such as Ouro and Huginn, identifying recurring inference stages and convergence patterns.', zh: '跟踪 Ouro、Huginn 等模型的循环表示，识别反复出现的推理阶段与收敛模式。' }, paper: 'https://arxiv.org/abs/2604.11791'
  },
  {
    id: '2604.12946', date: '2026-04-14', title: 'Parcae: Scaling Laws For Stable Looped Language Models', authors: 'Hayden Prairie et al.', venue: 'ICLR 2026 LIT Workshop', category: 'Training & Analysis', tags: ['scaling-laws', 'stability', 'dynamical-systems'],
    summary: { en: 'Diagnoses residual instability through the loop’s dynamical system and constrains injection operators to obtain more predictable training and test-time scaling.', zh: '从循环动力系统角度诊断残差不稳定，并约束注入算子以获得更可预测的训练和测试时扩展。' }, paper: 'https://arxiv.org/abs/2604.12946'
  },
  {
    id: '2604.15259', date: '2026-04-16', title: 'Stability and Generalization in Looped Transformers', authors: 'Asher Labovich', venue: 'arXiv 2026', category: 'Foundations & Theory', tags: ['fixed-point', 'recall', 'generalization'],
    summary: { en: 'Characterizes how recall connections and normalization affect reachable, input-dependent fixed points and depth generalization.', zh: '刻画回忆连接与归一化如何影响可达、依赖输入的不动点及深度泛化。' }, paper: 'https://arxiv.org/abs/2604.15259', code: 'https://github.com/ashlab11/generalization'
  },
  {
    id: '2604.21106', date: '2026-04-22', title: 'How Much Is One Recurrence Worth? Iso-Depth Scaling Laws for Looped Language Models', authors: 'Kristian Schwethelm et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['scaling-laws', 'iso-depth', 'parameter-efficiency'],
    summary: { en: 'Quantifies the quality value of a repeated layer relative to a unique layer under matched effective depth and training compute.', zh: '在匹配有效深度与训练计算的条件下，量化重复层相对于独立层的性能价值。' }, paper: 'https://arxiv.org/abs/2604.21106', code: 'https://github.com/kschwethelm/looped-lm-scaling'
  },
  {
    id: '2605.07721', date: '2026-05-08', title: 'Memory-Efficient Looped Transformer: Decoupling Compute from Memory in Looped Language Models', authors: 'Victor Conchello Vendrell et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['memory', 'kv-cache', 'inference'],
    summary: { en: 'Redesigns recurrent inference so adding loop computation does not force proportional growth in stored intermediate state.', zh: '重构循环推理，使增加循环计算不再要求中间状态存储按比例增长。' }, paper: 'https://arxiv.org/abs/2605.07721'
  },
  {
    id: '2605.09165', date: '2026-05-09', title: 'Sparse Layers are Critical to Scaling Looped Language Models', authors: 'Ryan Lee et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['sparse-layers', 'mixture-of-experts', 'early-exit'],
    summary: { en: 'Finds that adding sparse capacity is especially important when scaling recurrent language models, improving their quality–memory trade-off and exit behavior.', zh: '发现稀疏容量对循环语言模型扩展尤为关键，可改善质量—内存权衡及提前退出表现。' }, paper: 'https://arxiv.org/abs/2605.09165'
  },
  {
    id: '2605.11011', date: '2026-05-10', title: 'LoopUS: Recasting Pretrained LLMs into Looped Latent Refinement Models', authors: 'Taekhyun Park et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['retrofit', 'latent-refinement', 'pretrained-llm'],
    summary: { en: 'Transforms an existing pretrained LLM into a looped latent-refinement model instead of training recurrent depth entirely from scratch.', zh: '把现有预训练大模型改造成循环隐空间细化模型，避免完全从头训练循环深度。' }, paper: 'https://arxiv.org/abs/2605.11011', code: 'https://github.com/Thrillcrazyer/LoopUS', project: 'https://thrillcrazyer.github.io/LoopUS'
  },
  {
    id: '2605.18797', date: '2026-05-11', title: 'Simply Stabilizing the Loop via Fully Looped Transformer', authors: 'Rao Fu et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['stability', 'full-loop', 'normalization'],
    summary: { en: 'Studies a fully recurrent design and a simplified stabilization recipe intended to avoid fragile partial-loop dynamics.', zh: '研究全循环架构与简化稳定方案，旨在规避部分循环设计中的脆弱动力学。' }, paper: 'https://arxiv.org/abs/2605.18797', code: 'https://github.com/FuRuF-11/FullyLoopedTransformer'
  },
  {
    id: '2605.20670', date: '2026-05-20', title: 'LT2: Linear-Time Looped Transformers', authors: 'Chunyuan Deng et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['linear-attention', 'efficiency', 'language-modeling'],
    summary: { en: 'Combines recurrent depth with linear-time sequence mixing to prevent long-context attention cost from multiplying across loops.', zh: '把循环深度与线性时间序列混合结合，避免长上下文注意力开销随循环次数成倍增加。' }, paper: 'https://arxiv.org/abs/2605.20670'
  },
  {
    id: '2605.23872', date: '2026-05-22', title: 'Training-Free Looped Transformers', authors: 'Lizhang Chen et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['training-free', 'ode', 'pretrained-llm'],
    summary: { en: 'Loops frozen mid-stack layers at inference as damped numerical refinement steps, showing that useful recurrence can sometimes be added without training.', zh: '在推理时把冻结的中间层作为阻尼数值细化步骤循环，显示某些循环能力可在无需训练时加入。' }, paper: 'https://arxiv.org/abs/2605.23872'
  },
  {
    id: '2605.26733', date: '2026-05-26', title: 'Stabilizing Recurrent Dynamics for Test-Time Scalable Latent Reasoning in Looped Language Models', authors: 'Xiao-Wen Yang et al.', venue: 'ICML 2026', category: 'Training & Analysis', tags: ['spectral-regularization', 'test-time-depth', 'stability'],
    summary: { en: 'Regularizes the loop Jacobian while sampling depths during training, targeting stable improvement when inference uses more iterations than training.', zh: '在训练中采样循环深度并正则化循环 Jacobian，目标是在推理循环超过训练范围时仍能稳定提升。' }, paper: 'https://arxiv.org/abs/2605.26733', code: 'https://github.com/njuyxw/STARS'
  },
  {
    id: '2606.04438', date: '2026-06-03', title: 'LoopMoE: Unifying Iterative Computation with Mixture-of-Experts for Language Modeling', authors: 'Wenkai Chen et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['mixture-of-experts', 'routing', 'scaling'],
    summary: { en: 'Couples repeated shared computation with sparse expert routing, seeking both iterative refinement and expandable parameter capacity.', zh: '把共享计算的重复迭代与稀疏专家路由结合，同时追求迭代细化与可扩展参数容量。' }, paper: 'https://arxiv.org/abs/2606.04438'
  },
  {
    id: '2606.06574', date: '2026-06-04', title: 'Skip a Layer or Loop It? Learning Program-of-Layers in LLMs', authors: 'Ziyue Li, Yang Li, Tianyi Zhou', venue: 'ICML 2026', category: 'Adaptive Compute', tags: ['program-of-layers', 'routing', 'pretrained-llm'],
    summary: { en: 'Learns input-conditioned programs that can traverse, skip, or revisit modules from a pretrained Transformer stack.', zh: '学习由输入条件决定的层程序，可在预训练 Transformer 层栈中顺序执行、跳过或回访模块。' }, paper: 'https://arxiv.org/abs/2606.06574', code: 'https://github.com/tianyi-lab/PoLar'
  },
  {
    id: 'loopcoder-2026', date: '2026-07-01', title: 'LoopCoder: Scaling Code Intelligence via Looped Language Models', authors: 'Jian Yang et al.', venue: 'Findings of ACL 2026', category: 'Systems & Applications', tags: ['code', 'pretraining', 'large-scale'],
    summary: { en: 'Scales looped pretraining and post-training to a 40B-total/8B-active coding model, using dense-to-loop initialization for stability.', zh: '把循环式预训练与后训练扩展到总参数 400 亿、激活参数 80 亿的代码模型，并用稠密到循环初始化增强稳定性。' }, paper: 'https://aclanthology.org/2026.findings-acl.796/', code: 'https://github.com/CSJianYang/LoopCoder'
  },
  {
    id: '2606.18023', date: '2026-06-16', title: 'LoopCoder-v2: Only Loop Once for Efficient Test-Time Computation Scaling', authors: 'Jian Yang et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['code', 'parallel-loop', 'loop-count'],
    summary: { en: 'Compares parallel-loop counts at 7B scale and finds a non-monotonic trade-off: one repeated pass captures most gains before positional mismatch dominates.', zh: '在 70 亿规模比较并行循环次数，发现收益并不单调：一次重复已获得主要提升，更多循环会受位置错配影响。' }, paper: 'https://arxiv.org/abs/2606.18023', code: 'https://github.com/CSJianYang/LoopCoder'
  },
  {
    id: '2606.18206', date: '2026-06-16', title: 'Fixed-Point Reasoners: Stable and Adaptive Deep Looped Transformers', authors: 'Sajad Movahedi et al.', venue: 'arXiv 2026', category: 'Adaptive Compute', tags: ['fixed-point', 'adaptive-depth', 'reasoning'],
    summary: { en: 'Trains deep looped Transformers around stable attractors so inference can stop by convergence rather than a fixed iteration count.', zh: '围绕稳定吸引子训练深循环 Transformer，使推理可依据收敛而非固定迭代次数停止。' }, paper: 'https://arxiv.org/abs/2606.18206', code: 'https://github.com/nilskiKonjIzDunava/fprm'
  },
  {
    id: '2606.18524', date: '2026-06-16', title: 'On the Residual Scaling of Looped Transformers: Stability and Transferability', authors: 'Shaowen Wang et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['residual-scaling', 'stability', 'hyperparameter-transfer'],
    summary: { en: 'Shows that correlated reuse changes residual-growth laws and derives loop-aware scaling that supports stable depth and hyperparameter transfer.', zh: '指出权重重复造成的相关更新会改变残差增长规律，并推导支持稳定深度与超参数迁移的循环感知缩放。' }, paper: 'https://arxiv.org/abs/2606.18524'
  },
  {
    id: '2606.29983', date: '2026-06-29', title: 'Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping', authors: 'Hsun-Yu Kuo et al.', venue: 'arXiv 2026', category: 'Adaptive Compute', tags: ['stochastic-stopping', 'length-generalization', 'halting'],
    summary: { en: 'Randomizes supervised stopping depth and learns when to halt, reducing sensitivity to a single training horizon on length-generalization tasks.', zh: '随机化训练监督的停止深度并学习何时停止，降低长度泛化对单一训练循环数的敏感性。' }, paper: 'https://arxiv.org/abs/2606.29983'
  },
  {
    id: '2606.31779', date: '2026-06-30', title: 'Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers', authors: 'Ying Fan, Anej Svete, Kangwook Lee', venue: 'arXiv 2026', category: 'Latent Reasoning', tags: ['lotus', 'latent-cot', 'parallel-supervision'],
    summary: { en: 'LOTUS supervises parallel latent slots against explicit reasoning steps, bringing latent looped reasoning closer to chain-of-thought quality with lower thought latency.', zh: 'LOTUS 用显式推理步骤并行监督潜变量，使循环隐推理更接近 CoT 质量，同时降低思考阶段延迟。' }, paper: 'https://arxiv.org/abs/2606.31779'
  },
  {
    id: '2607.13491', date: '2026-07-15', title: 'DeepLoop: Depth Scaling for Looped Transformers', authors: 'Shuzhen Li et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['residual-scaling', 'post-layernorm', 'deep-training'],
    summary: { en: 'Derives residual initialization rules based on how often shared parameters are revisited, stabilizing deeply unrolled post-LN Transformers.', zh: '依据共享参数被访问的次数推导残差初始化规则，稳定深度展开的 Post-LN 循环 Transformer。' }, paper: 'https://arxiv.org/abs/2607.13491', code: 'https://github.com/lszshu/DeepLoop'
  },
  {
    id: '2607.15456', date: '2026-07-16', title: 'Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers', authors: "James O'Neill, Fergal Reid", venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['kv-compression', 'long-context', 'inference'],
    summary: { en: 'Compresses the trajectory of keys and values across loop iterations into a compact latent representation for higher serving capacity.', zh: '把不同循环中的 K/V 轨迹压缩到紧凑隐表示中，以提高循环模型的服务容量。' }, paper: 'https://arxiv.org/abs/2607.15456'
  },
  {
    id: '2607.16051', date: '2026-07-17', title: 'Loop the Loopies!', authors: 'Zitian Gao et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['mixture-of-experts', 'compute-matching', 'large-scale'],
    summary: { en: 'Develops a large-scale looped MoE recipe that reinvests parameter-memory savings while comparing against compute-matched sparse baselines.', zh: '提出大规模循环 MoE 配方，把参数内存节省重新投入训练，并与计算匹配的稀疏基线比较。' }, paper: 'https://arxiv.org/abs/2607.16051'
  },
  {
    id: '2608.03624', date: '2026-08-04', title: 'LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction', authors: 'Behzad Shomali et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['multi-token-prediction', 'intermediate-supervision', 'overthinking'],
    summary: { en: 'Aligns each loop state with progressively farther future tokens, adding dense guidance intended to reduce undirected refinement and overthinking.', zh: '让每轮状态对齐更远的未来 token，以密集监督减少无方向的隐状态细化与过度思考。' }, paper: 'https://arxiv.org/abs/2608.03624'
  },
  {
    id: '2608.09444', date: '2026-08-10', title: 'Depth-Adaptive Inference of Looped Language Models via Continuous Depth Batching', authors: 'Kristian Schwethelm et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['continuous-batching', 'early-exit', 'serving'],
    summary: { en: 'Turns variable recurrent depth into a serving primitive by continuously batching examples that enter and leave at different loop counts.', zh: '把可变循环深度变成服务系统原语，持续批处理在不同循环次数进入和退出的样本。' }, paper: 'https://arxiv.org/abs/2608.09444'
  },
  {
    id: '2608.15062', date: '2026-08-15', title: 'Gated Recurrent Transformers: Expressive Depth through Recurrent Modulation', authors: 'Amr Hegazy et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['gating', 'modulation', 'parameter-efficiency'],
    summary: { en: 'Modulates a shared recurrent core with a learned update gate and fresh noise, allowing repeated applications to specialize by step.', zh: '用学习到的更新门和逐步噪声调制共享循环核心，使同一模块在不同循环中形成专门化。' }, paper: 'https://arxiv.org/abs/2608.15062'
  },
  {
    id: '2608.17981', date: '2026-08-18', title: 'Recirculation', authors: 'Michael C. Mozer et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['training-free', 'state-tracking', 'prefill'],
    summary: { en: 'Adds a distinct inference-time recurrence to frozen foundation models during prefill, targeting belief-state tracking without generation-time latency.', zh: '在冻结基础模型的预填充阶段加入一种不同于常规深度循环的递归，改善信念状态跟踪且不增加生成阶段延迟。' }, paper: 'https://arxiv.org/abs/2608.17981'
  },
  {
    id: '2608.18171', date: '2026-08-17', title: 'Looped Language Models Improve Compositional Tool Calling', authors: 'Andrei Cristian Popescu et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['tool-use', 'composition', 'agents'],
    summary: { en: 'Evaluates recurrent depth on tool-use tasks and finds its clearest gains when calls have compositional or dependency structure.', zh: '在工具调用任务上评估循环深度，发现其收益主要出现在具有组合或依赖结构的调用中。' }, paper: 'https://arxiv.org/abs/2608.18171'
  },
  {
    id: '2608.18222', date: '2026-08-18', title: 'Think Shallow, Solve Deep: Controlling Recurrent Dynamics for Reliable Test-Time Depth', authors: 'Ivan Viakhirev et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['depth-extrapolation', 'fixed-point-objective', 'dynamics'],
    summary: { en: 'Classifies recurrent dynamics and introduces a terminal fixed-point objective to make extra test-time depth safer and more reliable.', zh: '分类循环动力学，并引入终端不动点目标，使额外测试时深度更安全可靠。' }, paper: 'https://arxiv.org/abs/2608.18222'
  },
  {
    id: '2608.18230', date: '2026-08-18', title: 'Allocating Recurrent Compute in Looped Language Models', authors: 'Ruhai Lin et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['mixer-loop', 'ffn', 'compute-allocation'],
    summary: { en: 'Asks which sublayer should recur and finds that repeatedly applying the sequence mixer can retain much of the loop benefit without repeating every FFN.', zh: '追问究竟哪些子层应循环，发现只重复序列混合器可保留大量循环收益，而无需每轮都执行 FFN。' }, paper: 'https://arxiv.org/abs/2608.18230'
  },
  {
    id: '2609.01343', date: '2026-09-01', title: 'SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers', authors: 'Shaowen Wang et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['mixture-of-experts', 'compute-matching', 'scaling-laws'],
    summary: { en: 'Evaluates looped MoE models while jointly matching FLOPs, non-embedding parameters, and KV cache, separating architectural effects from extra compute.', zh: '在同时匹配 FLOPs、非嵌入参数量和 KV 缓存的条件下评估循环 MoE，区分架构收益与额外计算收益。' }, paper: 'https://arxiv.org/abs/2609.01343'
  },
  {
    id: '2402.01107', date: '2024-02-02', title: 'Simulation of Graph Algorithms with Looped Transformers', authors: 'Artur Back de Luca, Kimon Fountoulakis', venue: 'arXiv 2024', category: 'Foundations & Theory', tags: ['graph-algorithms', 'programmability', 'turing-completeness'],
    summary: { en: 'Constructs looped Transformers that execute shortest-path, traversal, and connectivity algorithms on arbitrary-size graphs, while making finite-precision limits explicit.', zh: '构造可在任意规模图上执行最短路、遍历和连通性算法的循环 Transformer，并明确讨论有限精度带来的限制。' }, paper: 'https://arxiv.org/abs/2402.01107', code: 'https://github.com/watcl-lab/graphalgosimulation'
  },
  {
    id: '2410.08292', date: '2024-10-10', title: 'Can Looped Transformers Learn to Implement Multi-step Gradient Descent for In-context Learning?', authors: 'Khashayar Gatmiry et al.', venue: 'arXiv 2024', category: 'Foundations & Theory', tags: ['in-context-learning', 'gradient-descent', 'learnability'],
    summary: { en: 'Moves beyond construction results by analyzing optimization: population-risk minimizers and gradient flow learn a data-adapted multi-step preconditioned gradient method.', zh: '从可表达性推进到可学习性分析：总体风险最优解与梯度流会学习适应数据分布的多步预条件梯度法。' }, paper: 'https://arxiv.org/abs/2410.08292'
  },
  {
    id: '2502.21212', date: '2025-02-28', title: 'Transformers Learn to Implement Multi-step Gradient Descent with Chain of Thought', authors: 'Jianhao Huang, Zixuan Wang, Jason D. Lee', venue: 'arXiv 2025', category: 'Foundations & Theory', tags: ['chain-of-thought', 'gradient-descent', 'in-context-learning'],
    summary: { en: 'Analyzes how CoT training induces multi-step in-context gradient descent and uses the same tools to show a performance gain from looping.', zh: '分析 CoT 训练如何诱导多步上下文梯度下降，并用同一套理论工具说明循环带来的性能提升。' }, paper: 'https://arxiv.org/abs/2502.21212'
  },
  {
    id: '2503.03961', date: '2025-03-05', title: 'A Little Depth Goes a Long Way: The Expressive Power of Log-Depth Transformers', authors: 'William Merrill, Ashish Sabharwal', venue: 'ICLR 2025', category: 'Foundations & Theory', tags: ['log-depth', 'formal-languages', 'graph-connectivity'],
    summary: { en: 'Shows that a universally shared block unrolled only logarithmically with input length can recognize regular languages and solve graph connectivity beyond fixed-depth limits.', zh: '证明共享模块只需随输入长度对数级展开，就能识别正则语言并解决超出固定深度能力边界的图连通问题。' }, paper: 'https://openreview.net/forum?id=njycONK0JG'
  },
  {
    id: '2606.00605', date: '2026-05-30', title: 'Looped Transformers with Layer Normalization Provably Learn the Power Method', authors: 'Lyumin Wu, Chenyang Zhang, Yuan Cao', venue: 'arXiv 2026', category: 'Foundations & Theory', tags: ['layer-normalization', 'power-method', 'implicit-bias'],
    summary: { en: 'Proves that gradient descent selects a looped, layer-normalized solution implementing one power iteration per attention application.', zh: '证明梯度下降会选择一种带 LayerNorm 的循环解，使每次注意力调用对应一次幂迭代。' }, paper: 'https://arxiv.org/abs/2606.00605'
  },
  {
    id: '2404.15758', date: '2024-04-24', title: "Let’s Think Dot by Dot: Hidden Computation in Transformer Language Models", authors: 'Jacob Pfau et al.', venue: 'COLM 2024', category: 'Broader Latent Reasoning', tags: ['filler-tokens', 'hidden-computation', 'broader-scope'],
    summary: { en: 'Uses semantically empty filler tokens to expose additional Transformer computation without requiring a verbalized rationale.', zh: '使用语义为空的填充 token 为 Transformer 提供额外计算步，而无需生成语言化推理过程。' }, paper: 'https://arxiv.org/abs/2404.15758', code: 'https://github.com/JacobPfau/fillerTokens'
  },
  {
    id: '2405.14838', date: '2024-05-23', title: 'From Explicit CoT to Implicit CoT: Learning to Internalize CoT Step by Step', authors: 'Xuezhi Wang et al.', venue: 'arXiv 2024', category: 'Broader Latent Reasoning', tags: ['implicit-cot', 'internalization', 'broader-scope'],
    summary: { en: 'Progressively removes explicit reasoning steps during training so their function is absorbed into hidden computation.', zh: '在训练中逐步移除显式推理步骤，使其功能被模型内部的隐式计算吸收。' }, paper: 'https://arxiv.org/abs/2405.14838'
  },
  {
    id: '2409.14026', date: '2024-09-21', title: 'Uncovering Latent Chain of Thought Vectors in Language Models', authors: 'Jason Zhang, Scott Viteri', venue: 'arXiv 2024', category: 'Broader Latent Reasoning', tags: ['steering-vectors', 'latent-cot', 'broader-scope'],
    summary: { en: 'Derives activation directions associated with chain-of-thought behavior and uses them to steer reasoning without a natural-language trigger.', zh: '提取与思维链行为相关的激活方向，并用它在不依赖自然语言提示的情况下引导推理。' }, paper: 'https://arxiv.org/abs/2409.14026'
  },
  {
    id: '2411.04282', date: '2024-11-06', title: 'Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding', authors: 'Zayne Sprague et al.', venue: 'arXiv 2024', category: 'Broader Latent Reasoning', tags: ['self-reward', 'hidden-reasoning', 'broader-scope'],
    summary: { en: 'Optimizes hidden reasoning behavior with self-generated preference signals instead of requiring every intermediate step to be written out.', zh: '利用模型自生成的偏好信号优化隐式推理行为，而不要求把每个中间步骤写出来。' }, paper: 'https://arxiv.org/abs/2411.04282', code: 'https://github.com/SalesforceAIResearch/LaTRO'
  },
  {
    id: '2412.06769', date: '2024-12-09', title: 'Training Large Language Models to Reason in a Continuous Latent Space', authors: 'Shibo Hao et al.', venue: 'COLM 2025', category: 'Broader Latent Reasoning', tags: ['coconut', 'continuous-thought', 'broader-scope'], foundation: true,
    summary: { en: 'Coconut feeds a generated hidden state back as the next input embedding, creating a continuous chain of thought that can represent multiple candidate paths.', zh: 'Coconut 把生成的隐藏状态直接作为下一步输入嵌入，形成可同时承载多个候选路径的连续思维链。' }, paper: 'https://arxiv.org/abs/2412.06769', code: 'https://github.com/facebookresearch/coconut'
  },
  {
    id: '2412.13171', date: '2024-12-17', title: 'Compressed Chain of Thought: Efficient Reasoning through Dense Representations', authors: 'Zhiyuan Deng et al.', venue: 'arXiv 2024', category: 'Broader Latent Reasoning', tags: ['compressed-cot', 'dense-representations', 'broader-scope'],
    summary: { en: 'Compresses longer textual reasoning traces into fewer dense representations to reduce autoregressive reasoning cost.', zh: '把较长的文本推理轨迹压缩成更少的稠密表示，以降低自回归推理成本。' }, paper: 'https://arxiv.org/abs/2412.13171'
  },
  {
    id: '2501.19201', date: '2025-01-31', title: 'Efficient Reasoning with Hidden Thinking', authors: 'Huanjin Yao et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['hidden-thinking', 'compression', 'broader-scope'],
    summary: { en: 'Learns compact hidden reasoning states that replace portions of an explicit chain while retaining answer quality.', zh: '学习紧凑的隐藏推理状态，替代部分显式思维链并尽量保持答案质量。' }, paper: 'https://arxiv.org/abs/2501.19201', code: 'https://github.com/shawnricecake/Heima'
  },
  {
    id: '2502.03275', date: '2025-02-05', title: 'Token Assorted: Mixing Latent and Text Tokens for Improved Language Model Reasoning', authors: 'Jiaxin Huang et al.', venue: 'ICML 2025', category: 'Broader Latent Reasoning', tags: ['hybrid-reasoning', 'latent-tokens', 'broader-scope'],
    summary: { en: 'Interleaves continuous latent tokens with ordinary text tokens, exploring a hybrid medium between silent and explicit reasoning.', zh: '交错使用连续潜 token 与普通文本 token，探索静默推理和显式推理之间的混合媒介。' }, paper: 'https://arxiv.org/abs/2502.03275'
  },
  {
    id: '2502.21074', date: '2025-02-28', title: 'CODI: Compressing Chain-of-Thought into Continuous Space via Self-Distillation', authors: 'Zhengyu Chen et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['self-distillation', 'continuous-cot', 'broader-scope'],
    summary: { en: 'Self-distills explicit rationales into continuous hidden trajectories so the model can reason with fewer decoded tokens.', zh: '通过自蒸馏把显式推理压入连续隐藏轨迹，使模型用更少的解码 token 完成推理。' }, paper: 'https://arxiv.org/abs/2502.21074', code: 'https://github.com/zhenyi4/codi'
  },
  {
    id: '2505.15778', date: '2025-05-21', title: 'Soft Thinking: Unlocking the Reasoning Potential of LLMs in Continuous Concept Space', authors: 'Yuhui Xu et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['soft-thinking', 'concept-space', 'broader-scope'],
    summary: { en: 'Propagates soft vocabulary distributions as continuous concept representations instead of committing to a single discrete reasoning token.', zh: '把词表上的软分布作为连续概念表示传递，避免每一步都过早确定为单个离散推理 token。' }, paper: 'https://arxiv.org/abs/2505.15778', code: 'https://github.com/eric-ai-lab/Soft-Thinking'
  },
  {
    id: '2505.18454', date: '2025-05-24', title: 'Hybrid Latent Reasoning via Reinforcement Learning', authors: 'Zhenrui Yue et al.', venue: 'NeurIPS 2025', category: 'Broader Latent Reasoning', tags: ['reinforcement-learning', 'hybrid-reasoning', 'broader-scope'],
    summary: { en: 'Uses reinforcement learning to combine sampled tokens with prior hidden states, preserving discrete generation while introducing latent computation.', zh: '用强化学习融合采样 token 和先前隐藏状态，在保留离散生成的同时引入隐空间计算。' }, paper: 'https://arxiv.org/abs/2505.18454', code: 'https://github.com/Yueeeeeeee/HRPO'
  },
  {
    id: '2505.20674', date: '2025-05-27', title: 'PonderLM: Pretraining Language Models to Ponder in Continuous Space', authors: 'Boyi Zeng et al.', venue: 'ICLR 2026', category: 'Broader Latent Reasoning', tags: ['pondering', 'pretraining', 'broader-scope'],
    summary: { en: 'Learns continuous pondering during pretraining by feeding a probability-weighted sum of token embeddings back into additional forward passes before emitting a token.', zh: '在预训练中学习连续思考，将预测分布加权得到的 token 嵌入回送模型，在输出 token 前执行额外的前向计算。' }, paper: 'https://arxiv.org/abs/2505.20674', code: 'https://github.com/LUMIA-Group/PonderingLM'
  },
  {
    id: '2506.18582', date: '2025-06-23', title: 'Parallel Continuous Chain-of-Thought with Jacobi Iteration', authors: 'Zhenyu Zhang et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['parallel-reasoning', 'jacobi', 'broader-scope'],
    summary: { en: 'Uses Jacobi-style updates to refine multiple continuous thought positions in parallel rather than generating a serial rationale.', zh: '使用 Jacobi 式更新并行细化多个连续思维位置，而不是串行生成推理文本。' }, paper: 'https://arxiv.org/abs/2506.18582', code: 'https://github.com/whyNLP/PCCoT'
  },
  {
    id: '2506.21734', date: '2025-06-26', title: 'Hierarchical Reasoning Model', authors: 'Guan Wang et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['hrm', 'hierarchical-recurrence', 'broader-scope'], foundation: true,
    summary: { en: 'Uses two recurrent modules operating at different timescales to solve difficult symbolic tasks with a compact non-Transformer reasoner.', zh: '使用工作在不同时间尺度的两个循环模块，以紧凑的非 Transformer 推理器解决高难符号任务。' }, paper: 'https://arxiv.org/abs/2506.21734', code: 'https://github.com/sapientinc/HRM'
  },
  {
    id: '2507.06203', date: '2025-07-08', title: 'A Survey on Latent Reasoning', authors: 'Rui-Jie Zhu et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['survey', 'taxonomy', 'broader-scope'],
    summary: { en: 'Surveys activation recurrence, hidden-state propagation, compressed reasoning, and implicit-depth approaches across the broader latent-reasoning landscape.', zh: '系统梳理激活循环、隐藏状态传递、压缩推理与隐式深度等更广泛的潜在推理路线。' }, paper: 'https://arxiv.org/abs/2507.06203', code: 'https://github.com/multimodal-art-projection/LatentCoT-Horizon'
  },
  {
    id: '2508.00574', date: '2025-08-01', title: 'SynAdapt: Learning Adaptive Reasoning in Large Language Models via Synthetic Continuous Chain-of-Thought', authors: 'Jianwei Wang et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['adaptive-reasoning', 'synthetic-targets', 'broader-scope'],
    summary: { en: 'Creates synthetic continuous-thought targets and invokes additional reasoning only when a learned difficulty signal marks an example as hard.', zh: '构造合成连续思维监督目标，并仅在学习到的难度信号判定问题较难时追加推理。' }, paper: 'https://arxiv.org/abs/2508.00574'
  },
  {
    id: '2509.20317', date: '2025-09-24', title: 'SIM-CoT: Supervised Implicit Chain-of-Thought', authors: 'InternLM Team', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['supervised-learning', 'implicit-cot', 'broader-scope'],
    summary: { en: 'Trains implicit reasoning states with supervision derived from explicit chain-of-thought trajectories.', zh: '利用显式思维链轨迹派生的监督信号训练隐式推理状态。' }, paper: 'https://arxiv.org/abs/2509.20317', code: 'https://github.com/InternLM/SIM-CoT'
  },
  {
    id: '2510.04871', date: '2025-10-06', title: 'Less is More: Recursive Reasoning with Tiny Networks', authors: 'Alexia Jolicoeur-Martineau', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['trm', 'tiny-model', 'broader-scope'], foundation: true,
    summary: { en: 'Proposes the Tiny Recursive Model: a small shared network alternately refines a latent state and a candidate answer, with both self-attention and attention-free variants evaluated on structured reasoning tasks.', zh: '提出 Tiny Recursive Model：用小型共享网络交替更新隐状态与候选答案，并在结构化推理任务上比较自注意力与无注意力两种实现。' }, paper: 'https://arxiv.org/abs/2510.04871', code: 'https://github.com/SamsungSAILMontreal/TinyRecursiveModels'
  },
  {
    id: '2510.15522', date: '2025-10-17', title: 'LLM Latent Reasoning as Chain of Superposition', authors: 'Jingcheng Deng et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['vocabulary-space', 'superposition', 'broader-scope'],
    summary: { en: 'Constrains latent thoughts to superpositions in vocabulary space, adding structure and a direct bridge back to explicit reasoning tokens.', zh: '把潜在思维限制在词表空间的叠加表示中，为隐空间增加结构并建立返回显式 token 的直接桥梁。' }, paper: 'https://arxiv.org/abs/2510.15522'
  },
  {
    id: '2511.21581', date: '2025-11-26', title: 'Learning When to Stop: Adaptive Latent Reasoning via Reinforcement Learning', authors: 'Alex Ning et al.', venue: 'arXiv 2025', category: 'Broader Latent Reasoning', tags: ['reinforcement-learning', 'adaptive-length', 'broader-scope'],
    summary: { en: 'Optimizes a stopping policy for latent reasoning, explicitly trading continuous reasoning length against answer accuracy.', zh: '为潜在推理优化停止策略，显式权衡连续推理长度与答案准确率。' }, paper: 'https://arxiv.org/abs/2511.21581', code: 'https://github.com/apning/adaptive-latent-reasoning'
  },
  {
    id: '2410.09375', date: '2024-10-12', title: 'Looped ReLU MLPs May Be All You Need as Practical Programmable Computers', authors: 'Yingyu Liang et al.', venue: 'arXiv 2024', category: 'Foundations & Theory', tags: ['programmability', 'mlp', 'non-transformer'],
    summary: { en: 'Shows that a compact looped ReLU MLP can implement the primitive operations of a programmable computer, providing a non-attention comparison point for looped Transformer expressivity.', zh: '证明紧凑的循环 ReLU MLP 可实现可编程计算机的基本操作，为循环 Transformer 的表达能力提供非注意力架构参照。' }, paper: 'https://arxiv.org/abs/2410.09375'
  },
  {
    id: '2410.21698', date: '2024-10-29', title: 'On the Role of Depth and Looping for In-Context Learning with Task Diversity', authors: 'Khashayar Gatmiry et al.', venue: 'arXiv 2024', category: 'Foundations & Theory', tags: ['in-context-learning', 'robustness', 'task-diversity'],
    summary: { en: 'Establishes depth requirements for diverse in-context regression tasks and argues that weight-tied looping retains expressivity while improving robustness and monotonicity across depth.', zh: '建立多样化上下文回归任务的深度需求，并说明权重共享循环在保持表达力的同时，可改善分布偏移鲁棒性和随深度变化的单调性。' }, paper: 'https://arxiv.org/abs/2410.21698'
  },
  {
    id: '2501.10688', date: '2025-01-18', title: 'Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers', authors: 'Zekai Huang et al.', venue: 'arXiv 2025', category: 'Foundations & Theory', tags: ['hypergraphs', 'algorithmic-reasoning', 'programmability'],
    summary: { en: 'Extends constructive looped-Transformer simulations from graphs to hypergraphs through graph reductions and hyperedge-aware encodings for algorithms such as Dijkstra and Helly.', zh: '通过图退化与超边感知编码，把循环 Transformer 的构造性算法模拟从图扩展到超图，包括 Dijkstra 与 Helly 等算法。' }, paper: 'https://arxiv.org/abs/2501.10688'
  },
  {
    id: '2502.08482', date: '2025-02-12', title: 'Enhancing Auto-regressive Chain-of-Thought through Loop-Aligned Reasoning', authors: 'Qifan Yu et al.', venue: 'arXiv 2025', category: 'Latent Reasoning', tags: ['relay', 'chain-of-thought', 'length-generalization'],
    summary: { en: 'RELAY aligns visible reasoning steps with loop iterations, using intermediate supervision to generate length-generalizing rationales that then improve an autoregressive model.', zh: 'RELAY 将显式推理步骤与循环迭代对齐，通过中间监督生成可进行长度外推的推理链，再用于增强自回归模型。' }, paper: 'https://arxiv.org/abs/2502.08482', code: 'https://github.com/qifanyu/RELAY'
  },
  {
    id: '2510.07739', date: '2025-10-09', title: 'MeSH: Memory-as-State-Highways for Recursive Transformers', authors: 'Chengting Yu et al.', venue: 'arXiv 2025', category: 'Architectures & Scaling', tags: ['memory', 'routing', 'iteration-specialization'],
    summary: { en: 'Adds an explicit memory buffer and lightweight routers to separate long-lived from transient state and encourage distinct computation at different recursive steps.', zh: '引入显式记忆缓冲区和轻量路由器，分离长期与瞬时状态，并促使不同递归步形成差异化计算。' }, paper: 'https://arxiv.org/abs/2510.07739', code: 'https://github.com/LivingFutureLab/MeSH'
  },
  {
    id: '2511.21882', date: '2025-11-26', title: 'Closed-Loop Transformers: Autoregressive Modeling as Iterative Latent Equilibrium', authors: 'Akbar Anbar Jafari, Gholamreza Anbarjafari', venue: 'arXiv 2025', category: 'Latent Reasoning', tags: ['equilibrium', 'energy-based-model', 'iterative-refinement'],
    summary: { en: 'Proposes refining each token’s latent state toward a learned energy-based equilibrium before generation, framing autoregressive prediction as a closed-loop correction process.', zh: '在生成每个 token 前，把潜在状态迭代细化到学习到的能量平衡点，将自回归预测重述为闭环纠错过程。' }, paper: 'https://arxiv.org/abs/2511.21882'
  },
  {
    id: '2512.12880', date: '2025-12-14', title: 'Improving Recursive Transformers with Mixture of LoRAs', authors: 'Mohammadmahdi Nouriborji et al.', venue: 'arXiv 2025', category: 'Architectures & Scaling', tags: ['lora', 'conditional-compute', 'parameter-sharing'],
    summary: { en: 'Restores some layer-wise expressivity lost to recursive weight sharing by inserting token-conditioned LoRA experts into a shared feed-forward network.', zh: '在共享前馈网络中加入 token 条件化的 LoRA 专家，补回递归权重共享所损失的部分逐层表达能力。' }, paper: 'https://arxiv.org/abs/2512.12880'
  },
  {
    id: '2601.09588', date: '2026-01-14', title: 'Energy-Entropy Regularization: The True Power of Minimal Looped Transformers', authors: 'Wai-Lun Lam', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['optimization', 'entropy', 'minimal-model'],
    summary: { en: 'Uses Tsallis-entropy and Hamiltonian-inspired optimization to train an unusually small single-head looped Transformer on a long-range induction task.', zh: '利用 Tsallis 熵与受 Hamilton 动力学启发的优化方法，训练极小的单头循环 Transformer 完成长程归纳任务。' }, paper: 'https://arxiv.org/abs/2601.09588'
  },
  {
    id: '2601.10242', date: '2026-01-15', title: 'Loop as a Bridge: Can Looped Transformers Truly Link Representation Space and Natural Language Outputs?', authors: 'Guanxu Chen et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['introspection', 'representation', 'negative-result'],
    summary: { en: 'Tests whether extra loops improve access to internal knowledge and finds that some apparent bridging gains instead reflect degraded representations, exposing a limit of current looped models.', zh: '检验额外循环能否改善内部知识的表达，发现部分表面增益来自表示退化，从而揭示现有循环模型的内省局限。' }, paper: 'https://arxiv.org/abs/2601.10242'
  },
  {
    id: '2602.02156', date: '2026-02-02', title: 'LoopViT: Scaling Visual ARC with Looped Transformers', authors: 'Wen-Jie Shu et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['vision', 'arc-agi', 'dynamic-exit'],
    summary: { en: 'Builds an 18M-parameter recurrent vision Transformer for ARC-AGI and uses predictive entropy as a parameter-free stopping signal for adaptive visual reasoning depth.', zh: '构建用于 ARC-AGI 的 1800 万参数循环视觉 Transformer，并以预测熵作为无需额外参数的动态停止信号。' }, paper: 'https://arxiv.org/abs/2602.02156', code: 'https://github.com/WenjieShu/LoopViT'
  },
  {
    id: '2602.10097', date: '2026-02-10', title: 'Step-resolved data attribution for looped transformers', authors: 'Georgios Kaissis et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['data-attribution', 'interpretability', 'tensor-sketch'],
    summary: { en: 'Decomposes training-example influence across individual recurrent steps and uses TensorSketch to make per-loop attribution practical without materializing full per-example gradients.', zh: '把训练样本影响分解到各个循环步，并用 TensorSketch 在不显式保存逐样本完整梯度的情况下实现逐步归因。' }, paper: 'https://arxiv.org/abs/2602.10097'
  },
  {
    id: '2602.10520', date: '2026-02-11', title: 'Prioritize the Process, Not Just the Outcome: Rewarding Latent Thought Trajectories Improves Reasoning in Looped Language Models', authors: 'Jonathan Williams, Esin Tureci', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['rltt', 'reinforcement-learning', 'trajectory-credit'],
    summary: { en: 'RLTT distributes reinforcement credit across Ouro’s entire latent trajectory instead of rewarding only the final recurrent state, directly training the hidden reasoning process.', zh: 'RLTT 将强化学习信用分配到 Ouro 的完整潜在轨迹，而不只奖励最后一个循环状态，从而直接训练隐式推理过程。' }, paper: 'https://arxiv.org/abs/2602.10520', code: 'https://github.com/jonwill8/RLTT'
  },
  {
    id: '2603.08391', date: '2026-03-09', title: 'Adaptive Loops and Memory in Transformers: Think Harder or Know More?', authors: 'Markus Frey et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['adaptive-loops', 'memory-bank', 'layer-specialization'],
    summary: { en: 'Combines learned per-layer looping with gated memory banks, separating extra iterative computation from additional learned storage and revealing different benefits across task types.', zh: '结合逐层自适应循环与门控记忆库，将额外迭代计算和额外学习存储分离，并揭示二者在不同任务上的作用差异。' }, paper: 'https://arxiv.org/abs/2603.08391'
  },
  {
    id: '2603.19714', date: '2026-03-20', title: 'LoopRPT: Reinforcement Pre-Training for Looped Language Models', authors: 'Guo Tang et al.', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['reinforcement-pretraining', 'ouro', 'latent-supervision'],
    summary: { en: 'Applies reinforcement signals directly to intermediate latent steps during pretraining, aiming to improve hard-token representations earlier in Ouro-style computation.', zh: '在预训练阶段把强化信号直接施加到中间潜在步骤，使 Ouro 式模型更早形成高质量的困难 token 表示。' }, paper: 'https://arxiv.org/abs/2603.19714'
  },
  {
    id: '2603.29057', date: '2026-03-30', title: 'LA-Sign: Looped Transformers with Geometry-aware Alignment for Skeleton-based Sign Language Recognition', authors: 'Muxin Pu et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['sign-language', 'skeleton', 'hyperbolic-alignment'],
    summary: { en: 'Uses encoder-decoder recurrence to refine skeletal motion representations and adds geometry-aware cross-modal alignment for isolated sign-language recognition.', zh: '利用编码器—解码器循环细化骨骼动作表示，并加入几何感知的跨模态对齐以完成孤立手语识别。' }, paper: 'https://arxiv.org/abs/2603.29057'
  },
  {
    id: '2604.02051', date: '2026-04-02', title: 'Ouroboros: Dynamic Weight Generation for Recursive Transformers via Input-Conditioned LoRA Modulation', authors: 'Jaber Jaber, Osama Jaber', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['hypernetwork', 'lora', 'step-specialization'],
    summary: { en: 'Uses a compact controller to generate input- and step-conditioned modulation over shared LoRA bases, giving a recursive block different effective transformations at each visit.', zh: '用紧凑控制器在共享 LoRA 基底上生成输入与步数条件调制，使递归模块每次访问时具有不同的有效变换。' }, paper: 'https://arxiv.org/abs/2604.02051', code: 'https://github.com/RightNow-AI/ouroboros'
  },
  {
    id: '2604.09168', date: '2026-04-10', title: 'ELT: Elastic Looped Transformers for Visual Generation', authors: 'Sahil Goyal et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['visual-generation', 'self-distillation', 'anytime-inference'],
    summary: { en: 'Trains recurrent image and video generators with intra-loop self-distillation so one checkpoint supports elastic compute-quality trade-offs at inference.', zh: '用循环内自蒸馏训练图像与视频生成模型，使单一检查点在推理时支持弹性的算力—质量权衡。' }, paper: 'https://arxiv.org/abs/2604.09168'
  },
  {
    id: '2604.09870', date: '2026-04-10', title: 'Relational Preference Encoding in Looped Transformer Internal States', authors: 'Jan Kirin', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['preference-modeling', 'probing', 'erratum'],
    summary: { en: 'Studies preference readout across Ouro iterations; its appended audit retracts inflated headline results but preserves a smaller relational-over-pointwise decoding effect and useful evaluation warnings.', zh: '研究 Ouro 各循环步中的偏好读出；追加审计撤回了被高估的主要结果，但保留了较小的关系式优于逐点式解码效应及重要评估警示。' }, paper: 'https://arxiv.org/abs/2604.09870'
  },
  {
    id: '2604.18839', date: '2026-04-20', title: 'One Step Forward and K Steps Back: Better Reasoning with Denoising Recursion Models', authors: 'Chris Cameron et al.', venue: 'arXiv 2026', category: 'Broader Latent Reasoning', tags: ['denoising-recursion', 'arc-agi', 'broader-scope'],
    summary: { en: 'Trains recursive reasoners to reverse controlled corruption over multiple refinement steps, providing intermediate-state curricula for search-like structured reasoning.', zh: '训练递归推理器通过多步细化逆转可控扰动，为具有搜索性质的结构化推理提供中间状态课程。' }, paper: 'https://arxiv.org/abs/2604.18839'
  },
  {
    id: '2604.21254', date: '2026-04-23', title: 'Hyperloop Transformers', authors: 'Abbas Zeitoun et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['hyper-connections', 'memory-efficiency', 'partial-looping'],
    summary: { en: 'Loops only a middle layer block and adds hyper-connections between visits, targeting strong language modeling under model-memory constraints and quantization.', zh: '只循环中间层块，并在各次访问之间加入 Hyper-Connections，面向模型内存受限与量化场景提升语言建模效率。' }, paper: 'https://arxiv.org/abs/2604.21254'
  },
  {
    id: '2605.00206', date: '2026-04-30', title: 'State Stream Transformer (SST) V2: Parallel Training of Nonlinear Recurrence for Latent Space Reasoning', authors: 'Thea Aviss', venue: 'arXiv 2026', category: 'Broader Latent Reasoning', tags: ['state-stream', 'nonlinear-recurrence', 'parallel-training'],
    summary: { en: 'Streams nonlinear recurrent state horizontally across decoder positions and uses a two-pass approximation to train this sequential latent pathway in parallel.', zh: '在解码位置间横向传递非线性循环状态，并用两遍近似实现该顺序潜在通路的并行训练。' }, paper: 'https://arxiv.org/abs/2605.00206'
  },
  {
    id: '2605.11262', date: '2026-05-11', title: 'Latent Chain-of-Thought Improves Structured-Data Transformers', authors: 'Carson Dudley, Samet Oymak', venue: 'arXiv 2026', category: 'Latent Reasoning', tags: ['structured-data', 'feedback-tokens', 'time-series'],
    summary: { en: 'Feeds compressed query-position states back as extra tokens for repeated processing, extending latent test-time computation to tabular prediction and time-series forecasting.', zh: '把查询位置的压缩状态作为额外 token 反馈给模型反复处理，将潜在测试时计算扩展到表格预测与时间序列预测。' }, paper: 'https://arxiv.org/abs/2605.11262'
  },
  {
    id: '2605.12466', date: '2026-05-12', title: 'Solve the Loop: Attractor Models for Language and Reasoning', authors: 'Jacob Fein-Ashley, Paria Rashidinejad', venue: 'arXiv 2026', category: 'Latent Reasoning', tags: ['attractor-model', 'fixed-point', 'implicit-differentiation'],
    summary: { en: 'Replaces fixed unrolling with an attractor module solved to convergence and trained by implicit differentiation, enabling adaptive effective depth with constant training memory.', zh: '用求解至收敛的吸引子模块取代固定展开，并通过隐式微分训练，实现训练内存恒定的自适应有效深度。' }, paper: 'https://arxiv.org/abs/2605.12466'
  },
  {
    id: '2605.16343', date: '2026-05-08', title: 'LoopQ: Quantization for Recursive Transformers', authors: 'Rui Fang et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['quantization', 'recursive-error', 'deployment'],
    summary: { en: 'Identifies loop-specific post-training quantization failures and combines scaling, state alignment, and trajectory-aware optimization to limit recursively accumulated error.', zh: '识别循环模型特有的训练后量化失效，并结合激活缩放、状态对齐与轨迹感知优化来抑制递归误差累积。' }, paper: 'https://arxiv.org/abs/2605.16343'
  },
  {
    id: '2605.26797', date: '2026-05-26', title: 'Latent Recurrent Transformer: Architecture Exploration, Training Strategies, and Scaling Behavior', authors: 'Zeyi Huang et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['cross-token-recurrence', 'parallel-training', 'kv-cache'],
    summary: { en: 'Carries a high-level hidden state from one token into the next while preserving the standard KV-cache interface, and introduces interleaved parallel training for the cross-token recurrence.', zh: '把前一 token 的高层隐藏状态传递到下一 token，同时保留标准 KV-cache 接口，并提出交错并行训练处理跨 token 循环。' }, paper: 'https://arxiv.org/abs/2605.26797'
  },
  {
    id: '2605.30202', date: '2026-05-28', title: 'A Dual-Path Architecture for Scaling Compute and Capacity in LLMs', authors: 'Markus Frey et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['dual-path', 'capacity', 'token-gating'],
    summary: { en: 'Pairs a repeatedly applied deep sublayer with a single-pass wide feed-forward path, allowing token-wise gates to trade iterative compute against one-step parameter capacity.', zh: '将反复执行的深路径与单次执行的宽前馈路径并列，让 token 级门控在迭代计算与单步参数容量间分配资源。' }, paper: 'https://arxiv.org/abs/2605.30202'
  },
  {
    id: '2605.30215', date: '2026-05-28', title: 'Déjà View: Looping Transformers for Multi-View 3D Reconstruction', authors: 'Alessandro Burzio et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['3d-reconstruction', 'multiview', 'iterative-refinement'],
    summary: { en: 'Makes progressive multi-view reconstruction explicit by recurrently applying one Transformer block, exposing refinement count as an inference-time compute knob.', zh: '通过循环应用单一 Transformer 块显式实现多视角重建的渐进细化，并把细化次数变成推理时计算旋钮。' }, paper: 'https://arxiv.org/abs/2605.30215'
  },
  {
    id: '2605.30757', date: '2026-05-29', title: 'Chain-of-Thought and Compressed Looped Transformers: A Memory-Budget Separation', authors: 'Haozhou Zhang', venue: 'arXiv 2026', category: 'Foundations & Theory', tags: ['memory-complexity', 'chain-of-thought', 'separation'],
    summary: { en: 'Formalizes a memory-capacity separation: extra iterations do not give compressed latent loops the growing scratchpad available to polynomial-length chain of thought.', zh: '形式化说明记忆容量分离：增加循环次数不会让压缩潜在循环获得多项式长度思维链所拥有的增长式草稿空间。' }, paper: 'https://arxiv.org/abs/2605.30757'
  },
  {
    id: '2606.01495', date: '2026-05-31', title: 'CART: Context-Anchored Recurrent Transformer -- A Parameter-Efficient Architecture with Learned Stability', authors: 'Chad A. Capps', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['context-anchor', 'lti-gate', 'negative-result'],
    summary: { en: 'Cross-attends a recurrent core to frozen context keys and values under a learned stability gate; controlled experiments also document where this recipe fails to beat dense baselines or extrapolate in depth.', zh: '让循环核心在学习式稳定门控下交叉注意固定上下文的键值，并通过受控实验记录该方案未能击败稠密基线或进行深度外推的情形。' }, paper: 'https://arxiv.org/abs/2606.01495'
  },
  {
    id: '2606.04678', date: '2026-06-03', title: 'Test-Time Compute Scaling for ASR with Depth-Conditioned Looped Transformers', authors: 'Yacouba Kaloga et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['speech-recognition', 'depth-conditioning', 'ctc'],
    summary: { en: 'Turns recurrent encoder depth into an inference budget for speech recognition using sparse CTC checkpoints, depth conditioning, and delayed posterior feedback.', zh: '通过稀疏 CTC 检查点、深度条件调制和延迟后验反馈，把循环编码器深度变成语音识别的推理预算。' }, paper: 'https://arxiv.org/abs/2606.04678'
  },
  {
    id: '2606.09357', date: '2026-06-08', title: 'Rethinking Depth: A study of the Recursive-Transformer for Speech Recognition', authors: 'Thomas Rolland et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['speech-recognition', 'layer-sharing', 'parameter-efficiency'],
    summary: { en: 'Systematically studies where and how much recursion to use in speech encoders, finding competitive recognition with substantially fewer unique parameters in limited-loop regimes.', zh: '系统研究语音编码器应在何处、以多大深度递归，发现有限循环可在显著减少独立参数的同时保持有竞争力的识别效果。' }, paper: 'https://arxiv.org/abs/2606.09357'
  },
  {
    id: '2606.13106', date: '2026-06-11', title: 'Demystifying Hidden-State Recurrence: Switchable Latent Reasoning with On-Policy Reinforcement Learning', authors: 'Jiayu Yang et al.', venue: 'arXiv 2026', category: 'Broader Latent Reasoning', tags: ['switch', 'on-policy-rl', 'hidden-state-recurrence'],
    summary: { en: 'Introduces explicit entry and exit tokens around recurrent hidden-state reasoning, making the latent block compatible with on-policy RL and accessible to causal probing.', zh: '在循环隐藏状态推理前后加入显式进入与退出 token，使潜在模块既能使用在策略强化学习，也便于进行因果探测。' }, paper: 'https://arxiv.org/abs/2606.13106'
  },
  {
    id: '2606.17524', date: '2026-06-16', title: 'Learning to Refine Hidden States for Reliable LLM Reasoning', authors: 'Chia-Hsuan Hsu, Jui-Ming Yao', venue: 'arXiv 2026', category: 'Broader Latent Reasoning', tags: ['relar', 'adaptive-refinement', 'reinforcement-learning'],
    summary: { en: 'Uses learned depth and action controllers to choose how many latent refinements to perform and in which direction before decoding, trained from step-wise likelihood improvement.', zh: '用学习到的深度与动作控制器决定解码前进行多少次潜在细化及其方向，并以逐步似然改善作为训练信号。' }, paper: 'https://arxiv.org/abs/2606.17524'
  },
  {
    id: '2606.20737', date: '2026-06-17', title: 'Repeated Shared Access Enables Grokking, but Edit Propagation Depends on an Addressable Memory', authors: 'Yanan Niu', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['grokking', 'memory', 'knowledge-editing'],
    summary: { en: 'Separates recurrence from shared-memory access in a controlled grid, finding that either can enable grokking but reliable multi-hop edit propagation follows addressable memory rather than looping alone.', zh: '在受控实验中分离循环与共享记忆访问：二者都可能促进 grokking，但可靠的多跳编辑传播取决于可寻址记忆，而非循环本身。' }, paper: 'https://arxiv.org/abs/2606.20737'
  },
  {
    id: '2606.24898', date: '2026-06-12', title: 'Dense Supervision Is Not Enough: The Readout Blind Spot in Looped Language Models', authors: 'Rituraj Sharma, Tu Vu', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['dense-supervision', 'hidden-state-scale', 'readout'],
    summary: { en: 'Shows that per-loop cross-entropy can train usable exits while leaving recurrent-state scale uncontrolled when normalized readouts hide radial information, motivating explicit scale control.', zh: '说明逐循环交叉熵虽能训练可用出口，但归一化读出会遮蔽径向尺度，使循环状态规模失控，因此需要显式尺度约束。' }, paper: 'https://arxiv.org/abs/2606.24898'
  },
  {
    id: '2607.00341', date: '2026-07-01', title: 'DiscoLoop: Looping Discrete Embeddings and Continuous Hidden States for Multi-hop Reasoning', authors: 'Hengyu Fu et al.', venue: 'arXiv 2026', category: 'Latent Reasoning', tags: ['discrete-continuous', 'multi-hop', 'representation-alignment'],
    summary: { en: 'Carries both a discrete embedding channel and a continuous hidden-state channel through recurrence, addressing a gap between decodable bridge entities and token-aligned representations.', zh: '在循环中同时传递离散嵌入与连续隐藏状态通道，缓解可解码桥接实体与 token 对齐表示之间的落差。' }, paper: 'https://arxiv.org/abs/2607.00341'
  },
  {
    id: '2607.00774', date: '2026-07-01', title: 'Soft Mixture-of-Recursions: Going Deeper with Recursive Vision Transformers', authors: 'Sang In Lee, Jihun Park', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['vision-transformer', 'soft-routing', 'intermediate-states'],
    summary: { en: 'Learns token-wise mixtures over every recursion output so recursive vision Transformers can exploit intermediate states instead of reading only the final visit.', zh: '对所有递归步输出学习 token 级软混合，使递归视觉 Transformer 能利用中间状态，而非只读取最后一次访问。' }, paper: 'https://arxiv.org/abs/2607.00774'
  },
  {
    id: '2607.10681', date: '2026-07-12', title: 'LayerNorm as Implicit Gain Control in Looped Transformers', authors: 'Matthias M. M. Buehlmaier', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['layernorm', 'stability', 'dynamical-systems'],
    summary: { en: 'Analyzes pre-LayerNorm as an implicit gain controller for recurrent dynamics, distinguishing spectral stability from operator-norm bounds and stabilization from memory.', zh: '把 Pre-LayerNorm 分析为循环动力学的隐式增益控制器，区分谱稳定性与算子范数界，也区分稳定作用与记忆作用。' }, paper: 'https://arxiv.org/abs/2607.10681'
  },
  {
    id: '2607.14427', date: '2026-07-15', title: 'Per-Token Fixed-Point Convergence in Depth-Recurrent Transformers', authors: 'Joe Logan', venue: 'arXiv 2026', category: 'Adaptive Compute', tags: ['fixed-point', 'token-halting', 'training-free'],
    summary: { en: 'Measures token-specific convergence depths and shows that a training-free stability rule can halt settled tokens earlier than a learned router at the studied scale.', zh: '测量不同 token 的收敛深度，并显示在所研究规模上，免训练的稳定性规则可比学习式路由器更早停止已收敛 token。' }, paper: 'https://arxiv.org/abs/2607.14427'
  },
  {
    id: '2607.15178', date: '2026-07-16', title: 'T^2MLR: Transformer with Temporal Middle-Layer Recurrence', authors: 'Ziyang Cai et al.', venue: 'arXiv 2026', category: 'Latent Reasoning', tags: ['middle-layer-recurrence', 'cross-token', 'retrofit'],
    summary: { en: 'Feeds a cached middle-layer representation from the previous token into an earlier layer of the current token, preserving latent computation across decoding steps with localized recurrence.', zh: '把前一 token 的中层表示送入当前 token 的更早层，以局部循环在解码步之间保留潜在计算。' }, paper: 'https://arxiv.org/abs/2607.15178'
  },
  {
    id: '2607.17843', date: '2026-07-20', title: 'Mobius Learning: Cyclic Depth Folding in Transformers', authors: 'Tongtian Zhu', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['cyclic-depth', 'block-order', 'distributed-training'],
    summary: { en: 'Rotates block order across data streams so each shared group learns both shallow and deep roles, exploring cyclic depth folding beyond a fixed loop order.', zh: '在不同数据流间轮换模块顺序，使每个共享模块组同时学习浅层与深层角色，探索超越固定循环顺序的环形深度折叠。' }, paper: 'https://arxiv.org/abs/2607.17843'
  },
  {
    id: '2607.18553', date: '2026-07-20', title: 'Operational Proto-Introspection in Looped Language Models: Process-Quality Taps, Executable Branching, and the Readout-Control Boundary', authors: 'Jan Kirin', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['introspection', 'hidden-state-readout', 'branching'],
    summary: { en: 'Tests whether Ouro and Huginn states reveal ongoing solution quality, finding useful decision-level readouts while reporting that direct generative steering does not reliably convert.', zh: '检验 Ouro 与 Huginn 状态能否反映当前解题质量，发现其读出可支持决策，但直接生成式操控未能可靠转化为收益。' }, paper: 'https://arxiv.org/abs/2607.18553'
  },
  {
    id: '2607.20519', date: '2026-07-08', title: 'Adaptive Depth in Looped Transformers: Diagnosing Learned Halting Gates and Trajectory Readouts', authors: 'Andrei Cristian Popescu et al.', venue: 'arXiv 2026', category: 'Adaptive Compute', tags: ['halting', 'trajectory', 'readout'],
    summary: { en: 'Separates trajectory formation from exit readout and finds that simple post-hoc confidence rules can rival learned gates when the recurrent trajectory is shaped independently.', zh: '区分循环轨迹形成与出口读出，并发现当轨迹独立塑形时，简单的事后置信度规则可与学习式停止门相当。' }, paper: 'https://arxiv.org/abs/2607.20519'
  },
  {
    id: '2607.20594', date: '2026-07-22', title: 'When Does Recurrence Become an Algorithm? Convergence Selection in Weight-Tied Looped Transformers', authors: 'Tong Zhang et al.', venue: 'arXiv 2026', category: 'Foundations & Theory', tags: ['algorithm-selection', 'convergence', 'depth-extrapolation'],
    summary: { en: 'Uses controlled group-word tasks to show how weight tying and training budgets select serial computation frontiers, and introduces convergence-time scaling as a mechanistic diagnostic.', zh: '用受控群字问题研究权重共享与训练预算如何选择串行计算前沿，并提出收敛时间扩展作为机制诊断工具。' }, paper: 'https://arxiv.org/abs/2607.20594'
  },
  {
    id: '2607.22083', date: '2026-07-24', title: 'Nanbeige4.2-3B: Unlocking Agentic Capabilities in a Compact Model', authors: 'Nanbeige Lab et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['agentic-model', 'pretraining', 'looped-stack'],
    summary: { en: 'Pretrains a compact 3B agentic model on a looped Transformer that reuses its layer stack, pairing recurrent depth with a large-scale agentic post-training pipeline.', zh: '基于复用层栈的循环 Transformer 预训练紧凑型 3B Agent 模型，并结合大规模 Agent 后训练流程。' }, paper: 'https://arxiv.org/abs/2607.22083'
  },
  {
    id: '2607.25915', date: '2026-07-28', title: 'Penelope: Localized Latent Recurrence for Efficient Structured Reasoning', authors: 'Yutong Chen et al.', venue: 'arXiv 2026', category: 'Latent Reasoning', tags: ['localized-recurrence', 'gru', 'cot-distillation'],
    summary: { en: 'Restricts recurrent refinement to a middle decoder interval anchored by a cached prefix, reducing the cost of latent reasoning without repeatedly running the full model.', zh: '把循环细化限制在由缓存前缀锚定的解码器中间区间，避免为潜在推理反复执行完整模型。' }, paper: 'https://arxiv.org/abs/2607.25915'
  },
  {
    id: '2607.27656', date: '2026-07-30', title: 'Looped Transformers with Source-Centered State Evolution', authors: 'Bum Jun Kim et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['scse', 'fixed-point', 'input-conditioning'],
    summary: { en: 'Defines recurrence around a learned input-conditioned anchor whose zero deviation is exactly invariant, removing the forcing bias created by repeated additive input injection.', zh: '围绕学习到的输入条件锚点定义循环，使零偏差严格不变，从而消除重复加性输入注入产生的强迫偏置。' }, paper: 'https://arxiv.org/abs/2607.27656'
  },
  {
    id: '2608.06727', date: '2026-08-07', title: 'bioMoR: Biology-Guided Mixture-of-Recursions for Effective Genomic Learning', authors: 'Koushik Howlader et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['genomics', 'mixture-of-recursions', 'graph-routing'],
    summary: { en: 'Injects biological graphs into token embeddings, attention bias, and the recursion router, allocating deeper computation to genes and pathways according to structured knowledge.', zh: '把生物图知识注入 token 嵌入、注意力偏置与递归路由器，依据结构知识为基因和通路分配更深计算。' }, paper: 'https://arxiv.org/abs/2608.06727'
  },
  {
    id: '2608.08113', date: '2026-08-08', title: 'Think Deep, Speak Once: Relit, A Recursive Latent Implicit Transformer Framework', authors: 'Abhishek Panwar et al.', venue: 'arXiv 2026', category: 'Broader Latent Reasoning', tags: ['relit', 'recursive-block', 'implicit-reasoning'],
    summary: { en: 'Adds a lightweight recursive latent block to a frozen language model, aiming to combine semantic representations with deep implicit reasoning before a single verbal response.', zh: '在冻结语言模型上加入轻量递归潜在模块，把语义表示与深层隐式推理结合后再一次性输出语言答案。' }, paper: 'https://arxiv.org/abs/2608.08113'
  },
  {
    id: '2608.09888', date: '2026-08-10', title: 'BDH-CQ: In-Context Learning with Recurrent Latent Reasoning', authors: 'Björn Engdahl et al.', venue: 'arXiv 2026', category: 'Broader Latent Reasoning', tags: ['in-context-learning', 'recurrent-memory', 'arc-agi'],
    summary: { en: 'Continuously updates recurrent memory from demonstrations and then solves a query by iterating in a high-dimensional latent space without verbalizing intermediate steps.', zh: '根据示例持续更新循环记忆，再在高维潜在空间中迭代求解查询，而无需语言化中间步骤。' }, paper: 'https://arxiv.org/abs/2608.09888'
  },
  {
    id: '2608.13141', date: '2026-08-13', title: 'MergeOver: Post-Training Token Merging for Recursive Vision Transformers', authors: 'Junseo Kim et al.', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['token-merging', 'vision-transformer', 'edge-deployment'],
    summary: { en: 'Adds retraining-free token merging to a recursively weight-shared vision Transformer while tracking spatial unmerging constraints across repeated stages.', zh: '在递归权重共享视觉 Transformer 中加入免重训的 token 合并，并跨重复阶段维护空间反合并约束。' }, paper: 'https://arxiv.org/abs/2608.13141'
  },
  {
    id: '2608.13987', date: '2026-08-14', title: 'Nanbeige4.2-3B on Apple Silicon: Fixing Deployment Bugs and Decreasing Looped Transformer Memory Overhead', authors: 'John T. Halloran', venue: 'arXiv 2026', category: 'Systems & Applications', tags: ['apple-silicon', 'memory', 'deployment'],
    summary: { en: 'Audits practical deployment failures of a looped agentic model on Apple Silicon and uses chunked prefill to reduce the peak attention-memory penalty from its second stack pass.', zh: '审计循环 Agent 模型在 Apple Silicon 上的实际部署故障，并用分块预填充降低第二次层栈执行带来的峰值注意力内存开销。' }, paper: 'https://arxiv.org/abs/2608.13987', code: 'https://github.com/johnhalloran321/Nanbeige4.2-3B-mps-fix'
  },
  {
    id: '2608.26556', date: '2026-08-27', title: 'Dynamical phase selection controls compute scaling in looped transformers', authors: 'Gunn Kim', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['dynamical-phase', 'bifurcation', 'compute-scaling'],
    summary: { en: 'Shows that identically trained looped architectures can settle into distinct bifurcation regimes whose relaxation dynamics determine test-time compute scaling.', zh: '说明相同架构与目标的循环模型可能落入不同分岔相，其松弛动力学会决定测试时计算扩展行为。' }, paper: 'https://arxiv.org/abs/2608.26556'
  },
  {
    id: '2608.26973', date: '2026-08-27', title: 'Squeezing More from Limited Data with Recursive Transformers', authors: 'Serdar Gülbahar et al.', venue: 'arXiv 2026', category: 'Architectures & Scaling', tags: ['data-limited', 'recursive-transformer', 'factorized-embeddings'],
    summary: { en: 'Studies recursive weight sharing when pretraining data are scarce, coupling it with factorized embeddings to spend compute without over-expanding parameter capacity.', zh: '研究预训练数据稀缺时的递归权重共享，并结合因式分解嵌入，在不盲目扩大参数容量的情况下增加计算。' }, paper: 'https://arxiv.org/abs/2608.26973'
  },
  {
    id: '2609.01924', date: '2026-09-01', title: 'Looped Transformers under the Jacobian Lens: Does the Global Workspace Survive Recurrence?', authors: 'Wenlong Wang, Fergal Reid', venue: 'arXiv 2026', category: 'Training & Analysis', tags: ['jacobian-lens', 'global-workspace', 'causal-analysis'],
    summary: { en: 'Extends Jacobian-lens interventions to virtual unrollings of Ouro and Huginn, finding that both form workspace-like representations but transport and expose them differently across recurrence.', zh: '把 Jacobian Lens 干预扩展到 Ouro 与 Huginn 的虚拟展开，发现二者都形成类似全局工作空间的表示，但跨循环传递与暴露方式不同。' }, paper: 'https://arxiv.org/abs/2609.01924'
  },
  {
    id: '2609.03379', date: '2026-09-03', title: 'RecurTrace: Adaptive Latent Reasoning with Loop-Time Memory', authors: 'Yuxiang Wang et al.', venue: 'arXiv 2026', category: 'Adaptive Compute', tags: ['loop-memory', 'halting', 'adaptive-depth'],
    summary: { en: 'Lets each repeated layer attend over its own prior loop states and trains a halting head from loss-improvement supervision, combining loop-time memory with input-adaptive depth.', zh: '让每个重复层关注自身此前各循环状态，并用损失改善监督训练停止头，把循环时间记忆与输入自适应深度结合起来。' }, paper: 'https://arxiv.org/abs/2609.03379'
  },
];

export const lastUpdated = '2026-09-05';
