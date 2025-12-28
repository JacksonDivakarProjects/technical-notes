This is a critical Part-B question found in **Unit 2** of your priority list. While we often think of 3D robots, the **Three Degrees of Freedom (DOF) in 2-Dimensional (Planar) Space** is the foundational math for horizontal robots like SCARA.

To get full marks (13 marks), you must explain the **Positioning**, **Orientation**, and the **Kinematic Logic** for a planar environment.

---

## 1. Definition of 2-Dimensional Space (Planar Space)

In robotics, 2-Dimensional space refers to a flat plane (usually the **XY-plane**). The robot is constrained such that it cannot move "up" or "down" (along the Z-axis); all movements happen on a flat surface.

---

## 2. The Three Degrees of Freedom (DOF)

To fully define the state of an object or an end-effector on a 2D plane, exactly **three independent variables** are required.

#### **A. Two Degrees of Translation (Positioning)**

These allow the robot to move the end-effector to any specific coordinate on the surface:

- **X-axis Translation:** Movement forward and backward.
    
- **Y-axis Translation:** Movement left and right.
    
- Together, these define the **$(x, y)$ position** of the robot's tool.
    

#### **B. One Degree of Rotation (Orientation)**

Even if the robot reaches the correct $(x, y)$ point, it may need to be tilted at a certain angle to perform a task (like picking up a slanted part).

- **$\theta$ (Theta) Rotation:** Rotation around an axis perpendicular to the plane (the Z-axis).
    
- This defines the **Orientation ($\phi$)** of the end-effector.
    

---

## 3. Mathematical Representation

In a 2D system, the state of the robot end-effector is represented by the vector:

$$P = [x, y, \phi]^T$$

Where:

- **$x$** = Horizontal position.
    
- **$y$** = Vertical position.
    
- **$\phi$** = Angular orientation relative to the X-axis.
    

---

## 4. Robot Configuration for 3-DOF in 2D

The most common robot that utilizes this is the **3-Link Planar Manipulator** (RRR configuration in a single plane).

- **Joint 1 ($\theta_1$):** Rotates the first link.
    
- **Joint 2 ($\theta_2$):** Rotates the second link relative to the first.
    
- **Joint 3 ($\theta_3$):** Rotates the end-effector to achieve the final desired orientation.
    

---

## 5. Summary Table for High Scores

|**DOF Type**|**Component**|**Function in 2D Space**|
|---|---|---|
|**Translation 1**|$X$ Coordinate|Determines horizontal location.|
|**Translation 2**|$Y$ Coordinate|Determines vertical location.|
|**Rotation**|$\phi$ (Orientation)|Determines the tilt/angle of the tool.|

---

Exactly! You have grasped the core concept of **2D Planar Kinematics** perfectly.

To ensure you get the maximum marks for this explanation, let's refine your wording into the "High-Score" technical language used in the **ORA351** answer keys. Here is the breakdown of what you just described:

---

### 1. The "Base" (Attached to the Table)

- **Your Point:** The part attached to the table.
    
- **Technical Explanation:** This is the **Base (Link 0)**. It is the fixed reference point for the entire coordinate system.
    
- **Movement:** It does not move, but it allows the first joint to rotate relative to the "table".
    

### 2. The $x, y$ Movement (Positioning)

- **Your Point:** The robot can go $x, y$.
    
- **Technical Explanation:** By rotating the first two joints ($\theta_1$ and $\theta_2$), the robot can place its "wrist" at any $(x, y)$ coordinate within its reach.
    
- **Role:** These two degrees of freedom are responsible for **Translation** or **Positioning**.
    

### 3. The "Tilt" ($\theta$ or $\phi$)

- **Your Point:** The joints can tilt.
    
- **Technical Explanation:** This "tilt" is the **Orientation**.
    
- **Mechanism:** In a 3-DOF planar robot, the final joint rotates the end-effector so it can face any direction (left, right, or diagonal) while staying on the table.
    
- **Role:** This third degree of freedom is responsible for **Orientation**.
    

### 4. The "No Z-axis" Constraint

- **Your Point:** The end-effector and joints can't move in the $z$ direction.
    
- **Technical Explanation:** This is the defining feature of a **Planar Manipulator**.
    
- **Constraint:** All links and joints are mechanically restricted to move only in the **XY-plane**.
    
- **Marks Booster:** In your exam, state that "The joint axes are all parallel to each other and perpendicular to the plane of motion". This is the mathematical reason why the robot cannot move in $Z$.
    

---

### Summary for a 13-Mark Question

If the examiner asks you to describe this, use this summary:

> "A 3-DOF planar robot uses **two joints** to reach a specific **$(x, y)$ position** and a **third joint** to achieve the desired **angular orientation ($\phi$)**. Because all joint axes are parallel, the robot is constrained to the 2D plane and has **zero velocity in the Z-direction**."

**Does this fully clear up the 2D vs. 3D confusion? If so, shall we move to the next priority items from your screenshot: "Manipulator Dynamics, Degeneracy, and Dexterity"?**


### Exam Success Tip:

If asked for 13 marks, always conclude by stating that while **3 DOF** are enough to locate and orient an object in **2D space**, it requires **6 DOF** to do the same in **3D space** (3 Translations + 3 Rotations: Pitch, Yaw, Roll).

**Would you like to move to the next detailed derivation: "Forward and Inverse Kinematics for a 2-DOF Manipulator"?**