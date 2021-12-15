import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      month: '',
      day: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }
  render() {
    return (
      <form className='birthday-form'>
        <label>Name:
          <input
            type='text'
            name='title'
            value={this.state.name}
            onChange={e => this.handleChange(e)}/>
          </label>

        <label>Month:
          <input
            type='text'
            name='title'
            value={this.state.month}
            onChange={e => this.handleChange(e)}/>
            ></label>


        <label>Day:
          <input
            type='text'
            name='title'
            value={this.state.day}
            onChange={e => this.handleChange(e)}/>
          ></label>


        <button >Add this birthday!</button>
      </form>
    )
  }
}


export default Form
