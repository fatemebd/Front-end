import Calendar from "../../components/calender"
import styles from "./suveySetting.module.css"
import React from "react";
import Header from "../../components/Admin_Header";
import Footer from "../../components/Footer"

const setting=()=>{
    return(
        <div className={styles.setting}>
            <Header />
            <Calendar />
            <Footer />
        </div>
        
      
    );
};

export default setting;