import React from 'react';
import './ItemForm.css';
const ItemForm = () => {
  const titleChangeHandler = (event) => {   
console.log(event.target.value);
  }
  const amountChangeHandler = () => {  

   }
  const quantityChangeHandler = () => {

   }
  return <form>
    <div className='new-item__controls'>
      <div className='new-item__control'>
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler} />
      </div>
      <div className='new-item__control'>
        <label>Amount</label>
        <input type='number' />
      </div>
      <div className='new-item__control'>
        <label>Quantity</label>
        <input type='number' min="0.5" step="0.5"/>
      </div>
    </div>
    <div className='new-item__actions'>
      <button type='submit'>Add Item</button>
    </div>
</form>;

}

export default ItemForm;