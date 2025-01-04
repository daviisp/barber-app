import { auth } from "@/lib/auth";
import { BookingItem } from "../_components/booking-item";
import { Header } from "../_components/header";
import { Title } from "../_components/title";
import { getBookingsByUser } from "./_data-access/get";

const BookingsPage = async () => {
  const session = await auth();

  const data = session?.user ? await getBookingsByUser() : null;

  return (
    <>
      <section>
        <div className="mx-5">
          <Header />
        </div>
        <div className="border border-[#26272b] my-6" />
        <div className="mx-5">
          <h2 className="font-semibold mb-6">Agendamentos</h2>

          {session?.user ? (
            data ? (
              <>
                <div className="mb-3">
                  <Title text="Confirmados" />
                </div>
                <div className="flex flex-col gap-3">
                  {data.confirmedBookings.length > 0 ? (
                    data.confirmedBookings.map((booking) => (
                      <BookingItem
                        key={booking.id}
                        barbershopName={booking.barbershop.name}
                        serviceName={booking.barbershopService.name}
                        servicePrice={Number(booking.barbershopService.price)}
                        barbershopImageUrl={booking.barbershop.imageUrl}
                        barbershopAddress={booking.barbershop.address}
                        barbershopPhones={booking.barbershop.phones}
                        date={booking.date}
                        bookingId={booking.id}
                      />
                    ))
                  ) : (
                    <p>Você não tem nenhum horário confirmado.</p>
                  )}
                </div>

                <div className="mt-6 mb-3">
                  <Title text="Finalizados" />
                </div>
                <div className="flex flex-col gap-3">
                  {data.finalizedBookings.length > 0 ? (
                    data.finalizedBookings.map((booking) => (
                      <BookingItem
                        key={booking.id}
                        barbershopName={booking.barbershop.name}
                        serviceName={booking.barbershopService.name}
                        servicePrice={Number(booking.barbershopService.price)}
                        barbershopImageUrl={booking.barbershop.imageUrl}
                        barbershopAddress={booking.barbershop.address}
                        barbershopPhones={booking.barbershop.phones}
                        date={booking.date}
                        bookingId={booking.id}
                      />
                    ))
                  ) : (
                    <p className="text-[#838896]">
                      Você não tem nenhum horário finalizado.
                    </p>
                  )}
                </div>
              </>
            ) : (
              <p className="text-[#838896]">Você não tem nenhum agendamento.</p>
            )
          ) : (
            <p className="text-[#838896]">
              Faça login para ver seus agendamentos!
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default BookingsPage;
