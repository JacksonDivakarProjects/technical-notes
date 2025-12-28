For a 13-mark question in your **ORA351 / ME8099** exam, you need to provide a structured answer that includes a clear definition, a neat diagram, the mathematical derivation steps, and the final equations.

---

# Forward Kinematics of a 2-Link Planar Manipulator

### 1. Definition

**Forward kinematics** is the process of determining the position (coordinates) and orientation of the robot's end-effector (hand) in Cartesian space $(x, y)$ when the joint angles ($\theta_1, \theta_2$) and link lengths ($l_1, l_2$) are known1. In simpler terms, if you know how much each motor has turned, forward kinematics tells you exactly where the "hand" is located.

### 2. Kinematic Diagram

To start the derivation, you must draw a diagram of the two-link arm.

- **Link 1 ($l_1$):** Attached to the base at the origin $(0,0)$ with an angle $\theta_1$ relative to the $X$-axis.
    
- **Link 2 ($l_2$):** Attached to the end of Link 1 with an angle $\theta_2$ relative to the direction of Link 1.
    

### 3. Step-by-Step Derivation (Geometric Method)

The goal is to find the final $(x, y)$ coordinates of the end-effector by adding the horizontal and vertical contributions of each link.

#### **Step A: Coordinates of the first joint (End of Link 1)**

Using basic trigonometry on the first link:

- The horizontal distance is $x_1 = l_1 \cos\theta_1$2.
    
- The vertical distance is $y_1 = l_1 \sin\theta_1$3.
    

#### **Step B: Coordinates of the second link (Relative to the first)**

The second link is tilted at an angle $\theta_2$ _relative to the first link_. Therefore, its total angle relative to the ground ($X$-axis) is the sum of both angles: **$\theta_1 + \theta_2$**4.

- The additional horizontal distance covered by Link 2 is $l_2 \cos(\theta_1 + \theta_2)$5.
    
- The additional vertical distance covered by Link 2 is $l_2 \sin(\theta_1 + \theta_2)$6.
    

#### **Step C: Final End-Effector Position**

To find the total $x$ and $y$ position, we sum the contributions from both links:

- **$x = l_1 \cos\theta_1 + l_2 \cos(\theta_1 + \theta_2)$** 7
    
- **$y = l_1 \sin\theta_1 + l_2 \sin(\theta_1 + \theta_2)$** 8
    

#### **Step D: Orientation**

The total orientation ($\phi$) of the end-effector relative to the base is simply the sum of the joint angles:

- **$\phi = \theta_1 + \theta_2$** 9
    

---

### Summary for Exam Success

When writing this in the exam:

1. **State the definition** clearly10.
    
2. **Draw the diagram** showing $l_1, l_2, \theta_1,$ and $\theta_2$.
    
3. **Show the addition of vectors**: Explain that the second link's angle is the sum of both joint rotations.
    
4. **Final Equations Box**: Clearly highlight the final $x$ and $y$ formulas11.
    

**This completes the 13-mark derivation for Forward Kinematics. Shall we move to the next high-priority derivation: Inverse Kinematics?**