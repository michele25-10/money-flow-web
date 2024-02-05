//COMPONENT
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

//CSS
import "./home.scss";

import { topBox, box1, box2, boxBar7, boxBar8, boxBar9, boxPie4 } from "./data";

function Home() {
  return (
    <>
      <div className="dashboard">
        <div className="box box1">
          <TopBox title="Categoria" data={topBox} />
        </div>
        <div className="box box2">
          <ChartBox {...box1} />
        </div>
        <div className="box box3">
          <ChartBox {...box2} />
        </div>
        <div className="box box4">
          <PieChartBox {...boxPie4} />
        </div>
        <div className="box box7">
          <BigChartBox {...boxBar7} />
        </div>
        <div className="box box8">
          <BarChartBox {...boxBar8} />
        </div>
        <div className="box box9">
          <BarChartBox {...boxBar9} />
        </div>
      </div>
    </>
  );
}

export default Home;
