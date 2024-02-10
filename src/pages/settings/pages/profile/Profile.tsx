import { useEffect, useState } from "react";

import { infoProfile } from "./data";

import "./profile.scss";

const Profile = () => {
  const [users, setUsers] = useState({});
  const [submitButton, setSubmitButton] = useState(false);

  const HandleChange = (event: any) => {
    let obj: any = users;
    obj[event.target.name] = event.target.value;

    setUsers(obj);
    setSubmitButton(true);
  };

  const HandleSave = () => {
    console.log("Salvo");
    setSubmitButton(false);
  };

  useEffect(() => {
    console.log("Info profilo acquisite");
    setUsers(infoProfile);
  }, []);

  return (
    <div className="profile">
      {users ? (
        <>
          <div className="header">
            <img src={users.img} alt="" />
          </div>
          <div className="formUser">
            <div className="nameSurname">
              <div className="inputLayer">
                <label className="label">Nome:</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Surname"
                  placeholder="Nome..."
                  name="name"
                  value={users.name ? users.name : ""}
                  onChange={HandleChange}
                />
              </div>
              <div className="inputLayer">
                <label className="label">Cognome:</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Surname"
                  placeholder="Cognome..."
                  name="surname"
                  value={users.surname ? users.surname : ""}
                  onChange={HandleChange}
                />
              </div>
            </div>
            <div className="inputLayer">
              <label className="label">Telefono:</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="Tel"
                placeholder="Telefono..."
                name="tel"
                value={users.tel ? users.tel : ""}
                onChange={HandleChange}
              />
            </div>
            <div className="inputLayer">
              <label className="label">Email:</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="Email"
                placeholder="Email..."
                name="email"
                value={users.email ? users.email : ""}
                onChange={HandleChange}
              />
            </div>
            {submitButton ? (
              <button
                className="btn btn-warning"
                onClick={() => HandleSave(users)}
              >
                Salva
              </button>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Profile;
