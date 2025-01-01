import { Card, CardContent } from "@/components/ui/card";
import { Title } from "./title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const BookingItem = () => {
  return (
    <>
      <div className="mb-3">
        <Title text="Agendamentos" />
      </div>
      <Card className="bg-[#1b1a1f] text-white">
        <CardContent className="grid grid-cols-[2fr,1fr]">
          <div className="space-y-3 pb-3">
            <Button className="text-xs bg-[#221c3d] text-[#8162ff] mt-3 py-0.5 px-2">
              Confirmado
            </Button>
            <div>
              <h3 className="mb-2 font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Image
                  alt="teate"
                  src="/barber.png"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <p className="text-sm">Vintage Barber</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-l  border-l-[#26272B]">
            <p className="text-xs">Fevereiro</p>
            <p className="text-lg">09</p>
            <p className="text-xs">06:45</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
