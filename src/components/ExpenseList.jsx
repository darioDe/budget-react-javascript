import React from 'react'
import Expense from './Expense'

const ExpenseList = ({expenses, setExpenseEdit, deleteExpense}) => {
  return (
    <div className='list-expenses container'>
      <h2> {expenses.length ? 'Expenses' : "You don't have expenses yet"}</h2>

      {expenses.map( expense => (
         <Expense 
            key={expense.id}
            expense={expense}
            setExpenseEdit={setExpenseEdit}
            deleteExpense={deleteExpense}
         />
      ))}
    </div>
  )
}

export default ExpenseList