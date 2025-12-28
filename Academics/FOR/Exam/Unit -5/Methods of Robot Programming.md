Here is the next most critical 13-mark question, focusing on **Unit 5: Robot Programming**.

This question is a favorite for examiners because it tests if you know the _technical_ difference between "showing" a robot what to do versus "coding" it, and it allows you to demonstrate specific programming syntax.

---

### **Question: Discuss the different methods of Robot Programming. Compare Lead-Through programming with Textual (Offline) programming. Give an example using a robot language (e.g., VAL).**

#### **1. Introduction**

Robot programming is the process of defining the desired motions and auxiliary functions (like opening a gripper or turning on a welder) for a robot to perform a specific task. There are two primary methods used in the industry:

1. **Lead-Through Programming (Online)**
    
2. **Textual Robot Languages (Offline)**
    

---

#### **2. Method 1: Lead-Through Programming (Online)**

In this method, the robot is moved through the desired motion cycle by an operator, and these points are recorded in the robot's memory. There are two sub-types:

**A. Powered Lead-Through (Teach Pendant):**

- **How it works:** The operator uses a handheld control box called a **Teach Pendant** to drive the robot to specific points (P1, P2, P3).
    
- **Recording:** At each point, the operator presses "Record." The robot stores the coordinates ($X, Y, Z, \theta$).
    
- **Usage:** Common for point-to-point tasks like **Spot Welding** or **Pick-and-Place**.
    

**B. Manual Lead-Through:**

- **How it works:** The operator physically grabs the robot arm (often with handles attached) and moves it through the path. The robot controller records the continuous path.
    
- **Usage:** Essential for tasks requiring smooth, complex curves like **Spray Painting** or **Arc Welding**.
    

---

#### **3. Method 2: Textual / Offline Programming**

In this method, the program is written on a computer terminal without using the robot itself. The code is then uploaded to the robot controller.

- **How it works:** The programmer uses a high-level language (similar to BASIC or C) to define logic, calculations, and sensor inputs.
    
- **Advantage:** The robot does not need to be stopped (zero downtime). You can simulate the program before running it to check for collisions.
    

---

#### **4. Comparison: Lead-Through vs. Offline Programming**

_(Draw this table. It guarantees marks.)_

|**Feature**|**Lead-Through (Online)**|**Offline (Textual)**|
|---|---|---|
|**Downtime**|**High:** Production must stop to teach the robot.|**Low:** Can program while robot works.|
|**Skill Level**|Low: Shop floor operators can do it.|High: Requires programming skills.|
|**Safety**|Lower: Operator is inside the workspace.|Higher: Operator is safe at a computer.|
|**Logic/Sensors**|Limited capability for complex logic (if/else).|Excellent for complex logic and sensor integration.|
|**Best For...**|Repetitive, simple paths (Painting/Welding).|Complex assembly, Adaptive tasks.|

---

#### **5. Example: VAL (Variable Assembly Language) Programming**

_(Writing this code snippet proves you didn't just memorize theory.)_

VAL is a popular robot language developed by Unimation. It uses English-like commands.

**Scenario:** A robot picks a part from Point A and places it at Point B.

**Command Syntax:**

- `APPRO` (Approach a location)
    
- `MOVES` (Move in a straight line)
    
- `CLOSEI` (Close Gripper immediately)
    
- `DEPART` (Move away/Retract)
    

**Sample Code:**

Code snippet

```
PROGRAM PICK_PLACE
  1. APPRO PART, 50     ; Move 50mm above the 'PART'
  2. MOVES PART         ; Move straight down to the 'PART'
  3. CLOSEI             ; Close the gripper to grab part
  4. DEPART 50          ; Lift straight up 50mm
  5. APPRO BIN, 50      ; Move 50mm above the 'BIN'
  6. MOVES BIN          ; Move down to the 'BIN'
  7. OPENI              ; Open gripper to drop part
  8. DEPART 50          ; Lift up
END
```

---

#### **6. Conclusion**

While Lead-Through programming is intuitive and excellent for path-following tasks like painting, modern industry is shifting toward Offline Programming. Offline methods allow for integration with CAD/CAM systems and "Digital Twin" simulations, making the manufacturing process more flexible and efficient.

---

### **Student Checklist for this Answer:**

- [ ] Did I mention both **Powered** (Teach Pendant) and **Manual** Lead-Through?
    
- [ ] Did I draw the **Comparison Table**? (This is the "Pareto" 20% that gives 80% marks).
    
- [ ] Did I write the **VAL Code Snippet**? (Even if it's just 4 lines).
    
- [ ] Did I mention "Downtime" as a key difference?
    

Next Step: I have covered the "Big Questions" for Unit 4 (Vision) and Unit 5 (Programming).

Would you like to do a "Rapid Fire" definition check for the 2-mark questions (Part A), or move to the Applications (Unit 5) question regarding specific industries like Welding/Assembly?