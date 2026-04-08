Let's solve each question step by step using SQL. I'll assume a standard SQL dialect (e.g., PostgreSQL, MySQL) and provide the queries with explanations.

We'll use the following table aliases for clarity:
- c for Customers
- o for Orders
- oi for Order_Items
- p for Products

Let's also create a calculated column for the order total in Order_Items by multiplying quantity and price (joined from Products).

---

### **Question 1: Find the total amount spent by each customer.**

We need to join Orders → Order_Items → Products to compute the total spent per customer.

**SQL Query:**
```sql
SELECT
    c.customer_name,
    SUM(oi.quantity * p.price) AS total_spent
FROM
    Customers c
JOIN
    Orders o ON c.customer_id = o.customer_id
JOIN
    Order_Items oi ON o.order_id = oi.order_id
JOIN
    Products p ON oi.product_id = p.product_id
GROUP BY
    c.customer_name
ORDER BY
    total_spent DESC;
```

**Expected Output:**
| customer_name | total_spent |
|---------------|-------------|
| John          | 2700        |
| Emma          | 1050        |
| Rahul         | 2000        |
| Sara          | 0           |  -- Sara has no orders

*(Let's compute the values for clarity)*

- **John (ID 1):**
  - Order 101: 2 Laptops (2*1000=2000), 1 Mouse (1*50=50) → 2050
  - Order 103: 5 Chairs (5*200=1000) → 1000
  - Total: 2050 + 1000 = 3050
    Wait, but Laptop and Mouse are Electronics, Chair is Furniture.
    But the calculation above includes all products.
    Let's recalculate carefully:

Order 101:
- Laptop (product 10): 2 × 1000 = 2000
- Mouse (product 11): 1 × 50 = 50
→ Total for order 101: 2050

Order 103:
- Chair (product 12): 5 × 200 = 1000

John's total: 2050 + 1000 = **3050**

But wait, in the Orders table, order 101 is for John, order 103 is also for John.

Emma (ID 2):
- Order 102:
  - Laptop (product 10): 1 × 1000 = 1000

Rahul (ID 3):
- Order 104:
  - Laptop (product 10): 2 × 1000 = 2000

Sara (ID 4): No orders.

So correct totals:
- John: 2050 (order 101) + 1000 (order 103) = 3050
- Emma: 1000
- Rahul: 2000
- Sara: 0

But in the question, order 103 is for John and is 5 chairs (product 12), so yes.

But let's check order 103:
Order 103: customer_id 1 (John), product_id 12 (Chair), quantity 5

So the correct totals:
- John: (2×1000 + 1×50) + (5×200) = (2000 + 50) + 1000 = 2050 + 1000 = **3050**
- Emma: 1×1000 = **1000**
- Rahul: 2×1000 = **2000**
- Sara: 0

But in my initial calculation I had 2700 for John, which was wrong. Let's correct.

So the correct SQL should give:
| customer_name | total_spent |
|---------------|-------------|
| John          | 3050        |
| Emma          | 1000        |
| Rahul         | 2000        |
| Sara          | 0           |

But let's proceed with the query as above, it will give the correct result.

---

### **Question 2: Find customers who bought Electronics but never bought Furniture.**

We need to find customers who have at least one order for an Electronics product, and have NO orders for a Furniture product.

**Steps:**
1. Find customers who bought Electronics.
2. Find customers who bought Furniture.
3. Subtract: customers in (1) but NOT in (2).

**SQL Query:**
```sql
SELECT DISTINCT c.customer_name
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Order_Items oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
WHERE p.category = 'Electronics'
EXCEPT
SELECT DISTINCT c.customer_name
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Order_Items oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
WHERE p.category = 'Furniture';
```

**Explanation:**
- The first part gets all customers who bought at least one Electronics product.
- The EXCEPT removes those who also bought at least one Furniture product.

Let's see who bought Furniture:
- Only John bought product 12 (Chair), which is Furniture.

So:
- John bought both Electronics and Furniture → should be excluded.
- Emma and Rahul bought only Electronics.

So the result should be:
| customer_name |
|---------------|
| Emma          |
| Rahul         |

---

### **Question 3: Find the top 2 customers who spent the highest amount.**

We use the same total spent calculation as in Question 1, then limit to 2.

**SQL Query:**
```sql
SELECT
    c.customer_name,
    SUM(oi.quantity * p.price) AS total_spent
FROM
    Customers c
JOIN
    Orders o ON c.customer_id = o.customer_id
JOIN
    Order_Items oi ON o.order_id = oi.order_id
JOIN
    Products p ON oi.product_id = p.product_id
GROUP BY
    c.customer_name
ORDER BY
    total_spent DESC
LIMIT 2;
```

**Expected Output:**
| customer_name | total_spent |
|---------------|-------------|
| John          | 3050        |
| Rahul         | 2000        |

(Emma: 1000, Sara: 0)

---

### **Question 4: Find customers who bought the same product more than once across different orders.**

We want customers who have purchased the same product_id in more than one order.

**Approach:**
- For each customer and product, count the number of distinct orders in which they bought that product.
- Only keep those where the count is greater than 1.

**SQL Query:**
```sql
SELECT
    c.customer_name,
    p.product_name,
    COUNT(DISTINCT o.order_id) AS purchase_count
FROM
    Customers c
JOIN
    Orders o ON c.customer_id = o.customer_id
JOIN
    Order_Items oi ON o.order_id = oi.order_id
JOIN
    Products p ON oi.product_id = p.product_id
GROUP BY
    c.customer_name,
    p.product_name
HAVING
    COUNT(DISTINCT o.order_id) > 1
ORDER BY
    customer_name, product_name;
```

**Let's analyze the data:**

- John bought product 10 (Laptop) in orders 101 and 103? Wait:
    - Order 101: John, product 10
    - Order 103: John, product 12 (Chair)
    - Order 104: Rahul, product 10

But let's check:
Order 101: John, product 10 (Laptop), quantity 2
Order 103: John, product 12 (Chair), quantity 5
Order 104: Rahul, product 10 (Laptop), quantity 2

So John bought product 10 only in order 101.
Emma bought product 10 in order 102.
Rahul bought product 10 in order 104.

But John bought product 10 only once, product 12 only once.

But let's check if any customer bought the same product in more than one order.

Let's list all (customer, product, order):

- John: order 101, product 10
- John: order 101, product 11
- John: order 103, product 12
- Emma: order 102, product 10
- Rahul: order 104, product 10

So, product 10:
- Emma: once
- John: once
- Rahul: once

No one bought the same product in more than one order.

Wait, but in order 101, John bought both product 10 and 11, but that's in the same order.

The question says "more than once across different orders".

So unless a customer bought the same product in two different orders, it doesn't count.

Let's check for each customer and product:

- John: product 10 (order 101), product 11 (order 101), product 12 (order 103) → all in different orders, but only once per product.
- Emma: product 10 (order 102) → only once
- Rahul: product 10 (order 104) → only once

So, in this dataset, **no customer bought the same product more than once across different orders**.

But let's double-check for product 10:

Who bought product 10?
- John (order 101)
- Emma (order 102)
- Rahul (order 104)

Each only once.

So the result should be empty.

But let's imagine if John bought product 10 in two orders, then he would appear.

So, the query is correct, and for this dataset, the result is empty.

But for completeness, here's the expected output (which will be empty):

| customer_name | product_name | purchase_count |
|---------------|-------------|---------------|
| (none)        |             |               |

But if you want to see what it would look like if there was a match, the query is correct.

---

## **Summary of Queries and Expected Results**

---

### **Question 1**

```sql
SELECT
    c.customer_name,
    SUM(oi.quantity * p.price) AS total_spent
FROM
    Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Order_Items oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
GROUP BY c.customer_name
ORDER BY total_spent DESC;
```

**Expected Output:**
| customer_name | total_spent |
|---------------|-------------|
| John          | 3050        |
| Rahul         | 2000        |
| Emma          | 1000        |
| Sara          | 0           |

---

### **Question 2**

```sql
SELECT DISTINCT c.customer_name
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Order_Items oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
WHERE p.category = 'Electronics'
EXCEPT
SELECT DISTINCT c.customer_name
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Order_Items oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
WHERE p.category = 'Furniture';
```

**Expected Output:**
| customer_name |
|---------------|
| Emma          |
| Rahul         |

---

### **Question 3**

```sql
SELECT
    c.customer_name,
    SUM(oi.quantity * p.price) AS total_spent
FROM
    Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Order_Items oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
GROUP BY c.customer_name
ORDER BY total_spent DESC
LIMIT 2;
```

**Expected Output:**
| customer_name | total_spent |
|---------------|-------------|
| John          | 3050        |
| Rahul         | 2000        |

---

### **Question 4**

```sql
SELECT
    c.customer_name,
    p.product_name,
    COUNT(DISTINCT o.order_id) AS purchase_count
FROM
    Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Order_Items oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
GROUP BY
    c.customer_name,
    p.product_name
HAVING
    COUNT(DISTINCT o.order_id) > 1
ORDER BY
    customer_name, product_name;
```

**Expected Output (for this dataset):**
| customer_name | product_name | purchase_count |
|---------------|-------------|---------------|
| (empty)       |             |               |

No customers bought the same product more than once across different orders in this dataset.

---

Let me know if you'd like explanations for any of the queries!