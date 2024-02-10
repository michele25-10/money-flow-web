import { useState } from "react";

//Components
import SettingsMenu from "../../components/settingsMenu/SettingsMenu";

//SASS
import "./settings.scss";

function Settings() {
  const [item, setItem] = useState({});

  return (
    <>
      <div className=".settings">
        <div className="users">
          <SettingsMenu title="Utenti" data={users} setSelectedItem={setItem} />
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
    </>
  );
}

export default Settings;
