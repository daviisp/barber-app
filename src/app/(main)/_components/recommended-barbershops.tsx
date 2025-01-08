import { Title } from "@/app/_components/title";
import React from "react";
import { getRecommendBarbershops } from "../_data-access/get-barbershops";
import { CardWithBarbershop } from "@/app/_components/card-with-barbershop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const RecommendedBarbershops = async () => {
  const recommendedBarbershops = await getRecommendBarbershops();

  return (
    <>
      {/* Mobile: Lista horizontal scrollável */}
      <div className="mt-6 flex flex-col gap-3 md:hidden">
        <Title text="Recomendados" />
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recommendedBarbershops.map((barbershop) => (
            <CardWithBarbershop barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>
      </div>

      {/* Desktop: Carousel */}
      <div className="hidden md:block">
        <Title text="Recomendados" />
        <Carousel className="w-full max-w-3xl mt-4">
          <CarouselContent className="-ml-0">
            {recommendedBarbershops.map((barbershop) => (
              <CarouselItem
                key={barbershop.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-0">
                  <CardWithBarbershop barbershop={barbershop} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="mr-4 text-black" />
        </Carousel>
      </div>
    </>
  );
};
