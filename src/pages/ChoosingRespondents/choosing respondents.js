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
const apilink="";
const ChoosingRespondentsPage = () => {
   document.querySelectorAll("tr")
.forEach(e => e.addEventListener("click", function() {
    // Here, `this` refers to the element the event was hooked on
    console.log(e);
     e.style.background="#a6a6a6";
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
            <SearchBox  text="جست و جو در کارمندان" columns={columns} values={values} apilink={apilink} />
            </div>
            </div>
            <ChangePageIcon before="/ChoosingSurveyTemplate" next="/ServrySetting" />
            <Footer />
        </div> 
     </> 
     
     );
  };
  
  export default ChoosingRespondentsPage;





// function ChoosingSurveyTemplate () {
    
//     const navigate = useNavigate();
//     useEffect(() => {
//         const url = "http://localhost:8000/questionnaire/questionnaire_templates/";
//         const headers = new Headers({
//             "Content-Type": "application/json",
//             "Authorization": "Token " + localStorage.getItem('token'),
//         });
//         fetch(url, { headers })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => setQuestionnaires(data))
//             .catch(error => console.log(error));
//     }, [searchQuery]);


//     if (localStorage.getItem('token') == 'null') {
//         navigate("/");
//         return;
//     }      
// }

