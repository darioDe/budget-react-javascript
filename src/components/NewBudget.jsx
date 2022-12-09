import { useState } from 'react'
import Msg from './Msg';

const NewBudget = ({ budget, setBudget }) => {

  const [msg, setMsg] = useState("")

  const handleBudget = (e) => {
    e.preventDefault();
    if (!Number(budget) || Number(budget) < 1) {
      setMsg('Is not a Valid Budget');
    } else {
      console.log('Valid Budget');
    };

  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      
      <form onSubmit={handleBudget} action="" className='formulario'>
        <div className='campo'>
          <label htmlFor=""> Define Budget </label>

          <input
            className='nuevo-presupuesto'
            type='text'
            placeholder='Add your Budget'  
            value={budget}
            onChange={ e => setBudget(e.target.value)}
          />
        </div>


        <input type="submit" value="Send" />

        {msg && <Msg type='error'> {msg} </Msg>}
      </form>

    </div>
  )
}

export default NewBudget