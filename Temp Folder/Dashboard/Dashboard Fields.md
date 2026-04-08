Here’s a **dashboard blueprint** tailored for your event management module. It focuses only on the **dashboard KPIs and plots** so you can implement it cleanly:

---

## 🎯 Dashboard KPIs (Top-Level Cards)

Place these as summary metrics at the top of the dashboard:

- **Total Events** (count of events created)
- **Upcoming Events** (events with future dates)
- **Total Registrations** (sum of all registrations)
- **Attendance Rate** (% of registrations marked PRESENT)
- **Capacity Utilization** (average % of seats filled across events)
- **Repeat Attendees** (number of users registered for >1 event)

---

## 📊 Dashboard Plots & Visualizations

Below the KPI cards, use charts for deeper insights:

1. **Registrations Over Time**
    
    - **Line chart** showing daily/weekly registrations.
    - Helps track growth and engagement trends.
2. **Attendance vs. Registrations**
    
    - **Stacked bar chart** per event.
    - Shows registered vs. attended vs. absent.
3. **Event Capacity Utilization**
    
    - **Donut chart / gauge chart**.
    - Quick view of how full each event is compared to capacity.
4. **Top Events by Popularity**
    
    - **Horizontal bar chart** ranking events by number of registrations.
    - Easy to spot high-demand events.
5. **User Engagement**
    
    - **Pie chart** showing new vs. returning attendees.
    - Useful for understanding loyalty.
6. **Revenue (if applicable)**
    
    - **Area chart** showing ticket sales over time.
    - Optional if events are monetized.

---

## 🚀 Suggested Layout

- **Row 1 (Cards):** Total Events | Upcoming Events | Registrations | Attendance Rate | Capacity Utilization | Repeat Attendees
- **Row 2 (Charts):** Line chart (registrations trend) + Stacked bar chart (attendance vs. registrations)
- **Row 3 (Charts):** Donut chart (capacity utilization) + Horizontal bar chart (top events)
- **Row 4 (Optional):** Pie chart (user engagement) + Area chart (revenue trend)

---

👉 This setup gives organizers a **quick snapshot at the top** and **deep insights below**. Would you like me to also draft the **Prisma queries** that feed each of these dashboard KPIs and plots, so you can wire them directly into your backend?