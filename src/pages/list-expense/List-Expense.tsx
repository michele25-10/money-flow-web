//COMPONENT
import { useEffect, useState } from "react";

//component
import DataTable from "../../components/datatable/DataTable";
import AddModal from "./components/addModal/AddModal";

//Dati
import { columnsTable } from "./data";

//icone
import AddIcon from "@mui/icons-material/Add";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";

//SASS
import "./list-expense.scss";

//function
import {
  deleteElement,
  editElement,
  addElement,
  getAllElement,
  getAllCategory,
} from "./function/api";

function ListExpense() {
  const [modalShow, setModalShow] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [rowsTable, setRowsTable] = useState([
    {
      id: "",
      nome_cognome: "",
      luogo: "",
      data: "",
      importo: "",
      tipo_pagamento: "",
      descrizione: "",
      categoria: "",
      id_categoria: "",
      documento: "",
    },
  ]);
  const [categorie, setCategorie] = useState([
    {
      id: "",
      nome: "",
    },
  ]);

  useEffect(() => {
    if (refresh) {
      const result = getAllElement();
      result.then((res) => {
        setRowsTable(res);
        setRefresh(false);
      });
    }
  }, [refresh]);

  useEffect(() => {
    const result = getAllCategory();
    result.then((res) => {
      setCategorie(res);
      console.log(categorie);
    });
  }, []);

  return (
    <div className="listExpense">
      <div className="tableContainer">
        <div className="info">
          <h1>
            <span className="icon">
              <Diversity1TwoToneIcon
                style={{
                  color: "white",
                  height: "40px",
                  width: "40px",
                  marginRight: "20px",
                }}
              />
            </span>
            Spese Familiari
          </h1>
          <button
            className="btn btn-success"
            onClick={() => setModalShow(true)}
          >
            <AddIcon
              style={{
                height: "30px",
                width: "30px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </button>
        </div>

        <DataTable
          columns={columnsTable}
          rows={rowsTable}
          action={true}
          deleteCallback={deleteElement}
          editCallback={editElement}
          setRefresh={setRefresh}
          categorie={categorie}
        />

        <AddModal
          show={modalShow}
          setShow={setModalShow}
          callback={addElement}
          data={{}}
          setRefresh={setRefresh}
          edit={false}
          categorie={categorie}
        />
      </div>
    </div>
  );
}

export default ListExpense;
