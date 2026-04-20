Here is a comprehensive guide to the most effective prompting frameworks, ranging from foundational structures to advanced reasoning architectures.

---

# The Ultimate Guide to Prompting Frameworks

## Why Use a Framework?
A prompting framework transforms vague instructions into precise, machine-interpretable logic. By structuring your input, you reduce ambiguity, enforce logical constraints, and significantly improve the accuracy, relevance, and format of LLM outputs.

---

## Part 1: Foundational Frameworks (For Clarity & Structure)

### 1. RTF (Role, Task, Format)
**Best for:** Quick, clear instructions where the persona and output style are critical.

- **Role:** Assign a specific persona or expertise (e.g., "Act as a Senior Financial Analyst").
- **Task:** Describe the specific action to perform (e.g., "Summarize the Q3 earnings report").
- **Format:** Define the exact output structure (e.g., "Use bullet points with a 'Key Takeaway' header").

**Example Prompt:**
> **Role:** Act as a technical editor for API documentation.
> **Task:** Review the following API error message and explain it to a junior developer.
> **Format:** Provide a two-column table: [Error Code] | [Plain English Explanation] | [Fix Suggestion].

### 2. BAB (Before, After, Bridge)
**Best for:** Change management, process improvement, or editing tasks.

- **Before:** Describe the current state or input text.
- **After:** Describe the desired future state or output.
- **Bridge:** Specify the actions, changes, or steps required to get from Before to After.

**Example Prompt:**
> **Before:** "The meeting was good. We talked about sales. John was late."
> **After:** "The Q3 sales strategy meeting commenced at 10:05 AM, with John joining at 10:12 AM. The team aligned on increasing the regional target by 15%."
> **Bridge:** Rewrite the 'Before' sentence to match the 'After' style by adding specific metrics, fixing tense, and reordering events chronologically.

### 3. TAG (Task, Action, Goal)
**Best for:** Defining project scopes or sub-tasks for an agent.

- **Task:** The specific job to be done (the "what").
- **Action:** The methodology or process to use (the "how").
- **Goal:** The intended outcome or success criteria (the "why").

**Example Prompt:**
> **Task:** Identify bottlenecks in our customer support ticket workflow.
> **Action:** Analyze the last 100 resolved tickets and cluster them by response time and department handoffs.
> **Goal:** Produce a ranked list of the top 3 bottlenecks and one automation opportunity for each.

---

## Part 2: Process-Oriented Frameworks (For Complex Tasks)

### 4. RISE (Role, Input, Steps, Expectation)
**Best for:** Analytical, multi-step problems where reasoning transparency is key.

- **Role:** Expertise context.
- **Input:** The raw data or question.
- **Steps:** Explicit numbered sub-tasks the LLM must follow.
- **Expectation:** The format and criteria for success.

**Example Prompt:**
> **Role:** Act as a data quality analyst.
> **Input:** `[Raw CSV snippet with missing values]`
> **Steps:** 1) Identify columns with >20% nulls. 2) Propose two imputation strategies per column. 3) Flag any illogical outliers.
> **Expectation:** Output a JSON object with keys: `columns_null`, `imputation_map`, `outliers_flag`.

### 5. CARE (Context, Action, Result, Example)
**Best for:** Few-shot learning and tasks requiring contextual nuance.

- **Context:** Background information, constraints, or environment.
- **Action:** The specific request.
- **Result:** The desired output characteristics.
- **Example:** A concrete illustration of the input/output pattern.

**Example Prompt:**
> **Context:** You are an email auto-responder for a SaaS company. Our support tier 1 can only resolve billing and login issues.
> **Action:** Classify the following user email and draft a response.
> **Result:** Output must be 'Actionable' (if Tier 1 can solve) or 'Escalate' (if not).
> **Example:** User: "My invoice is wrong." -> Actionable. Response: "Please verify your seat count in Settings."
> **User Email:** "The API key for my CI/CD pipeline keeps expiring every 24 hours."

---

## Part 3: Advanced Reasoning Frameworks (For Logic & Problem-Solving)

### 6. Plan-and-Solve (Advanced)
**Best for:** Complex, multi-step reasoning problems (math, logic, strategy).

**How it works:** Forces the LLM to generate a complete plan *before* attempting any calculations or final answer.

**Prompt Template:**
> "First, create a step-by-step plan to solve this problem. Label each step 'Plan 1', 'Plan 2'. After writing the full plan, then execute it step by step. Finally, provide the answer."

**Example:**
> *User:* "If a bat and a ball cost $1.10 and the bat costs $1.00 more than the ball, how much is the ball?"
> *Plan:* 1) Let ball = x. 2) Bat = x + 1.00. 3) Equation: x + (x+1.00) = 1.10. 4) Solve for x.
> *Execute:* ... (LLM avoids the intuitive but wrong "$0.10" answer).

### 7. CoT-SC (Chain-of-Thought with Self-Consistency)
**Best for:** High-stakes reasoning where a single chain might be flawed.

**How it works:** Run multiple independent Chain-of-Thought (CoT) paths (e.g., 3-5 times with temperature >0.5) and take the majority answer.

**Prompt Template (for each path):**
> "Let's think step by step. [Problem]. After your reasoning, output the final answer as 'Answer: [X]'."

**Execution:** You aggregate the answers from the multiple runs. If 3/5 runs say "42", you output 42. This reduces random reasoning errors.

### 8. ReAct (Reasoning + Acting)
**Best for:** Tasks requiring external tools (search, code execution, APIs) or dynamic information gathering.

**How it works:** Interleaves **Thought** (reasoning) and **Action** (tool use) in a loop until a **Final Answer** is reached.

**Prompt Template:**
```
You have access to tools: [Search(query)], [Calculate(expression)].

Question: [User Query]

Proceed as:
Thought 1: [Reason about what to do]
Action 1: [Tool call, e.g., Search("current CEO of Nvidia")]
Observation 1: [Tool output]
Thought 2: [Reason on observation]
Action 2: [Next tool or Final Answer]
```

**Example Loop:**
- **Thought 1:** I need the current weather in Tokyo.
- **Action 1:** `Search("Tokyo weather April 16 2026")`
- **Observation 1:** "Sunny, 22°C, humidity 45%"
- **Thought 2:** I have the data. I can answer.
- **Final Answer:** "Tokyo will be sunny with a high of 22°C."

### 9. R-E-F (Reflect Framework: Response, Evaluate, Fix)
**Best for:** Iterative refinement, debugging code, or improving creative output.

**How it works:** A three-stage feedback loop.

- **Response:** Generate an initial answer.
- **Evaluate:** Critically assess the response against criteria (accuracy, style, safety).
- **Fix:** Produce a revised version based on the evaluation.

**Prompt Template (Single prompt for multi-turn or meta-cognition):**
> **Step 1 (Response):** Write a Python function to reverse a string.
> **Step 2 (Evaluate):** Review your function. Check for edge cases (empty string, unicode, None input). List any bugs or inefficiencies.
> **Step 3 (Fix):** Rewrite the function to address the issues found in Step 2.

**Advanced Use (Multi-turn):**
> *Turn 1 (User):* "Generate a marketing headline." (LLM gives Response)
> *Turn 2 (User):* "Now act as a focus group. Evaluate that headline for clarity and emotional impact. Score it 1-10." (LLM gives Evaluate)
> *Turn 3 (User):* "Based on your evaluation, Fix the headline to score a 9."

---

## Summary Table: When to Use Which

| Framework | Best For | Key Strength | Output Style |
| :--- | :--- | :--- | :--- |
| **RTF** | Simple, role-based tasks | Clarity & persona adherence | Structured (table/list) |
| **BAB** | Editing, transformation | Delta/change focus | Modified text |
| **TAG** | Task decomposition | Actionability | Ranked list / plan |
| **RISE** | Data analysis, logic | Transparency of steps | JSON / structured |
| **CARE** | Classification, few-shot | Pattern matching | Label + output |
| **Plan-Solve** | Math, logic puzzles | Reduces intuitive errors | Plan then answer |
| **CoT-SC** | High-accuracy reasoning | Majority voting | Single answer |
| **ReAct** | Tool use, research | Dynamic info gathering | Thought + Action loop |
| **R-E-F** | Debugging, writing | Iterative improvement | Response → Fix |

## Pro Tip: Hybrid Prompting
Combine frameworks for maximum power. Example:
**RTF (Role/Task/Format)** to set the stage + **R-E-F** to enforce quality.
> *Role:* Senior Code Reviewer. *Task:* Debug this SQL query. *Format:* Use R-E-F: Response (original analysis), Evaluate (find hidden bugs), Fix (corrected query).