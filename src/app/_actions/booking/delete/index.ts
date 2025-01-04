"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteBooking = async (id: string) => {
  const session = await auth();

  if (!session?.user) {
    return;
  }

  await prisma.booking.delete({
    where: {
      id,
      userId: session.user.id,
    },
  });

  revalidatePath("/");
  revalidatePath("/bookings");
};
