"use client";

import { createBooking } from "@/app/_actions/booking/create";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Barbershop, BarbershopService } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getAvailableTimes } from "../../_data-access/get-available-times";
import { Session } from "next-auth";
import { signIn } from "@/lib/auth";

const AVAILABLE_TIMES = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

interface CardWithServicesBarbershopProps {
  service: Omit<BarbershopService, "price"> & {
    price: number;
  };
  barbershop: Barbershop;
  user: Session["user"] | null;
}

export const CardWithServicesOfBarbershop = ({
  service,
  barbershop,
  user,
}: CardWithServicesBarbershopProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [availableTimes, setAvailableTimes] =
    useState<string[]>(AVAILABLE_TIMES);

  const [hour, setHour] = useState<string | undefined>(undefined);

  const handleCreateBooking = async () => {
    try {
      if (!selectedDate || !hour) return;

      const [hourPart, minutePart] = hour.split(":");
      const bookingDate = new Date(selectedDate);
      bookingDate.setHours(Number(hourPart), Number(minutePart), 0, 0);

      await createBooking({
        barbershopId: barbershop.id,
        barbershopServiceId: service.id,
        date: bookingDate,
      });

      setModalIsOpen(false);

      setAvailableTimes((prev) => {
        return prev.filter((time) => time !== hour);
      });

      toast.success("Agendamento feito com sucesso!");
    } catch (err) {
      console.error(err);
      toast.error("Algum erro aconteceu. Tente novamente");
    }
  };

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (!selectedDate) return;

      const today = new Date();
      const currentTime = today.getHours() * 60 + today.getMinutes(); // Tempo atual em minutos

      const bookings = await getAvailableTimes({
        selectedDate,
        barbershopId: barbershop.id,
        barbershopServiceId: service.id,
      });

      const bookedTimes = bookings.map((booking) =>
        format(new Date(booking.date), "HH:mm")
      );

      setAvailableTimes(() => {
        return AVAILABLE_TIMES.filter((time) => {
          const [hours, minutes] = time.split(":").map(Number);
          const timeInMinutes = hours * 60 + minutes;

          if (
            today.toDateString() === selectedDate.toDateString() &&
            timeInMinutes <= currentTime
          ) {
            return false;
          }

          return !bookedTimes.includes(time);
        });
      });
    };

    fetchAvailableTimes();
  }, [selectedDate, barbershop.id, service.id]);

  return (
    <Card key={service.id} className="bg-[#1a1b1f] text-white p-3">
      <CardContent className="flex gap-3 pl-0">
        <div className="relative w-full h-[110px]">
          <Image
            src={service.imageUrl}
            fill
            alt={service.name}
            className="rounded-xl object-cover"
            unoptimized
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
            <Sheet open={modalIsOpen} onOpenChange={setModalIsOpen}>
              <SheetTrigger asChild>
                <Button className="bg-[#26272B] text-sm">Reservar</Button>
              </SheetTrigger>
              <SheetContent className="bg-[#141518] border-none w-10/12 p-0 overflow-auto">
                <SheetHeader className="p-6">
                  <SheetTitle className="text-left text-white">
                    Fazer Reserva
                  </SheetTitle>
                </SheetHeader>
                <div className="border border-[#26272b] my-6" />
                <div className="mx-5">
                  <Calendar
                    mode="single"
                    locale={ptBR}
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    fromDate={new Date()}
                    className="capitalize"
                  />
                </div>
                <div className="border border-[#26272b] my-6" />
                <div className="flex gap-2 overflow-x-auto mx-5 [&::-webkit-scrollbar]:hidden">
                  {availableTimes.map((availableTime, index) => (
                    <Button
                      className={`${
                        hour === availableTime
                          ? "bg-[#8162ff]"
                          : "bg-transparent"
                      } hover:bg-transparent`}
                      key={index}
                      onClick={() => setHour(availableTime)}
                    >
                      {availableTime}
                    </Button>
                  ))}
                </div>
                <div className="border border-[#26272b] my-6 !mx-0" />

                {selectedDate && hour && (
                  <div className="mx-5">
                    <div className="bg-[#1a1b1f] p-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-3 text-[#838896] text-sm">
                          <p className="font-semibold text-white">
                            {service.name}
                          </p>
                          <p>Data</p>
                          <p>Horário</p>
                          <p>Barbearia</p>
                        </div>
                        <div className="space-y-3 text-sm">
                          <p className="font-semibold">
                            {new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(Number(service.price))}
                          </p>
                          <p>
                            {format(selectedDate, "dd 'de' MMMM", {
                              locale: ptBR,
                            })}
                          </p>
                          <p>{hour}</p>
                          <p>{barbershop.name}</p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full rounded-xl mt-[50px] mb-6">
                      <Button
                        className="bg-[#8162ff] w-full font-semibold"
                        onClick={handleCreateBooking}
                        disabled={!user}
                      >
                        Confirmar
                      </Button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
