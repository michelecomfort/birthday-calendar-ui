import React from 'react'
import Month from '../Month/Month.js'
import './Calendar.css'

const Calendar = ({ months }) => {
  let allMonths
  allMonths = months.map(month => {
    return (
      <Month
        name={month.name}
        id={month.id}
      />
    )

  })
  return (

    <div className='month-grid'>
      {allMonths}
    </div>
  )
}

export default Calendar;
