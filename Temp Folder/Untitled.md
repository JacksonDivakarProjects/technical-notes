
## Medallion Architecture in Databricks: Pipeline Overview

### 1. High-Level Orchestration
- **subscription_analytics_daily_etl** acts as the parent orchestrator, managing dependencies:
  - Data Ingestion → Data Transformation → Data Modelling

---

### 2. Layered Pipeline Structure

| Layer | Job/Subjob | Functionality |
|-------|------------|--------------|
| **Bronze** | `subscription_bronze_ingestion` | Raw data ingestion into the lakehouse (minimal transformation) |
| **Silver** | `subscription_silver_layer` | - **Transformation Phase**: Parallel execution of:<br>  - `load_country_master`<br>  - `transformation_opportunity`<br>  - `transformation_customer`<br>  - `transformation_employee`<br>  - `transformation_fx_rate`<br>  - `transformation_product`<br>  <br>- **Business Logic Phase**: Calculation of core metrics |
| **Gold** | `subscription_gold_modelling` | - `nb_modelling_gold`: Star schema creation<br>- `nb_kpi_gold`: KPI/reporting generation |

---

### 3. Parallel Processing

- **Silver Layer** leverages Databricks' ability to run multiple notebooks/subjobs in parallel.
  - Reduces overall pipeline runtime by executing independent transformation tasks concurrently.

---