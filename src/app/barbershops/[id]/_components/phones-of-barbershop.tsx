"use client";

import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import React from "react";

interface PhonesOfBarbershopProps {
  phone: string;
}

export const PhonesOfBarbershop = ({ phone }: PhonesOfBarbershopProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Smartphone />
        <p className="text-sm">{phone}</p>
      </div>
      <Button
        className="bg-transparent rounded-xl"
        onClick={() => navigator.clipboard.writeText(phone)}
      >
        Copiar
      </Button>
    </div>
  );
};
