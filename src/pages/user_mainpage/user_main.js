import React from "react";
import "./user_main.css"
import "./global.css"
import Table from "../../components/Table";
import SearchBox from "../../components/SearchBox"
import Footer  from   "../../components/Footer"
import Header from "../../components/User_Header";
import Notification from "../../components/Notification";
const columns=['تاریخ پایان','کارمند','نام نظرسنجی','ردیف'];
const values=['deadline','employee','template','id'];
const UsermainpagePage = () => {
    return (
        <>
      <div className="user-main-page">
         <Header/>
         <SearchBox />
         
         <div className="table-body">
          <Table columns={columns} values={values} apiLink={"https://filebin.net/7ynb3fg95dsfmiqk"} className="table" />
         </div>
         <Footer/>
      </div>
      <Notification/>
      
      
     </> 
     );
  };
  
  export default UsermainpagePage;



