import style from "../styles/button.module.css"
import { useNavigate } from 'react-router-dom';

const Button=(props) =>{
    const navigate=useNavigate();
  const handleclick=() =>{navigate(props.link)};
    return(
        <button className={style.btn} onClick={handleclick}>{props.name} 
       {props.icon!=="" && (<img>{props.icon}</img>)} </button>
    )
}
export default Button;