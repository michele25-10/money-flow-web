import { useState } from "react";

//sass
import "./settingsMenu.scss";

//icons
import { SvgIconProps } from "@mui/material";

type Props = {
  title: string;
  icon: React.ReactElement<SvgIconProps>;
  data: Data[];
  setSelectedItem: React.Dispatch<React.SetStateAction<{}>>;
};

type Data = {
  id: string;
  img?: string;
  name_surname: string;
  email?: string;
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
              {item.img ? (
                <img src={item.img ? item.img : "/user.svg"} alt="" />
              ) : null}
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
