"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface BookingItemProps {
  date: Date;
  serviceName: string;
  barbershopName: string;
  barbershopImageUrl: string;
  barbershopAddress: string;
}

export const BookingItem = ({
  date,
  serviceName,
  barbershopName,
  barbershopImageUrl,
  barbershopAddress,
}: BookingItemProps) => {
  const status = isFuture(date) ? "Confirmado" : "Finalizado";

  return (
    <Sheet>
      <SheetTrigger className="text-left" asChild>
        <Card className="bg-[#1b1a1f] text-white min-w-[250px]">
          <CardContent className="grid grid-cols-[2fr,1fr]">
            <div className="space-y-3 pb-3">
              <Button className="text-xs bg-[#221c3d] text-[#8162ff] mt-3 py-0.5 px-2">
                {status}
              </Button>
              <div>
                <h3 className="mb-2 text-sm sm:text-base font-semibold">
                  {serviceName}
                </h3>
                <div className="flex items-center gap-2">
                  <Image
                    alt="teate"
                    src="/barber.png"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <p className="text-xs sm:text-sm">{barbershopName}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l  border-l-[#26272B]">
              <p className="text-xs capitalize">
                {format(date, "MMMM", { locale: ptBR })}
              </p>
              <p className="text-lg">{format(date, "dd")}</p>
              <p className="text-xs">{format(date, "HH:mm")}</p>
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="w-10/12 bg-[#141518] border-none">
        <SheetHeader className="mx-5 pt-6">
          <SheetTitle className="text-left text-white">
            Informações da Reserva
          </SheetTitle>
        </SheetHeader>
        <div className="border border-[#26272b] my-6 !mx-0" />
        <div className="mx-5">
          <div className="relative h-[200px] w-full">
            <Image
              src="/map.png"
              fill
              alt="Mapa da barbearia"
              className="object-cover rounded-xl"
            />
            <div className="mx-3 pt-[88px] pb-5 absolute">
              <Card className="bg-[#1a1b1f] px-5 py-3">
                <CardContent className="flex items-center gap-3">
                  <Image
                    src={barbershopImageUrl}
                    width={48}
                    height={48}
                    className="rounded-xl object-contain"
                    alt={barbershopName}
                  />
                  <h3 className="text-sm pb-1 text-white">{barbershopName}</h3>
                  <p className="text-xs text-white">{barbershopAddress}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
