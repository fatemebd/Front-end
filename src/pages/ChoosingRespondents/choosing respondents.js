import React from "react";
import SearchBox from "../../components/SearchBox"
import styles from "./ChoosingRespondents.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import StatusBar from '../../components/StatusBar';
import ChangePageIcon from '../../components/ChangePageIcon';
import { useState, useEffect } from 'react';

const columns=['سمت','دانشکده',' نام و نام خانوادگی' ,'نام کاربری','ردیف'];
const values=['position','faculty','name','username'];
const apilink="http://localhost:8000/accounts/get-users/";


const ChoosingRespondentsPage = () => {

let users=[];

document.querySelectorAll("tr").forEach(e => e.addEventListener("click", ()=> {handele(e)}));

  const handele =(e) =>
  {
   let length=users.length; 
   console.log(length);
   users=users.filter((item)=>item !== e.getElementsByTagName("td")[3].innerText)

   if(users.length<length)
   {
      e.style.backgroundColor="";
        console.log(users);
   }
   else
   {
       e.style.backgroundColor="rgb(193, 193, 193)";
       users.push(e.getElementsByTagName("td")[3].innerText);
        console.log(users);
   }
}
    return (
      <div className={styles.mainPage}>
            <Header />
            <div className={styles.main}>
                <div className={styles.stat}>
                    <StatusBar status="3" />
                </div>
               
            <div className={styles.searchcontainer}>
            <SearchBox  text="جست‌و‌جو در کاربران..." columns={columns} values={values} apilink="http://localhost:8000/accounts/get-users/" />

            </div>
                
            </div>
            <ChangePageIcon before="/ChoosingSurveyTemplate" next="/SurveySetting" />
            <Footer />
        </div>
     );
  };
  
  export default ChoosingRespondentsPage;