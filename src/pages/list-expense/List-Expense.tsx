//COMPONENT
import { useState } from "react";

//component
import DataTable from "../../components/datatable/DataTable";
import AddModal from "./components/addModal/AddModal";

//Dati
import { columnsTable, rowsTable } from "./data";

//icone
import AddIcon from "@mui/icons-material/Add";

//SASS
import "./list-expense.scss";

function ListExpense() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="listExpense">
      <div className="info">
        <h1>Elenco Spese Familiari</h1>
        <div className="addIcon">
          <span
            onClick={() => {
              console.log("click");
              setModalShow(true);
            }}
          >
            <AddIcon
              style={{
                height: "30px",
                width: "30px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </span>
        </div>
      </div>
      <DataTable columns={columnsTable} rows={rowsTable} action={true} />

      <AddModal
        show={modalShow}
        setShow={setModalShow}
        callBack={() => console.log("Inserito")}
        edit={false}
      />
    </div>
  );
}

export default ListExpense;
