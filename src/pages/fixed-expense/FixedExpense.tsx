//COMPONENT
import TopBox from "../../components/topBox/TopBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

//CSS
import "./fixedExpense.scss";

import { topBox, boxBar7, boxPie4 } from "./data";

function FixedExpense() {
  return (
    <>
      <div className="fixedExpense">
        <div className="filterHeader">
          <div className="title">
            <h1>Spese Fisse</h1>
          </div>
        </div>
        <div className="gridFixedExpense">
          <div className="box tabellaSpese">
            <TopBox title="Categoria" data={topBox} />
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
