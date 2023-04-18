import React,{useState} from "react";
import "./ShoppingItem.css";
import Card from "../UI/Card";
const ShoppingItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Shopping item component re-evaluated");

  const clickHandler = () => {
    setTitle("title changed"); //setTitle calls the function again and re-renders the component
    console.log(title); //logs the old title only
  };

  return (
    <Card className="shopping-item">
      <h2>{title}</h2>
      <div className="shopping-item__description">
        <h2>
          {props.quantity} <span>{props.unit}</span>{" "}
        </h2>
        <div className="text-white text-lg">₹{props.amount}</div>
        <div className="shopping-item__price">
          {" "}
          ₹{props.amount * props.quantity}
        </div>
      </div>
      <button onClick={clickHandler} className="text-white p-2 bg-slate-500">
        Change Item
      </button>
    </Card>
  );
};

export default ShoppingItem;
