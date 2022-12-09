import React from 'react'

const Msg = ({ children, type }) => {
  return (
    <div className={`alerta ${type}`}> {children} </div>
  )
}

export default Msg