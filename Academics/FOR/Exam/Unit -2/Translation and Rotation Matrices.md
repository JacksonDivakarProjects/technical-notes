We now enter **Unit 2: Robot Kinematics**. This unit is the mathematical core of the subject. According to your priority list, we will focus on **Translation and Rotation Matrices** and **Homogeneous Transformation Matrices (HTM)**.

To get maximum marks, you must show the **general matrix**, the **specific axis matrix**, and a **labeled diagram**.

---

# Unit 2: Kinematics - Translation and Rotation Matrices

### 1. Definition of Kinematics

**Robot kinematics** is the analytical study of the geometry of a robot arm's motion with respect to a fixed reference coordinate system. It deals with the relationship between joint movements and the resulting position/orientation of the end-effector.

---

### 2. Translation Matrices (Part B - 13 Marks)

**Translation** occurs when a robot frame moves along one or more axes without changing its orientation (no tilting).

- **The Logic:** If a point $P$ at $(x, y, z)$ is moved by distances $dx, dy,$ and $dz$, the new coordinates are simply $x' = x+dx, y' = y+dy,$ and $z' = z+dz$.
    
- The 4x4 Translation Matrix ($Trans$):
    
    $$Trans(dx, dy, dz) = \begin{bmatrix} 1 & 0 & 0 & dx \\ 0 & 1 & 0 & dy \\ 0 & 0 & 1 & dz \\ 0 & 0 & 0 & 1 \end{bmatrix}$$
    

---

### 3. Rotation Matrices (Part B - 13 Marks)

**Rotation** occurs when a frame spins around one of the principal axes ($X, Y,$ or $Z$). Unlike translation, rotation changes the **orientation** of the robot links.

For a 13-mark question, you must provide the matrices for all three axes:

#### **A. Rotation about the X-axis by angle $\theta$**

$$Rot(x, \theta) = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta & 0 \\ 0 & \sin\theta & \cos\theta & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

#### **B. Rotation about the Y-axis by angle $\theta$**

$$Rot(y, \theta) = \begin{bmatrix} \cos\theta & 0 & \sin\theta & 0 \\ 0 & 1 & 0 & 0 \\ -\sin\theta & 0 & \cos\theta & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

#### **C. Rotation about the Z-axis by angle $\theta$**

$$Rot(z, \theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 & 0 \\ \sin\theta & \cos\theta & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

---

### 4. Homogeneous Transformation Matrices (HTM) (Part B - 13 Marks)

An **HTM** is a single 4x4 matrix that combines both **Rotation** and **Translation** into one mathematical tool.

General Structure of HTM:

$$T = \begin{bmatrix} n_x & s_x & a_x & P_x \\ n_y & s_y & a_y & P_y \\ n_z & s_z & a_z & P_z \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

- **The 3x3 Upper-Left Box ($n, s, a$):** This is the **Rotation Sub-matrix**. It tells the computer how the frame is tilted.
    
- **The 3x1 Upper-Right Column ($P_x, P_y, P_z$):** This is the **Position Vector**. It tells the computer where the origin of the frame is located.
    
- **The Bottom Row $[0, 0, 0, 1]$:** This is added to make the matrix square, allowing for easy multiplication when multiple movements occur.
    

---

### 5. Composite Transformations (How to Solve Problems)

When a robot performs multiple movements, we multiply the individual matrices together.

1. **Rule 1:** If the movement is relative to the **Fixed Base**, multiply on the **LEFT**.
    
2. **Rule 2:** If the movement is relative to the **Current/Moving Frame**, multiply on the **RIGHT**.
    

---

### High-Score Checklist for Unit 2:

- **Diagrams:** Draw the $X, Y, Z$ axes for every rotation type.
    
- **Derivation:** Show how a point $P'$ is calculated using $P' = T \times P$.
    
- **Properties:** Mention that the Inverse of a Rotation matrix is equal to its Transpose ($R^{-1} = R^T$)—this is a very common 2-mark question.
    

**Should we move to the final detailed derivation of "Forward and Inverse Kinematics for a 2-DOF Manipulator"?**