import { useEffect, useState } from "react";

//COMPONENT
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import GridBox from "../../components/gridBox/GridBox";

//CSS
import "./home.scss";

import { gridColumnsTable } from "./config";

//API
import {
  getAverageUser,
  getDataCategory,
  getLastExpense,
  getTotalExpense,
} from "./function/api";

function Home() {
  const [topTenCategory, setTopTenCategory] = useState([]);
  const [pieChartCategory, setPieChartCategory] = useState([]);

  const [averageMonth, setAverageMonth] = useState({});
  const [averageYear, setAverageYear] = useState({});

  const [totWeek, setTotWeek] = useState({});
  const [totYear, setTotYear] = useState({});

  const [lastExpense, setLastExpense] = useState([]);

  useEffect(() => {
    getDataCategory().then((res: any) => {
      setTopTenCategory(res.topTen);
      setPieChartCategory(res.pieChart);
    });

    getAverageUser().then((res: any) => {
      setAverageMonth(res.month);
      setAverageYear(res.year);
    });

    getTotalExpense().then((res: any) => {
      setTotWeek(res.week);
      setTotYear(res.year);
    });

    getLastExpense().then((res: any) => {
      setLastExpense(res);
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

        {Object.keys(averageMonth).length > 0 ? (
          <div className="box box2">
            <ChartBox {...averageMonth} />
          </div>
        ) : null}

        {Object.keys(averageYear).length > 0 ? (
          <div className="box box3">
            <ChartBox {...averageYear} />
          </div>
        ) : null}

        {pieChartCategory ? (
          <div className="box box4">
            <PieChartBox
              title="Divisione Spese"
              legend={false}
              chartData={pieChartCategory}
            />
          </div>
        ) : null}

        {lastExpense.length > 0 ? (
          <div className="box gridBox">
            <GridBox
              title="Ultime Spese"
              action={false}
              data={lastExpense}
              columns={gridColumnsTable}
            />
          </div>
        ) : null}

        {Object.keys(totWeek).length > 0 ? (
          <div className="box box8">
            <BarChartBox
              title="Totale Settimanale"
              xDataKey="name"
              dataKey="tot"
              {...totWeek}
            />
          </div>
        ) : null}

        {Object.keys(averageYear).length > 0 ? (
          <div className="box box9">
            <BarChartBox
              title="Totale Annuale"
              xDataKey="name"
              dataKey="tot"
              {...totYear}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Home;
