import React,{useState} from "react";
import "./ItemForm.css";
const ItemForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(""); //initially input is empty string
  const [enteredAmount, setEnteredAmount] = useState(""); //initially input is empty string
  const [enteredQuantity, setEnteredQuantity] = useState(""); //initially input is empty string

  //
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // pass current value of input to setEnteredTitle
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };
  // /////////////////////////////////////////////////////////
  //Alternative: using one state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredQuantity: "",
  // });

  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,

  //   });
  //   // We will also need to update the other values in the state
  //   // pass current value of input to setEnteredTitle
  // };
  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) =>){
  //return {...prevState,enteredAmount:event.target.value}
  //   });
  // };
  // const quantityChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredQuantity: event.target.value,
  //   });
  // };

  const submitHandler = (e) => { 
    e.preventDefault(); //prevents page from reloading
    const itemData = {
      title: enteredTitle,
      amount: enteredAmount,
      quantity: enteredQuantity,
    }
    console.log(itemData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredQuantity('');
  }
  // 
  return (
    <form onSubmit={submitHandler}>
      <div className="new-item__controls">
        <div className="new-item__control">
          <label>Title</label>
          <input type="text" value={ enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-item__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-item__control">
          <label>Quantity</label>
          <input
            type="number"
            min="0.5"
            step="0.5"
            onChange={quantityChangeHandler}
            value={enteredQuantity}
          />
        </div>
      </div>
      <div className="new-item__actions">
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default ItemForm;
