import { GridColDef } from "@mui/x-data-grid";

const pieData = [
  { name: "2023", value: 7500, color: "#8884d8" },
  { name: "2024", value: 8000, color: "#ff8042" },
];

export const boxPie4 = {
  title: "Totale",
  legend: true,
  chartData: pieData,
};

const dataBigChart = [
  {
    name: "Gennaio",
    2023: 1600,
    2024: 1200,
  },
  {
    name: "Febbraio",
    2023: 1100,
    2024: 700,
  },
  {
    name: "Marzo",
    2023: 1250,
    2024: 1900,
  },
  {
    name: "Aprile",
    2023: 1250,
    2024: 800,
  },
  {
    name: "Maggio",
    2023: 750,
    2024: 700,
  },
  {
    name: "Giugno",
    2023: 1450,
  },
  {
    name: "Luglio",
    2023: 250,
  },
  {
    name: "Agosto",
    2023: 450,
  },
  {
    name: "Settembre",
    2023: 125,
  },
  {
    name: "Ottobre",
    2023: 750,
  },
  {
    name: "Novembre",
    2023: 950,
  },
  {
    name: "Dicembre",
    2023: 1000,
  },
];

export const boxBar7 = {
  title: "Andamento spese",
  chartData: dataBigChart,
  dataKey: [
    {
      name: "2023",
      color: "#8884d8",
    },
    {
      name: "2024",
      color: "#ff8042",
    },
  ],
};

export const gridColumnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "category",
    headerName: "Categoria",
    minWidth: 200,
  },
  {
    field: "2023",
    headerName: "2023",
    type: "number",
    minWidth: 200,
  },
  {
    field: "2024",
    headerName: "2024",
    type: "number",
    minWidth: 200,
  },
];

export const dataGridTable = [
  {
    id: 1,
    category: "Fatture elettricità",
    2023: 50,
    2024: 20,
  },
  { id: 2, category: "Fatture Gas", 2023: 150, 2024: 125 },
  { id: 3, category: "Contratti cellulari", 2023: 125, 2024: 159 },
  {
    id: 4,
    category: "Rata auto",
    2023: 4500,
    2024: 7000,
  },
  { id: 5, category: "Mutuo", 2023: 1950, 2024: 2500 },
  { id: 5, category: "TOTALE", 2023: 7500, 2024: 8000 },
];
