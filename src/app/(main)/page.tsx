import { Header } from "../_components/header";
import { SearchBarber } from "./_components/search-barber";
import { WelcomeUser } from "./_components/welcome.user";
import { RenderQuickOptions } from "./_components/render-quick-options";
import { BookingItem } from "../_components/booking-item";
import { RecommendedAndPopularBarbershops } from "./_components/recommended-and-popular-barbershops";
import { getBookingsByUser } from "../bookings/_data-access/get";
import { auth } from "@/lib/auth";

const Home = async () => {
  const session = await auth();

  const bookings = session?.user?.id ? await getBookingsByUser() : null;

  return (
    <>
      <section className="mx-5">
        <Header />
        <div className="mt-6">
          <WelcomeUser />
        </div>
        <div className="mt-6">
          <SearchBarber />
        </div>
        <div className="mt-6">
          <RenderQuickOptions />
        </div>
        {bookings && (
          <div className="mt-6 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {bookings.confirmedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                barbershopName={booking.barbershop.name}
                serviceName={booking.barbershopService.name}
                barbershopAddress={booking.barbershop.address}
                barbershopImageUrl={booking.barbershop.imageUrl}
                date={booking.date}
              />
            ))}
          </div>
        )}

        <div className="mt-6">
          <RecommendedAndPopularBarbershops />
        </div>
      </section>
    </>
  );
};

export default Home;
