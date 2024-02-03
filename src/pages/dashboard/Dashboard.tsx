//COMPONENT
import BarChartBox from "./component/barChartBox/BarChartBox";
import ChartBox from "./component/chartbox/ChartBox";
import TopBox from "./component/topBox/TopBox";
import PieChartBox from "./component/pieChartBox/PieChartBox";

//CSS
import "./dashboard.scss";

import { box1, box2, box3, box4, boxBar8, boxBar9, boxPie4 } from "./data";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="box box1">
          <TopBox />
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
        <div className="box box5">
          <ChartBox {...box3} />
        </div>
        <div className="box box6">
          <ChartBox {...box4} />
        </div>
        <div className="box box7">box7</div>
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

export default Dashboard;
