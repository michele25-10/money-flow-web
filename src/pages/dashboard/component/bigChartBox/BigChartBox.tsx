import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

type Props = {
  chartData: object[];
};

const BigChartBox = (props: Props) => {
  return (
    <div className="bigChartBox">
      <h1>Analisi Spese</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={props.chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="gianluca_gabrieli"
              stackId="1"
              stroke="#0088fe"
              fill="#0088fe"
            />
            <Area
              type="monotone"
              dataKey="angela_gabrieli"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="pietro_gabrieli"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            <Area
              type="monotone"
              dataKey="michele_gabrieli"
              stackId="1"
              stroke="#ff8042"
              fill="#ff8042"
            />
            <Area
              type="monotone"
              dataKey="elena_ferraresi"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
