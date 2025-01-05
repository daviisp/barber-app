import { SearchBarber } from "../(main)/_components/search-barber";
import { CardWithBarbershop } from "../_components/card-with-barbershop";
import { Header } from "../_components/header";
import { getBarbershops } from "./_data-access/get-barbershops";
import { getServices } from "./_data-access/get-services";

const BarbershopsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; serviceName?: string }>;
}) => {
  const barbershopName = (await searchParams).name;
  const serviceName = (await searchParams).serviceName;

  const barbershops = barbershopName
    ? await getBarbershops(barbershopName)
    : (await getServices(serviceName as string)).map(
        (services) => services.barbershop
      );

  return (
    <>
      <section className="mx-5">
        <Header />
        <SearchBarber />
        <div className="py-6">
          <p className="uppercase text-[#838896] text-xs">
            Resultados para "{barbershopName ? barbershopName : serviceName}"
          </p>
        </div>
        {barbershops.length === 0 ? (
          <p className="text-sm">
            Não encontramos nenhum resultado para "{barbershopName}"
          </p>
        ) : (
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <CardWithBarbershop barbershop={barbershop} key={barbershop.id} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default BarbershopsPage;
