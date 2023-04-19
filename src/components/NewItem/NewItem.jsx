import React from 'react';
import './NewItem.css';
import ItemForm from './ItemForm';

const NewItem = (props) => { 
  const saveItemDataHandler = (enteredItemData) => { 
    const itemData = {
      ...enteredItemData,
      id: Math.random().toString()
    }
    props.onAddExpense(itemData);
  }
  return (
    <div className='new-item'>
      <ItemForm onSaveItemData={saveItemDataHandler } />
</div>
  )
}

export default NewItem;