import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`${inter.className} h-screen antialiased bg-[#141518] text-white mx-5 flex flex-col`}
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
