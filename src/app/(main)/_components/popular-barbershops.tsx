import { getPopularBarbershops } from "../_data-access/get-barbershops";
import { CardWithBarbershop } from "../../_components/card-with-barbershop";
import { Title } from "../../_components/title";

export const PopularBarbershops = async () => {
  const popularBarbershops = await getPopularBarbershops();

  return (
    <>
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
