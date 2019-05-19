import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Title" scroll>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main/>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

{/*class App extends Component {
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
}*/}

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
