import React from 'react'
import { formatDate  } from './helpers';
import IconExpenses from '../assets/img/icon-expenses.svg'
import IconFood from '../assets/img/icon-food.svg'
import IconFun from '../assets/img/icon-fun.svg'
import IconHealt from '../assets/img/icon-healt.svg'
import IconHouse from '../assets/img/icon-house.svg'
import IconSaving from '../assets/img/icon-saving.svg'
import IconSubs from '../assets/img/icon-subs.svg'


const iconsDictionary = {
  several : IconExpenses,
  food : IconFood,
  leisure : IconFun,
  healt : IconHealt,
  home : IconHouse,
  saving : IconSaving,
  subscriptions : IconSubs,
}

const Expense = ({ expense }) => {
   const { category, name, amount, id, date } = expense;
  return (
    <div className='expense shadow'>
      <div className='content-expense'>
         <img src={iconsDictionary[category]} alt="" />
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