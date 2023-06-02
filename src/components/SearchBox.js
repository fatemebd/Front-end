import style from "../styles/search_box.module.css";
import Table from "../components/Table";
import React, { useState, useEffect } from "react";

const SearchBox = (props) => {
  const [data, setData] = useState();



  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem('token')}`,
    });

    fetch(props.apilink, { headers })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [props.apilink]);

console.log(data);  

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem('token')}`,
      });
      const link = props.apilink + "?search=" + e.target.value;
      fetch(link,{ headers })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }
  };

  
  // only render the Table component when there is data to display
  // const tableComponent = data.length > 0 ? (
  //   <Table data={data} columns={props.columns} values={props.values} apiLink={props.apilink} />
  // ) : null;
const t=()=>{
  return(
    <Table data={data} columns={props.columns} values={props.values} apiLink={props.apilink}  />

  )
}
  return (
    <div className={style.ss}>
      <div className={style.search_box}>
        <button className={style.search_icon}>
          <img
            className={style.ssearch_rounde_icon}
            alt=""
            src="assets/img/loupe.png"
          />
        </button>
        <input
          className={style.input_search}
          type="text"
          placeholder={props.text}
          onKeyDown={handleSearch}
        />
      </div>
      <div id="tbl1" className={style.table_body}>
        {t()}
      </div>
    </div>
  );
};

export default SearchBox;
