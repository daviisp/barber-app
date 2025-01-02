import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserInfo } from "./user-info";
import { Navigation } from "./navigation";
import { SheetContentMenuUser } from "./sheet-content-menu-user";

export const Header = async () => {
  return (
    <header className="flex justify-between items-center py-6">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={130}
          height={22}
          alt="Logo da FSW"
          unoptimized
        />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-transparent hover:bg-transparent">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContentMenuUser />
      </Sheet>
    </header>
  );
};
