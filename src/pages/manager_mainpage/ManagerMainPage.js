<<<<<<< Updated upstream
import React from "react";
import "./main.css";
import "./global.css";
import Header from "../../components/adminHeader";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
import SearchBox from "../../components/SearchBox";
=======
import Header from "../../components/Admin_Header";
import styles from "./ManagerMainPage.module.css";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
>>>>>>> Stashed changes

const arr=['icon1','تاریخ پایان','پرسشنامه','کارمند','نام نظرسنجی','ردیف'];
const ManagerMainPage = () => {
  return (
    <div className="managerMainPage">
      <Header />
      <SearchBox />
      <div className="table-body">
      <Table arr={arr} className="table" />
      </div>
      <Footer />
    </div>
  );
};

export default ManagerMainPage;
