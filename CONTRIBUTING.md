# Contributing / 参与贡献

Thank you for helping keep Awesome Loop Transformers accurate. Corrections are as valuable as new entries.

感谢你帮助我们维护 Awesome Loop Transformers。修正错误与补充新论文同样重要。

## Before opening a pull request

1. Search the website and `lib/papers.ts` for the title and arXiv/OpenReview ID.
2. Link the primary source: arXiv, OpenReview, official proceedings, or the authors’ project page.
3. Explain the internal loop, recurrent-depth mechanism, or latent-reasoning connection in one sentence.
4. Use the paper’s first public date. Do not infer a venue from a secondary index.
5. Add original English and Chinese summaries. Do not copy the abstract.
6. Add code/model links only when they come from the authors or official project.

## 提交前检查

1. 在网站和 `lib/papers.ts` 中搜索标题与 arXiv/OpenReview 编号，避免重复。
2. 论文链接必须使用 arXiv、OpenReview、正式会议论文页或作者官方项目页。
3. 用一句话说明其内部循环、递归深度机制或潜在推理联系。
4. 日期采用首次公开时间；不要依据二手索引猜测会议状态。
5. 同时提供原创英文与中文短评，不要复制摘要。
6. 代码或模型链接必须来自作者或官方项目。

## Scope test / 范围判断

Core scope asks: **Within one forward process, is a learned Transformer layer, block, or stack reused through depth?**

核心范围判断：**在一次前向过程中，是否沿深度重复使用了学习到的 Transformer 层、模块或层栈？**

If not, a paper may still fit **Broader Latent Reasoning / 广义潜在推理** when latent states are explicitly used for multi-step reasoning, continuous thoughts, implicit CoT, or hierarchical recursive reasoning. Agent workflows and repeated full-model API calls do not qualify.

## Data format

Add one typed record to `lib/papers.ts`, then run:

```bash
npm run check:data
npm run readme
npm run build
```

Never edit the generated paper lists in `README.md` or `README.zh-CN.md` directly.

## Pull request checklist

- [ ] Primary paper link opens and its title matches the entry.
- [ ] Authors, first-public date, and venue status were checked.
- [ ] English and Chinese notes are concise and original.
- [ ] Category and tags describe the mechanism rather than hype.
- [ ] `npm run check:data` and `npm run readme` pass.
