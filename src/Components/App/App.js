import './App.css';
import { months } from '../../months_data';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Form from '../Form/Form.js'
import Calendar from '../Calendar/Calendar.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      months: months,
      birthdays: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/birthdays')
      .then(res => res.json())
        .then(data => {
          this.setState({ birthdays: data })
        })
  }

  render() {
    console.log(this.state.months)
    return (
      <main className="App">
        <h1>Birthdays</h1>
        <Form />
        <Calendar months={this.state.months} birthdays={this.state.birthdays} />
      </main>
    );
  }
}

export default App;
