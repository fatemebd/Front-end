import { useState, useCallback } from "react";


const editClick = () =>{
        console.log("no");
        var popup = document.getElementById("edituser");
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
  
export const Result = () => {

    return (
        <div className='result'>
            <img src="/assets/img/result.svg"/>
        </div>
    );
};



export const Edit = ()=>{
    return(
           
        <div>
            <img src="/assets/img/edit.svg" onClick={editClick}/>
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

