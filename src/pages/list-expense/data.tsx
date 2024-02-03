import { GridColDef } from "@mui/x-data-grid";

export const columnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "name_surname",
    headerName: "Nome Cognome",
    width: 150,
  },
  {
    field: "local",
    headerName: "Luogo",
    width: 150,
  },
  {
    field: "date",
    headerName: "Data",
    type: "date",
    width: 110,
  },
  {
    field: "import",
    headerName: "Importo",
    type: "valuta",
    width: 110,
  },
  {
    field: "type_payment",
    headerName: "Pagamento",
    width: 110,
  },
  {
    field: "description",
    headerName: "Descrizione",
    width: 150,
  },
  {
    field: "category",
    headerName: "Categoria",
    width: 110,
  },
];

export const rowsTable = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
