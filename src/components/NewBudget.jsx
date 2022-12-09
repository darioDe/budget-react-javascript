import { useState } from 'react'
import Msg from './Msg';

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  // STATE OF INPUT
  const [msg, setMsg] = useState("")

  // FUNCTION TO VALIDATE INPUT 
  const handleBudget = (e) => {
    e.preventDefault();
    if (!budget || budget < 1) {
      setMsg('Is not a Valid Budget');
      return
    } 

    setMsg("")
    setIsValidBudget(true)

  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      
      <form onSubmit={handleBudget} action="" className='formulario'>
        <div className='campo'>
          <label htmlFor=""> Define Budget </label>

          <input
            className='nuevo-presupuesto'
            type='number'
            placeholder='Add your Budget'  
            value={budget}
            onChange={ e => setBudget(Number(e.target.value))}
          />
        </div>


        <input type="submit" value="Send" />

        {/* ERROR MESSAGE */}
        {msg && <Msg type='error'> {msg} </Msg>}
      </form>

    </div>
  )
}

export default NewBudget