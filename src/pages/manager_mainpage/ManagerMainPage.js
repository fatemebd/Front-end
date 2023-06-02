import React from "react";
import style from "./main1.module.css";
import Header from "../../components/Admin_Header";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
import SearchBox from "../../components/SearchBox";

const columns=['iconManager','تاریخ پایان','کارمند','نام نظرسنجی','ردیف'];
const values=['deadline','employee','template'];

const ManagerMainPage = () => {
 
  return (
    
    <div className={style.managerMainPage}>
      
      <Header />
      <SearchBox  text="جست‌و‌جو در نظرسنجی‌ها" columns={columns} values={values} apilink="http://localhost:8000/questionnaire/questionnaires/"/>

      <Footer />
    </div>
  );
};

export default ManagerMainPage;
