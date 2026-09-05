# Reading looped models and latent reasoning

**English** · [简体中文](reading-guide.zh-CN.md) · [Back to the catalog](../README.md#complete-catalog)

The papers in this field extend computation in different ways. A useful first question is **what is repeated, and which state is passed to the next step?** The comparison below is an editorial reading aid based on the linked primary sources, not a performance ranking.

## What changes in each approach?

| Work | Mechanism to look for | What to examine when reading |
| --- | --- | --- |
| [Universal Transformers](https://arxiv.org/abs/1807.03819) | A shared self-attentive transition updates token representations across depth; a variant adds per-position halting. | Separate the effects of weight sharing from those of adaptive computation. |
| [Programmable Looped Transformers](https://proceedings.mlr.press/v202/giannou23a.html) | A fixed Transformer with constructed weights executes programs supplied in its input through repeated application. | Distinguish a computational construction from an algorithm learned through training. |
| [Huginn](https://arxiv.org/abs/2502.05171) | A pretrained language model repeats a recurrent block to spend more computation in latent space at inference. | Compare unique parameters with executed depth and the inference budget. |
| [Ouro](https://arxiv.org/abs/2510.25741) | Looped language-model pretraining combines latent iteration with an entropy-regularized objective for depth allocation. | Read the training recipe and depth allocation together with benchmark results. |
| [Mixture-of-Recursions](https://arxiv.org/abs/2507.10524) | Token routers assign recursion depths within a shared stack; active-token computation and KV handling affect efficiency. | Examine routing, active tokens, memory use, and throughput alongside prediction quality. |
| [Parallel Loop Transformer](https://arxiv.org/abs/2510.24824) | Cross-loop parallelism overlaps different tokens' loop steps; first-loop KV sharing and gated sliding-window attention address memory cost. | Inspect execution dependencies and cache design, not just the nominal number of loops. |
| [Coconut](https://arxiv.org/abs/2412.06769) | The last hidden state becomes the next input embedding instead of being decoded into a word. | Distinguish continuous thought steps from repeated depth inside a Transformer block. |
| [Tiny Recursive Model](https://arxiv.org/abs/2510.04871) | A small recursive network is studied on structured reasoning tasks such as puzzles. | Consider the task, supervision, and evaluation protocol before comparing with language-model benchmarks. |

## Why is Coconut listed separately?

“Latent reasoning” describes a broader family than “looped Transformer.” In Huginn, recurrence extends the depth of a shared block; in Coconut, a hidden representation is fed back as the next input. Both perform computation without expressing every intermediate state as a word, but the location of that computation differs. The catalog therefore separates the core looped-Transformer literature from representative broader methods. See the mechanisms in [Huginn](https://arxiv.org/abs/2502.05171) and [Coconut](https://arxiv.org/abs/2412.06769).

## A comparison checklist

The following questions are our suggested reading framework, rather than claims that every paper reports every measurement:

- **Capacity:** How many unique parameters are stored, and which modules are shared?
- **Computation:** How many iterations, active tokens, and output tokens are executed? Are training and inference budgets both reported?
- **Execution:** What are measured latency, throughput, and peak memory under the stated hardware, batch size, and sequence length?
- **Evidence:** Is the result a theoretical construction, an algorithmic-task experiment, language-model evaluation, or a structured-puzzle result?

Huginn makes recurrent inference depth a central variable, while PLT changes the schedule and cache design. This is why loop count alone is an incomplete efficiency comparison. Consult the experimental settings in [Huginn](https://arxiv.org/abs/2502.05171) and [PLT](https://arxiv.org/abs/2510.24824) before comparing results across them.

## Continue reading

[Foundations](../README.md#foundations--theory) · [Architectures](../README.md#architectures--scaling) · [Adaptive compute](../README.md#adaptive-compute) · [Systems](../README.md#systems--applications) · [Broader latent reasoning](../README.md#broader-latent-reasoning)

Found an inaccurate distinction? [Suggest a correction](https://github.com/Mrkkew/Awesome-Loop-Transformers/issues/new?template=correction.yml) with a paper section or primary-source link.
