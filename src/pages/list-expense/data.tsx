import { GridColDef } from "@mui/x-data-grid";

export const columnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "name_surname",
    headerName: "Nome Cognome",
    minWidth: 150,
  },
  {
    field: "place",
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
  {
    field: "type_payment",
    headerName: "Pagamento",
    minWidth: 110,
  },
  {
    field: "description",
    headerName: "Descrizione",
    minWidth: 150,
  },
  {
    field: "category",
    headerName: "Categoria",
    minWidth: 110,
  },
];

export const rowsTable = [
  {
    id: 1,
    name_surname: "Michele Gabrieli",
    place: "Tana del luppolo",
    date: new Date(),
    import: 50,
    type_payment: "Contante",
    description: "blablabla",
    category: "Amici",
  },
  {
    id: 2,
    name_surname: "Angela Gabrieli",
    place: "OVS",
    date: new Date(),
    import: 125,
    type_payment: "Bancomat",
    description: "blablabla",
    category: "Abbigliamento",
  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
