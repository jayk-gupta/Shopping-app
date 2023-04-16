import ShoppingItem from "./ShoppingItem";
import "./Items.css";
const Items = (props) => { 


  return (
    <div className="items">
      <ShoppingItem title={props.items[0].title} quantity={props.items[0].quantity} amount={props.items[0].amount} unit={props.items[0].unit} />
      <ShoppingItem title={props.items[1].title} quantity={props.items[1].quantity} amount={props.items[1].amount} unit={props.items[1].unit} />
      <ShoppingItem title={props.items[2].title} quantity={props.items[2].quantity} amount={props.items[2].amount} unit={props.items[2].unit} />
      <ShoppingItem title={props.items[3].title} quantity={props.items[3].quantity} amount={props.items[3].amount} unit={props.items[3].unit} />
      </div>
  )
}
export default Items;