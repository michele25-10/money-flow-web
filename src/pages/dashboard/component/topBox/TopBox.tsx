import "./topBox.scss";

import { family } from "./function/data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Famiglia</h1>
      <div className="list">
        {family.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="nome-cognome">{user.nome_cognome}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.tot}€</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
