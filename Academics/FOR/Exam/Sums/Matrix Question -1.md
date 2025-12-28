Since you are preparing for **ORA351 Foundations of Robotics** (likely for your Anna University 7th-semester exams), I will focus on the most high-weightage numerical problems.

In Robotics, the most fundamental and frequently asked questions involve **Spatial Transformations**. Mastering these is essential before moving to Kinematics.

Here is the first and most important type of sum you will encounter.

---

## Priority 1: Homogeneous Transformation Matrices (HTM)

These problems usually appear in Part B (13 marks). They test your ability to map a point from one coordinate frame to another after a series of rotations and translations.

### Problem Statement

A point $P$ is described in a moving frame $\{B\}$ as $P^B = [2, 3, 5]^T$. The frame $\{B\}$ is initially coincident with the fixed frame $\{A\}$.

Find the coordinates of point $P$ with respect to the fixed frame $\{A\}$ after the following sequence of transformations:

1. **Rotation** of $90^\circ$ about the **Z-axis**.
    
2. **Translation** of $[4, -2, 3]^T$ along the fixed axes.
    

---

### Step-by-Step Solution

#### Step 1: Identify the Transformation Matrices

For a transformation relative to a **fixed frame**, we use **Pre-multiplication** (the first transformation matrix goes on the right, and subsequent ones are multiplied to the left).

The rotation matrix about the Z-axis by $\theta = 90^\circ$ is:

$$Rot(z, 90^\circ) = \begin{bmatrix} \cos 90^\circ & -\sin 90^\circ & 0 & 0 \\ \sin 90^\circ & \cos 90^\circ & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

The translation matrix for $d = [4, -2, 3]^T$ is:

$$Trans(4, -2, 3) = \begin{bmatrix} 1 & 0 & 0 & 4 \\ 0 & 1 & 0 & -2 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

#### Step 2: Combine the Transformations

The total transformation matrix $T$ is calculated as:

$$T = Trans(4, -2, 3) \times Rot(z, 90^\circ)$$

$$T = \begin{bmatrix} 1 & 0 & 0 & 4 \\ 0 & 1 & 0 & -2 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 & 0 & 4 \\ 1 & 0 & 0 & -2 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

#### Step 3: Find the Final Position of Point $P$

To find $P^A$, we multiply the transformation matrix $T$ by the original point $P^B$ (represented in homogeneous coordinates where $w=1$):

$$P^A = T \times P^B = \begin{bmatrix} 0 & -1 & 0 & 4 \\ 1 & 0 & 0 & -2 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ 5 \\ 1 \end{bmatrix}$$

Calculating row by row:

- $x_a = (0 \times 2) + (-1 \times 3) + (0 \times 5) + (4 \times 1) = -3 + 4 = \mathbf{1}$
    
- $y_a = (1 \times 2) + (0 \times 3) + (0 \times 5) + (-2 \times 1) = 2 - 2 = \mathbf{0}$
    
- $z_a = (0 \times 2) + (0 \times 3) + (1 \times 5) + (3 \times 1) = 5 + 3 = \mathbf{8}$
    

Final Result:

The coordinates of the point relative to the fixed frame $\{A\}$ are $P^A = [1, 0, 8]^T$.

---

**Would you like to try a practice version of this sum, or shall we move on to the next priority (Forward Kinematics/DH Parameters)?**