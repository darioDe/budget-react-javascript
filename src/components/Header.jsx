import React from 'react'
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header >
      <h1> Cost Planificator</h1>

      {/* CONDITIONAL RENDERING */}
      
      {isValidBudget ? (
         <p> Cost Control </p>
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