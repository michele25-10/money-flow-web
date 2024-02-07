//component
import SettingsMenu from "../../components/settingsMenu/SettingsMenu";

//sass
import "./authorization.scss";

//dati
import { users } from "./data";

const Authorization = () => {
  return (
    <div className="authorization">
      <div className="users">
        <SettingsMenu title="Utenti" data={users} />
      </div>
      <div className="auth"></div>
    </div>
  );
};

export default Authorization;
