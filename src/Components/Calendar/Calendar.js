import React from 'react'
import Month from '../Month/Month.js'
import './Calendar.css'

const Calendar = ({ months, birthdays }) => {
  let allMonths = months.map(month => {
    let bdayPeople = birthdays.filter(bday => {
      return parseInt(bday.month) === month.id
    })
      return (
        <Month
        name={month.name}
        id={month.id}
        bdayPeople={bdayPeople}
        />
      )
  })

  return (
    <div className='month-grid' data-cy='month-grid'>
      {allMonths}
    </div>
  )
}

export default Calendar;
