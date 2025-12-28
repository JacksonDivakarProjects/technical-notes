For Unit 1, the next major topic from your high-priority list is the **Specifications of Robots**. This is a frequent Part-B (13-mark) question and is essential for understanding how a robot is selected for an industrial task.

---

# Unit 1: Robot Specifications

### 1. Definition

**Robot specifications** are the technical characteristics that define the performance, physical limits, and capabilities of a robot. These parameters allow engineers to compare different robots and choose the right one for a specific application like welding, painting, or assembly.

---

### 2. Key Performance Specifications (Detailed)

To get maximum marks, you must distinguish between **Resolution**, **Accuracy**, and **Repeatability**, as these are the most critical technical specs.

#### **A. Control Resolution**

- **Definition:** The smallest increment of movement that the robot can make.
    
- **Factors:** It depends on the bit-capacity of the control memory and the mechanical link's range.
    
- **Importance:** High resolution means the robot can be positioned very precisely at specific points in space.
    

#### **B. Accuracy**

- **Definition:** The ability of a robot to position its end-effector at a specific target point in the workspace.
    
- **Measurement:** It is the distance between the "Commanded Point" (where you told the robot to go) and the "Actual Point" it reached.
    
- **Constraint:** Accuracy is generally worse than resolution due to mechanical errors like friction or link bending.
    

#### **C. Repeatability**

- **Definition:** The ability of the robot to return to the same position multiple times.
    
- **Significance:** For most industrial tasks, repeatability is more important than absolute accuracy.
    
- **Example:** If a robot is welding a car door, it must hit the exact same spot on every single car that comes down the assembly line.
    

[Image showing the difference between accuracy and repeatability in robotics]

---

### 3. Physical & Operational Specifications

#### **D. Payload (Carrying Capacity)**

- **Definition:** The maximum weight the robot can carry at its end-effector without losing performance or safety.
    
- **Note:** The payload includes the weight of the gripper plus the weight of the part being moved.
    

#### **E. Speed of Motion**

- **Definition:** The rate at which the robot moves its end-effector from one point to another.
    
- **Measurement:** Usually measured in meters per second (m/s) for linear motion or degrees per second (°/s) for rotation.
    
- **Trade-off:** High speed often reduces the accuracy of the robot.
    

#### **F. Work Envelope (Workspace)**

- **Definition:** The total space or volume that the robot's arm can reach.
    
- **Shape:** As discussed in configurations, this can be a box (Cartesian), cylinder, or sphere.
    

#### **G. Degree of Freedom (DOF)**

- **Definition:** The number of independent directions in which the robot arm can move.
    
- **Standard:** Most industrial robots have 4 to 6 degrees of freedom.
    

---

### 4. Summary Table for High Scores

|**Specification**|**Short Definition**|**Why it matters?**|
|---|---|---|
|**Resolution**|Smallest step size|Limits the precision of movement.|
|**Accuracy**|Ability to hit target|Crucial for "first-time" programming.|
|**Repeatability**|Ability to return to spot|Essential for mass production.|
|**Payload**|Max weight|Determines if it can lift the part.|
|**DOF**|Independent motions|Defines the robot's flexibility.|

---

### Exam Success Tip:

If this question is asked for 13 marks, always draw the **"Target Diagram"** (Circles showing Accuracy vs. Repeatability). It is a standard diagram in the ORA351 answer key and quickly demonstrates your understanding to the examiner.

**Would you like to continue with "Need for Robots / Benefits and Applications" (the final part of Unit 1) or should we dive straight into the Unit 2 Kinematics math in detail?**