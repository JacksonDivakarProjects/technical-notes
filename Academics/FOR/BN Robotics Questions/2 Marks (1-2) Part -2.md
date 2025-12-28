You are right to catch that. I focused on the highlighted items, but to ensure you get the **"High-Score"** results you want, we need to cover all the terms mentioned in those screenshots, especially the ones that are tricky.

Here is the **elaborated and comprehensive list** of 2-mark questions for **Unit 1 and Unit 2**, based strictly on your provided screenshots.

---

### **UNIT 1: Fundamentals of Robotics (Extended Part-A)**

- Need for Robots:
    
    Industries require robots to perform tasks that are hazardous (toxic fumes, high heat), repetitive (boring/fatiguing for humans), or require precision beyond human capability (microchip assembly).
    
- Specifications of Robots:
    
    These are technical attributes that define a robot's performance, such as payload (weight capacity), reach (max distance), precision, and degree of freedom.
    
- Pitch, Yaw, and Roll:
    
    These are the three types of rotational movements of the robot's wrist:
    
    - **Pitch:** Up and down rotation.
        
    - **Yaw:** Left and right rotation.
        
    - **Roll:** Circular rotation (twisting) along the arm's axis.
        
- AGV (Automated Guided Vehicle):
    
    A mobile robot that follows markers, wires, or lasers on the floor to move materials within a factory or warehouse without a human driver.
    
- Economic Analysis of Robots:
    
    The process of evaluating the financial feasibility of installing a robot, usually calculated using the Payback Period (Total Cost / Annual Savings) or Return on Investment (ROI).
    

---

### **UNIT 2: Robot Kinematics (Extended Part-A)**

- **Difference between Forward and Inverse Kinematics:**
    
    - **Forward Kinematics:** Input: Joint Angles $\to$ Output: End-effector Position $(x, y, z)$.
        
    - **Inverse Kinematics:** Input: Desired $(x, y, z)$ Position $\to$ Output: Required Joint Angles.
        
- Manipulator Dynamics:
    
    The study of the forces and torques required to cause motion in the robot's links. While kinematics is about geometry, dynamics is about the physics of movement.
    
- Degeneracy (Singularity):
    
    A critical point in the robot's workspace where it loses one or more degrees of freedom because two or more joint axes become aligned.
    
- Dexterity:
    
    The measure of the robot’s ability to reach a point in its work volume from many different orientations.
    
- Degrees of Freedom (DOF) in 3D Space:
    
    To fully locate and orient an object in 3D space, a robot requires 6 Degrees of Freedom: 3 for translation (Position: $X, Y, Z$) and 3 for rotation (Orientation: Pitch, Yaw, Roll).
    
- **Translation and Rotation Matrices:**
    
    - **Translation Matrix:** A 4x4 matrix used to shift a frame along an axis without rotating it.
        
    - **Rotation Matrix:** A matrix used to describe the orientation of a frame after it has been tilted or spun around an axis.
        
- Homogeneous Transformation Matrices (HTM):
    
    A composite 4x4 matrix that contains both the 3x3 rotation sub-matrix and the 3x1 translation vector. It is the standard way to map coordinates from one link to the next.
    

---

### **How to get full marks in these 2-mark questions:**

1. **Be Technical:** Use terms like "end-effector," "link," "joint," and "coordinate frame".
    
2. **Use Math:** If a question asks about HTM or Translation, write the basic matrix structure ($4 \times 4$).
    
3. **Use Notations:** For DOF, mention joint types like **R (Revolute)** or **P (Prismatic)**.
    

**Since we have now covered all the Part-A (2-mark) questions for Units 1 and 2, should we move to the big Part-B (13-mark) derivation for "Forward and Inverse Kinematics for a 2-DOF Manipulator"?**