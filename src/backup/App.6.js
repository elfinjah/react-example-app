import Raduim, {StyleRoot} from 'radium';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

state = {
  persons: [
    { id: 'react1', name: 'Max', age: 28 },
    { id: 'react2', name: 'Manu', age: 29 },
    { id: 'react3', name: 'Stephanie', age: 26 },
  ],
  otherPersons: 'Other person name',
  showPersons: false
}

switchNameHandler = (newName) => {
  this.setState({
    persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  })  
}

changeNameHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  //  console.log(event.target.value);

  const person = {...this.state.persons[personIndex]}
  person.name = event.target.value;

  const persons = [...this.state.persons]
  persons[personIndex] = person;
  this.setState({persons: persons});
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice(); //copy full array to new variable
  const persons = [...this.state.persons]; //ES6 feature to copy full array to new variable
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'silver',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                key={person.id} 
                changed={(event) => this.changeNameHandler(event, person.id)}/> 
            })
          }
        </div>
      );
      style.backgroundColor = 'green';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a First React App</h1>
        <p>This is React description...</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
          {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Raduim(App);
