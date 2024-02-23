import { useEffect, useState } from "react";

//COMPONENT
import DataTable from "../../components/datatable/DataTable";
import { columnsTable } from "./config";

//SASS
import "./log.scss";
import { getAllLog } from "./function/api";

function Log() {
  const [rowsTable, setRowsTable] = useState([
    {
      id: "",
      nome_cognome: "",
      ip_address: "",
      dataora: "",
      tipo_operazione: "",
      body: "",
      token: "",
    },
  ]);

  useEffect(() => {
    const result = getAllLog();
    result.then((res) => {
      setRowsTable(res);
    });
  }, []);

  return (
    <div className="logContainer">
      <div className="info">
        <h1>Log</h1>
      </div>
      {rowsTable?.length > 0 ? (
        <DataTable columns={columnsTable} rows={rowsTable} action={false} />
      ) : null}
    </div>
  );
}

export default Log;
