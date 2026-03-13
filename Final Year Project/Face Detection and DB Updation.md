Good. Now I’ll explain **how your `face_uid` actually works**, strictly based on **this exact code**, not theory. This is the explanation you should use in **methodology + viva**.

---

## What `face_uid` Means in _Your_ System

In your implementation, **face_uid is a short-term tracking ID generated using spatial overlap (IoU)** to ensure that:

- The **same face is not counted multiple times**
    
- A visitor is tracked **across consecutive frames**
    
- Session-level analytics (first_seen / last_seen) are possible
    

It is **not biometric identification**. It is **frame-to-frame tracking**.

---

## Core Mechanism Used: **IoU-based Face Tracking**

Your system uses **Intersection over Union (IoU)** between bounding boxes to decide whether a detected face is **new or existing**.

### Key Parameters

```python
IOU_THRESHOLD = 0.5
FACE_TIMEOUT = 10  # seconds
```

- `IOU_THRESHOLD`: similarity threshold
    
- `FACE_TIMEOUT`: how long a face can disappear before being forgotten
    

---

## Step-by-Step Execution Flow

### 1. Face Detection (per frame)

Using OpenCV DNN:

```python
detections = self.net.forward()
```

Each detection produces a bounding box:

```python
bbox = (x, y, width, height)
```

---

### 2. Matching With Existing Faces (`get_face_id`)

```python
face_id, is_new = get_face_id(bbox)
```

Inside `get_face_id()`:

#### a. Compare with tracked faces

```python
for fid, data in tracked_faces.items():
    if iou(bbox, data["bbox"]) > IOU_THRESHOLD:
```

- The current face bbox is compared with **all previously tracked bboxes**
    
- If overlap > 0.5 → **same face**
    

#### b. If match found

```python
tracked_faces[fid]["bbox"] = bbox
tracked_faces[fid]["last_seen"] = now
return fid, False
```

- Reuse existing `face_uid`
    
- Update position
    
- Update last_seen timestamp
    

✅ This prevents double counting.

---

### 3. New Face Assignment

If no IoU match is found:

```python
face_counter += 1
tracked_faces[face_counter] = {
    "bbox": bbox,
    "last_seen": now
}
return face_counter, True
```

- A **new `face_uid` is created**
    
- This represents a **new visitor**
    

---

### 4. Database Insertion (Only Once Per Visitor)

```python
if is_new:
    insert_to_db(face_id, gender, age, confidence)
```

Critical point:

- **Data is inserted only when a face is first seen**
    
- Repeated frames of the same person do NOT create new records
    

This ensures:

- Clean analytics
    
- Accurate footfall
    
- Correct KPI computation
    

---

### 5. Face Expiry (`cleanup_faces`)

```python
if now - tracked_faces[fid]["last_seen"] > FACE_TIMEOUT:
    del tracked_faces[fid]
```

- If a face disappears for more than **10 seconds**
    
- It is removed from memory
    
- A future reappearance will be treated as a **new visit**
    

This aligns with:

- Session-based retail analytics
    
- Privacy-safe design
    

---

## Why This Design Is Correct for Retail Analytics

### Advantages

- Lightweight (no embeddings, no heavy models)
    
- Real-time friendly
    
- Prevents duplicate counting
    
- Easy to explain and debug
    
- Ethically safer than biometric tracking
    

### Limitations (you should mention this)

- Cannot re-identify faces across long gaps
    
- Sensitive to fast motion or camera angle changes
    
- Designed for **presence tracking**, not identity recognition
    

Mentioning limitations **increases credibility**.

---

## One-Paragraph Methodology Description (Report-Ready)

> The system assigns a temporary `face_uid` to each detected visitor using an Intersection-over-Union (IoU)–based tracking mechanism. For every detected face, the bounding box is compared against previously tracked faces. If the overlap exceeds a predefined threshold, the same identifier is reused and the timestamp is updated, preventing duplicate counting. New identifiers are generated only when no sufficient overlap is detected. Faces that are not observed for a fixed timeout period are removed, enabling session-based tracking while preserving privacy.

---

## One-Line Viva Answer (Memorize This)

> “face_uid is a temporary tracking identifier generated using IoU-based bounding box matching to prevent duplicate counting and enable session-level analytics without performing biometric identification.”

---

If you want next, I can:

- Explain **why IoU was chosen instead of embeddings**
    
- Convert this into a **flow diagram explanation**
    
- Help you answer **‘What if two people cross paths?’**
    
- Write the **limitations & future work section**
    

Just say the word.