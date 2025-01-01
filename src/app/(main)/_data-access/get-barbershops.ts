import "server-only";

import { prisma } from "@/lib/prisma";
import { Barbershop } from "@prisma/client";

export const getRecommendBarbershops = async (): Promise<Barbershop[]> => {
  const barbershops = await prisma.barbershop.findMany({
    orderBy: { name: "asc" },
  });

  return barbershops.slice(0, 3);
};

export const getPopularBarbershops = async (): Promise<Barbershop[]> => {
  const barbershops = await prisma.barbershop.findMany({
    orderBy: { address: "asc" },
  });

  return barbershops.slice(0, 3);
};
