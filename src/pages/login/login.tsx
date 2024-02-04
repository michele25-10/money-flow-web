import { useState } from "react";
import "./login.scss";

//ICON material ui
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";

const handleLogin = () => {
  console.log("Login");
  location.href = "http://localhost:5173/";
};

function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="background">
      <div className="containerLogin">
        <div className="imgLogo">
          <img
            src="https://us.123rf.com/450wm/popcornarts/popcornarts2311/popcornarts231102334/218740987-asset-and-money-icon-concept.jpg?ver=6"
            alt=""
          />
        </div>
        <div className="formData">
          <form>
            <div className="mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white" id="basic-addon1">
                  <GroupIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="family"
                  placeholder="Famiglia..."
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white" id="basic-addon1">
                  <PersonIcon />
                </span>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Username..."
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white">
                  <LockIcon />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  className="form-control"
                  id="password"
                  placeholder="Password..."
                  required
                />
                <span
                  className="input-group-text bg-white"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </span>
              </div>
            </div>
            <div className="submit-button mt-3">
              <button className="btn" onClick={() => handleLogin()}>
                Accedi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
