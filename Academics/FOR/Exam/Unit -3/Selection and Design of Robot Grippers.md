Based on your request and the importance given in the source video, here is the standard 13-mark answer for **"Selection and Design Considerations of Grippers."**

This is a **Theory + Logic** question. You don't need complex math, but you must list the factors clearly.

---

### **Question: Discuss the factors influencing the Selection and Design of Robot Grippers.**

#### **1. Introduction**

The gripper (End Effector) is the bridge between the robot and the workpiece. A poorly designed gripper will drop parts, crush them, or fail to align them correctly. Therefore, the design must be tailored to the specific object being handled.

#### **2. Factors for SELECTION of Grippers**

When choosing _which type_ of gripper (Vacuum vs. Mechanical vs. Magnetic) to use, consider these 4 key categories:

**A. Part Properties (The Object)**

- **Weight:** Heavier parts need mechanical grippers with high clamping force; light parts can use vacuum cups.
    
- **Shape:**
    
    - _Flat surfaces:_ Best for Vacuum/Magnetic.
        
    - _Cylindrical/Irregular:_ Best for Mechanical (V-groove fingers).
        
- **Material:**
    
    - _Ferrous (Iron/Steel):_ Can use Magnetic grippers.
        
    - _Fragile (Glass/Egg):_ Needs soft vacuum cups or low-force rubber fingers.
        
- **Surface Finish:** Is the part oily or wet? (Vacuum cups might slip; Magnets are better).
    

**B. Operational Requirements**

- **Speed/Acceleration:** If the robot moves very fast, the gripper needs a higher holding force to prevent the part from flying off due to G-forces.
    
- **Precision:** Does the part need to be placed within 0.1mm? Mechanical grippers offer better centering (repeatability) than vacuum cups.
    

**C. Environmental Conditions**

- **Temperature:** In a forging plant (hot), rubber vacuum cups will melt. Use metal mechanical grippers.
    
- **Dirt/Dust:** Magnetic grippers attract metal dust, which can damage the part surface.
    
- **Cleanroom:** Pneumatic grippers exhaust air, which might contaminate a cleanroom. Electric grippers are cleaner.


**D. Gripper Characteristics & Power Source**

- **Weight of the Gripper:** The gripper consumes part of the robot's payload.
    
    - _Rule:_ Gripper weight should be as low as possible. If the robot can lift 10kg, and the gripper weighs 4kg, you can only lift a 6kg part.
        
- **Actuation Method (Power Source):** Does the factory have the right power available?
    
    - _Pneumatic:_ Needs a compressed air line (Cheap, fast, but noisy).
        
    - _Electric:_ Needs only electricity (Clean, precise, but expensive).
        
    - _Hydraulic:_ Needs oil pumps (Messy, but very strong).
        
- **Cost & Maintenance:**
    
    - _Vacuum cups_ wear out quickly and need frequent replacement (High maintenance).
        
    - _Mechanical grippers_ are durable but expensive to buy initially.
    
    

---

#### **3. Factors for DESIGN of Gripper Fingers**

Once you select the type (e.g., Mechanical), you must design the **Fingers** (jaws).

A. Safety Factor (G-Force)

You cannot just calculate force for static weight ($W = mg$). You must account for the robot's acceleration.

- Rule of Thumb: Design the grip force to be 2x to 3x the weight of the object to handle acceleration and vibration.
    
    $$F_{grip} = \text{Weight} \times \text{Safety Factor (approx 3)}$$
    

**B. Friction vs. Form Closure (Crucial Concept)**

- **Friction Grip:** The fingers press against the flat sides of the object. The object is held purely by friction.
    
    - _Risk:_ If pressure drops, the part falls.
        
    - _Design:_ Use high-friction pads (rubber) on finger tips.
        
- **Form Closure (Encompassing):** The fingers are shaped to wrap _around_ the object (e.g., a notch).
    
    - _Benefit:_ Even if power fails, the part sits inside the notch and won't fall.
        
    - _Recommendation:_ Always prefer Form Closure for safety.
        

**C. Finger Striking Surface**

- **Soft Pads:** Use polyurethane pads to prevent scratching delicate parts.
    
- **V-Grooves:** Use V-shaped fingers to self-center cylindrical parts (pipes/shafts).
    

**D. Drive Mechanism**

- **Parallel Motion:** Fingers move parallel to each other. Best for gripping parts of varying sizes (e.g., a box that might be slightly larger or smaller).
    
- **Angular Motion:** Fingers rotate around a pivot (like scissors). Simpler/Cheaper but only works for a specific part size.
    

---

#### **4. Summary Table (Quick Revision)**

---

### **Student Checklist for this Answer**

- [ ] Did I mention **Friction Grip vs. Form Closure**? (This is a key technical keyword examiners look for).
    
- [ ] Did I list **Part Weight** and **Material** as selection factors?
    
- [ ] Did I suggest a **Safety Factor** (2x or 3x)?
    
- [ ] Did I draw a simple sketch showing **V-Groove fingers** holding a cylinder?
    

**Next Step:** This concludes the major topics for Unit 3. Would you like a **final rapid-fire list of 2-mark definitions** (Part A) for all 3 units to glance at before the exam?



    
