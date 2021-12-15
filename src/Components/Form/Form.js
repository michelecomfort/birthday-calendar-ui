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
  render() {
    return (
      <form className='birthday-form'>
        <label>Name:<input>
          </input></label>

        <label>Month:<input></input></label>


        <label>Day:<input></input></label>


        <button>Add this birthday!</button>
      </form>
    )
  }
}


export default Form
