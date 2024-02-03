//COMPONENT
import DataTable from "../../components/datatable/DataTable";

//Dati
import { columnsTable, rowsTable } from "./data";

//SASS
import "./list-expense.scss";

function ListExpense() {
  return (
    <div className="listExpense">
      <div className="info">
        <h1>Elenco Spese Familiari</h1>
      </div>
      <DataTable columns={columnsTable} rows={rowsTable} />
    </div>
  );
}

export default ListExpense;
