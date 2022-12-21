import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({ 
   expenses, setExpenses, budget, setBudget, setIsValidBudget
}) => {

   const [percentaje, setPercentaje] = useState(0);
   const [disponible, setDisponible] = useState(0);
   const [expensible, setExpensible] = useState(0);

   useEffect(() => {
      const totalExpenses = expenses.reduce(( total, expense) => expense.amount + total, 0);
      const totalDisponble = budget - totalExpenses;

      // CALCULATE NEW PERCENTAJE
      const newPercentaje = (( (budget - totalDisponble) / budget ) * 100).toFixed(2);

      setExpensible(totalExpenses);
      setDisponible(totalDisponble);

      setTimeout(() =>{
         setPercentaje(newPercentaje);    
      }, 1000);
   }, [expenses])
   

   const formatAmount = (amount) => {
      return amount.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD'
      })
   }

   const handleResetApp = () => {
      const result = confirm('Do you wish reset budget and expenses?');

      if (result) {
         setExpenses([]);
         setBudget(0);
         setIsValidBudget(false)
      }
   }

  return (
    <div className='container-budget container shadow two-columns'>
      
      <div>
         <CircularProgressbar
            styles={buildStyles({
               pathColor: percentaje > 100 ? 'red' : '3b82f6',
               trailColor: 'f5f5f5',
               textColor: percentaje > 100 ? 'red' : '3b82f6',
            })}
            value={percentaje}
            text={`${percentaje}% Expensible`}
         />
      </div>

      <div className='content-budget'>
         
         <button 
            className='reset-app'
            type='button'
            onClick={handleResetApp}
         >
            Reset Budget
         </button>

         <p>
            <span>Budget: </span> {formatAmount(budget)}
         </p>

         <p className={`${ disponible < 0 ? 'negativo' : '' }`}>
            <span>Disponible: </span> {formatAmount(disponible)}
         </p>

         <p>
            <span>Spent: </span> {formatAmount(expensible)}
         </p>
      </div>



    </div>
  )
}

export default BudgetControl