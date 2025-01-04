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

  if (!barbershop) return null;

  const barbershopWithFormattedPrices = {
    ...barbershop,
    barbershopServices: barbershop.barbershopServices.map((service) => ({
      ...service,
      price: service.price.toNumber(),
    })),
  };

  return barbershopWithFormattedPrices;
};
