import React from "react";
import Header from "../../components/Admin_Header";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
import styles from "./results.module.css"
const Results = () => {
 
    return (
      
      <div className={styles.main} >
        
        <Header />
        <h3>نظرسنجی‌ها/زهرا ثمربخش اسفندماه/نتایج</h3>
        <div className={styles.container}>
           <div className={styles.box}>
                <p>وضعیت</p>
                <p>فعال تا تاریخ</p>
            </div> 
            <div>
                <p>لیست افراد</p>
            </div>
            <div>
                <p>دانلود نتایج</p>
            </div>
            <div>
                <p>تعداد پاسخ</p>
            </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Results;
  