import { useState, useEffect } from "react";

//SASS
import "./authBox.scss";

//function
import { getAuthUser } from "./function/api";

//icons
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";

type Props = {
  itemData: Data;
};

type Data = {
  id: string;
  img: string;
  name_surname: string;
  email: string;
};

type AuthData = {
  name: string;
  description: string;
  value: boolean;
  id: number;
};

const AuthBox = (props: Props) => {
  const [authList, setAuthList] = useState([]);

  useEffect(() => {
    console.log("get auth");
    const res: AuthData[] = getAuthUser(props.itemData.id);
    setAuthList(res);
  }, [props.itemData.id]);

  return (
    <div className="authBox">
      <div className="infoBox">
        <div className="imgBox">
          <img
            src={props.itemData.img ? props.itemData.img : "/user.svg"}
            alt=""
            className="profile"
          />
        </div>
        <h1>{props.itemData.name_surname}</h1>
      </div>
      <div className="listItem">
        {authList
          ? authList.map((item: AuthData) => (
              <div className="item" key={item.id}>
                <div className="iconBox">
                  {item.value ? (
                    <LockOpenTwoToneIcon
                      style={{
                        color: "limegreen",
                        height: "40px",
                        width: "40px",
                      }}
                    />
                  ) : (
                    <LockTwoToneIcon
                      style={{
                        color: "#fe0000",
                        height: "40px",
                        width: "40px",
                      }}
                    />
                  )}
                </div>
                <div className="infoItem">
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default AuthBox;
