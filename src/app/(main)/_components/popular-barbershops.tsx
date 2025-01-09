import { getPopularBarbershops } from "../_data-access/get-barbershops";
import { CardWithBarbershop } from "../../_components/card-with-barbershop";
import { Title } from "../../_components/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PopularBarbershops = async () => {
  const popularBarbershops = await getPopularBarbershops();

  return (
    <>
      <div className="md:hidden my-6">
        <Title text="Populares" />
      </div>
      <div className="md:hidden flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {popularBarbershops.map((barbershop) => (
          <CardWithBarbershop barbershop={barbershop} key={barbershop.id} />
        ))}
      </div>

      <div className="hidden md:flex flex-col gap-10 mx-32 pt-[104px]">
        <div>
          <Title text="Populares" />
          <Carousel className="w-full max-w-6xl mt-4">
            <CarouselContent className="flex gap-5">
              {" "}
              {popularBarbershops.sort().map((barbershop) => (
                <CarouselItem
                  key={barbershop.id}
                  className="flex-none w-[calc((100%-80px)/5)]"
                >
                  <div className="p-0">
                    <CardWithBarbershop barbershop={barbershop} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className=" text-black" />
          </Carousel>
        </div>
        <div>
          <Title text="Mais visitados" />
          <Carousel className="w-full max-w-6xl mt-4">
            <CarouselContent className="flex gap-5">
              {popularBarbershops.map((barbershop) => (
                <CarouselItem
                  key={barbershop.id}
                  className="flex-none w-[calc((100%-80px)/5)]"
                >
                  <div className="p-0">
                    <CardWithBarbershop barbershop={barbershop} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className=" text-black" />
          </Carousel>
        </div>
      </div>
    </>
  );
};
