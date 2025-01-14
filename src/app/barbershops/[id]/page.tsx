import Image from "next/image";
import { getBarbershop } from "../_data-access/get-barbershop";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  LocateIcon,
  MapPin,
  Menu,
  Star,
  StarIcon,
} from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SheetContentMenuUser } from "@/app/_components/sheet-content-menu-user";
import Link from "next/link";
import { Title } from "@/app/_components/title";
import { PhonesOfBarbershop } from "./_components/phones-of-barbershop";
import { CardWithServicesOfBarbershop } from "./_components/card-with-services-of-barbershop";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { Header } from "@/app/_components/header";
import { AVAILABLE_SCHEDULES } from "@/constants/available-schedules";

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
    <>
      <section className="md:hidden">
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
      <section className="hidden md:block">
        <Header />
        <div className="mx-32 grid grid-cols-[2fr,1fr] gap-10">
          <div>
            <div className="relative h-[487px]">
              <Image
                src={barbershop.imageUrl}
                fill
                alt={barbershop.name}
                className="object-cover rounded-xl"
                unoptimized
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <h2 className="font-semibold text-lg">{barbershop.name}</h2>
                  <span className="flex gap-2">
                    <MapPin
                      fill="#8162ff"
                      className="text-[#1a1b1f]"
                      size={20}
                    />
                    <p className="text-sm">{barbershop.address}</p>
                  </span>
                </div>
                <div className="bg-[#1a1b1f] px-5 py-2.5 rounded-lg flex flex-col gap-2">
                  <div className="flex gap-2">
                    <StarIcon
                      fill="#8162ff"
                      className="text-[#1a1b1f]"
                      size={26}
                    />
                    <p className="text-lg">5,0</p>
                  </div>
                  <div>
                    <p className="text-xs">889 avaliações</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="pt-10 pb-3">
                  <Title text="Serviços" />
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-5">
                  {barbershop.barbershopServices.map((service) => (
                    <CardWithServicesOfBarbershop
                      barbershop={barbershop}
                      service={service}
                      user={session?.user}
                      key={service.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1a1b1f] p-5 rounded-lg h-fit">
            <div className="relative h-[180px] w-full">
              <Image src="/map.png" fill alt="Mapa da barbearia" />
              <div className="absolute w-full">
                <div className="mx-5 bg-[#1a1b1f] mt-[88px] px-5 py-3 rounded-lg flex gap-3">
                  <Image
                    src={barbershop.imageUrl}
                    alt={barbershop.name}
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
                  <div>
                    <h2 className="text-sm font-semibold">{barbershop.name}</h2>
                    <p className="text-xs">{barbershop.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <h2 className="font-semibold uppercase text-sm pb-2.5">
                Sobre nós
              </h2>
              <p className="text-sm text-justify text-[#838896]">
                {barbershop.description}
              </p>
              <div className="border border-[#26272b] my-6" />
              {barbershop.phones.map((phone, index) => (
                <PhonesOfBarbershop phone={phone} key={index} />
              ))}

              <div className="border border-[#26272b] my-6" />
              {AVAILABLE_SCHEDULES.map((time) => (
                <div key={time.day} className="flex justify-between">
                  <div>
                    <p className="text-[#838896] text-sm mb-1">{time.day}</p>
                  </div>
                  <div>
                    <p className="text-white text-sm mb-1">{time.status}</p>
                  </div>
                </div>
              ))}

              <div className="border border-[#26272b] my-6" />

              <div className="flex justify-between py-5">
                <div>
                  <span className="text-sm">Em parceira com</span>
                </div>
                <div>
                  <Image
                    src={"/logo.svg"}
                    width={130}
                    height={22}
                    alt="Logo da FSW Barber"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BarbershopPage;
