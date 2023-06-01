import React from 'react';
import "../styles/RadioButton.css"

const RadioButton = ({ name, id, value }) => {
    const onChange = (e) => {
        console.log('clicked', e.target.id)
    }
    return (
        <label htmlFor={id} className="radio-label">
        <input
            className="radio-input"
            type="radio"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        />
        <span className="custom-radio" />
        </label>
    )
}

export default RadioButton