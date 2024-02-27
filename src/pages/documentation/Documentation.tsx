//ICONS
import SearchIcon from "@mui/icons-material/Search";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
//import MoreVertIcon from "@mui/icons-material/MoreVert";

//SASS
import "./documentation.scss";

//DATI
//import { docs } from "./data";

//bootstrap components
//import { Dropdown } from "react-bootstrap";

/*type Doc = {
  id: number;
  name: string;
  type: string;
};*/

const Documentation = (props: any) => {
  const styleIcons = {
    color: "white",
    height: "70px",
    width: "70px",
    cursor: "pointer",
  };

  return (
    <div className="documentation">
      <div className="headerForm">
        <div className="title">
          <h1>Drive</h1>
        </div>
        <div className="searchForm">
          <input
            type="text"
            className="form-control"
            id="searchDoc"
            placeholder="Cerca..."
          />
          <div className="icons">
            <SearchIcon
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
      <div className="containerDocs">
        <div className="gridDocs">
          {props.docs.map((item: any) => (
            <div className="item" key={item.id}>
              <div className="menuOption">
                <div className="iconMenu"></div>
              </div>
              <div className="iconDoc">
                {item.type === "folder" ? (
                  <FolderIcon style={styleIcons} />
                ) : (
                  <ArticleIcon style={styleIcons} />
                )}
              </div>
              <div className="title">
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="addButton">
          <button type="button" className="btn btn-success">
            <AddToDriveIcon
              style={{
                height: "30px",
                width: "30px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
