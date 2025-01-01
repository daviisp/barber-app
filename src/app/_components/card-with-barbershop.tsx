import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface CardWithBarbershopProps {
  barbershop: Barbershop;
}

export const CardWithBarbershop = ({ barbershop }: CardWithBarbershopProps) => {
  return (
    <Card
      key={barbershop.id}
      className="w-[167px] bg-[#1a1b1f] text-white px-1 py-2"
    >
      <CardContent className="pl-0">
        <div className="relative w-full h-[171px]">
          <Image
            src={barbershop.imageUrl}
            fill
            alt={barbershop.name}
            className="object-cover rounded-xl"
          />
        </div>
        <h2 className="font-semibold truncate w-[130px] text-sm pt-2">
          {barbershop.name}
        </h2>
        <p className="text-[#838896] w-[120px] truncate text-xs mt-1">
          {barbershop.address}
        </p>
        <div className="flex justify-center mt-3">
          <Button className="bg-[#26272b] mt-auto text-sm w-full mx-3">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
