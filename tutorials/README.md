# Build a looped Transformer, from one block to OpenMythos

A hands-on tutorial for this reading list. Every other page here tells you what the
literature says; this one lets you run it.

You start with a single Transformer block and a task whose difficulty *is* the
number of sequential steps, and you end by reading the source of
[OpenMythos](https://github.com/kyegomez/OpenMythos), an open implementation of a
recurrent-depth Transformer. In between you train the loop yourself, measure what
extra passes buy, watch the model overthink, and see which engineering details keep
a shared block from exploding.

- **Cost:** CPU only, about a minute of training in total, no dataset to download, no GPU.
- **Code:** about 370 lines of plain PyTorch and matplotlib, roughly 200 of them the model
  and its training loop.
- **Notebooks:** [English](loop-transformers.ipynb) · [简体中文](loop-transformers.zh-CN.ipynb)

## Chapters

| # | Question | What you get |
| --- | --- | --- |
| 0 | What is the shape of the idea? | A diagram of Prelude → Recurrent → Coda, and what one pass does |
| 1 | What does a fixed-depth model fail at? | A synthetic task where difficulty is the number of steps, plus the cliff |
| 2 | What changes when the block is reused? | A trained looped model, the bill (parameters vs depth), an accuracy × passes heatmap, and the overthinking effect |
| 3 | What does a loop need to be trainable? | Input injection, loop index, depth-wise LoRA, and a stable linear recurrence |
| 4 | When should the loop stop? | An ACT halting head: compute that follows difficulty instead of the horizon |
| 5 | How does OpenMythos assemble this? | A tiny config running at 1, 2, 4 and 8 loops, plus a reading order for the source |
| 6 | Where to read next | Pointers into the catalog topics that continue each chapter |

Everything is measured, not asserted: the numbers quoted in the prose are printed by
the cells above them, both models are trained on `k ≤ 4`, and the looped model is
evaluated at pass counts from 1 to 6. Where a claim is a guess rather than a
measurement, the prose says so. Each chapter ends with the part of the
[paper list](../README.md) that studies it properly.

## Run it

Locally:

```bash
python -m venv .venv && source .venv/bin/activate
pip install torch matplotlib jupyter
jupyter lab tutorials/loop-transformers.ipynb
```

In the browser: open the notebook and use the Colab badge at the top, or
[this link](https://colab.research.google.com/github/Mrkkew/Awesome-Loop-Transformers/blob/main/tutorials/loop-transformers.ipynb).

Chapter 5 additionally needs `pip install git+https://github.com/kyegomez/OpenMythos`; if it is not installed the
cell prints a message and the rest of the notebook still runs.

## Files

| File | What it is |
| --- | --- |
| `build_notebooks.py` | Single source for both notebooks: prose once per language, identical code |
| `loop-transformers.ipynb` | The English notebook, with outputs and figures |
| `loop-transformers.zh-CN.ipynb` | The Chinese notebook, same structure and numbers |
| `figures/*.png` | The five figures, also embedded in the notebooks |

The notebooks are generated, so edit `build_notebooks.py` and rebuild rather than
editing notebook JSON:

```bash
python tutorials/build_notebooks.py --execute    # needs torch + nbclient
```

## Licence

Prose and code here are CC BY 4.0, like the rest of this repository. OpenMythos is
MIT-licensed: the tutorial imports it and reads its source, but does not copy it.
