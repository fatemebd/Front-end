import React from "react";
import  "../styles/dropdown.css";
const Dropdown=(props)=>{
    return(
        <div className="dropdown">
        <label>{props.label}</label>
       <select name={props.name}  >
        {props.options.map(option=>(
            <option value={option[0]}>{option[1]}</option>
        ))}
        
       </select>
       </div>
    )
}
export default Dropdown;