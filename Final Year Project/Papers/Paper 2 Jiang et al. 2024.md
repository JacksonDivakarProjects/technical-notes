

## 2. **System Architecture (High-Level)**

SiriusBI introduces an **end-to-end ChatBI system** with the following components:

1. **Natural Language Interface**  
    Users ask questions in plain English.
    
2. **LLM-based Query Understanding**  
    The LLM:
    
    - Interprets user intent
        
    - Generates SQL queries dynamically
        
3. **Database Interaction Layer**
    
    - Executes SQL on enterprise databases
        
    - Retrieves structured KPI data
        
4. **Insight & Explanation Generator**
    
    - Converts query results into textual insights
        
    - Explains trends and anomalies


Jiang et al. (2024) introduced SiriusBI, a large language model–powered business intelligence system that enables users to query enterprise databases using natural language and receive contextual analytical insights. While SiriusBI demonstrates the effectiveness of LLMs in interactive business analytics, it primarily operates on static structured enterprise data and does not integrate real-time perception-based data streams or continuous KPI updates. In contrast, the proposed system incorporates live demographic and footfall analytics derived from CCTV data and utilizes an LLM-based recommendation engine to support time-aware retail decision-making.


