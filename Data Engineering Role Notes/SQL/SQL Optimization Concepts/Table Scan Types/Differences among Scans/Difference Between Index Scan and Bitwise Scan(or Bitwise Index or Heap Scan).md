Yes. **Index Scan also uses tuple identifiers (TIDs)**. The difference is **how those TIDs are used after they are found**.

---

# 1. What an Index Scan Does

Index scan process:

```text
index → find matching key
      → get TID
      → immediately fetch row from heap
```

Example query:

```sql
SELECT * FROM users WHERE age = 30;
```

Index entries might look like:

```
age = 30 → (12,3)
age = 30 → (12,8)
age = 30 → (18,2)
```

Execution:

```
read index
 → (12,3) → fetch block 12 row 3
 → (12,8) → fetch block 12 row 8
 → (18,2) → fetch block 18 row 2
```

Each time a TID is found, PostgreSQL **immediately accesses the heap**.

---

# 2. Index Scan Flow

Execution pipeline:

```
Index Scan
   ↓
find index entry
   ↓
get TID (block, row)
   ↓
fetch row from heap
```

Typical plan:

```
Index Scan using users_age_idx on users
  Index Cond: (age = 30)
```

---

# 3. Problem With Index Scan

When many rows match, the access pattern becomes:

```
index → block 12
index → block 18
index → block 12
index → block 21
index → block 18
```

This causes:

```
random disk access
```

Which is slow.

---

# 4. Bitmap Scan Strategy

Instead of fetching rows immediately, PostgreSQL first collects **all TIDs**.

Pipeline:

```
Bitmap Index Scan
       ↓
collect all TIDs
       ↓
Bitmap Heap Scan
       ↓
read blocks sequentially
```

Example:

```
index → collect (12,3)
index → collect (12,8)
index → collect (18,2)
index → collect (21,5)
```

Bitmap:

```
block 12 → rows 3,8
block 18 → row 2
block 21 → row 5
```

Then heap scan reads blocks in order.

---

# 5. Core Difference

|Feature|Index Scan|Bitmap Scan|
|---|---|---|
|TIDs used|yes|yes|
|Row fetching|immediate|delayed|
|Block access|random|grouped|
|Best for|few rows|many rows|

---

# 6. Mental Model

Index Scan:

```
index → row
index → row
index → row
```

Bitmap Scan:

```
index → collect row locations
        ↓
heap → read blocks once
```