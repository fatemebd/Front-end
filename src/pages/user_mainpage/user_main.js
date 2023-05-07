import React from "react";
import "./user_main.css"
import "./global.css"
import Table from "../../components/Table";
import SearchBox from "../../components/SearchBox"
import Footer  from   "../../components/Footer"
import Header from "../../components/User_Header";
import Notification from "../../components/Notification";

const UsermainpagePage = () => {
    return (
        <>
      <div class="user-main-page">
         <Header/>
         <SearchBox />
         <div class="table-body">
          <Table class="table"/>
         </div>
         <Footer/>
      </div>
      <Notification/>
      
      
     </> 
     );
  };
  
  export default UsermainpagePage;



