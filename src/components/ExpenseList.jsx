import React from 'react'
import Expense from './Expense'

const ExpenseList = ({expenses}) => {
  return (
    <div className='list-expenses container'>
      <h2> {expenses.length ? 'Expenses' : "You don't have expenses yet"}</h2>

      {expenses.map( expense => (
         <Expense 
            key={expense.id}
            expense={expense}
         />
      ))}
    </div>
  )
}

export default ExpenseList