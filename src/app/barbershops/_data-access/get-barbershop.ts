import "server-only";

import { prisma } from "@/lib/prisma";

export const getBarbershop = async (id: string) => {
  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id,
    },
    include: {
      barbershopServices: true,
    },
  });

  return barbershop!;
};
