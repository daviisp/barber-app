import { Header } from "../_components/header";
import { SearchBarber } from "./_components/search-barber";
import { WelcomeUser } from "./_components/welcome.user";
import { RenderQuickOptions } from "./_components/render-quick-options";
import { BookingItem } from "../_components/booking-item";
import { RecommendedAndPopularBarbershops } from "./_components/recommended-and-popular-barbershops";

const Home = () => {
  return (
    <>
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
      <div className="mt-6">
        <BookingItem />
      </div>
      <div className="mt-6">
        <RecommendedAndPopularBarbershops />
      </div>
    </>
  );
};

export default Home;
