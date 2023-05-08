import React from "react";
import "./main1.css";
import "./global.css";
import Header from "../../components/Admin_Header";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
import SearchBox from "../../components/SearchBox";

const columns=['iconManager','تاریخ پایان','کارمند','نام نظرسنجی','ردیف'];
const values=['deadline','employee','template'];
const ManagerMainPage = () => {
  return (
    <div className="managerMainPage">
      <Header />
      <SearchBox />
      <div className="table-body">
      <Table columns={columns} values={values} apiLink={"https://filebin.net/7ynb3fg95dsfmiqk"}  className="table" />
      </div>
      <Footer />
    </div>
  );
};

export default ManagerMainPage;
