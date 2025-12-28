
### Construction 

- **DC Motor:** The core motor is a direct current motor that uses a field winding that is separately excited. According to the excitation mode, DC servo motors can be in two types, namely, the armature-controlled motor and the field-controlled motor. 
- **Load:** The load could be as simple as a fan or an industrial load coupled to the mechanical shaft of the motor. 
- **Gearbox:** Serves as a mechanical transducer to modify the motor’s output signal —acceleration, position, or velocity— to fit the task at hand. 
- **Position Sensor:** In general, it is a potentiometer that gives back information by generating a voltage corresponding to the angle of the motor shaft through a system of gears. 
- **Comparator:** Compares a reference signal from the signal obtained from the position sensor to generate an error signal that is given to an amplifier. 
- **Amplifier:** Increases the error signal coming out of the comparator section and gives it to the motor.
- **Pulse Width Modulator (PWM):** Compensates the feedback signal given to the motor to fine-tune the input towards it.




**Question:** Explain the construction and working of a DC Servo Motor with a neat diagram.

#### **1. The "Million Dollar" Diagram**

You must draw the **Closed-Loop Feedback System**. This distinguishes a "Servo" from a normal motor.

- **Key parts to label:**
    
    - **Controller (Comparator):** Compares the target position with actual position.
        
    - **Amplifier:** Boosts the signal to drive the motor.
        
    - **Motor:** The actual DC motor.
        
    - **Sensor (Encoder/Potentiometer):** The "eye" that looks at the output and sends feedback.
        

#### **2. Construction (The Hardware)**

- **Stator:** Permanent magnets that create a fixed magnetic field.
    
- **Rotor (Armature):** The rotating coil carrying current.
    
- **Commutator & Brushes:** Flip the current direction to keep the motor spinning.
    
- **Feedback Device:** An **Optical Encoder** attached to the back of the motor shaft. It counts rotations.
    

#### **3. Working Principle (The Logic)**

1. **Input:** The controller sends a command (e.g., "Go to 90 degrees").
    
2. **Error Calculation:** The system sees the motor is at 0 degrees. Error = $90 - 0 = 90$.
    
3. **Action:** The amplifier sends power to the motor. The motor spins.
    
4. **Feedback:** The Encoder counts the rotation. "Now at 10... 30... 50...".
    
5. **Stop:** When the Encoder says "Now at 90", the Error becomes 0. The controller cuts power instantly.
    

#### **4. Why use it? (Application)**

- **High Precision:** It stops exactly where you tell it to.
    
- **High Torque:** Strong turning force even at low speeds.
    
- **Used in:** Robot Joints (Arms), CNC Machines.
    

---

### **Final "Theory-Only" Checklist**

If you have these 3 questions ready, you are exam-ready for tomorrow:

1. **Unit 3:** DC Servo Motor (Diagram + Feedback Logic).
    
2. **Unit 4:** Machine Vision System (Block Diagram).
    
3. **Unit 5:** Lead-Through vs. Offline Programming (Comparison Table).
    

**Next Step:** You are set! Do you want a quick template for the **"Introduction"** paragraph that you can paste at the start of _any_ answer to make it look professional?