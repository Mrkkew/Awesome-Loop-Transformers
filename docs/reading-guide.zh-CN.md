# 如何阅读循环模型与潜在推理研究

[English](reading-guide.md) · **简体中文** · [返回论文目录](../README.zh-CN.md#complete-catalog)

这一领域的不同方法，扩展计算的方式并不相同。阅读时可以先明确：**模型重复执行什么计算，又将什么状态传递到下一步？** 下表依据所链接的论文原文整理，旨在帮助辨析方法，不作性能排名。

## 各类方法改变了什么？

| 工作 | 主要机制 | 阅读时关注的问题 |
| --- | --- | --- |
| [Universal Transformers](https://arxiv.org/abs/1807.03819) | 沿深度复用自注意力变换来更新 token 表示，并可结合位置级停止机制。 | 区分参数共享与自适应计算各自带来的影响。 |
| [Programmable Looped Transformers](https://proceedings.mlr.press/v202/giannou23a.html) | 通过构造权重，使固定 Transformer 在循环中执行输入所描述的程序。 | 区分计算能力的构造性证明与通过训练学得算法。 |
| [Huginn](https://arxiv.org/abs/2502.05171) | 预训练语言模型通过重复循环模块，在推理阶段增加隐空间计算。 | 同时考察独立参数量、实际执行深度与推理预算。 |
| [Ouro](https://arxiv.org/abs/2510.25741) | 在循环语言模型预训练中结合隐空间迭代与用于深度分配的熵正则目标。 | 将训练方案、深度分配与评测结果结合起来理解。 |
| [Mixture-of-Recursions](https://arxiv.org/abs/2507.10524) | 路由器为不同 token 分配递归深度，并结合活跃 token 计算与 KV 管理提高效率。 | 同时考察路由、活跃 token 数、内存、吞吐量与预测质量。 |
| [Parallel Loop Transformer](https://arxiv.org/abs/2510.24824) | 通过跨循环并行重叠执行不同 token 的循环步，并结合首轮 KV 共享与门控滑动窗口注意力控制内存开销。 | 关注执行依赖和缓存组织，不能只比较名义循环次数。 |
| [Coconut](https://arxiv.org/abs/2412.06769) | 将末层隐状态直接作为下一步输入嵌入，而不先解码为词语。 | 区分连续思维步与 Transformer 模块内部的深度循环。 |
| [Tiny Recursive Model](https://arxiv.org/abs/2510.04871) | 使用小型递归网络研究谜题等结构化推理任务。 | 与语言模型比较时，需同时考虑任务、监督方式与评测协议。 |

## 为什么将 Coconut 单独分类？

“潜在推理”的范围比“循环 Transformer”更广。Huginn 通过共享模块的重复执行扩展计算深度；Coconut 则将隐表示回送为下一步输入。两者都不要求将每一步中间状态表达为词语，但计算发生的位置不同。因此，目录将循环 Transformer 核心研究与广义潜在推理的代表性方法分开整理。具体机制见 [Huginn](https://arxiv.org/abs/2502.05171) 与 [Coconut](https://arxiv.org/abs/2412.06769) 原文。

## 比较结果时记录哪些信息？

以下是本项目建议采用的阅读框架，并不表示每篇论文都报告了全部指标：

- **模型容量：**存储多少独立参数，哪些模块共享权重？
- **计算量：**执行多少次迭代，涉及多少活跃 token 与输出 token？是否同时报告训练和推理预算？
- **执行效率：**在给定硬件、批大小和序列长度下，实际延迟、吞吐量与峰值内存是多少？
- **证据类型：**结论来自理论构造、算法任务实验、语言模型评测，还是结构化谜题任务？

Huginn 主要研究循环推理深度，而 PLT 进一步改变执行调度与缓存设计。因此，仅凭循环次数无法完整比较效率；跨论文对比前，需要结合 [Huginn](https://arxiv.org/abs/2502.05171) 与 [PLT](https://arxiv.org/abs/2510.24824) 的实验设置。

## 继续阅读

[基础与理论](../README.zh-CN.md#foundations--theory) · [架构与扩展](../README.zh-CN.md#architectures--scaling) · [自适应计算](../README.zh-CN.md#adaptive-compute) · [系统与应用](../README.zh-CN.md#systems--applications) · [广义潜在推理](../README.zh-CN.md#broader-latent-reasoning)

若发现概念区分不准确，欢迎附上论文段落或原始来源[反馈修正](https://github.com/Mrkkew/Awesome-Loop-Transformers/issues/new?template=correction.yml)。
