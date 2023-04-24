import React, { useState, useEffect } from "react";
function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
 
 console.log(data);
  return (
    <div>
      <h1>Table Example</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

          {data.map(item => (
            <tr>
              <td>ddfd</td>
              <td>ffdf</td>
              <td>yyy</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;