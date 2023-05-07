import React, { useState, useEffect } from "react";
import Icon, { Result } from "../components/icon";
import  "../styles/Table.css"
const icon1=false;
function Table({arr}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div >
      <table>
        <thead>
          <tr>
            {arr.map((element) =>{
                switch(element){
                  case "icon1":{
                    return <th> </th>;
                    icon1=true;
                  }
                  case "check": ;
                  default:
                    return <th>{element}</th>;
                }
              }
            )}
          </tr>
        </thead>
        
        <tbody>
          {data.map((item,key) => (
            <tr key={key}>
               <td><Result /></td> 
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;