import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header >
      <h1> Cost Planificator</h1>

      {/* CONDITIONAL RENDERING */}
      
      {isValidBudget ? (
         <BudgetControl 
            budget={budget}
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