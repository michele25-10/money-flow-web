import { useEffect, useState } from "react";

//Components
import SettingsMenu from "../../components/settingsMenu/SettingsMenu";

//SASS
import "./settings.scss";

//dati
import { settings } from "./data";

//icons
import SettingsIcon from "@mui/icons-material/Settings";

//Pages
import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/changePassword/ChangePassword";
import Security from "./pages/security/Security";

function Settings() {
  const [item, setItem] = useState({});

  return (
    <>
      <div className="settings">
        <div className="options">
          <SettingsMenu
            title="Configurazione"
            icon={
              <SettingsIcon
                style={{ color: "white", height: "50px", width: "50px" }}
              />
            }
            data={settings}
            setSelectedItem={setItem}
          />
        </div>

        <div className="containerSettings">
          {Object.keys(item).length > 0 ? (
            <>
              {item.id == 1 ? <Profile /> : null}
              {item.id == 2 ? <ChangePassword /> : null}
              {item.id == 3 ? <Security /> : null}
            </>
          ) : (
            <div className="avvisoUtente">
              <h5 className=".avviso">Seleziona utente</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Settings;
