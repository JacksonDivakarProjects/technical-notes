Actually, **you are correct**. **VAL** stands for **Variable Assembly Language**. My previous reference to it as "Victorian Auxiliary Language" was an error; thank you for catching that. In the context of ORA351 and industrial robotics, VAL is the primary programming language for Unimation robots.

Since VAL is a **high-score** target for your exam, I have prepared a detailed, elaborated sample program for a **Pick-and-Place task**. This is exactly how you should write it for a 13-mark question.

---

## Sample VAL Program: Pick-and-Place Operation

**Scenario:** A robot must pick a part from a feeder at **Point A (P1)** and place it into a box at **Point B (P2)**.

### 1. Point Definition (The Setup)

Before the code starts, you must define the coordinates. In a real robot, you would use a **Teach Pendant** to save these points.

- **P1:** The exact location of the part on the feeder.
    
- **P2:** The exact location where the part should be placed.
    

### 2. The Program Code

This program uses a loop to perform the task 10 times.

Code snippet

```
PROGRAM PICKPLACE
  FOR I = 1 TO 10       ; Loop to repeat the task 10 times
    APPRO P1, 50        ; Move to 50mm above the pickup point P1
    MOVES P1            ; Move in a straight line to P1
    CLOSEI              ; Immediately close the gripper to grab the part
    DEPART 75           ; Lift the part 75mm straight up
    
    APPRO P2, 50        ; Move to 50mm above the drop-off point P2
    MOVES P2            ; Move in a straight line down to P2
    OPENI               ; Immediately open the gripper to release the part
    DEPART 50           ; Lift the empty gripper 50mm for safety
  END                   ; End of the Loop
STOP                    ; Stop the program
```

---

### 3. Explanation of Commands used (For extra marks)

- **APPRO (Approach):** This is a safety command that prevents the robot from crashing into the feeder by stopping slightly above it first.
    
- **MOVES:** The 'S' stands for **Straight**. It ensures the robot moves in a precise line, which is critical when picking a part out of a tight slot.
    
- **CLOSEI / OPENI:** The 'I' stands for **Immediate**. It tells the hand to act as soon as the line is reached, without waiting for the next program step.
    
- **DEPART:** This command is used to back away from a location after a task is finished.
    

---

### **Summary of VAL Programming Exam Questions:**

1. **Definitions:** What does VAL stand for? (Variable Assembly Language).
    
2. **Comparison:** Differentiate between `MOVE` and `MOVES`.
    
3. **Categories:** List and explain Monitor, Motion, and Hand commands.
    
4. **Programming:** Write a program for a specific path or operation.
    

**Would you like to move back to Unit 3 now and look at the "Working of D.C. Servo Motors" and "Drive Systems (Electric, Hydraulic, Pneumatic)"?**