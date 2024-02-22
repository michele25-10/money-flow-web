import "./topBox.scss";

type Props = {
  title: string;
  data: any;
};

const TopBox = (props: Props) => {
  console.log(props.data);

  return (
    <div className="topBox">
      <h1>Categoria</h1>
      <div className="list">
        {props.data.map((category: any) => (
          <div className="listItem" key={category.id}>
            <div className="category">
              <div className="categoryTexts">
                <span className="name">{category.name}</span>
              </div>
            </div>
            <span className="amount">{category.tot}€</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
