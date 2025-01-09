import { Header } from "../_components/header";
import { SearchBarber } from "./_components/search-barber";
import { WelcomeUser } from "./_components/welcome.user";
import { RenderQuickOptions } from "./_components/render-quick-options";
import { BookingItem } from "../_components/booking-item";
import { getBookingsByUser } from "../bookings/_data-access/get";
import { auth } from "@/lib/auth";
import { RecommendedBarbershops } from "./_components/recommended-barbershops";
import { PopularBarbershops } from "./_components/popular-barbershops";
import { Title } from "../_components/title";

const Home = async () => {
  const session = await auth();
  const bookings = session?.user?.id && (await getBookingsByUser());

  return (
    <>
      <section className="mx-5">
        <Header />
        <div className="mt-6 md:hidden">
          <WelcomeUser />
        </div>
        <div className="mt-6 md:hidden">
          <SearchBarber />
        </div>
        <div className="mt-6 md:hidden">
          <RenderQuickOptions />
        </div>
        <div className="hidden md:flex justify-between gap-8 mx-32 pt-16">
          <div className="space-y-8 min-w-[300px] max-w-[400px] flex-1">
            <WelcomeUser />
            <SearchBarber />
          </div>
          <RecommendedBarbershops />
        </div>

        <div className="hidden md:flex pb-[104px]">
          <PopularBarbershops />
        </div>

        {bookings && (
          <div className="md:hidden mt-6 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {bookings.confirmedBookings.map((booking) => (
              <BookingItem
                key={booking.id}
                bookingId={booking.id}
                barbershopName={booking.barbershop.name}
                serviceName={booking.barbershopService.name}
                barbershopAddress={booking.barbershop.address}
                barbershopPhones={booking.barbershop.phones}
                servicePrice={Number(booking.barbershopService.price)}
                barbershopImageUrl={booking.barbershop.imageUrl}
                date={booking.date}
              />
            ))}
          </div>
        )}

        <div className="mt-6 md:hidden space-y-6">
          <RecommendedBarbershops />
          <PopularBarbershops />
        </div>
      </section>
    </>
  );
};

export default Home;
