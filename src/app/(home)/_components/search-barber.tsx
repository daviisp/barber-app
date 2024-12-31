import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBarber = () => {
  return (
    <section className="flex items-center gap-2">
      <Input
        placeholder="Buscar"
        className="border border-[#26272b] placeholder:text-sm bg-[#1a1b1f]"
      />
      <Button className="bg-[#8162ff]">
        <Search />
      </Button>
    </section>
  );
};
