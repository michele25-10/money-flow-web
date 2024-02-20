import { authList } from "../../utils/enum";

export const menu = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
        id_autorizzazione: authList.homepage,
      },
      {
        id: 2,
        title: "Dashboard",
        url: "/dashboard",
        icon: "chart.svg",
        id_autorizzazione: authList.dashboard,
      },
    ],
  },
  {
    id: 2,
    title: "Storico",
    listItems: [
      {
        id: 1,
        title: "Storico",
        url: "/history",
        icon: "calendar.svg",
        id_autorizzazione: authList.storico,
      },
    ],
  },
  {
    id: 3,
    title: "Analisi",
    listItems: [
      {
        id: 1,
        title: "Spese fisse",
        url: "/fixed-expense",
        icon: "fattura.png",
        id_autorizzazione: authList.speseFisse,
      },
    ],
  },
  {
    id: 4,
    title: "Spese",
    listItems: [
      {
        id: 1,
        title: "Lista spese",
        url: "/list-expense",
        icon: "post2.svg",
        id_autorizzazione: authList.listaSpesa,
      },
    ],
  },
  {
    id: 5,
    title: "Documentazione",
    listItems: [
      {
        id: 1,
        title: "Documenti",
        url: "/documentation",
        icon: "element.svg",
        id_autorizzazione: authList.documenti,
      },
    ],
  },
  {
    id: 6,
    title: "Impostazioni",
    listItems: [
      {
        id: 1,
        title: "Configurazione",
        url: "/settings",
        icon: "setting.svg",
        id_autorizzazione: authList.configurazione,
      },
      {
        id: 2,
        title: "Autorizzazioni",
        url: "/authorization",
        icon: "element.svg",
        id_autorizzazione: authList.autorizzazioni,
      },
      {
        id: 3,
        title: "Log",
        url: "/log",
        icon: "log.svg",
        id_autorizzazione: authList.log,
      },
    ],
  },
];
