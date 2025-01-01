import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { quickSearchOptions } from "@/constants/quick-search-options";
import { auth } from "@/lib/auth";
import {
  Calendar,
  CircleChevronRight,
  HomeIcon,
  LogIn,
  MenuIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserInfo } from "./user-info";
import { Navigation } from "./navigation";

export const Header = async () => {
  return (
    <header className="flex justify-between items-center py-6">
      <Image
        src="/logo.svg"
        width={130}
        height={22}
        alt="Logo da FSW"
        unoptimized
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-transparent hover:bg-transparent">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#141518] border-none w-[350px]">
          <SheetHeader>
            <SheetTitle className="text-white text-left">Menu</SheetTitle>
          </SheetHeader>
          <div className="my-6">
            <UserInfo />
          </div>
          <div className="border border-[#26272b] mb-6" />
          <Navigation />
        </SheetContent>
      </Sheet>
    </header>
  );
};
