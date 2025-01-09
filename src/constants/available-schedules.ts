interface IAvailableSchedule {
  day: string;
  status: string;
}

export const AVAILABLE_SCHEDULES: IAvailableSchedule[] = [
  {
    day: "Domingo",
    status: "Fechado",
  },
  {
    day: "Segunda-Feira",
    status: "08:00 - 18:00",
  },
  {
    day: "Terça-Feira",
    status: "08:00 - 18:00",
  },
  {
    day: "Quarta-feira",
    status: "08:00 - 18:00",
  },
  {
    day: "Quinta-Feira",
    status: "08:00 - 18:00",
  },
  {
    day: "Sexta-Feira",
    status: "08:00 - 18:00",
  },
  {
    day: "Sábado",
    status: "Fechado",
  },
];
