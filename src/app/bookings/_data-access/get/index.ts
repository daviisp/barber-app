import "server-only";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const getBookingsByUser = async () => {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Usuário não autorizado.");
  }

  const today = new Date();

  const finalizedBookings = await prisma.booking.findMany({
    where: {
      userId: session.user.id,
      date: {
        lt: today,
      },
    },
    include: {
      barbershop: true,
      barbershopService: true,
    },
  });

  const confirmedBookings = await prisma.booking.findMany({
    where: {
      userId: session.user.id,
      date: {
        gte: today,
      },
    },
    include: {
      barbershop: true,
      barbershopService: true,
    },
  });

  return {
    finalizedBookings,
    confirmedBookings,
  };
};
