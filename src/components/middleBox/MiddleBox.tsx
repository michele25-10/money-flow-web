//SASS
import "./middleBox.scss";

const MiddleBox = (props: any) => {
  return (
    <div className="middleBox">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="listItem">
        {props.data.map((item: any) => (
          <div className="item" key={item.id}>
            <div className="name">
              <span>{item.name}</span>
            </div>
            <div className="type">
              <span>{item.type}</span>
            </div>
            <div className="amount">
              <span>{item.amount}€</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleBox;
