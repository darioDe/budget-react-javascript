import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import { idGenerator } from './components/helpers'
import IconNewExpense from './assets/img/new-expense.svg'
import ExpenseList from './components/ExpenseList';

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
    expense.id = idGenerator();
    expense.date = Date.now();
    setExpenses([...expenses, expense ]);

    setAnimatingModal(false);
      
      setTimeout(() => {
         setModal(false);
      }, 500);
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
        <>
          <main>
            <ExpenseList 
              expenses={expenses}
            />
          </main>
          <div className='new-expense'>
              <img 
                src={IconNewExpense} 
                alt="New Expense" 
                onClick={handleNewExpense}
              />
          </div>
        </>
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
