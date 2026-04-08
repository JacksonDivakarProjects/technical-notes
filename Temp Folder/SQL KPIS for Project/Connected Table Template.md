SELECT * FROM "User" AS u JOIN "Event" AS e ON u.id = e."createdBy"
   join "Registration" as r on r."eventId"=e.id
  WHERE u.id='7193e61c-4ef9-4df2-a755-9535bf5c6e6e'