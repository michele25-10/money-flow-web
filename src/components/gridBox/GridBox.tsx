//SASS
import "./gridBox.scss";

//Component
import DataTable from "../datatable/DataTable";

//Type data
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  title: string;
  action: boolean;
  columns: GridColDef[];
  data: object[];
};

const GridBox = (props: Props) => {
  return (
    <div className="gridBox">
      <div className="info">
        <h1>{props.title}</h1>
      </div>
      <div className="dataGrid">
        <DataTable
          action={props.action}
          columns={props.columns}
          rows={props.data}
        />
      </div>
    </div>
  );
};

export default GridBox;
