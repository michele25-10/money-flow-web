//COMPONENT
import DataTable from "../../components/datatable/DataTable";

//Dati
import { columnExpense, columnsTable, rowsTable } from "./data";

//SASS
import "./list-expense.scss";
import AddModal from "../../components/addModal/AddModal";

function ListExpense() {
  return (
    <div className="listExpense">
      <div className="info">
        <h1>Elenco Spese Familiari</h1>
        <button
          onClick={() => (
            <AddModal title="Aggiungi spesa" columns={columnExpense} />
          )}
        >
          Aggiungi Spesa
        </button>
      </div>
      <DataTable columns={columnsTable} rows={rowsTable} action={true} />
    </div>
  );
}

export default ListExpense;
