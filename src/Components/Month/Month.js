import React from 'react'
import './Month.css'

const Month = ({ name, id }) => {
  return (
    <div className='month-box'>
      <h3>{name}</h3>
    </div>
  )
}

export default Month
