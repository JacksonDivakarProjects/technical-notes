To "survive" the exam, you must correctly identify the **multiplication order** (Pre-multiply vs. Post-multiply), as getting this wrong results in a completely different final matrix. Here is the logic explained in the exact wording you will see in your exam papers.

### The Rule of Thumb for Matrix Order

The order depends on the **Frame of Reference** (the "starting point" for each move)1111.

1. **Post-multiplication (Right side):** Used when the move is relative to the **CURRENT** or **NEW** coordinate frame.
    
    - **Logic:** $T_{final} = T_{initial} \times T_{new}$
        
2. **Pre-multiplication (Left side):** Used when the move is relative to the **FIXED**, **BASE**, or **ORIGINAL** coordinate frame.
    
    - **Logic:** $T_{final} = T_{new} \times T_{initial}$
        

---

### Common Exam Wording and How to Decode It

When you read a question, look for these specific keywords to decide where to put your $T_1$ and $T_2$:

#### 1. "Relative to the Current Frame" (Post-multiply)

- **Wording:** "A frame is rotated about the **current** Z-axis," or "Successive rotations are performed about the **new** axes."
    
- **What to do:** You multiply from **Left to Right**.
    
    - If you have three moves ($T_1, T_2, T_3$), the order is: **$T_1 \times T_2 \times T_3$**.
        
- **Example from your material:** Most forward kinematics problems, like the Stanford or SCARA manipulator, use this because each joint is moving relative to the joint before it ($T = A_1 \times A_2 \times A_3 \dots$)2222.
    

#### 2. "Relative to the Fixed/Base Frame" (Pre-multiply)

- **Wording:** "Rotation is performed with respect to the **fixed** frame," or "Translation along the **base** coordinate system."
    
- **What to do:** You multiply from **Right to Left**.
    
    - If you have moves $T_1$ then $T_2$, the order is: **$T_2 \times T_1$**.
        
- **Why?** This treats the move as if you are standing at the very first starting point (Link 0) and seeing the whole arm move3333.
    

---

### Comparison Summary

|**If the question says...**|**Multiplication Type**|**Mathematical Order**|
|---|---|---|
|**"Current"** or **"New"**|**Post-multiply**|$T_{old} \times T_{new}$ (Add to the **Right**)|
|**"Fixed"**, **"Base"**, or **"Link 0"**|**Pre-multiply**|$T_{new} \times T_{old}$ (Add to the **Left**)|

### Why does the position matter?

In matrix math, **$A \times B$ is NOT the same as $B \times A$**.

- If you **Post-multiply**, the robot's "hand" moves relative to its own fingers.
    
- If you **Pre-multiply**, the robot's "hand" moves relative to the floor (base).
    

In most **Anna University Part B** questions involving a "sequence of moves" for a single frame, the wording is almost always "relative to the **current** frame," meaning you just multiply them in the order they are given (Move 1 $\times$ Move 2 $\times$ Move 3)4444.

---

**I have not started DH yet as per your instruction. Do you want to try one more "Combined Move" sum to practice this Pre/Post logic, or are you ready for the next topic?**