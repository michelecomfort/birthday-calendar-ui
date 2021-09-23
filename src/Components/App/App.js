import { Component } from 'react';
import months from '../../months_data';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>

        </div>
        <div className='bday-container'>

        </div>
      </div>
    );
  }
}

export default App;
