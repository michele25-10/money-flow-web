import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

//sass
import "./login.scss";

//ICON material ui
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";

//function
import { decrypt } from "../../utils/crypto";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
import { ws, gestioneSnackbar } from "../../utils/common";

//common components
import SnackBar from "../../components/snackbar/SnackBar";
import { gridColumnPositionsSelector } from "@mui/x-data-grid";

function Login() {
  const navigate = useNavigate();

  const [famiglia, setFamiglia] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ricordami, setRicordami] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const credentials = getCookie("ricordami");
    if (credentials) {
      const encryptedData = {
        iv: credentials.substring(credentials.length - 32),
        encryptedText: credentials.slice(0, -32),
      };
      const decryptedJson = decrypt(encryptedData, process.env.SECRET_KEY);

      const objCredentials = JSON.parse(decryptedJson);

      setEmail(objCredentials.email);
      setFamiglia(objCredentials.famiglia);
      setPassword(objCredentials.password);
      setRicordami(true);
    }
  }, []);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordValid = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[A-Za-z0-9!@#$%^&*()-_+=]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async (event: React.SyntheticEvent | Event) => {
    if (famiglia || email || password) {
      if (!isPasswordValid(password)) {
        gestioneSnackbar(
          true,
          "La password non soddisfa i criteri standard",
          "error"
        );
        return;
      }

      const res = await ws(
        "POST",
        process.env.VITE_API_URL + "/auth/login",
        null,
        {
          famiglia: famiglia.toLowerCase(),
          email,
          password,
          ricordami,
        },
        false
      );

      if (res.error) {
        gestioneSnackbar(true, res.data.message, "error");
      } else {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        if (ricordami) {
          setCookie("ricordami", res.data.ricordami, 14);
        } else {
          deleteCookie("ricordami");
        }

        navigate("/");
      }
    } else {
      gestioneSnackbar(true, "Mancano campi dati", "error");
      return;
    }
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
          <div className="mb-3">
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-white opacity-75"
                id="basic-addon1"
              >
                <GroupIcon />
              </span>
              <input
                type="text"
                className="form-control"
                id="family"
                placeholder="Famiglia..."
                maxLength={30}
                value={famiglia}
                onChange={(e) => setFamiglia(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-white opacity-75"
                id="basic-addon1"
              >
                <PersonIcon />
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                maxLength={50}
                aria-describedby="usernameHelp"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group mb-3">
              <span className="input-group-text bg-white opacity-75">
                <LockIcon />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Password..."
                required
              />
              <span
                className="input-group-text bg-white opacity-75 text-decoration-none hover-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
            </div>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={ricordami}
              onChange={(e) => setRicordami(e.target.checked)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Ricordami
            </label>
          </div>
          <div className="submit-button mt-3">
            <button className="btn" onClick={() => handleLogin()}>
              Accedi
            </button>
          </div>
        </div>
      </div>
      <SnackBar />
    </div>
  );
}

export default Login;
