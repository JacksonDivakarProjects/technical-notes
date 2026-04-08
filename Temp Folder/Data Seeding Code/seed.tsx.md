import { PrismaClient, Role, EventType, AttendanceStatus } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // Create one organizer
  const organizer = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: Role.ORGANIZER,   // ✅ matches schema
    },
  });

  // Create multiple users
  const users = await Promise.all(
    Array.from({ length: 30 }).map(() =>
      prisma.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          role: Role.USER,   // ✅ matches schema
        },
      })
    )
  );

  // Create multiple events
  const events = await Promise.all(
    Array.from({ length: 10 }).map(() =>
      prisma.event.create({
        data: {
          title: faker.company.catchPhrase(),
          description: faker.lorem.sentence(),
          type: faker.helpers.arrayElement([EventType.PUBLIC, EventType.PRIVATE]), // ✅ matches schema
          privateCode: faker.string.alphanumeric(6),
          createdBy: organizer.id,
        },
      })
    )
  );

  // Create registrations (each user registers for random events)
  await Promise.all(
    users.map((user) =>
      prisma.registration.create({
        data: {
          userId: user.id,
          eventId: faker.helpers.arrayElement(events).id,
          attendanceStatus: faker.helpers.arrayElement([
            AttendanceStatus.NOT_MARKED,
            AttendanceStatus.PRESENT,
            AttendanceStatus.ABSENT,   // ✅ matches schema
          ]),
          markedAt: faker.datatype.boolean() ? faker.date.recent() : null,
          markedBy: faker.datatype.boolean() ? organizer.id : null,
        },
      })
    )
  );
}

main()
  .then(() => console.log("Database seeded successfully with faker data!"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
