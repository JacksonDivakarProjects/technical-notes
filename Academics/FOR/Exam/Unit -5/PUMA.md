This is a classic **Case Study question** for Unit 5. When examiners ask about the "PUMA Robot," they are asking about the most famous industrial robot in history: the **PUMA 560**.

To score full 13 marks, you cannot just write "It is a robot." You must describe its **Construction**, **Kinematics**, and **Control System**.

---

### **Question: Describe the configuration, drive system, and control architecture of the PUMA 560 Robot.**

#### **1. Introduction**

- **Full Form:** **P**rogrammable **U**niversal **M**achine for **A**ssembly.
    
- **History:** Developed by Unimation (the first robotics company) for General Motors in 1978.
    
- **Significance:** It was the first robot to use a digital computer for control and the first to use the **VAL** programming language. It is the "textbook definition" of an articulated robot.
    

#### **2. Mechanical Configuration (The Anatomy)**

The PUMA 560 is an **Articulated (Jointed-Arm) Robot** with a structure similar to a human arm.

- **Degrees of Freedom (DOF):** It has **6 Degrees of Freedom** (6 Axes). This allows it to reach any point ($X, Y, Z$) and orient the tool in any direction (Roll, Pitch, Yaw).
    
- **Joint Structure:** All joints are **Rotational (Revolute)**.
    
    1. **Waist (Joint 1):** Rotates the whole robot body (320°).
        
    2. **Shoulder (Joint 2):** Lifts the upper arm up/down.
        
    3. **Elbow (Joint 3):** Extends the forearm.
        
    4. **Wrist (Joints 4, 5, 6):** A spherical wrist that provides 3 rotary motions (Roll, Pitch, Yaw) to orient the tool.
        

#### **3. Drive System (Motors)**

Unlike older robots that used hydraulics (messy/heavy), the PUMA was revolutionary because it was **All-Electric**.

- **Motors:** It uses **DC Servo Motors** for all 6 joints.
    
- **Transmission:**
    
    - The motors are located back near the "shoulder" to keep the arm light and fast.
        
    - Power is transmitted to the wrist using **Gear Trains** and rigid shafts.
        
- **Feedback:** Each motor has an **Optical Encoder** and a Potentiometer to tell the computer exactly where the arm is.
    

#### **4. Control System & Programming**

The PUMA is famous for introducing the "Brain" to robotics.

- **Controller Hardware:** It used a DEC LSI-11 computer (very advanced for 1978).
    
- **Software (VAL Language):** It was programmed using **VAL** (Variable Assembly Language). This allowed users to type English-like commands instead of binary code.
    
    - _Example:_ `MOVES P1` (Move straight to Point 1).
        
- **Coordinate Systems:** The controller could automatically switch between:
    
    - **Joint Mode:** Moving individual motors.
        
    - **World Mode:** Moving in straight X, Y, Z lines (Cartesian).
        
    - **Tool Mode:** Moving in the direction the tool is pointing.
        

#### **5. Technical Specifications (Memorize 2-3 of these)**

- **Payload:** 2.5 kg (Lightweight, for assembly).
    
- **Reach:** Approx 0.9 meters (Human arm length).
    
- **Repeatability:** $\pm 0.1$ mm (Very precise).
    
- **Weight:** ~55 kg.
    

#### **6. Applications**

The PUMA was designed specifically for **Assembly**, not heavy lifting.

1. **Assembly:** Inserting small parts into car dashboards (screws, lights).
    
2. **Welding:** Light Gas Tungsten Arc Welding (GTAW).
    
3. **Medical:** It was the _first robot used in surgery_ (neurosurgery biopsy) in 1985 because of its high precision.
    
4. **Education:** Because it is standard, thousands of universities use it for teaching kinematics.
    

#### **7. Conclusion**

The PUMA 560 set the standard for modern 6-axis articulated robots. Its kinematic structure (DH parameters) is still used as the baseline for studying robot mechanics today.

---

### **Student Checklist for this Answer**

- [ ] **Full Form:** Did I write "Programmable Universal Machine for Assembly"?
    
- [ ] **Configuration:** Did I mention **6-Axis Articulated (RRR)**?
    
- [ ] **Diagram:** Did I sketch the robot showing the **Waist, Shoulder, Elbow, and Wrist**?
    
- [ ] **Language:** Did I mention **VAL** programming?
    

**Next Step:** This finishes the PUMA question. You have now covered almost every major topic on your list. Would you like a final **"Exam Day Cheat Sheet"** (a single-page summary of formulas and diagrams) to save on your phone?