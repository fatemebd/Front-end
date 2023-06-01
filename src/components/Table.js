import Icon, { Result,Edit,Delete } from "../components/icon";
import React from "react";


import style from "../styles/Table.module.css"
import data from "../MOCK_DATA (1).json"
let iconManager=false;
let check=false;
let fillIcon=false;
let userList=false;


function Table(props) {
  //const {values, columns} = props
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
        {data.map((item) => (  
          <tr key={item.id}>
            {iconManager &&(
              <td className={style.iconManager}><Result /></td>
            )}
            {userList&&(
              <td className={style.usersListIcons}>
                <div className={style.icon_container}>
                  <Edit info={item} />
                  <Delete />
                </div>
              </td>
            )}
            {props.values.map((element)=>
              <td>{item[element]}</td>                
            )}
            <td classN
            ame={style.rowNum}>{counter++}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;