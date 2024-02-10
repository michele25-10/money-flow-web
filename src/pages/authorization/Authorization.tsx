import { useState } from "react";

//component
import SettingsMenu from "../../components/settingsMenu/SettingsMenu";

//sass
import "./authorization.scss";

//dati
import { users } from "./data";

//component pages
import AuthBox from "../../components/authBox/AuthBox";

//icons
import PeopleIcon from "@mui/icons-material/People";

const Authorization = () => {
  const [item, setItem] = useState({});

  return (
    <div className="authorization">
      <div className="users">
        <SettingsMenu
          title="Utenti"
          icon={
            <PeopleIcon
              style={{ color: "white", height: "50px", width: "50px" }}
            />
          }
          data={users}
          setSelectedItem={setItem}
        />
      </div>
      {Object.keys(item).length > 0 ? (
        <div className="auth">
          <AuthBox itemData={item} />
        </div>
      ) : (
        <div className="avvisoUtente">
          <h5 className=".avviso">Seleziona utente</h5>
        </div>
      )}
    </div>
  );
};

export default Authorization;
