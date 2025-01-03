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

  // Converter selectedDate para o final do dia
  const endOfDay = new Date(selectedDate);
  endOfDay.setHours(23, 59, 59, 999);

  // Buscar agendamentos no intervalo de data
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
      date: true, // Obter apenas o campo de data
    },
  });

  return bookings;
};
