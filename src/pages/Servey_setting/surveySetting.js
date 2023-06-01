import Calendar from "../../components/calender"
import styles from "./suveySetting.module.css"
import React from "react";
import Header from "../../components/Admin_Header";
import Footer from "../../components/Footer"
import StatusBar from "../../components/StatusBar";
import ChangePageIcon from '../../components/ChangePageIcon';



const setting=()=>{
    return(
        <div className={styles.setting}>
            <Header />
            <div className={styles.header}>
            <h2 className={styles.h}>تنظیمات نظرسنجی</h2>
            <hr className={styles.hr}/>
            </div>

            <div className={styles.main}>

                <div className={styles.stat}>
                    <StatusBar status="4" />
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>ثبت نظرسنجی</button>
                    <ChangePageIcon before="/ChoosingRespondents" />

                </div>
                <div className={styles.dateContainer}>
                <Calendar className={styles.cal} />
                    <p className={styles.p}>
                        :تاریخ پایان
                    </p>
                </div>

            </div>
            <Footer />
        </div>
        
      
    );
};

export default setting;