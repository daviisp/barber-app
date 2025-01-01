import { Button } from "@/components/ui/button";
import { quickSearchOptions } from "@/constants/quick-search-options";
import Image from "next/image";

export const RenderQuickOptions = () => {
  return (
    <>
      <div className="mb-6 flex gap-3  overflow-x-scroll [&::-webkit-scrollbar]:hidden">
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
    </>
  );
};
