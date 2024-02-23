import { useState } from "react";

//COMPONENT
import GridBox from "../../components/gridBox/GridBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

//CSS
import "./fixedExpense.scss";

//icon
import FilterAltIcon from "@mui/icons-material/FilterAlt";

//data
import { boxBar7, boxPie4 } from "./data";
import { GridColDef } from "@mui/x-data-grid";
import { getDataGrid } from "./function/api";

function FixedExpense() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [year, setYear] = useState(new Date().getFullYear() - 1);
  const [showData, setShowData] = useState(false);

  const [gridColumnsTable, setGridColumnsTable] = useState<GridColDef[]>([]);
  const [dataGridTable, setDataGridTable] = useState([]);

  const handleSubmit = () => {
    setGridColumnsTable([
      {
        field: "id",
        headerName: "ID",
        width: 60,
        headerClassName: "bold-header",
      },
      {
        field: "name",
        headerName: "Categoria",
        minWidth: 200,
        headerClassName: "bold-header",
        cellClassName: (params) => {
          return params.row.name === "TOTALE" ? "bold-cell" : "";
        },
      },
      {
        field: year.toString(),
        headerName: year.toString(),
        type: "number",
        minWidth: 200,
        headerClassName: "bold-header",
        renderCell: (params) => {
          if (!params.row[year.toString()]) {
            params.row[year.toString()] = 0;
          }

          return params.row[year.toString()];
        },
        cellClassName: (params) => {
          return params.row.name === "TOTALE" ? "bold-cell" : "";
        },
      },
      {
        field: currentYear.toString(),
        headerName: currentYear.toString(),
        type: "number",
        minWidth: 200,
        headerClassName: "bold-header",
        renderCell: (params) => {
          if (!params.row[currentYear.toString()]) {
            params.row[currentYear.toString()] = 0;
          }

          return params.row[currentYear.toString()];
        },
        cellClassName: (params) => {
          return params.row.name === "TOTALE" ? "bold-cell" : "";
        },
      },
    ]);

    getDataGrid(year).then((res: any) => {
      setDataGridTable(res);
    });

    setShowData(true);
  };

  return (
    <>
      <div className="fixedExpense">
        <div className="filterHeader">
          <div className="title">
            <h1>Spese Fisse</h1>
          </div>
          <div className="filterFormElement">
            <div className="inputLayer">
              <input
                type="number"
                min="1900"
                max={new Date().getFullYear() - 1}
                step="1"
                value={year}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value < new Date().getFullYear()) {
                    setYear(value);
                  }
                }}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Anno"
              />
            </div>
            <div className="span" onClick={handleSubmit}>
              <FilterAltIcon
                style={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
        {showData ? (
          <div className="gridFixedExpense">
            <div className="box tabellaSpese">
              <GridBox
                title="Ultime Spese"
                action={false}
                data={dataGridTable}
                columns={gridColumnsTable}
              />
            </div>
            <div className="box suddivisioneSpese">
              <PieChartBox {...boxPie4} />
            </div>
            <div className="box analisiAnnua">
              <BigChartBox {...boxBar7} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default FixedExpense;
