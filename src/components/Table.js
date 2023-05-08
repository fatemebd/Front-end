import React, { useState, useEffect } from "react";
import Icon, { Result } from "../components/icon";
import  "../styles/Table.css"
import data from "../MOCK_DATA (1).json"
let iconManager=false;
let check=false;
let fillIcon=false;
let userList=false;
function Table({columns,values,apiLink}) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(apiLink)
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error));
  // }, []);
  let counter=1;
  return (
    <div className="table"  >
      <table>
        <thead>
          <tr>
            {columns.map((element) =>{
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
              <td className="iconManager"><Result /></td>
            )}
            {values.map((element)=>
              <td>{item[element]}</td>                
            )}
            <td className="rowNum">{counter++}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;