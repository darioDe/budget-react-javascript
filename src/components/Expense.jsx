import React from 'react'
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
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


const Expense = ({ expense, setExpenseEdit }) => {
  const { category, name, amount, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseEdit(expense)}>
        EDIT
      </SwipeAction>
    </LeadingActions>
  )
        
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('delete')}>
        DELETE
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList >
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='expense shadow'>
          <div className='content-expense'>
            <img src={iconsDictionary[category]} alt="" />
            <div className="description-expense">
                <p className='category'> {category} </p>
                <p className='name-expense'> {name} </p>
                <p className="date-expense"> Added: {''} <span>{formatDate(date)}</span> </p>
            </div>
          </div>
              <p className='amount-expense'> ${amount} </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense