import React from 'react'
import Expense from './Expense'

const ExpenseList = ({
  expenses, 
  setExpenseEdit, 
  deleteExpense,
  filter,
  expensesFilters,
}) => {

  return (
    <div className='list-expenses container'>

      { 
        filter ? (
          <>
            <h2> {expensesFilters.length ? 'Expenses' : "You have no expenses in this category!"}</h2>

            {expensesFilters.map( expense => (
              <Expense 
                key={expense.id}
                expense={expense}
                setExpenseEdit={setExpenseEdit}
                deleteExpense={deleteExpense}
              />
            ))}
          </>
        ) : (
          <>
            <h2> {expenses.length ? 'Expenses' : "You have no expenses yet!"}</h2>
            {expenses.map( expense => (
              <Expense 
                key={expense.id}
                expense={expense}
                setExpenseEdit={setExpenseEdit}
                deleteExpense={deleteExpense}
              />
            ))}
          </>
        )
      
      }

    </div>
  )
}

export default ExpenseList