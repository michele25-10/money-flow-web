import { useState } from "react";

//COMPONENT
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import GridBox from "../../components/gridBox/GridBox";
// import Filter from "./components/filter/Filter";

//icon
import FilterAltIcon from "@mui/icons-material/FilterAlt";

//CSS
import "./history.scss";

import { columnsTable } from "./config";

import { useGlobalState } from "../../utils/state";
import {
  getAnalyseExpenseFamily,
  getAverageUser,
  getDataCategory,
  getFamilyExpensePieChart,
  getLastExpense,
  getTotalExpense,
} from "./function/api";

function History() {
  const [year, setYear] = useState(new Date().getFullYear() - 1);

  const [showData, setShowData] = useState(false);

  const genitore: any = useGlobalState("flagGenitore");

  const [topTenCategory, setTopTenCategory] = useState([]);
  const [pieChartCategory, setPieChartCategory] = useState([]);
  const [averageYear, setAverageYear] = useState({
    amount: "",
    percentuage: "",
    name: "",
    surname: "",
    color: "",
    chartData: [],
  });
  const [totYear, setTotYear] = useState({});
  const [totalFamilyExpense, setTotalFamilyExpense] = useState([]);
  const [analyseExpenseFamily, setAnalyseExpenseFamily] = useState({});
  const [listExpense, setListExpense] = useState([]);

  const handleSubmit = () => {
    if (genitore[0]) {
      getDataCategory(year, true).then((res: any) => {
        setTopTenCategory(res.topTen);
      });

      getAverageUser(year, true).then((res: any) => {
        setAverageYear(res.year);
      });

      getTotalExpense(year, true).then((res: any) => {
        setTotYear(res.year);
      });

      getFamilyExpensePieChart(year).then((res: any) => {
        setTotalFamilyExpense(res);
      });

      getAnalyseExpenseFamily(year).then((res: any) => {
        setAnalyseExpenseFamily(res);
      });
    } else {
      getDataCategory(year, false).then((res: any) => {
        setTopTenCategory(res.topTen);
        setPieChartCategory(res.pieChart);
      });

      getAverageUser(year, false).then((res: any) => {
        setAverageYear(res.year);
      });

      getTotalExpense(year, false).then((res: any) => {
        setTotYear(res.year);
      });
    }

    getLastExpense(year).then((res: any) => {
      setListExpense(res);
    });

    setShowData(true);
  };
  return (
    <>
      <div className="history">
        {/*<div className="filter">
          <Filter />
        </div>*/}
        <div className="filterHeader">
          <div className="title">
            <h1>Storico</h1>
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
        <div className="historyGrid">
          {showData ? (
            <>
              {genitore[0] ? (
                <>
                  {topTenCategory.length > 0 ? (
                    <div className="box categoria">
                      <TopBox title="Categoria" data={topTenCategory} />
                    </div>
                  ) : null}

                  {Object.keys(analyseExpenseFamily).length > 0 ? (
                    <div className="box analisi">
                      <BigChartBox
                        title="Analisi Spese"
                        {...analyseExpenseFamily}
                      />
                    </div>
                  ) : null}

                  {totalFamilyExpense.length > 0 ? (
                    <div className="box divisione">
                      <PieChartBox
                        title="Divisione Spese"
                        legend={true}
                        chartData={totalFamilyExpense}
                      />
                    </div>
                  ) : null}

                  {Object.keys(totYear).length > 0 ? (
                    <div className="box totaleAnnualeGenitore">
                      <BarChartBox
                        title="Totale Annuale"
                        xDataKey="name"
                        dataKey="tot"
                        {...totYear}
                      />
                    </div>
                  ) : null}

                  <div className="box annoGenitore">
                    <ChartBox
                      percentuage=""
                      amount={averageYear.amount}
                      name={averageYear.name}
                      surname={averageYear.surname}
                      when={year}
                      color={averageYear.color}
                      chartData={averageYear.chartData}
                    />
                  </div>
                  {listExpense.length > 0 ? (
                    <div className="box tableExpense">
                      <GridBox
                        title={"Spese " + (year ? year.toString() : "")}
                        action={false}
                        data={listExpense}
                        columns={columnsTable}
                      />
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  {topTenCategory.length > 0 ? (
                    <div className="box categoria">
                      <TopBox title="Categoria" data={topTenCategory} />
                    </div>
                  ) : null}

                  {Object.keys(averageYear).length > 0 ? (
                    <div className="box totaleAnnuale">
                      <BarChartBox
                        title="Totale Annuale"
                        xDataKey="name"
                        dataKey="tot"
                        {...totYear}
                      />
                    </div>
                  ) : null}

                  {pieChartCategory ? (
                    <div className="box divisione">
                      <PieChartBox
                        title="Divisione Spese"
                        legend={false}
                        chartData={pieChartCategory}
                      />
                    </div>
                  ) : null}

                  {Object.keys(averageYear).length > 0 ? (
                    <div className="box anno">
                      <ChartBox
                        percentuage=""
                        amount={averageYear.amount}
                        name={averageYear.name}
                        surname={averageYear.surname}
                        when={year}
                        color={averageYear.color}
                        chartData={averageYear.chartData}
                      />
                    </div>
                  ) : null}

                  {listExpense.length > 0 ? (
                    <div className="box tableExpense">
                      <GridBox
                        title={"Spese " + (year ? year.toString() : "")}
                        action={false}
                        data={listExpense}
                        columns={columnsTable}
                      />
                    </div>
                  ) : null}
                </>
              )}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default History;
