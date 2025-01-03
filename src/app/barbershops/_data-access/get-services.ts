import "server-only";

import { prisma } from "@/lib/prisma";
import { Barbershop } from "@prisma/client";

export const getServices = async (
  serviceName: string
): Promise<{ barbershop: Barbershop }[]> => {
  return await prisma.barbershopService.findMany({
    where: {
      name: {
        contains: serviceName,
        mode: "insensitive",
      },
    },
    include: {
      barbershop: true,
    },
  });
};
