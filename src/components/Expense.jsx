import React from 'react'
import { formatDate  } from './helpers';

const Expense = ({ expense }) => {
   const { category, name, amount, id, date } = expense;
  return (
    <div className='expense shadow'>
      <div className='content-expense'>
         {/* img */}
         <div className="description-expense">
            <p className='category'> {category} </p>
            <p className='name-expense'> {name} </p>
            <p className="date-expense"> Added: {''} <span>{formatDate(date)}</span> </p>
         </div>

          <p className='amount-expense'> ${amount} </p>
      </div>
    </div>
  )
}

export default Expense