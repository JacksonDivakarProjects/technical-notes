The next most likely programming question for **VAL (Variable Assembly Language)** in your **ORA351** exam is the **Continuous Path (CP) or Palletizing operation**. This tests your ability to use **loops** and **signal commands** to interact with external hardware like sensors or conveyor belts.

---

## Sample VAL Program: Palletizing (Stacking) Operation

**Scenario:** A robot needs to pick 5 parts from a conveyor and stack them in a vertical column at a drop-off point. It must wait for a "Sensor Signal" before each pick to ensure a part is actually there.

### 1. Point Definition

- **PICK:** The fixed location where parts arrive on the conveyor.
    
- **STACK:** The base position of the pallet/stacking area.
    
- **SIGNAL 10:** An external sensor input that turns 'ON' when a part is detected.
    

### 2. The Program Code (Elaborated Format)

Code snippet

```
PROGRAM PALLET
  SET Z_OFFSET = 0      ; Initialize the height variable at 0mm
  FOR I = 1 TO 5        ; Loop to stack 5 parts
    
    ; --- PICKING PHASE ---
    WAIT SIG(10)        ; Wait for the conveyor sensor to detect a part
    APPRO PICK, 50      ; Move 50mm above the part for safety
    MOVES PICK          ; Move straight down to the part
    CLOSEI              ; Grab the part immediately
    DEPART 100          ; Lift the part 100mm up
    
    ; --- STACKING PHASE ---
    APPRO STACK, 150    ; Move safely above the stacking base
    ; Move to STACK but shifted up by the current Z_OFFSET
    MOVES STACK + Z_OFFSET 
    OPENI               ; Release the part
    DEPART 100          ; Move away vertically
    
    ; --- UPDATE HEIGHT ---
    Z_OFFSET = Z_OFFSET + 25 ; Increase height by 25mm for the next layer
    
  END                   ; Repeat loop
STOP                    ; Stop the robot
```

---

### 3. Key Commands Explanation (High-Score Marks)

To get full marks, explain these specific "Control" commands used in the program:

- **WAIT SIG(n):** This is a **Sensor Command**. The robot will pause execution until it receives an electrical signal from the external sensor (Signal 10).
    
- **FOR / END:** These are **Program Control Commands** used to automate repetitive tasks without writing the same code multiple times.
    
- **OFFSET/Variable:** By adding a variable like `Z_OFFSET` to a point, you can tell the robot to move to a different height each time it returns to the same $(x, y)$ location.
    

---

### **VAL Programming Exam Strategy:**

1. **Diagram:** Draw a simple sketch showing the 'Pick' point and the 'Stack'.
    
2. **Logic:** Mention that VAL is a **High-Level Language** that allows for logic (If/Then, Loops) unlike simpler Lead-through programming.
    
3. **Accuracy:** Use the correct command syntax (e.g., `APPRO` instead of `APPROACH`) as the VAL compiler is strict.
    

**Since we have covered the two major VAL programs, would you like to move back to Unit 3 theory, specifically "Working of D.C. Servo Motors" and "Drive Systems"?**