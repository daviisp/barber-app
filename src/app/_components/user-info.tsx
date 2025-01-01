import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { LogIn } from "lucide-react";
import { authWithGoogle } from "../_actions/auth";

export const UserInfo = async () => {
  const session = await auth();

  return (
    <>
      {session?.user?.image && session?.user?.name ? (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={session.user.image} />
            <AvatarFallback>{session.user.name}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{session.user.name}</p>
            <p className="text-xs">{session.user.email}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-sm">Olá. Faça seu login!</h2>
          <Button
            className="bg-[#8162ff] w-8 h-8 rounded-xl"
            onClick={authWithGoogle}
          >
            <LogIn />
          </Button>
        </div>
      )}
    </>
  );
};
