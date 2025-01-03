interface QuickSearchOption {
  imageUrl: string;
  title: string;
  href: string;
}

export const quickSearchOptions: QuickSearchOption[] = [
  {
    imageUrl: "/hair.svg",
    title: "Cabelo",
    href: "/barbershops?serviceName=cabelo",
  },
  {
    imageUrl: "/mustache.svg",
    title: "Barba",
    href: "/barbershops?serviceName=barba",
  },
  {
    imageUrl: "/razor-double.svg",
    title: "Acabamento",
    href: "/barbershops?serviceName=acabamento",
  },
  {
    imageUrl: "/massage.svg",
    title: "Massagem",
    href: "/barbershops?serviceName=massagem",
  },
  {
    imageUrl: "/eyebrow.svg",
    title: "Sobrancelha",
    href: "/barbershops?serviceName=sobrancelha",
  },
  {
    imageUrl: "/hydration.svg",
    title: "Hidratação",
    href: "/barbershops?serviceName=hidratacao",
  },
];
