import { useState } from "react";
import { Link } from "react-router-dom";

//dati
import { menu } from "./data";

//sass
import "./menu.scss";

//icons
import ChevronLeftTwoToneIcon from "@mui/icons-material/ChevronLeftTwoTone";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

//FUNCTION
import { isAuthorised } from "../../utils/auth";

function Menu() {
  const [open, setOpen] = useState(true);

  const arrowIconStyle = {
    color: "white",
    backgroundColor: "#6f42c1",
    borderRadius: "50%",
  };

  const showElementMenu = (id_autorizzazione: number): any => {
    const check = isAuthorised(id_autorizzazione);
    return check.value;
  };

  return (
    <>
      <div className="menu">
        <div className="closeButton" onClick={() => setOpen(!open)}>
          {open ? (
            <ChevronLeftTwoToneIcon style={arrowIconStyle} />
          ) : (
            <ChevronRightTwoToneIcon style={arrowIconStyle} />
          )}
        </div>
        {menu.map((item) => (
          <div className="item" key={item.id}>
            {open ? <div className="title">{item.title}</div> : null}
            {item.listItems.map((listItem) =>
              showElementMenu(listItem.id_autorizzazione) ? (
                <Link to={listItem.url} className="listItem" key={listItem.id}>
                  <img src={listItem.icon} alt={listItem.title} />
                  {open ? (
                    <span className="listItemTitle">{listItem.title}</span>
                  ) : null}
                </Link>
              ) : null
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
