import { useState } from "react";

//component
import SettingsMenu from "../../components/settingsMenu/SettingsMenu";

//sass
import "./authorization.scss";

//dati
import { users } from "./data";

//function
//import { getAuthUser } from "./function/api";

const Authorization = () => {
  const [item, setItem] = useState();

  return (
    <div className="authorization">
      <div className="users">
        <SettingsMenu title="Utenti" data={users} setSelectedItem={setItem} />
      </div>
      {item ? <div className="auth">{item.name_surname}</div> : null}
    </div>
  );
};

export default Authorization;
