The vanishing gradient problem occurs during backpropagation in deep neural networks, particularly when:

- **Using activation functions with small derivatives** like sigmoid or tanh, whose gradients are ≤ 0.25 (and near zero for saturated units).
- **Networks have many layers** – gradients get multiplied repeatedly, shrinking exponentially as they propagate backward.
- **Initializing weights poorly** (e.g., too small) can exacerbate the effect.
- **Training recurrent neural networks (RNNs)** on long sequences, where gradients vanish over many time steps.

In essence, it happens when the gradient becomes so tiny that earlier layers learn extremely slowly or stop learning altogether.