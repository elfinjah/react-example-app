import React from 'react';
import Radium from 'radium';

import './Person.css'


const person = (props) => {
    // return <p>I'm class Person and i'm being a class for {Math.floor(Math.random() * 30)} years !!!</p>;
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click} >I'm {props.name} and i'm {props.age} years old. {props.children}</p>
            <input type="tex" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(person);