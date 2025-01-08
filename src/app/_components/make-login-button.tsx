"use client";

import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import React from "react";
import { authWithGoogle } from "../_actions/auth";

export const MakeLoginButton = () => {
  return (
    <Button
      className="bg-[#8162ff] rounded-xl hover:bg-[#8162ff]/80"
      onClick={() => authWithGoogle()}
    >
      <UserCircle />
      Fazer login
    </Button>
  );
};
