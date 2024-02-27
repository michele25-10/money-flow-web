//sass
import "./settingsMenu.scss";

//icons
//import { SvgIconProps } from "@mui/material";

/*type Props = {
  title: string;
  icon: React.ReactElement<SvgIconProps>;
  data: Data[];
  setSelectedItem: React.Dispatch<
    React.SetStateAction<{
      id: string;
      name_surname: string;
      email: string;
      img: string;
    }>
  >;
};

type Data = {
  id: string;
  img: string;
  name_surname: string;
  email: string;
};*/

const SettingsMenu = (props: any) => {
  console.log(props.data);
  console.log(props.data[0].img ? props.data[0].img : "/user.svg");
  return (
    <div className="settingsMenu">
      <div className="title">
        {props.icon}
        <h1>{props.title}</h1>
      </div>
      <div className="menu">
        {props.data.map((item: any) => (
          <div
            className="item"
            key={item.id}
            onClick={() =>
              props.setSelectedItem({
                name_surname: item.name_surname,
                img: item.img ? item.img : "",
                email: item.email,
                id: item.id,
              })
            }
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
