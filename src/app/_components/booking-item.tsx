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
import { PhonesOfBarbershop } from "../barbershops/[id]/_components/phones-of-barbershop";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteBooking } from "../_actions/booking/delete";
import { toast } from "sonner";

interface BookingItemProps {
  date: Date;
  serviceName: string;
  servicePrice: number;
  barbershopName: string;
  barbershopImageUrl: string;
  barbershopAddress: string;
  barbershopPhones: string[];
  bookingId: string;
}

export const BookingItem = ({
  date,
  serviceName,
  barbershopName,
  barbershopImageUrl,
  barbershopAddress,
  servicePrice,
  barbershopPhones,
  bookingId,
}: BookingItemProps) => {
  const status = isFuture(date) ? "Confirmado" : "Finalizado";

  const handleConfirmationDeleteBooking = async () => {
    try {
      await deleteBooking(bookingId);
      toast.success("Agendamento deletado com sucesso!");
    } catch (err) {
      console.error(err);
      toast.error("Algum erro aconteceu. Tente novamente");
    }
  };

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
      <SheetContent className="w-10/12 bg-[#141518] border-none overflow-y-auto pb-4">
        <SheetHeader className="mx-5 pt-6">
          <SheetTitle className="text-left text-white">
            Informações da Reserva
          </SheetTitle>
        </SheetHeader>
        <div className="border border-[#26272b] my-6 !mx-0" />
        <div className="mx-5">
          <div className="relative h-[180px] w-full">
            <Image
              src="/map.png"
              fill
              alt="Mapa da barbearia"
              className="object-cover rounded-xl"
            />
            <div className="pt-[88px] flex justify-center">
              <div className="absolute mb-6">
                <Card className="bg-[#1a1b1f] py-3 px-1 rounded-md flex justify-center">
                  <CardContent className="flex pl-0  px-3 items-center gap-3">
                    <Image
                      src={barbershopImageUrl}
                      width={48}
                      height={48}
                      className="rounded-xl object-contain"
                      alt={barbershopName}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xs pb-1 font-semibold text-white">
                        {barbershopName}
                      </h3>
                      <p className="text-xs text-white">{barbershopAddress}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="bg-[#221C3D] text-[#8162FF] text-sm px-2 py-0.5 mb-3.5 rounded-full">
              {status}
            </Button>
            <Card className="bg-[#1a1b1f] py-2 ">
              <CardContent className="pl-0 px-2">
                <div className="flex items-center justify-between text-white">
                  <div className="space-y-3 text-[#838896] text-sm">
                    <p className="font-semibold text-white text-sm">
                      {serviceName}
                    </p>
                    <p>Data</p>
                    <p>Horário</p>
                    <p>Barbearia</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(servicePrice)}
                    </p>
                    <p>
                      {format(date, "dd 'de' MMMM", {
                        locale: ptBR,
                      })}
                    </p>
                    <p>{format(date, "HH:mm")}</p>
                    <p>{barbershopName}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="pt-5 space-y-3">
              {barbershopPhones &&
                barbershopPhones.map((phone, index) => (
                  <PhonesOfBarbershop phone={phone} key={index} />
                ))}
            </div>

            <div className="pt-[141px] flex justify-between">
              <Button className="px-7 py-2">Voltar</Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="px-4 py-2">
                    Cancelar Reserva
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-[#141518] border-none">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription className="text-center text-gray-400">
                    Você tem certeza que deseja excluir o agendamento? Esta ação
                    não poderá ser desfeita.
                  </AlertDialogDescription>
                  <AlertDialogCancel className="bg-[#26272b] border-none">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleConfirmationDeleteBooking}
                    className="bg-[#ef4444] hover:bg-[#ef4444]"
                  >
                    Confirmar
                  </AlertDialogAction>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
