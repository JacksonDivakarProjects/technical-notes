with cte as (
SELECT u.name as "Organizer Name", r."userId" as "userId", e."createdAt" as "createdTime" FROM "User" AS u JOIN "Event" AS e ON u.id = e."createdBy"
   JOIN "Registration" as r ON r."eventId" = e.id 
  WHERE u.id = '7193e61c-4ef9-4df2-a755-9535bf5c6e6e' AND r."eventId" = '10dfec11-9b5f-468e-8c6c-1d4888438db6'
  )

select *, count(*) over(order by "createdTime" rows between unbounded preceding and current row) as cummulative_count from cte