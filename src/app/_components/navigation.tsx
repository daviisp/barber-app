"use client";

import { Button } from "@/components/ui/button";
import { quickSearchOptions } from "@/constants/quick-search-options";
import { signOut } from "next-auth/react";
import { Calendar, HomeIcon, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <div className="mt-6 space-y-1">
        <Button
          asChild
          className="gap-3 w-full justify-start p-5 bg-[#8162ff] text-sm"
        >
          <Link href="/">
            <HomeIcon />
            Início
          </Link>
        </Button>
        <Button
          asChild
          className="gap-3 w-full justify-start py-3 px-4 text-sm"
          variant="ghost"
        >
          <Link href="/">
            <Calendar />
            Agendamentos
          </Link>
        </Button>
      </div>
      <div className="border border-[#26272b] my-6" />
      <div className="flex flex-col gap-1 items-start">
        {quickSearchOptions.map((option) => (
          <Button
            className="gap-3 py-5 px-4 bg-transparent hover:bg-transparent"
            key={option.title}
            asChild
          >
            <Link href={option.href}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Link>
          </Button>
        ))}
      </div>
      <div className="border border-[#26272b] my-6" />
      <Button className="gap-3" variant="ghost" onClick={() => signOut()}>
        <LogIn />
        Sair da conta
      </Button>
    </nav>
  );
};
