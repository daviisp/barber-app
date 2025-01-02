"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";

interface CardWithServicesBarbershopProps {
  service: {
    id: string;
    name: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    barbershopId: string;
  };
}

export const CardWithServicesOfBarbershop = ({
  service,
}: CardWithServicesBarbershopProps) => {
  return (
    <Card key={service.id} className="bg-[#1a1b1f] text-white p-3">
      <CardContent className="flex gap-3 pl-0">
        <div className="relative w-full h-[110px]">
          <Image
            src={service.imageUrl}
            fill
            alt={service.name}
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold mb-1 text-sm">{service.name}</h2>
          <p className="mb-2.5 text-xs text-[#838896]">
            Estilo personalizado com as últimas tendências
          </p>
          <div className="flex items-center gap-10">
            <p className="text-[#8162ff] font-semibold text-sm">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-[#26272B] text-sm">Reservar</Button>
              </SheetTrigger>
              <SheetContent className="bg-[#141518] border-none w-10/12 p-0">
                <SheetHeader className="p-6">
                  <SheetTitle className="text-left text-white">
                    Fazer Reserva
                  </SheetTitle>
                </SheetHeader>
                <div className="border border-[#26272b] my-6" />
                <div className="px-6"></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
