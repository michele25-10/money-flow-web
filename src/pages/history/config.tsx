import { GridColDef } from "@mui/x-data-grid";

export const columnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "nome_cognome",
    headerName: "Nome Cognome",
    minWidth: 150,
  },
  {
    field: "luogo",
    headerName: "Luogo",
    minWidth: 150,
  },
  {
    field: "data",
    headerName: "Data",
    type: "date",
    minWidth: 110,
  },
  {
    field: "importo",
    headerName: "Importo",
    type: "number",
    minWidth: 110,
  },
  {
    field: "tipo_pagamento",
    headerName: "Pagamento",
    minWidth: 110,
  },
  {
    field: "descrizione",
    headerName: "Descrizione",
    minWidth: 150,
  },
  {
    field: "categoria",
    headerName: "Categoria",
    minWidth: 110,
  },
];
