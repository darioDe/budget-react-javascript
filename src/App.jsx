import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import { idGenerator } from './components/helpers'
import IconNewExpense from './assets/img/new-expense.svg'
import ExpenseList from './components/ExpenseList';
import Filters from './components/Filters';

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []);
  
  const [expenseEdit, setExpenseEdit] = useState({});
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animatingModal, setAnimatingModal] = useState(false);
  const [filter, setFilter] = useState('');
  const [expensesFilters, setExpensesFilters] = useState([])

  useEffect(() => {
    
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

    setTimeout(() => {
      setAnimatingModal(true);
    }, 500);
    }
  }, [expenseEdit]);
  
  // SETTING LOCALSTORAGE FOR BUDGET
  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget]);

  // SETTING LOCALSTORAGE FOR EXPENSES
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses]);

  // SELECT FILTER FOR CATEGORY
  useEffect(() => {
    if (filter) {
      const expenseFilter = expenses.filter( expense => expense.category === filter);

      setExpensesFilters(expenseFilter);
    }
  }, [filter])
  

  // GETTING LOCALSTORAGE FOR BUDGET AND RENDERIZE 'ISVALIDBUDGET'
  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if (budgetLS > 0) {
      setIsValidBudget(true);
    };
  }, [])
  
  

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
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {/* ADD MORE EXPENSES BUTTON */}
      {isValidBudget && (
        <>
          <main>
            <Filters 
              filter={filter}
              setFilter={setFilter}
            />
            <ExpenseList 
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFilters={expensesFilters}
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
