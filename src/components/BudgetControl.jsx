import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({ expenses, budget }) => {

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

  return (
    <div className='container-budget container shadow two-columns'>
      
      <div>
         <CircularProgressbar
            styles={buildStyles({
               pathColor: '3b82f6',
               trailColor: 'f5f5f5',
               textColor: '3b82f6',
            })}
            value={percentaje}
            text={`${percentaje}% Expensible`}
         />
      </div>

      <div className='content-budget'>
         <p>
            <span>Budget: </span> {formatAmount(budget)}
         </p>

         <p>
            <span>Disponible: </span> {formatAmount(disponible)}
         </p>

         <p>
            <span>Expenses: </span> {formatAmount(expensible)}
         </p>
      </div>



    </div>
  )
}

export default BudgetControl