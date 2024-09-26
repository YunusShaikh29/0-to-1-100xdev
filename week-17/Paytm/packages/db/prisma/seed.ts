import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { number: "9999999999",id: 6 },
    update: {},
    create: {
      number: "9999999999",
      password: await bcrypt.hash("alice", 10),
      name: "alice",
      onRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "125",
          provider: "HDFC Bank",
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { number: "9999999998",id: 7 },
    update: {},
    create: {
      number: "9999999998",
      password: await bcrypt.hash("bob", 10),
      name: "bob",
      onRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "126",
          provider: "HDFC Bank",
        },
      },
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
