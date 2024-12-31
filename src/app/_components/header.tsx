import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <Image src="/logo.svg" width={130} height={22} alt="Logo da FSW" />
      <Button className="bg-transparent hover:bg-transparent">
        <MenuIcon />
      </Button>
    </header>
  );
};
