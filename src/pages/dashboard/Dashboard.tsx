import { useEffect, useState } from "react";

//COMPONENT
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

//CSS
import "./dashboard.scss";

import {
  topBox,
  box1,
  box2,
  box3,
  box4,
  boxBar7,
  boxBar8,
  boxBar9,
  boxPie4,
} from "./data";

import {
  getAnalyseExpenseFamily,
  getAverageUser,
  getDataCategory,
  getFamilyExpensePieChart,
  getTotalExpense,
} from "./function/api";

function Dashboard() {
  const [topTenCategory, setTopTenCategory] = useState([]);

  const [averageMonth, setAverageMonth] = useState({});
  const [averageYear, setAverageYear] = useState({});

  const [totWeek, setTotWeek] = useState({});
  const [totYear, setTotYear] = useState({});

  const [totalFamilyExpense, setTotalFamilyExpense] = useState([]);

  const [analyseExpenseFamily, setAnalyseExpenseFamily] = useState({});

  useEffect(() => {
    getDataCategory().then((res: any) => {
      setTopTenCategory(res.topTen);
    });

    getAverageUser().then((res: any) => {
      setAverageMonth(res.month);
      setAverageYear(res.year);
    });

    getTotalExpense().then((res: any) => {
      setTotWeek(res.week);
      setTotYear(res.year);
    });

    getFamilyExpensePieChart().then((res: any) => {
      setTotalFamilyExpense(res);
      console.log(res);
    });

    getAnalyseExpenseFamily().then((res: any) => {
      setAnalyseExpenseFamily(res);
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
        {totalFamilyExpense.length > 0 ? (
          <div className="box box4">
            <PieChartBox
              title="Divisione Spese"
              legend={true}
              chartData={totalFamilyExpense}
            />
          </div>
        ) : null}

        <div className="box box5">
          <ChartBox {...box3} />
        </div>
        <div className="box box6">
          <ChartBox {...box4} />
        </div>
        {Object.keys(analyseExpenseFamily).length > 0 ? (
          <div className="box box7">
            <BigChartBox title="Analisi Spese" {...analyseExpenseFamily} />
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

export default Dashboard;
