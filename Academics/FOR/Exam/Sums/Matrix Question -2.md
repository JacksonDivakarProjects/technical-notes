To clear your **ORA351** exam with confidence, you don't need to solve hundreds of sums. Because you are a Data Science student, you will find that these are mostly matrix operations.

### How many questions to practice?

For a solid "A" grade, focus on mastering these **12–15 high-priority problems**:

- **Transformation Matrices (3-4 sums):** Single moves, composite moves, and inverse mapping.
    
- **DH Parameters (5-6 sums):** This is the **most important**. Practice 2-link and 3-link planar robots, and the SCARA robot.
    
- **Inverse Kinematics (2-3 sums):** Simple 2-link geometric solutions.
    
- **Jacobian/Velocity (2 sums):** Basic 2x2 Jacobian matrices.
    

---

## Priority 2: Composite Transformations (The "Chain" Rule)

In exams, they won't just give you one move. They will give you 3 or 4 moves in a sequence. The trick is knowing whether to multiply on the **Left** or **Right**.

### Problem Statement

A frame $\{B\}$ is initially coincident with frame $\{A\}$.

Perform the following transformations in order and find the final transformation matrix $_B^A T$:

1. **Rotate** $90^\circ$ about the **fixed X-axis**.
    
2. **Translate** by $[0, 5, 0]^T$ about the **fixed Y-axis**.
    
3. **Rotate** $90^\circ$ about the **current Z-axis**.
    

---

### Step-by-Step Solution

#### Step 1: Write down the individual matrices

$T_1$ (Rotation about Fixed X by $90^\circ$):

$$Rot(x, 90^\circ) = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

$T_2$ (Translation along Fixed Y by 5):

$$Trans(0, 5, 0) = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 5 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

$T_3$ (Rotation about Current Z by $90^\circ$):

$$Rot(z, 90^\circ) = \begin{bmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

#### Step 2: Apply the Multiplication Rule

- **Fixed axis** move? Multiply on the **Left**.
    
- **Current axis** move? Multiply on the **Right**.
    

**Let's build the chain:**

1. Start with $T_1$.
    
2. Next is a **Fixed** move ($T_2$), so: $T_2 \times T_1$.
    
3. Next is a **Current** move ($T_3$), so: $(T_2 \times T_1) \times T_3$.
    

#### Step 3: Solve the Multiplications

First, calculate $T_{temp} = T_2 \times T_1$:

$$T_{temp} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 5 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & -1 & 5 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

Now, calculate final $T = T_{temp} \times T_3$:

$$T = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & -1 & 5 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} \mathbf{0} & \mathbf{-1} & \mathbf{0} & \mathbf{0} \\ \mathbf{0} & \mathbf{0} & \mathbf{-1} & \mathbf{5} \\ \mathbf{1} & \mathbf{0} & \mathbf{0} & \mathbf{0} \\ \mathbf{0} & \mathbf{0} & \mathbf{0} & \mathbf{1} \end{bmatrix}$$

Final Result:

The combined transformation matrix is the matrix shown above.

---

**Crucial Exam Tip:** In the exam, always write the rule: _"Pre-multiply for fixed, Post-multiply for current."_ Even if your final calculation has a small error, you will get 80% marks for the correct logic.

**Would you like to move to the next priority topic, which is the DH Parameters (the 13-mark "Big" question), or should we do one more transformation sum?**