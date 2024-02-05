import "./topBox.scss";

import { category } from "../../pages/dashboard/data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Categoria</h1>
      <div className="list">
        {category.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="category">
              <div className="categoryTexts">
                <span className="name">{user.name}</span>
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
