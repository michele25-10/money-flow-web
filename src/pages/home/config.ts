import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";

export const gridColumnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
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
];
