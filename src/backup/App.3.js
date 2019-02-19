import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  });
  
const [otherState, setOtherState] = useState('Some Other state')

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
    })  
  }
  
      return (
    <div className="App">
      <h1>Hi, I'm a First React App</h1>
      <p>This is React description...</p>
      <button 
        onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age} />
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age} 
        /*click={this.switchNameHandler.bind(this, 'Max!!')} 
        changed={this.changeNameHandler} */>
          My Hobby is Racing
          </Person>
      <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age} />
    </div>
    );
  }

export default App;

/*
changeNameHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  })  
}

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
}

*/