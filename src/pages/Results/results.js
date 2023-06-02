import React from "react";
import Header from "../../components/Admin_Header";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
import styles from "./results.module.css"
import { FiDownload } from "react-icons/fi";
import DescriptiveQuestions from "../../components/DescriptiveQuestions";

const Results = () => {
 
    return (
      
      <div className={styles.main} >
        
        <Header />
        <h3>نظرسنجی‌ها/زهرا ثمربخش اسفندماه/نتایج</h3>
        <div className={styles.container}>
           <div className={styles.box}>
                <p className={styles.title}>وضعیت</p>
                <p className={styles.date}>فعال تا تاریخ</p>
            </div> 
            <div className={styles.box}>
                <p className={styles.title}>لیست افراد</p>
                <button className={styles.button}>مشاهده</button>
            </div >
            <div className={styles.box}>
                <p className={styles.title}>دانلود نتایج</p>
                <button className={styles.button}><FiDownload className={styles.icon}/><p className={styles.download}>بارگیری</p></button>
            </div>
            <div className={styles.box}>
                <p className={styles.title}>تعداد پاسخ</p>
            </div>
        </div>

        <div className={styles.shortQ}>
            <DescriptiveQuestions />
        </div>

        <Footer />
      </div>
    );
  };
  
  export default Results;
  