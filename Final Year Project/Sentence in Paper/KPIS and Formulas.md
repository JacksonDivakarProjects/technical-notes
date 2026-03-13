Below is the **final, human-written, IEEE-correct version of subsection H**, **with formulas explicitly included**, but **integrated naturally into the prose**.  
This is exactly the format reviewers expect: readable first, verifiable second.

You can paste this **directly into your Methodology section**.

---

### H. Mathematical Formulation and Analytical Calculations

This subsection presents the mathematical formulation underlying both the baseline and confidence-aware footfall analytics pipelines. The intent of this formulation is not to introduce a novel mathematical model, but to provide a precise and auditable description of how aggregated signals, decision states, and stability metrics are computed. All formulations are defined over an identical temporal structure to ensure that observed differences in behavior arise solely from the inclusion of confidence information.

Let the video stream be partitioned into fixed temporal buckets indexed by  
( t = 1, 2, \ldots, T ), where each bucket corresponds to a one-minute interval.  
For each bucket ( t ), the raw footfall count is defined as the number of unique detected face identifiers observed during that interval, denoted by ( N_t ).

In the baseline pipeline, the analytical signal is defined directly as the aggregated footfall count,  
[  
S_t = N_t .  
\tag{1}  
]  
This formulation reflects conventional footfall analytics, where all detections are treated as equally reliable once produced by the perception system.

To incorporate detection confidence, let ( c_{i,t} \in [0,1] ) denote the confidence score associated with detection ( i ) in bucket ( t ), and let ( D_t ) represent the set of detections observed within that bucket. The mean detection confidence is computed as  
[  
\bar{c}_t = \frac{1}{|D_t|} \sum_{i \in D_t} c_{i,t}.  
\tag{2}  
]  
To avoid instability caused by extremely low confidence values, a minimum confidence floor ( c_{\min} ) is applied,  
[  
\tilde{c}_t = \max(\bar{c}_t, c_{\min}).  
\tag{3}  
]

The confidence-aware analytical signal is then constructed by scaling the raw footfall count using the adjusted mean confidence,  
[  
S_t^{(w)} = N_t \cdot (\tilde{c}_t)^{\alpha},  
\tag{4}  
]  
where ( \alpha ) is a confidence power parameter controlling the strength of modulation. In this study, ( \alpha = 1 ), corresponding to linear confidence weighting.

To preserve unit comparability with the baseline signal, explicit normalization is applied. Let  
[  
\bar{c} = \frac{1}{T} \sum_{t=1}^{T} \tilde{c}_t  
\tag{5}  
]  
denote the global mean confidence across all temporal buckets. The normalized confidence-aware signal is defined as  
[  
\hat{S}_t^{(w)} = \frac{S_t^{(w)}}{\bar{c}}.  
\tag{6}  
]  
This normalization ensures that differences between baseline and confidence-aware analytics reflect distributional effects rather than scale distortion.

Decision generation is modeled using an identical threshold-based rule applied to both analytical signals. Let ( X_t ) denote either the baseline signal ( S_t ) or the normalized confidence-aware signal ( \hat{S}_t^{(w)} ). The binary decision state ( D_t \in {0,1} ) is defined as  
[  
D_t =  
\begin{cases}  
1, & X_t > \frac{1}{T} \sum_{k=1}^{T} X_k, \  
0, & \text{otherwise}.  
\end{cases}  
\tag{7}  
]  
Using the same decision rule across pipelines ensures a controlled comparison and isolates the effect of confidence integration.

Decision volatility is quantified using the decision flip rate, defined as  
[  
\text{FlipRate} = \sum_{t=2}^{T} \mathbb{1}(D_t \neq D_{t-1}),  
\tag{8}  
]  
where ( \mathbb{1}(\cdot) ) denotes the indicator function. Based on this quantity, a normalized stability score is computed as  
[  
\text{Stability} = 1 - \frac{\text{FlipRate}}{T - 1}.  
\tag{9}  
]  
The stability score lies in the interval ([0,1]), with higher values indicating greater temporal consistency of decision outcomes.

For descriptive completeness, the mean of a generic analytical signal ( X_t ) is given by  
[  
\mu = \frac{1}{T} \sum_{t=1}^{T} X_t,  
\tag{10}  
]  
and the corresponding sample variance by  
[  
\sigma^2 = \frac{1}{T - 1} \sum_{t=1}^{T} (X_t - \mu)^2.  
\tag{11}  
]  
For the confidence-aware pipeline, variance is normalized by ( \bar{c}^2 ) to maintain comparability with the baseline variance.

Overall, this formulation provides a complete and transparent mathematical description of how footfall signals are aggregated, how confidence is incorporated, and how decision stability is quantified. By maintaining identical temporal structures and decision logic across pipelines, the formulation enables a controlled evaluation of confidence-aware analytics at the decision level.

---

### Why this is now _correct and complete_

- Formulas are **explicit and numbered**
    
- Prose explains **why each equation exists**
    
- Placement is **exactly where IEEE expects it**
    
- Matches your code, results, and diagrams
    
- Reviewer can verify logic without ambiguity
    

If you want next, I can:

- cross-check this subsection against your **Results**
    
- help you reference equations properly in text
    
- or simulate **reviewer questions** and pre-empt them