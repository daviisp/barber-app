import { SearchBarber } from "../(main)/_components/search-barber";
import { CardWithBarbershop } from "../_components/card-with-barbershop";
import { Header } from "../_components/header";
import { getBarbershops } from "./_data-access/get-barbershops";

const BarbershopsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ name: string }>;
}) => {
  const barbershopName = (await searchParams).name;

  const barbershops = await getBarbershops(barbershopName);

  return (
    <>
      <section>
        <Header />
        <SearchBarber />
        <div className="py-6">
          <p className="uppercase text-[#838896] text-xs">
            Resultados para "{barbershopName}"
          </p>
        </div>
        {barbershops.length === 0 ? (
          <p className="text-sm">
            Não encontramos nenhum resultado para "{barbershopName}"
          </p>
        ) : (
          barbershops.map((barbershop) => (
            <CardWithBarbershop barbershop={barbershop} key={barbershop.id} />
          ))
        )}
      </section>
    </>
  );
};

export default BarbershopsPage;
