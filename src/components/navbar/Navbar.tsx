import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

//sass
import "./navbar.scss";

//Material ICONS
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { setGlobalState } from "../../utils/state";

function Navbar() {
  const navigate = useNavigate();

  const [nameUser, setNameUser] = useState("");

  useEffect(() => {
    setNameUser(sessionStorage.getItem("name") || "");
  }, []);

  const handleLogout = () => {
    setGlobalState("auth", []);
    setGlobalState("dev", false);
    sessionStorage.clear();
    navigate("login");
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="mainLogo.png" alt="logo" />
        </div>
        <div className="icons">
          <div className="user">
            {/*<img
              src="https://avatars.githubusercontent.com/u/72445614?v=4"
              alt="img-profilo"/>*/}
            <span>{nameUser}</span>
          </div>
          <div className="logout">
            <span onClick={() => handleLogout()}>
              <ExitToAppIcon
                style={{ color: "tomato", height: "25px", width: "25px" }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
