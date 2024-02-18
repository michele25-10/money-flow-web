import { useState } from "react";

//Import material grid
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

//icons
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

//SASS
import "./dataTable.scss";

//components
import DeleteModal from "../deleteModal/DeleteModal";
import AddModal from "../../pages/list-expense/components/addModal/AddModal";

type Props = {
  action: boolean;
  columns: GridColDef[];
  rows: object[];
  deleteCallback: (params: any) => any;
  editCallback: (params: any) => any;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
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
            <EditTwoToneIcon
              style={{
                color: "orange",
                width: "20px",
                height: "20px",
              }}
            />
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

      <AddModal
        show={editModalShow}
        setShow={setEditModalShow}
        callback={props.editCallback}
        setRefresh={props.setRefresh}
        data={dataEdit}
        edit={true}
      />
    </div>
  );
};

export default DataTable;
