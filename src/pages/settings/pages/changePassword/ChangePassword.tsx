import { useState } from "react";

//SASS
import "./changePassword.scss";

//ICONS
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewAgainPassword, setShowNewAgainPassword] = useState(false);

  const HandleSave = () => {
    console.log("Salvo");
  };

  return (
    <div className="changePassword">
      <div className="title">
        <h1>Cambio password</h1>
      </div>
      <div className="formCambioPassword">
        <div className="inputLayer input-group">
          <label className="form-label">Vecchia password:</label>
          <div className="input-group">
            <input
              type={showOldPassword ? "text" : "password"}
              className="form-control"
              id="oldPassword"
              name="oldPassword"
              placeholder="Vecchia password..."
              required
            />
            <span
              className="input-group-text"
              id="basic-addon2"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>
        </div>

        <div className="inputLayer input-group">
          <label className="form-label">Nuova password:</label>
          <div className="input-group">
            <input
              type={showNewPassword ? "text" : "password"}
              className="form-control"
              id="nuovaPassword"
              name="newPassword"
              placeholder="Nuova password..."
              required
            />
            <span
              className="input-group-text"
              id="basic-addon2"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
            </span>
          </div>
        </div>

        <div className="inputLayer input-group">
          <label className="form-label">Ripeti password:</label>
          <div className="input-group">
            <input
              type={showNewAgainPassword ? "text" : "password"}
              className="form-control"
              id="againPassword"
              name="againPassword"
              placeholder="Ripeti password..."
              required
            />
            <span
              className="input-group-text"
              id="basic-addon2"
              onClick={() => setShowNewAgainPassword(!showNewAgainPassword)}
            >
              {showNewAgainPassword ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon />
              )}{" "}
            </span>
          </div>
        </div>

        <button className="btn btn-warning" onClick={() => HandleSave()}>
          Salva
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
