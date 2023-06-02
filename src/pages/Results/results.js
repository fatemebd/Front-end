import React from "react";
import Header from "../../components/Admin_Header";
import Table from "../../components/Table";
import Footer from "../../components/Footer"
import styles from "./results.module.css"
import { FiDownload } from "react-icons/fi";
import DescriptiveQuestions from "../../components/DescriptiveQuestions";
import SearchBox from "../../components/SearchBox"

const columns=['سمت','کد پرسنلی','نام و نام‌خانوادگی','ردیف'];
const values=['deadline','employee','template'];

const Results = () => {

    const handleChangeModalClick = () => {
        const popup = document.getElementById('ParticipantList');
        if (!popup) return;
        const popupStyle = popup.style;
        if (popupStyle) {
          popupStyle.display = 'flex';
          popupStyle.zIndex = 100;
          popupStyle.backgroundColor = 'rgba(113, 113, 113, 0.3)';
          popupStyle.alignItems = 'center';
          popupStyle.justifyContent = 'center';
        }
        popup.setAttribute('closable', '');
    
        const onClick =
          popup.onClick ||
          function (e) {
            if (e.target === popup && popup.hasAttribute('closable')) {
              popupStyle.display = 'none';
            }
          };
        popup.addEventListener('click', onClick);
    };

    const handleRestoreModalClick_close = () => {
    const closeModal = () => {
        const popup = document.getElementById('ParticipantList');
        if (!popup) return;
        popup.removeEventListener('click', onClick);
        popup.style.display = 'none';
    }
    
    const popup = document.getElementById('ParticipantList');
    if (!popup) return;
    
    popup.setAttribute('closable', '');
    
    const onClick =
        popup.onClick ||
        function (e) {
        if (e.target === popup && popup.hasAttribute('closable')) {
            closeModal();
        }
        };
    popup.addEventListener('click',closeModal());
    };
 
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
                <button className={styles.button} onClick={() => {handleChangeModalClick()}} >مشاهده</button>
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






        <div id="ParticipantList" className={styles.change} style={{ display: 'none' }}>
                <div className={styles.passModal}>
                    <div className={styles.close}  onClick={() => {handleRestoreModalClick_close()}}>
                        <button className={styles.closeBtn}>
                            <img className={styles.close_icon} alt="" src="/assets/img/close.png" />
                        </button>
                    </div>
                    <div className={styles.contain}>
                    <SearchBox  text="جست‌وجو در افراد..." columns={columns} values={values} apilink="???"/>
                    </div>



                </div>
            </div>

      </div>
    );
  };
  
  export default Results;
  