import style from "../styles/search_box.module.css";
import Table from "../components/Table";
import React, { useState, useEffect } from "react";

const SearchBox=(props) => {
  
      const [data, setData] = useState([]);
      useEffect(() => {
        fetch(props.apilink)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);


  const HandleSearch=(link,tbl) =>
{
    
    fetch(link)
      .then(response => response.json())
       .then(data => setData(data))
       .catch(error => console.error(error));
   
       tbl.innerHTML=`<div id="5">
       <Table data={data} columns={props.columns} values={props.values} apiLink={link} className={style.table} />
      </div>`;
}

    return(
      <>
      
        <div className={style.search_box}>
          <input className={style.input_search} type="text" placeholder={props.text}
          onKeyDown={(e) => 
            {if(e.key=="Enter")
            {
            const link=props.apilink+"?search=" +e.target.value;
            const tbl_div=document.getElementById("5");
            const tbl=document.getElementById("tbl");
           tbl_div.remove();
           console.log(tbl);
            console.log(tbl);
            HandleSearch(link,tbl);
           }
           
          }}
          >
          </input>
          <button className={style.search_icon}>
          <img
            className={style.ssearch_rounde_icon}
            alt=""
            src="assets/img/materialsymbolssearchrounded.svg"
          />
          </button>
         
      </div>
      <div className={style.table_body} id="tbl">
        <div id="5">
          <Table  data={data} columns={props.columns} values={props.values} apiLink={props.apilink} className={style.table} />
         </div>
         </div>
    </>
    );
};
export default SearchBox;