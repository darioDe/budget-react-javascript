import React from 'react'

const Msg = ({ children, type }) => {
  return (
    <div className={`alert ${type}`}> {children} </div>
  )
}

export default Msg