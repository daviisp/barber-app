import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Calendar, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SheetContentMenuUser } from "./sheet-content-menu-user";
import { MakeLoginButton } from "./make-login-button";
import { auth } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = async () => {
  const session = await auth();

  return (
    <>
      <header className="flex md:hidden justify-between items-center py-6">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={130}
            height={22}
            alt="Logo da FSW Barber"
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
      <header className="hidden md:flex justify-between items-center mx-32  py-8">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo da FSW Barber"
              width={130}
              height={22}
              unoptimized
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Button className="gap-2 rounded-xl" variant="ghost" asChild>
            <Link href="/bookings">
              <Calendar />
              Agendamentos
            </Link>
          </Button>
          {session?.user ? (
            <Sheet>
              <SheetTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={session.user?.image as string} />
                  <AvatarFallback>{session.user.name}</AvatarFallback>
                </Avatar>
              </SheetTrigger>
              <SheetContentMenuUser />
            </Sheet>
          ) : (
            <MakeLoginButton />
          )}
        </div>
      </header>
    </>
  );
};
