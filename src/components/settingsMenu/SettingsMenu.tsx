import { useState } from "react";

//sass
import "./settingsMenu.scss";

//icons
import { SvgIconProps } from "@mui/material";

type Props = {
  title: string;
  icon: SvgIconProps;
  data: Data[];
  setSelectedItem: React.Dispatch<React.SetStateAction<{}>>;
};

type Data = {
  id: string;
  img: string;
  icon: SvgIconProps;
  name_surname: string;
  email: string;
};

const SettingsMenu = (props: Props) => {
  return (
    <div className="settingsMenu">
      <div className="title">
        {props.icon}
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
              {item.email ? <span className="email">{item.email}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
