import { GridColDef } from "@mui/x-data-grid";

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
  amount: 180.5,
  percentuage: 10,
  chartData: data,
  when: "Questo mese",
};

export const box2 = {
  color: "violet",
  icon: "pippo.svg",
  name: "Michele",
  surname: "Gabrieli",
  amount: 952.5,
  percentuage: -2,
  chartData: data,
  when: "Questo anno",
};

const dataSett = [
  {
    name: "L",
    tot: 15,
  },
  {
    name: "M",
    tot: 10,
  },
  {
    name: "M",
    tot: 0,
  },
  {
    name: "G",
    tot: 0,
  },
  {
    name: "V",
    tot: 0,
  },
  {
    name: "S",
    tot: 25,
  },
  {
    name: "D",
    tot: 5,
  },
];

export const boxBar8 = {
  title: "Totale Settimanale",
  color: "orange",
  dataKey: "tot",
  xDataKey: "name",
  chartData: dataSett,
};

const dataMonth = [
  {
    name: "Gen",
    tot: 120,
  },
  {
    name: "Feb",
    tot: 50,
  },
  {
    name: "Mar",
    tot: 200,
  },
  {
    name: "Apr",
    tot: 150,
  },
  {
    name: "Mag",
    tot: 169,
  },
  {
    name: "Giu",
    tot: 182,
  },
  {
    name: "Lug",
    tot: 147,
  },
  {
    name: "Ago",
    tot: 195,
  },
  {
    name: "Set",
    tot: 300,
  },
  {
    name: "Ott",
    tot: 322,
  },
  {
    name: "Nov",
    tot: 129,
  },
  {
    name: "Dic",
    tot: 152,
  },
];

export const boxBar9 = {
  title: "Totale Annuo",
  color: "#8884d8",
  dataKey: "tot",
  xDataKey: "name",
  chartData: dataMonth,
};

const pieData = [
  { name: "Cibo", value: 480, color: "#0088fe" },
  { name: "Elettronica", value: 50, color: "#00c49f" },
  { name: "Amici", value: 227, color: "#ffbb28" },
  { name: "Mediche", value: 100, color: "#ff8042" },
  { name: "Abbigliamento", value: 450, color: "#8884d8" },
  { name: "Carburante", value: 296, color: "purple" },
];

export const boxPie4 = {
  title: "Divisione Spese",
  legend: false,
  chartData: pieData,
};

export const topBox = [
  {
    id: 1,
    name: "Cibo",
    tot: 480,
  },
  {
    id: 2,
    name: "Elettronica",
    tot: 50,
  },
  {
    id: 3,
    name: "Amici",
    tot: 227,
  },
  {
    id: 4,
    name: "Mediche",
    tot: 100,
  },
  {
    id: 5,
    name: "Abbigliamento",
    tot: 450,
  },
  {
    id: 6,
    name: "Carburante",
    tot: 296,
  },
];

export const gridColumnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "local",
    headerName: "Luogo",
    minWidth: 150,
  },
  {
    field: "date",
    headerName: "Data",
    type: "date",
    minWidth: 110,
  },
  {
    field: "import",
    headerName: "Importo",
    type: "number",
    minWidth: 110,
  },
];

export const dataGridTable = [
  {
    id: 1,
    local: "Tana del luppolo",
    date: new Date("2024-12-15"),
    import: 20,
  },
  { id: 2, local: "CastelBeach", date: new Date("2024-12-15"), import: 14 },
  { id: 3, local: "Re Artu", date: new Date("2024-12-10"), import: 15 },
  { id: 4, local: "Fun City Family", date: new Date("2023-10-15"), import: 10 },
  { id: 5, local: "Gym Tonic", date: new Date("2022-10-02"), import: 100 },
  { id: 6, local: "Caffè Grande", date: new Date("2024-7-15"), import: 2.5 },
  { id: 7, local: "Paradise", date: new Date("2024-12-30"), import: 3.8 },
  { id: 8, local: "Mc Donalds", date: new Date("2024-1-1"), import: 7.95 },
];
