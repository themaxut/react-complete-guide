import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Mario', age: 28 },
      { name: 'Max', age: 27 },
      { name: 'Drongo', age: 44 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('Switch name was clicked!');
    //DON'T DO THIS ---> this.state.persons[0].name = 'Mario';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Max', age: 53 },
        { name: 'Drongo', age: 44 }
      ]
    } );
  }

  nameChangeHandler = (event) => {
    console.log('Typed: ' + event.target.value);
    //DON'T DO THIS ---> this.state.persons[0].name = 'Mario';
    this.setState({
      persons: [
        { name: 'Mario', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Drongo', age: 44 }
      ]
    } );
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        {/* one way to pass a function call on click with name*/}
        <button 
          style={buttonStyle}
          onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age}
          //  bind way to pass function call on click with name
           click={this.switchNameHandler.bind(this, 'Brahamputra')}
           changed={this.nameChangeHandler} > My Hobbies: Racing </Person>   
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
     );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App! Does this work now?'));
  }
}

export default App;
