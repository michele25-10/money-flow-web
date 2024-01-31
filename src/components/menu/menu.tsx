import { Link } from "react-router-dom";

import { menu } from "./data";

import "./menu.scss";

function Menu() {
  return (
    <>
      <div className="menu">
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <div className="title">{item.title}</div>
            {item.listItems.map((listItem) => (
              <Link to={listItem.url} className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt={listItem.title} />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
