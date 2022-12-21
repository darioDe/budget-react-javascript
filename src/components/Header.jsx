import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({ 
   budget, 
   setBudget, 
   isValidBudget, 
   setIsValidBudget,
   expenses,
   setExpenses, 

}) => {
  return (
    <header >
      <h1> Cost Planificator</h1>

      {/* CONDITIONAL RENDERING */}
      
      {isValidBudget ? (
         <BudgetControl
            expenses={expenses}
            setExpenses={setExpenses}  
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
         />
      ) : (
         <NewBudget 
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
         />
      )}

      
    </header>
  )
}

export default Header