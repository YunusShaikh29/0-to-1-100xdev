"use server";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnRampTransaction(
  amount: number,
  provider: string
) {
  const session = await getServerSession(authOptions);

  if (!session?.user || !session.user?.id) {
    return {
      message: "Unauthorized user",
    };
  }

  const token = Math.abs((Math.random() * 10000000)).toString();
  await prisma.onRampTransaction.create({
    data: {
      token,
      provider,
      amount: amount * 100,
      status: "Processing",
      startTime: new Date(),
      userId: Number(session?.user?.id),
    },
  });

  return {
    message: "Done",
  };
}
