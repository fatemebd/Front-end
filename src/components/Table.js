import  { useState, useEffect } from "react";
import Icon, { Result,Edit,Delete } from "../components/icon";
import React, {
  createContext,
  useContext,
} from "react";

import {ManagerMainContext,useManagerMainContext} from "../contexts/managerMainContext"

import style from "../styles/Table.module.css"
let iconManager=false;
let check=false;
let fillIcon=false;
let userList=false;


function Table(props) {
  let {managercontext}=useContext(ManagerMainContext)
   const [data,setData]=useManagerMainContext();
  setData(props.data);
  
  let counter=1;
  return (
    <div className={style.table}  >
      <table>
        <thead>
          <tr>
            {props.columns.map((element) =>{
                switch(element){
                  case "iconManager":{
                    iconManager=true;
                    return <th> </th>;
                  }
                  case "userList":{
                    userList=true;
                    return <th> </th>
                  }
                  default:
                    return <th>{element}</th>;
                }
              }
            )}
          </tr>
        </thead>
        
        <tbody>
        {[data].map((item) => (  
          <tr key={item.id}>
            {iconManager &&(
              <td className={style.iconManager}><Result /></td>
            )}
            {userList&&(
              <td className={style.usersListIcons}>
                <div className={style.icon_container}>
                  <Edit />
                  <Delete />
                </div>
              </td>
            )}
            {props.values.map((element)=>
              <td>{item[element]}</td>                
            )}
            <td className={style.rowNum}>{counter++}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;