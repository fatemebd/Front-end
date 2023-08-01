import { useState, useCallback } from "react";
import EditUserInfo from "./EditUserInfo";
import { useNavigate } from 'react-router-dom';
import { FiList } from 'react-icons/fi';

window.localStorage.setItem('tempid', null);


 const editClick = (info) =>{
  
          
        var popup = document.getElementById("edituser");
        console.log(window.localStorage.getItem('prop', info))
        if (!popup) return;
        var popupStyle = popup.style;
        if (popupStyle) {
          
          popupStyle.display = "flex";
          popupStyle.zIndex = 100;
          popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
          popupStyle.alignItems = "center";
          popupStyle.justifyContent = "center";
        }
        popup.setAttribute("closable", "");
    
        var onClick =
          popup.onClick ||
          function (e) {
            if (e.target === popup && popup.hasAttribute("closable")) {
              popupStyle.display = "none";
            }
          };
        popup.addEventListener("click", onClick);
       
       
  }  
 
 
export const Result = (prop) => {
  const navigate = useNavigate();
  
    return (
        <div className='result' onClick={()=>{navigate("/Reasults");window.localStorage.setItem('tempid',prop.id);}}>
            <img src="/assets/img/result.svg"/>
        </div>
    );
};



export const Edit = (prop)=>{
    return(
           
        <div>
          
            <img src="/assets/img/edit.svg" onClick={()=>{editClick(prop.info)}}/>
            
        </div> 
    )


}

export const Delete = ()=>{
    return(
        <div>
            <img src="/assets/img/delete.svg"/>
        </div>
    )
}

export const Survey = (props)=>{
  const navigate = useNavigate();
  window.localStorage.setItem('ansId', props.id);
    return(
      <div>
        <FiList onClick={()=>{navigate('/Answer')}}/>
      </div>
  )
}
