import { useState } from 'react'
import './App.css'
import ShoppingItem from './components/ShoppingItem'

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
  
  return (
    <div className="App">
      <h2 className='text-4xl'>Shopping List</h2>
      <ShoppingItem title={items[1].title} quantity={items[1].quantity} amount={items[1].amount} unit={items[1].unit}/>
      <ShoppingItem title={items[2].title} quantity={items[2].quantity} amount={items[2].amount} unit={items[2].unit}/>
      <ShoppingItem title={items[0].title} quantity={items[0].quantity} amount={items[0].amount} unit={items[0].unit}/>
      <ShoppingItem title={items[3].title} quantity={items[3].quantity} amount={items[3].amount} unit={items[3].unit}/>
    </div>
  )
}

export default App
