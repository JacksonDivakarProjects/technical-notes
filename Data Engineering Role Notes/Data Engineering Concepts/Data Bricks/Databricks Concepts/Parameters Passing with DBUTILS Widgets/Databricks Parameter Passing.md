## Databricks Jobs — `dbutils.widgets` and `dbutils.jobs.taskValues` (Revision Guide)

---

## 1. Core Definitions

### `dbutils.widgets`

Input interface used to pass **external parameters** into a notebook.

### `dbutils.jobs.taskValues`

Mechanism used to pass **small data between tasks** inside a multi-task job.

---

## 2. Minimal Syntax

### Widgets

```python
dbutils.widgets.text("mode", "full")
mode = dbutils.widgets.get("mode")
```

### taskValues

```python
# set (upstream)
dbutils.jobs.taskValues.set("row_count", count)

# get (downstream)
count = dbutils.jobs.taskValues.get(
    taskKey="task_a",
    key="row_count",
    debugValue=0
)
```

---

## 3. Execution Flow

```
Job Parameters → Widgets → Notebook Logic → taskValues.set()
                                             ↓
                                      Next Task → taskValues.get()
```

---

## 4. Key Concepts

### What is `taskKey`?

- Name of the **upstream task**
    
- Must match job configuration exactly
    

### What is `key`?

- Name of the **value stored**
    
- Defined during `set()`
    

### Mapping

```
taskKey = source (which task)
key     = variable (what value)
```

---

## 5. `debugValue`

### Definition

Fallback value used when:

- Notebook runs **outside a job**
    
- No upstream task context exists
    

### Behavior

- Job run → real value returned
    
- Manual run → `debugValue` returned
    

### Example

```python
count = dbutils.jobs.taskValues.get(
    taskKey="task_a",
    key="row_count",
    debugValue=0
)
```

---

## 6. Widget Value Source Priority

1. Job parameter
    
2. Default defined in code
    
3. Manual UI input
    

---

## 7. Important Behaviors

### Widgets

- Always return **string**
    
- Must be defined before use
    
- Exist at **start of execution**
    
- Do not pass data between tasks
    

### taskValues

- Work only in **Jobs**
    
- Store **small serializable values**
    
- Used during execution
    
- Not for large data
    

---

## 8. Combined Pattern

```python
# define input
dbutils.widgets.text("mode", "full")
mode = dbutils.widgets.get("mode")

# process
count = spark.table("data").count()

# pass to next task
dbutils.jobs.taskValues.set("row_count", count)
```

Downstream:

```python
count = dbutils.jobs.taskValues.get(
    taskKey="task_a",
    key="row_count",
    debugValue=0
)
```

---

## 9. What the Code Does

```python
mode = dbutils.widgets.get("mode")
count = spark.table("data").count()
dbutils.jobs.taskValues.set("row_count", count)
```

- Reads external parameter (`mode`)
    
- Computes row count
    
- Stores result for next task
    

### Does NOT:

- Automatically use `mode`
    
- Persist data externally
    
- Trigger next task logic
    

---

## 10. Key Differences

|Aspect|Widgets|taskValues|
|---|---|---|
|Purpose|Input|Task communication|
|Direction|External → Notebook|Task → Task|
|Data Type|String|Small serializable|
|Scope|Single notebook|Multi-task job|
|Timing|Before execution|During execution|

---

## 11. Common Patterns

### Control Execution

```python
mode = dbutils.widgets.get("mode")
if mode == "full":
    run_full()
```

### Pass Metadata

```python
dbutils.jobs.taskValues.set("output_path", "/mnt/output")
```

### Conditional Pipeline

```python
status = dbutils.jobs.taskValues.get(
    taskKey="validation",
    key="is_valid",
    debugValue="false"
)

if status == "true":
    run_pipeline()
```

---

## 12. Failure Scenarios

- Widget not defined → error
    
- Missing `debugValue` → failure in manual run
    
- Wrong `taskKey` → cannot retrieve value
    
- Wrong `key` → value not found
    
- Passing large data → unsupported
    

---

## 13. Constraints

### Widgets

- String-only → requires casting
    

```python
limit = int(dbutils.widgets.get("limit"))
```

### taskValues

- Avoid large objects (DataFrames, big JSON)
    
- Keys are overwritten silently if reused
    

---

## 14. Usage Boundary

Use:

- Widgets → configs (mode, limits, paths)
    
- taskValues → results (counts, flags, paths)
    

Avoid:

- Widgets for inter-task communication
    
- taskValues for heavy data transfer
    

---

## 15. Mental Model

```
Widgets   = Input API
Notebook  = Processing Unit
taskValues = Internal Message Bus
```

---

## 16. Quick Q&A

**Q: Is widget value set automatically?**  
No. It must come from job config, default, or UI.

**Q: Does `taskValues` work in notebooks directly?**  
No. Only in Jobs. Uses `debugValue` otherwise.

**Q: Can widgets pass values to another task?**  
No.

**Q: Can taskValues store large data?**  
No. Only small metadata.

**Q: Is `mode` used automatically in logic?**  
No. Must be explicitly used.

**Q: What happens if `taskKey` is wrong?**  
Value cannot be retrieved.

---

## 17. Minimal End-to-End

Task A:

```python
count = spark.table("data").count()
dbutils.jobs.taskValues.set("row_count", count)
```

Task B:

```python
count = dbutils.jobs.taskValues.get(
    taskKey="task_a",
    key="row_count",
    debugValue=0
)
```