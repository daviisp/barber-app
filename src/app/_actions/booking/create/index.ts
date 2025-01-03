"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateBookingParams {
  barbershopId: string;
  barbershopServiceId: string;
  date: Date;
}

export const createBooking = async ({
  barbershopId,
  barbershopServiceId,
  date,
}: CreateBookingParams) => {
  const session = await auth();
  if (!session?.user) {
    return;
  }

  await prisma.booking.create({
    data: {
      barbershopId,
      barbershopServiceId,
      date,
      userId: session.user.id as string,
    },
  });
};
