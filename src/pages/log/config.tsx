import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
export const columnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "nome_cognome",
    headerName: "Nome Cognome",
    width: 150,
  },
  {
    field: "ip_address",
    headerName: "Indirizzo IP",
    width: 150,
  },
  {
    field: "dataora",
    headerName: "Data ora",
    type: "dateTime",
    width: 150,
    valueFormatter: (params) =>
      moment(params.value).format("DD/MM/YYYY HH:mm:ss"),
  },
  {
    field: "tipo_operazione",
    headerName: "Tipo Operazione",
    width: 150,
  },
  {
    field: "body",
    headerName: "Body",
    type: "json",
    width: 200,
  },
  {
    field: "token",
    headerName: "Token",
    width: 400,
  },
];
