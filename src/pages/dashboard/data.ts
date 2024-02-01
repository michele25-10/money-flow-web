const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const box1 = {
  color: "yellow",
  icon: "pippo.svg",
  name: "Michele",
  surname: "Gabrieli",
  amount: 500.5,
  percentuage: 10,
  chartData: data,
};

export const box2 = {
  color: "pink",
  icon: "pippo.svg",
  name: "Angela",
  surname: "Gabrieli",
  amount: 200.5,
  percentuage: -2,
  chartData: data,
};

export const box3 = {
  color: "green",
  icon: "pippo.svg",
  name: "Pietro",
  surname: "Gabrieli",
  amount: 158.5,
  percentuage: -10,
  chartData: data,
};

export const box4 = {
  color: "yellow",
  icon: "pippo.svg",
  name: "Elena",
  surname: "Ferraresi",
  amount: 752.5,
  percentuage: 15,
  chartData: data,
};

const dataSett = [
  {
    name: "Lunedì",
    tot: 50,
  },
  {
    name: "Martedì",
    tot: 20,
  },
  {
    name: "Mercoledì",
    tot: 0,
  },
  {
    name: "Giovedì",
    tot: 0,
  },
  {
    name: "Venerdì",
    tot: 30,
  },
  {
    name: "Sabato",
    tot: 70,
  },
  {
    name: "Domenica",
    tot: 80,
  },
];

export const boxBar8 = {
  title: "Totale Settimanale",
  color: "orange",
  dataKey: "tot",
  chartData: dataSett,
};

const dataMonth = [
  {
    name: "Gennaio",
    tot: 3000,
  },
  {
    name: "Febbraio",
    tot: 2500,
  },
  {
    name: "Marzo",
    tot: 3500,
  },
  {
    name: "Aprile",
    tot: 4780,
  },
  {
    name: "Maggio",
    tot: 4400,
  },
  {
    name: "Giugno",
    tot: 6000,
  },
  {
    name: "Luglio",
    tot: 4000,
  },
  {
    name: "Agosto",
    tot: 7000,
  },
  {
    name: "Settembre",
    tot: 7500,
  },
  {
    name: "Ottobre",
    tot: 4000,
  },
  {
    name: "Novembre",
    tot: 3500,
  },
  {
    name: "Dicembre",
    tot: 5050,
  },
];

export const boxBar9 = {
  title: "Totale Annuo",
  color: "#8884d8",
  dataKey: "tot",
  chartData: dataMonth,
};

const pieData = [
  { name: "Gian Luca Gabrieli", value: 400, color: "#0088fe" },
  { name: "Elena Ferraresi", value: 300, color: "#00c49f" },
  { name: "Michele Gabrieli", value: 300, color: "#ffbb28" },
  { name: "Angela Gabrieli", value: 200, color: "#ff8042" },
  { name: "Pietro Gabrieli", value: 200, color: "#8884d8" },
];

export const boxPie4 = {
  title: "Divisione Spese",
  chartData: pieData,
};
