import { useState, useEffect } from 'react'

import CloseBtn from '../assets/img/close.svg'
import Msg from './Msg';

const Modal = ({ 
   setModal, 
   animatingModal, 
   setAnimatingModal,
   saveExpense, 
   expenseEdit, 
   setExpenseEdit 
}) => {

   const [msg, setMsg] = useState('')
   const [name, setName] = useState('');
   const [amount, setAmount] = useState('');
   const [category, setCategory] = useState('');
   const [id, setId] = useState('')
   const [date, setDate] = useState('')

   useEffect(() => {
      if (Object.keys(expenseEdit).length > 0) {
         setName(expenseEdit.name);
         setCategory(expenseEdit.category);
         setAmount(expenseEdit.amount);
         setId(expenseEdit.id);
         setDate(expenseEdit.date);
      }
   }, [])
   


   // FORM VALIDATION
   const handleSubmit = e => {
      e.preventDefault();
      if ([name, amount, category].includes('')) {
         setMsg('All Fields are Requierd');
         
         setTimeout(() => {
            setMsg('')
         }, 2000);
         
         return;
      }
      
      saveExpense({name, amount, category, id, date});
   }

   // CLICK IN IMG-CLOSE-MODAL 
   const closeModal = () => {
      setAnimatingModal(false);
      setExpenseEdit({})

      setTimeout(() => {
         setModal(false);
      }, 500);
   }

  return (
    <div className='modal'>
      <div className='close-modal'>
         <img 
            src={CloseBtn} 
            alt="Close Modal"
            onClick={closeModal}
         />
      </div>

      <form 
         className={`form ${animatingModal ? 'animating' : 'close'}`}
         onSubmit={handleSubmit}   
      >
         
         <legend> {expenseEdit.name ? 'Edit Expense' : 'New Expense'} </legend>
         {msg && <Msg type='error'>{msg}</Msg> }
         
         <div className='field'>
            <label htmlFor="name">Expense's Name</label>
            <input 
               id='name' 
               type='text' 
               placeholder='Add Expense Name'
               value={name}
               onChange={ e => setName(e.target.value)}
            />
         </div>

         <div className='field'>
            <label htmlFor="amount"> Amount </label>
            <input 
               id='amount' 
               type='number' 
               placeholder='Add Amount of the Expense'
               value={amount}
               onChange={ e => setAmount(Number(e.target.value))}
            />
         </div>

         <div className='field'>
            <label htmlFor='category'> Category </label>
            <select 
               name='' 
               id='category'
               value={category}
               onChange={ e => setCategory(e.target.value)}
            >
               
               <option value="" >--Select</option>
               <option value="saving" >Saving</option>
               <option value="food" >Food</option>
               <option value="home" >Home</option>
               <option value="several" >Several Expenses</option>
               <option value="leisure" >Leisure</option>
               <option value="healt" >Healt</option>
               <option value="subscriptions" >Subscriptions</option>
            
            </select>
         </div>

         <input 
            type='submit' 
            value={expenseEdit.name ? 'Save Change' : 'Add Expense'}
         />
      </form>
    </div>
  )
}

export default Modal