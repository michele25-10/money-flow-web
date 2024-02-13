//COMPONENT
import GridBox from "../../components/gridBox/GridBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

//CSS
import "./fixedExpense.scss";

//icon
import FilterAltIcon from "@mui/icons-material/FilterAlt";

//data
import { dataGridTable, gridColumnsTable, boxBar7, boxPie4 } from "./data";

function FixedExpense() {
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
                max={new Date().getFullYear()}
                step="1"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Anno"
              />
            </div>
            <div className="span">
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
      </div>
    </>
  );
}

export default FixedExpense;
