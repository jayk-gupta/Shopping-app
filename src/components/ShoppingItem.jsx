import "./ShoppingItem.css";
import Card from "./Card";
const ShoppingItem = (props) => {

  return (
    <Card className="shopping-item">
      <h2>{props.title}</h2>
      <div className="shopping-item__description">
        <h2>
          {props.quantity} <span>{props.unit}</span>{" "}
        </h2>
        <div className="text-white text-lg">₹{props.amount}</div>
        <div className="shopping-item__price"> ₹{props.amount * props.quantity}</div>
      </div>
    </Card>
  );
};

export default ShoppingItem;
