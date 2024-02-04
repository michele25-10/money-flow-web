//COMPONENT
import DataTable from "../../components/datatable/DataTable";
import { columnsTable, rowsTable } from "./data";

//SASS
import "./log.scss";

function Log() {
  return (
    <div className="logContainer">
      <div className="info">
        <h1>Log</h1>
      </div>
      <DataTable columns={columnsTable} rows={rowsTable} action={false} />
    </div>
  );
}

export default Log;
