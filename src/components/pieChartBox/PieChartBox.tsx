import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

type Props = {
  title: string;
  legend: boolean;
  chartData: any;
};

const PieChartBox = (props: Props) => {
  return (
    <div className="pieChartBox">
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Pie
              data={props.chartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {props.chartData.map((item: any) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {props.legend ? (
          <>
            {props.chartData.map((item: any) => (
              <div className="option" key={item.name}>
                <div className="title">
                  <div
                    className="dot"
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.name}</span>
                </div>
                <span>{item.value}€</span>
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PieChartBox;
