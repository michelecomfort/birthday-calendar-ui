import React from 'react'
import './Month.css'

const Month = ({ name, id, bdayPeople }) => {
  let person = bdayPeople.map(per => {
    return (<h4>{per.name}: {per.month}/{per.day}</h4>)
})
  return (
    <div className='month-box'>
      <h3 className='month-name'>{name}</h3>
      <div className='bday-people'>
        <h4>{person}</h4>
      </div>
    </div>
  )
}








export default Month
