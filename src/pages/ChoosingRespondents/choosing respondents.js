import React from "react";
import SearchBox from "../../components/SearchBox"

import { useNavigate } from 'react-router-dom';
import styles from "./ChoosingRespondents.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import StatusBar from '../../components/StatusBar';
import ChangePageIcon from '../../components/ChangePageIcon';
import { useState, useEffect } from 'react';

const columns=['سمت','دانشکده',' نام و نام خانوادگی' ,'نام کاربری','ردیف'];
const values=['position','faculty','name','username'];
const apilink="http://localhost:8000/accounts/get-emp/";
const ChoosingRespondentsPage = () => {
   document.querySelectorAll("tr")
.forEach(e => e.addEventListener("click", function() {
    
    console.log(e);
    if(e.style.background!="#a6a6a6")
     e.style.background="#a6a6a6";
     else
     e.style.background="";
     
}));
    return (
        <>
        <div className={styles.mainPage}>
            <Header />
            <div className={styles.container}> 
            <div className={styles.main}>
                <StatusBar status="3" />
            </div>
            <div className={styles.search}>
            <SearchBox  text="جست و جو در کارمندان..." columns={columns} values={values} apilink={apilink} />
            </div>
            </div>
            <ChangePageIcon before="/ChoosingSurveyTemplate" next="/SurveySetting" />
            <Footer />
        </div> 
     </> 
     
     );
  };
  
  export default ChoosingRespondentsPage;