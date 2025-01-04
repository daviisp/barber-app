import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barber App",
  description:
    "Barber App é a solução perfeita para agendar horários em barbearias de forma prática e eficiente. Garanta seu corte ou barba com poucos cliques!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} h-screen antialiased bg-[#141518] text-white  flex flex-col`}
      >
        <p className="hidden md:block text-center text-lg p-4 bg-yellow-200 border border-yellow-500 text-yellow-800 rounded-md my-4">
          Esse aplicativo ainda não possui versão para desktops! No futuro, essa
          modalidade estará disponível!
        </p>
        <main className="md:hidden flex-1">{children}</main>
        <div className="md:hidden">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
