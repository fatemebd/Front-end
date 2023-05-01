import React, { useState, useEffect } from "react";

function Table({arr}) {
  console.log(arr);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <h1>Table Example</h1>
      <table>
        <thead>
          <tr>
            {arr.map((element) =>
              (<th>{element}</th>)
            )}
          </tr>
        </thead>
        
        <tbody>
          {data.map(item => (
            <tr>
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