import React from 'react';
import "../styles/RadioButton.css"

const RadioButton = ( props ) => {
    const handle = e => {
        console.log('clicked', e.target.id)
        let newObject = window.localStorage.getItem("survey");
        let survey = JSON.parse(newObject);
        survey.employee=e.target.id;
        console.log(survey.employee)
        window.localStorage.setItem("survey", JSON.stringify(survey));
        console.log(survey)

    }
    return (
        <label htmlFor={props.id} className="radio-label">
        <input
            className="radio-input"
            type="radio"
            name="emp"
            id={props.id}
            value={props.id}
            onChange={handle}
        />

        <span className="custom-radio" />
        </label>
    )
}

export default RadioButton