import { useEffect, useState } from "react";

import "./profile.scss";
import { saveUserInfo, userInfo } from "./function/api";

const Profile = () => {
  const [submitButton, setSubmitButton] = useState(false);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  const HandleSave = () => {
    const result = saveUserInfo({
      nome,
      cognome,
      email,
      telefono,
      img,
    });
    result.then((res) => {
      if (res) {
        refreshInfo();
        setSubmitButton(false);
      }
    });
  };

  const checkSave = () => {
    setSubmitButton(true);
  };

  const refreshInfo = () => {
    const result = userInfo();
    result.then((res) => {
      setNome(res.nome);
      setCognome(res.cognome);
      setEmail(res.email);
      setTelefono(res.telefono);
      setImg(res.img);
    });
  };

  useEffect(() => {
    refreshInfo();
  }, []);

  return (
    <div className="profile">
      <>
        <div className="header">
          <img src={img ? img : "/user.svg"} alt="" />
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
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  checkSave();
                }}
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
                value={cognome}
                onChange={(e) => {
                  setCognome(e.target.value);
                  checkSave();
                }}
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
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
                checkSave();
              }}
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                checkSave();
              }}
            />
          </div>
          {submitButton ? (
            <button className="btn btn-warning" onClick={() => HandleSave()}>
              Salva
            </button>
          ) : null}
        </div>
      </>
    </div>
  );
};

export default Profile;
