import { useState, useEffect } from 'react'
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
  const [expenseEdit, setExpenseEdit] = useState({})

  useEffect(() => {
    
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

    setTimeout(() => {
      setAnimatingModal(true);
    }, 500);
    }
  }, [expenseEdit]);
  


  // OPEN MODAL FUNCTION
  const handleNewExpense = () => {
    setModal(true);
    setExpenseEdit({});

    setTimeout(() => {
      setAnimatingModal(true);
    }, 500);
  };

  // SAVING EXPENSE FUNCTION
  const saveExpense = expense => {

    if (expense.id) {
      const updatingExpenses = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState);
      setExpenses(updatingExpenses);
      setExpenseEdit({});
    } else {
      expense.id = idGenerator();
      expense.date = Date.now();
      setExpenses([...expenses, expense ]);   
    }

    setAnimatingModal(false);
      
      setTimeout(() => {
         setModal(false);
      }, 500);
  };

  // DELETE DATA FUNCTION 
  const deleteExpense = id => {
    const updatingExpenses = expenses.filter (expense => expense.id !== id);
    setExpenses(updatingExpenses);
 }

  return (
    <div className={modal ? 'fixing' : ''}>
      <Header
        expenses={expenses} 
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
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
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
          expenseEdit={expenseEdit}
          setExpenseEdit={setExpenseEdit}
        /> 
      }
    </div>
  )
}

export default App
