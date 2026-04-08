WITH cte AS (
  SELECT DISTINCT e.title, e.type
  FROM "User" AS u
  JOIN "Event" AS e ON u.id = e."createdBy"
  WHERE u.id='7193e61c-4ef9-4df2-a755-9535bf5c6e6e'
)
SELECT 
  COUNT(title) AS total_events,
  COUNT(CASE WHEN type = 'PRIVATE' THEN 1 END) AS private_count,
  COUNT(CASE WHEN type = 'PUBLIC' THEN 1 END) AS public_count
FROM cte