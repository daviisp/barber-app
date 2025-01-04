"use server";

import { prisma } from "@/lib/prisma";

interface AvailableTimesParams {
  selectedDate: Date;
  barbershopId: string;
  barbershopServiceId: string;
}

export const getAvailableTimes = async ({
  selectedDate,
  barbershopId,
  barbershopServiceId,
}: AvailableTimesParams) => {
  const startOfDay = new Date(selectedDate);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(selectedDate);
  endOfDay.setHours(23, 59, 59, 999);

  const bookings = await prisma.booking.findMany({
    where: {
      barbershopId,
      barbershopServiceId,
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    select: {
      date: true,
    },
  });

  return bookings;
};
