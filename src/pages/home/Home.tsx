import { useEffect, useState } from "react";

//COMPONENT
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import GridBox from "../../components/gridBox/GridBox";

//CSS
import "./home.scss";

import {
  box1,
  box2,
  gridColumnsTable,
  dataGridTable,
  boxBar8,
  boxBar9,
} from "./data";

//API
import { getDataCategory } from "./function/api";

function Home() {
  const [topTenCategory, setTopTenCategory] = useState([]);
  const [pieChartCategory, setPieChartCategory] = useState([]);

  useEffect(() => {
    getDataCategory().then((res: any) => {
      setTopTenCategory(res.topTen);
      setPieChartCategory(res.pieChart);

      console.log(pieChartCategory);
    });
  }, []);

  return (
    <>
      <div className="dashboard">
        {topTenCategory.length > 0 ? (
          <div className="box box1">
            <TopBox title="Categoria" data={topTenCategory} />
          </div>
        ) : null}

        <div className="box box2">
          <ChartBox {...box1} />
        </div>
        <div className="box box3">
          <ChartBox {...box2} />
        </div>

        {pieChartCategory ? (
          <div className="box box4">
            <PieChartBox
              title="Divisione Spese"
              legend={false}
              chartData={pieChartCategory}
            />
          </div>
        ) : null}

        <div className="box gridBox">
          <GridBox
            title="Ultime Spese"
            action={false}
            data={dataGridTable}
            columns={gridColumnsTable}
          />
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
