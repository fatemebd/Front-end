import style from "../styles/search_box.module.css";
import Table from "../components/Table";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner"

const addHandle=()=>
  {
    var popup = document.getElementById("addEmp");
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
  
const SearchBox = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem('token')}`,
    });

    fetch(props.apilink, { headers })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setDataLoaded(true);
      })
      .catch(error => console.error(error));
  }, []);
  console.log(data);


  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem('token')}`,
      });
      let link;
      if(e.target.value!=="")
       link = props.apilink + "?search=" + e.target.value;
       else
       link=props.apilink;
      fetch(link,{ headers })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }
  };

  

const t=()=>{
  return(
    <Table data={data} columns={props.columns} values={props.values} apiLink={props.apilink}  />

  )
}
return (
  <>
    {
      dataLoaded ? (
        <div className={style.ss}>
          <div className={style.ssb}>
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
          {props.addemp && (<button className={style.addemp} onClick={addHandle} > افزودن کارمند </button>)}
          </div>
          
          <div id="tbl1" className={style.table_body}>
            {data&&props.values&&<Table data={data} columns={props.columns} values={props.values} apiLink={props.apilink}  />}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )
    }
  </>
);
};

export default SearchBox;
