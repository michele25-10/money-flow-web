import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { Link } from "react-router-dom";

//SASS
import "./chartBox.scss";

type Props = {
  color: string;
  icon: string;
  name: string;
  surname: string;
  amount: number;
  percentuage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <span>{props.name + " " + props.surname}</span>
        </div>
        <h1>{props.amount}€</h1>
        <Link to="/">Visualizza Altro</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height={140}>
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 50 }}
              />

              <Line
                type="monotone"
                dataKey="pv"
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentuage"
            style={{ color: props.percentuage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentuage}%
          </span>
          <span className="duration">Questo mese</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
