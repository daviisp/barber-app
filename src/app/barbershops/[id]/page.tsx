import Image from "next/image";
import { getBarbershop } from "../_data-access/get-barbershop";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Menu, Star } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SheetContentMenuUser } from "@/app/_components/sheet-content-menu-user";
import Link from "next/link";
import { Title } from "@/app/_components/title";
import { PhonesOfBarbershop } from "./_components/phones-of-barbershop";
import { CardWithServicesOfBarbershop } from "./_components/card-with-services-of-barbershop";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";

const BarbershopPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const session = await auth();

  const id = (await params).id;

  const barbershop = await getBarbershop(id);

  if (!barbershop) {
    return notFound();
  }

  return (
    <section>
      <div className="relative w-full h-[250px]">
        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          className="rounded-xl"
        />
        <div className="absolute w-full mt-3 flex justify-between px-4">
          <div>
            <Button asChild>
              <Link href="/">
                <ArrowLeft />
              </Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="right-0">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContentMenuUser />
          </Sheet>
        </div>
      </div>
      <div className="mx-5 mt-3 mb-4">
        <h2 className="pb-3 text-sm font-bold">{barbershop.name}</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin fill="#8162ff" />
            <p className="text-xs">{barbershop.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <Star fill="#8162ff" className="stroke:none" />
            <p className="text-xs">5,0 (889 avaliações)</p>
          </div>
        </div>
      </div>
      <div className="border border-[#26272B] mb-4" />
      <div className="mx-5">
        <div className="pb-3">
          <Title text="Sobre nós" />
        </div>
        <p className="text-sm text-justify">{barbershop.description}</p>
      </div>
      <div className="border border-[#26272B] my-6" />
      <div className="mx-5">
        <div className="pb-3">
          <Title text="Serviços" />
        </div>
        {barbershop.barbershopServices.map((service) => (
          <CardWithServicesOfBarbershop
            barbershop={barbershop}
            service={service}
            key={service.id}
            user={session?.user}
          />
        ))}
      </div>

      <div className="border border-[#26272B] my-6" />
      <div className="mx-5">
        <Title text="Contato" />
        <div className="pt-3 space-y-3">
          {barbershop.phones.map((phone, index) => (
            <PhonesOfBarbershop phone={phone} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarbershopPage;
