import { useNavigate } from "react-router-dom";

//sass
import "./navbar.scss";

//Material ICONS
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    navigate("login");
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="logo" />
          <span>Money-Flow</span>
        </div>
        <div className="icons">
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/72445614?v=4"
              alt="img-profilo"
            />
            <span>Michele Gabrieli</span>
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
