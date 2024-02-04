//Import material grid
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

//SASS
import "./dataTable.scss";

type Props = {
  action: boolean;
  columns: GridColDef[];
  rows: object[];
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    console.log(id + " elemento da eliminare");
  };

  const handleEdit = (id: number) => {
    console.log(id + " Modal per modificare");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Azione",
    width: 100,
    disableExport: true,
    disableReorder: true,
    renderCell: (params) => {
      return (
        <div className="action">
          <div className="edit" onClick={() => handleEdit(params.row.id)}>
            <img src="/view.svg" alt="" />
          </div>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
            columns: {
              columnVisibilityModel: {
                id: false,
                action: props.action,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quicKFilterProps: {
                debouncMs: 500,
              },
            },
          }}
          pageSizeOptions={[15]}
          disableRowSelectionOnClick
          disableDensitySelector
          disableColumnSelector
          disableColumnMenu
        />
      </Box>
    </div>
  );
};

export default DataTable;
