import { useEffect, useState } from "react";

//COMPONENT
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import MiddleBox from "../../components/middleBox/MiddleBox";

//CSS
import "./dashboard.scss";

import {
  getAnalyseExpenseFamily,
  getAverageUser,
  getDataCategory,
  getFamilyExpensePieChart,
  getTotalExpense,
  getTotalFamilyExpenseCategory,
} from "./function/api";

function Dashboard() {
  const [topTenCategory, setTopTenCategory] = useState([]);

  const [averageMonth, setAverageMonth] = useState({});
  const [averageYear, setAverageYear] = useState({});

  const [totWeek, setTotWeek] = useState({});
  const [totYear, setTotYear] = useState({});

  const [totalFamilyExpense, setTotalFamilyExpense] = useState([]);

  const [analyseExpenseFamily, setAnalyseExpenseFamily] = useState({});

  const [categoryFigli, setCategoryFigli] = useState([]);
  const [categoryGenitori, setCategoryGenitori] = useState([]);

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
    });

    getAnalyseExpenseFamily().then((res: any) => {
      setAnalyseExpenseFamily(res);
    });

    getTotalFamilyExpenseCategory().then((res: any) => {
      setCategoryFigli(res.figli);
      setCategoryGenitori(res.genitori);
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

        {categoryFigli.length > 0 ? (
          <div className="box box5">
            <MiddleBox title="Figli" data={categoryFigli} />
          </div>
        ) : null}

        {categoryGenitori.length > 0 ? (
          <div className="box box6">
            <MiddleBox title="Genitori" data={categoryGenitori} />
          </div>
        ) : null}

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
