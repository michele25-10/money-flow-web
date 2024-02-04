import { GridColDef } from "@mui/x-data-grid";

export const columnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "name_surname",
    headerName: "Nome Cognome",
    width: 150,
  },
  {
    field: "id_sessione",
    headerName: "Id sessione",
    width: 150,
  },
  {
    field: "ip_address",
    headerName: "Indirizzo IP",
    width: 150,
  },
  {
    field: "datetime",
    headerName: "Data ora",
    type: "datetime",
    width: 150,
  },
  {
    field: "type_operation",
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
    width: 200,
  },
];

export const rowsTable = [
  {
    id: 1,
    name_surname: "Michele Gabrieli",
    id_sessione: "sadasdasd-asdasda-dasd",
    ip_address: "192.168.1.25",
    datetime: "15-10-2024 15:30:00",
    type_operation: "Inserimento",
    body: '{"aasda":"asdasd"}',
    token: "asdasdhiqyudbansdyavdhbansdgyvubanshdgyavubasndhv",
  },
  {
    id: 2,
    name_surname: "Angela Gabrieli",
    id_sessione: "sadasdasd-asdasda-dasd",
    ip_address: "192.168.1.25",
    datetime: "15-10-2024 15:30:00",
    type_operation: "Eliminazione",
    body: '{"aasda":"asdasd"}',
    token: "asdasdhiqyudbansdyavdhbansdgyvubanshdgyavubasndhv",
  },
];
