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

const category = [
  {
    name: "Amici",
    value: 0,
  },
  {
    name: "Abbigliamento",
    value: 1,
  },
  {
    name: "Auto",
    value: 2,
  },
  {
    name: "Cibo",
    value: 3,
  },
  {
    name: "Mediche",
    value: 4,
  },
];

export const columnExpense: GridColDef[] = [
  {
    headerName: "luogo",
    type: "text",
    field: "Luogo...",
    //required: true,
  },
  {
    headerName: "Data",
    type: "date",
    field: "Data...",
    //required: true,
  },
  {
    headerName: "Importo",
    type: "number",
    field: "Importo...",
    //required: true,
  },
  {
    headerName: "Descrizione",
    type: "text",
    field: "Descrizione...",
    //required: false,
  },
  {
    headerName: "Tipo Pagamento",
    type: "select",
    field: "Tipo Pagamento...",
    //required: true,
    /*options: [
      {
        field: "Contante",
        value: 0,
      },
      {
        field: " Bancomat",
        value: 1,
      },
    ],*/
  },
  {
    headerName: "Categoria",
    type: "select",
    field: "Categoria...",
    //required: true,
    //options: category,
  },
  {
    headerName: "Documento",
    type: "file",
    field: "Documento...",
    //required: false,
    //options: category,
  },
];
