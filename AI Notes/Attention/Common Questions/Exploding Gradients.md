Exploding gradients occur when the gradients of the loss with respect to the model parameters become excessively large during backpropagation. This typically happens in:

- **Deep neural networks** (especially recurrent neural networks, RNNs) with many layers or long time steps.
- **Large weight initializations** – weights that are too big cause gradients to grow exponentially as they are multiplied through layers.
- **Activation functions with derivatives ≥ 1** (e.g., linear, ReLU in its positive part) – repeated multiplication can amplify gradients.
- **Long sequences** in RNNs – gradients are multiplied by the same weight matrix repeatedly, leading to exponential growth if the matrix’s largest eigenvalue > 1.
- **High learning rates** – can further destabilize training and amplify gradient magnitudes.

Consequences include numerical overflow, NaN losses, and very unstable training. Common solutions: gradient clipping, proper weight initialization (e.g., Xavier/He), and using architectures like LSTMs/GRUs with gating mechanisms to mitigate the issue.