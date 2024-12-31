import { Button } from "@/components/ui/button";
import { Header } from "../_components/header";
import { SearchBarber } from "./_components/search-barber";
import { WelcomeUser } from "./_components/welcome.user";
import Image from "next/image";
import { quickSearchOptions } from "@/constants/quick-search-options";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <>
      <Header />
      <div className="my-6">
        <WelcomeUser />
      </div>
      <SearchBarber />
      <div className="my-6 flex gap-3  overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {quickSearchOptions.map((option) => (
          <Button
            className="font-bold bg-[#1a1b1f] hover:bg-[#1a1b1f] text-sm"
            key={option.title}
          >
            <Image
              src={option.imageUrl}
              width={16}
              height={16}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>
      <div className="relative mt-6 min-h-[150px] w-full">
        <Image
          alt="Agende nos melhores com FSW Barber"
          src="/banner.svg"
          fill
          unoptimized
        />
      </div>

      <h3 className="font-bold text-xs mt-6 mb-3 text-[#838896] uppercase">
        Agendamentos
      </h3>
      <Card className="bg-[#1b1a1f] text-white">
        <CardContent className="grid grid-cols-[2fr,1fr]">
          <div className="space-y-3 pb-3">
            <Button className="text-xs bg-[#221c3d] text-[#8162ff] mt-3 py-0.5 px-2">
              Confirmado
            </Button>
            <div>
              <h3 className="mb-2 font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Image
                  alt="teate"
                  src="/image-barber.png"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <p className="text-sm">Vintage Barber</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-l  border-l-[#26272B]">
            <p className="text-xs">Fevereiro</p>
            <p className="text-lg">09</p>
            <p className="text-xs">06:45</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
