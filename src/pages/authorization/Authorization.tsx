import { useEffect, useState } from "react";

//component
import SettingsMenu from "../../components/settingsMenu/SettingsMenu";

//sass
import "./authorization.scss";

//function
import { getAllUserFamily } from "./function/api";

//component pages
import AuthBox from "../../components/authBox/AuthBox";

//icons
import PeopleIcon from "@mui/icons-material/People";

const Authorization = () => {
  const [item, setItem] = useState({
    id: "",
    name_surname: "",
    email: "",
    img: "",
  });
  const [users, setUsers] = useState([
    {
      id: "",
      name_surname: "",
      email: "",
      img: "",
    },
  ]);

  useEffect(() => {
    const result = getAllUserFamily();
    result.then((res: any) => {
      console.log(res);
      setUsers(res);
    });
  }, []);

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
      {item.id ? (
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
