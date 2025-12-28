# Typical Flow: Bitmap Index Scan & Bitmap Heap Scan

You're exactly right—the **standard process** in PostgreSQL works like this:

1. **Bitmap Index Scan**:
    
    - The database scans one or more indexes to find which rows match the query condition(s).
        
    - It doesn't fetch these rows directly. Instead, it builds an in-memory _bitmap_—like a checklist—where each bit points to a row location that matches.
        
    - If your query uses multiple indexes (for `AND`/`OR` conditions), Postgres can combine these bitmaps with fast bitwise operations (AND/OR) before moving on.[pganalyze+2](https://pganalyze.com/docs/explain/scan-nodes/bitmap-index-scan)​
        
2. **Bitmap Heap Scan**:
    
    - Receives the bitmap produced above.
        
    - Reads table pages marked by the bitmap as containing at least one matching row.
        
    - Fetches all matching rows from each page in one go, minimizing disk reads.
        
    - If needed (when there's a _lossy_ bitmap), it may recheck conditions row by row for some pages, but still with far fewer random disk accesses than a normal index scan.[pgmustard+3](https://www.pgmustard.com/docs/explain/bitmap-heap-scan)​
        

## Diagram Representation

- **Bitmap Index Scan:** _Collect pointers as a bitmap (not actual rows)_
    
- **Bitmap Heap Scan:** _Uses bitmap to fetch actual data efficiently_
    

> **In summary:**  
> The Bitmap Index Scan collects row locations in a fast, bitwise way using the index, and the Bitmap Heap Scan follows up by retrieving those rows efficiently from the table.[kenwagatsuma+2](https://kenwagatsuma.com/blog/postgresql-bitmap-index-scan-and-bitmap-heap-scan)​

This two-step approach is particularly efficient for queries retrieving many—but not all—rows, and when using multiple conditions across indexes. All main logic for these scan types is covered in this flow.

Would you like to see a sample EXPLAIN plan or a toy example to help cement this?

---

**References:**  
[https://pganalyze.com/docs/explain/scan-nodes/bitmap-index-scan](https://pganalyze.com/docs/explain/scan-nodes/bitmap-index-scan)[pganalyze](https://pganalyze.com/docs/explain/scan-nodes/bitmap-index-scan)​  
[https://www.pgmustard.com/docs/explain/bitmap-heap-scan](https://www.pgmustard.com/docs/explain/bitmap-heap-scan)[pgmustard](https://www.pgmustard.com/docs/explain/bitmap-heap-scan)​  
[https://kenwagatsuma.com/blog/postgresql-bitmap-index-scan-and-bitmap-heap-scan](https://kenwagatsuma.com/blog/postgresql-bitmap-index-scan-and-bitmap-heap-scan)[kenwagatsuma](https://kenwagatsuma.com/blog/postgresql-bitmap-index-scan-and-bitmap-heap-scan)​  
[https://www.percona.com/blog/one-index-three-different-postgresql-scan-types-bitmap-index-and-index-only/](https://www.percona.com/blog/one-index-three-different-postgresql-scan-types-bitmap-index-and-index-only/)[percona](https://www.percona.com/blog/one-index-three-different-postgresql-scan-types-bitmap-index-and-index-only/)​

1. [https://pganalyze.com/docs/explain/scan-nodes/bitmap-index-scan](https://pganalyze.com/docs/explain/scan-nodes/bitmap-index-scan)
2. [https://stackoverflow.com/questions/6592626/what-is-a-bitmap-heap-scan-in-a-query-plan](https://stackoverflow.com/questions/6592626/what-is-a-bitmap-heap-scan-in-a-query-plan)
3. [https://www.yugabyte.com/blog/bitmap-scans-on-distributed-postgresql/](https://www.yugabyte.com/blog/bitmap-scans-on-distributed-postgresql/)
4. [https://www.pgmustard.com/docs/explain/bitmap-heap-scan](https://www.pgmustard.com/docs/explain/bitmap-heap-scan)
5. [https://kenwagatsuma.com/blog/postgresql-bitmap-index-scan-and-bitmap-heap-scan](https://kenwagatsuma.com/blog/postgresql-bitmap-index-scan-and-bitmap-heap-scan)
6. [https://www.percona.com/blog/one-index-three-different-postgresql-scan-types-bitmap-index-and-index-only/](https://www.percona.com/blog/one-index-three-different-postgresql-scan-types-bitmap-index-and-index-only/)
7. [https://www.postgresql.org/docs/8.1/performance-tips.html](https://www.postgresql.org/docs/8.1/performance-tips.html)
8. [https://airbyte.com/blog/postgresql-query-plans-for-reading-tables](https://airbyte.com/blog/postgresql-query-plans-for-reading-tables)