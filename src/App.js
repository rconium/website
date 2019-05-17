import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Richard', age: 23}, 
      {name: 'Kevin', age: 25},
      {name: 'Nick', age: 29}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = 'DIO';
    this.setState({
      persons: [
        {name: newName, age: 23}, 
        {name: 'Kevin', age: 25},
        {name: 'Nick', age: 31}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 23}, 
        {name: 'Kevin', age: 25},
        {name: 'Nick', age: 31}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('MUAHAHHAHAHAAHA')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'DIOS MIOS!')}
          changed={this.nameChangedHandler}>ZA WORLDO!</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>ORA ORA ORA ORA ORA!</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>NANI!?</Person>
      </div>
    );
  }
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div> */}

export default App;
