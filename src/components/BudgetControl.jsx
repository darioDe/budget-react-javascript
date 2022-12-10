import React from 'react'

const BudgetControl = ({ budget }) => {

   const formatAmount = (amount) => {
      return amount.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD'
      })
   }

  return (
    <div className='container-budget container shadow two-columns'>
      
      <div>
         <p>Graphic here</p>
      </div>

      <div className='content-budget'>
         <p>
            <span>Budget: </span> {formatAmount(budget)}
         </p>

         <p>
            <span>Disponible: </span> {formatAmount(0)}
         </p>

         <p>
            <span>Expenses: </span> {formatAmount(0)}
         </p>
      </div>



    </div>
  )
}

export default BudgetControl