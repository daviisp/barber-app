import {
  getPopularBarbershops,
  getRecommendBarbershops,
} from "../_data-access/get-barbershops";
import { CardWithBarbershop } from "../../_components/card-with-barbershop";
import { Title } from "../../_components/title";

export const RecommendedAndPopularBarbershops = async () => {
  const [recommendedBarbershops, popularBarbershops] = await Promise.all([
    getRecommendBarbershops(),
    getPopularBarbershops(),
  ]);

  return (
    <>
      <div className="mt-6 mb-3">
        <Title text="Recomendados" />
      </div>
      <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {recommendedBarbershops.map((barbershop) => (
          <CardWithBarbershop barbershop={barbershop} key={barbershop.id} />
        ))}
      </div>
      <div className="my-6">
        <Title text="Populares" />
      </div>
      <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {popularBarbershops.map((barbershop) => (
          <CardWithBarbershop barbershop={barbershop} key={barbershop.id} />
        ))}
      </div>
    </>
  );
};
