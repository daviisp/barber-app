import { auth } from "@/lib/auth";
import { format } from "date-fns";

import { ptBR } from "date-fns/locale";

export const WelcomeUser = async () => {
  const session = await auth();

  const today = new Date();
  const dateFormatted = format(today, "eeee, d 'de' MMMM", { locale: ptBR });

  return (
    <section className="space-y-1">
      {session?.user ? (
        <p className="text-lg">
          Olá, <span className="font-bold">{session.user.name}!</span>
        </p>
      ) : (
        <p>
          Olá. <span className="font-bold">Faça seu login!</span>
        </p>
      )}
      <p className="text-sm capitalize">{dateFormatted}</p>
    </section>
  );
};
