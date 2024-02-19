import { useState } from "react";

//Import material grid
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

//icons
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DescriptionIcon from "@mui/icons-material/Description";

//SASS
import "./dataTable.scss";

//components
import DeleteModal from "../deleteModal/DeleteModal";
import AddModal from "../../pages/list-expense/components/addModal/AddModal";
import { json } from "stream/consumers";

type Props = {
  action: boolean;
  columns: GridColDef[];
  rows: object[];
  deleteCallback: (params: any) => any;
  editCallback: (params: any) => any;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  categorie: Categorie[];
};

type Categorie = {
  id: string;
  nome: string;
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
          {params.row.documento ? (
            <div
              className="document"
              onClick={() => {
                console.log(params.row.documento);
                /*const blobPdf = new Blob(
                  [JSON.stringify(params.row.documento)],
                  {
                    type: "application/pdf",
                  }
                );
                //Crea un URL oggetto per il blob
                const url = URL.createObjectURL(blobPdf);

                console.log(url);

                // Apri il PDF in una nuova scheda
                window.open(url);
                  */
              }}
            >
              <DescriptionIcon
                style={{
                  color: "#007fff",
                  width: "20px",
                  height: "20px",
                  cursor: "pointer",
                }}
              />
            </div>
          ) : null}
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
                cursor: "pointer",
              }}
            />
          </div>
          <div
            className="delete"
            onClick={() => {
              setIdDelete(params.row.id);
              setDeleteModalShow(true);
            }}
            style={{ cursor: "pointer" }}
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
        setRefresh={props.setRefresh}
      />

      <AddModal
        show={editModalShow}
        setShow={setEditModalShow}
        callback={props.editCallback}
        setRefresh={props.setRefresh}
        data={dataEdit}
        edit={true}
        categorie={props.categorie}
      />
    </div>
  );
};

export default DataTable;
