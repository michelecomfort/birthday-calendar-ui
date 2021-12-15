import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      month: null,
      day: null
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitNewBirthday = e => {
    e.preventDefault()
    const newBday = {
      id: Date.now(),
      ...this.state,
    }
    console.log(newBday)
    this.props.addBday(newBday)
  }
  render() {
    return (
      <form className='birthday-form'>

        <label>Name:
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
        </label>

        <label>Month:
          <select type='number' name='month' className='month-dropdown' onChange={e => this.handleChange(e)}>
            <option ></option>
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>


          </select>
        </label>


        <label>Day:
          <input
            type='number'
            min='1'
            max='31'
            name='day'
            value={this.state.day}
            onChange={e => this.handleChange(e)}
          />
        </label>
        <button onClick={e => this.submitNewBirthday(e)}>Add this birthday!</button>
      </form>
    )
  }
}


export default Form
