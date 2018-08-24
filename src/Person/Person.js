import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} a Person and I am {props.age} years old </p>
            <p>{props.children}</p>
            {/* value={props.name} is used to output the existing name in the text box before changing */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;