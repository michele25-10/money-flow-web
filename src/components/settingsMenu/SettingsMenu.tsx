import { useState } from "react";

//sass
import "./settingsMenu.scss";

//icons
import PeopleIcon from "@mui/icons-material/People";

type Props = {
  title: string;
  data: Data[];
  setSelectedItem: React.Dispatch<React.SetStateAction<{}>>;
};

type Data = {
  id: string;
  img: string;
  name_surname: string;
  email: string;
};

const SettingsMenu = (props: Props) => {
  return (
    <div className="settingsMenu">
      <div className="title">
        <PeopleIcon style={{ color: "white", height: "50px", width: "50px" }} />
        <h1>{props.title}</h1>
      </div>
      <div className="menu">
        {props.data.map((item) => (
          <div
            className="item"
            key={item.id}
            onClick={() => props.setSelectedItem(item)}
          >
            <div className="itemImg">
              <img src={item.img ? item.img : "/user.svg"} alt="" />
            </div>
            <div className="itemData">
              <span className="name">{item.name_surname}</span>
              <span className="email">{item.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
