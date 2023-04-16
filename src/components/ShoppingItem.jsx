import "./ShoppingItem.css";
const ShoppingItem = (props) => {

  return (
    <div className="shopping-item">
      <h2>{props.title}</h2>
      <div className="shopping-item__description">
        <h2>
          {props.quantity} <span>{props.unit}</span>{" "}
        </h2>
        <div className="text-white text-lg">₹{props.amount}</div>
        <div className="shopping-item__price"> ₹{props.amount * props.quantity}</div>
      </div>
    </div>
  );
};

export default ShoppingItem;
