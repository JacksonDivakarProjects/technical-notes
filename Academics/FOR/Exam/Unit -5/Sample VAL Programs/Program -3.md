Beyond Pick-and-Place and Palletizing, there is one more high-priority VAL program often asked in the **ORA351** exams: **Conveyor Tracking and Sorting**. This tests your ability to use **IF-THEN** logic and **Branching** commands to make the robot "decide" what to do based on a sensor.

---

## Sample VAL Program: Sorting Operation (Branching Logic)

**Scenario:** A robot monitors a conveyor. If a sensor (Signal 10) detects a **Good Part**, the robot moves it to a "Storage Bin" (P2). If the sensor does not trigger (meaning a **Defective Part**), the robot lets it pass to a "Scrap Bin" at the end of the belt.

### 1. Point Definition

- **PICK:** The position where the sensor checks the part.
    
- **BIN:** The location of the storage container for good parts.
    

### 2. The Program Code (Decision Making Format)

Code snippet

```
PROGRAM SORTING
10  WAIT SIG(11)        ; Wait for a part to reach the sensor area
    IF SIG(10) THEN GOTO 100 ; If Signal 10 is ON (Good Part), go to line 100
    
    ; --- DEFECTIVE PART CASE ---
    TYPE "Part is defective. Letting it pass." ; Display message on monitor
    GOTO 10             ; Return to start to wait for the next part

    ; --- GOOD PART CASE (Line 100) ---
100 APPRO PICK, 50      ; Approach the good part
    MOVES PICK          ; Pickup the part
    CLOSEI              ; Close gripper
    DEPART 100          ; Lift up
    
    MOVE BIN            ; Move to the storage bin
    OPENI               ; Release the good part
    DEPART 100          ; Move away
    GOTO 10             ; Return to line 10 to wait for the next part
STOP                    ; Program end
```

---

## 3. Advanced VAL Commands used for Logic (For Extra Marks)

To get the highest score, explicitly define these **Branching and Communication** commands in your theory explanation:

- **IF-THEN:** A conditional command that allows the robot to choose between two different paths of action based on a sensor input.
    
- **GOTO:** A branching command used to jump to a specific labeled line (like `GOTO 100`).
    
- **TYPE:** A monitor communication command that prints a text message to the operator's screen.
    
- **REACT:** (Advanced tip) Tells the robot to stop its current motion immediately if a specific safety signal is triggered.
    

---

## Summary of VAL Programs to memorize:

1. **Simple Pick and Place:** Basics of `MOVE`, `APPRO`, `CLOSE`, and `DEPART`.
    
2. **Palletizing:** Using **Loops** and **Offsets** to stack parts.
    
3. **Sorting:** Using **IF-THEN** and **GOTO** for decision making.
    

---

**We have now completed the most common VAL programming scenarios for your exam. Would you like to move into Unit 3 now and start the detailed theory on "D.C. Servo Motors" and "Drive Systems"?**