import "server-only";

import { prisma } from "@/lib/prisma";
import { Barbershop } from "@prisma/client";

export const getBarbershops = async (name: string): Promise<Barbershop[]> => {
  const barbershops = await prisma.barbershop.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
  });

  return barbershops;
};
