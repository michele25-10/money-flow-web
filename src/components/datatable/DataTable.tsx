import { useState } from "react";

//Import material grid
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

//SASS
import "./dataTable.scss";
import DeleteModal from "../deleteModal/deleteModal";

//components

type Props = {
  action: boolean;
  columns: GridColDef[];
  rows: object[];
  deleteCallback: (params: any) => any;
  editCallback: () => boolean;
};

const DataTable = (props: Props) => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [idDelete, setIdDelete] = useState(0);

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Azione",
    width: 100,
    disableExport: true,
    disableReorder: true,
    renderCell: (params) => {
      return (
        <div className="action">
          <div
            className="edit"
            onClick={() => {
              setDataEdit(params.row);
              setEditModalShow(true);
            }}
          >
            <img src="/view.svg" alt="" />
          </div>
          <div
            className="delete"
            onClick={() => {
              setIdDelete(params.row.id);
              setDeleteModalShow(true);
            }}
          >
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <Box sx={{ height: "70vh", width: "100%" }}>
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
              quickfilterprops: {
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

      <DeleteModal
        title="Attenzione!"
        body="Sei sicuro/a di voler effettuare questa operazione, le modifiche non potranno essere ripristinate."
        show={deleteModalShow}
        setShow={setDeleteModalShow}
        id={idDelete}
        callback={props.deleteCallback}
      />
      
    </div>
  );
};

export default DataTable;
