import React, { useState, useEffect } from "react";
import Icon, { Result } from "../components/icon";
import  "../styles/Table.css"
import data from "../MOCK_DATA (1).json"
let iconManager=false;
let check=false;
let fillIcon=false;
let userList=false;
function Table({arr}) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://filebin.net/7ynb3fg95dsfmiqk')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error));
  // }, []);
  return (
    <div  >
      <table>
        <thead>
          <tr>
            {arr.map((element) =>{
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
                <td style={{width:40}}><Result /></td>
              )}
          <td>{item.temp}</td>
          <td>{item.date}</td>
          <td>{item.emp}</td>
          <td>{item.name}</td>
          <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;