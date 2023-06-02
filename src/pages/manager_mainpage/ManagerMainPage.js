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
      <SearchBox text="جست‌وجو در نظرسنجی‌ها" />
      <div className={style.table_body}>
      <Table columns={columns} values={values} apiLink={"https://filebin.net/7ynb3fg95dsfmiqk"}  className={style.table} />
      </div>
      <Footer />
    </div>
  );
};

export default ManagerMainPage;
