import { useState } from 'react'
import './App.css'
import Items from './components/Items/Items'
import NewItem from './components/NewItem/NewItem'

function App() {
  const items =
    [
      {
        title: 'Rice',
        quantity: 2,
        amount: 20,
        unit: 'kg'
      },
      {
        title: 'Sugar',
        quantity: 5,
        amount: 25,
        unit: 'kg'
      },
      {
        title: 'Milk',
        quantity: 2,
        amount: 120,
        unit: 'litre'
      },
      {
        title: 'Wheat',
        quantity: 4,
        amount: 10,
        unit: 'kg'
      }
    ];
  
  const addExpenseHandler = (expense) => { 
    console.log('In App.js');
    console.log(expense);
  }

  
  return (
    <div className="App">
      <NewItem onAddExpense={ addExpenseHandler} />
      <Items items = {items}></Items>
    </div>
  )
}

export default App
