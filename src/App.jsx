import { useState } from 'react'
import Header from './components/Header'
import IconNewExpense from './assets/img/new-expense.svg'
import Modal from './components/Modal';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false)
  const [animatingModal, setAnimatingModal] = useState(false)
  const [expenses, setExpenses] = useState([])


  // OPEN MODAL FUNCTION
  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimatingModal(true);
    }, 500);
  }

  // SAVING EXPENSE FUNCTION
  const saveExpense = expense => {
    setExpenses([...expenses, expense ])
  }



  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {/* ADD MORE EXPENSES BUTTON */}
      {isValidBudget && (
        <div className='new-expense'>
            <img 
              src={IconNewExpense} 
              alt="New Expense" 
              onClick={handleNewExpense}
            />
        </div>
      )}
      
      {/* BUDGET VALID && CLICK IN IMG-NEW-EXPENSE == OPEN MODAL */}
      {modal && 
        <Modal 
          setModal={setModal}
          animatingModal={animatingModal}
          setAnimatingModal={setAnimatingModal}
          saveExpense={saveExpense}
        /> 
      }
    </div>
  )
}

export default App
