import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import React from "react";
import { UserInfo } from "./user-info";
import { Navigation } from "./navigation";

export const SheetContentMenuUser = () => {
  return (
    <SheetContent className="bg-[#141518] border-none px-5 pt-4 overflow-y-auto w-4/4">
      <SheetHeader>
        <SheetTitle className="text-white text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="my-6">
        <UserInfo />
      </div>
      <div className="border border-[#26272b] mb-6" />
      <Navigation />
    </SheetContent>
  );
};
