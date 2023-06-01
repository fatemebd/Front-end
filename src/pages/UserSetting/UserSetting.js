import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from "./UserSetting.module.css";
import Header from '../../components/User_Header';
import Footer from '../../components/Footer';
import { FiLock, FiPhoneCall } from 'react-icons/fi';


function UserSetting () {
    const navigate = useNavigate();
    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }
    
    const handleChangePassClick = () => {
        const popup = document.getElementById('ChangePassContainer');
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

    const handleRestorePassClick_close = () => {
    const closeModal = () => {
        const popup = document.getElementById('ChangePassContainer');
        if (!popup) return;
        popup.removeEventListener('click', onClick);
        popup.style.display = 'none';
    }
    
    const popup = document.getElementById('ChangePassContainer');
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

    const handleChangePhoneClick = () => {
        const popup = document.getElementById('ChangePhoneContainer');
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

    const handleRestorePhoneClick_close = () => {
        const closeModal = () => {
            const popup = document.getElementById('ChangePhoneContainer');
            if (!popup) return;
            popup.removeEventListener('click', onClick);
            popup.style.display = 'none';
        }
        
        const popup = document.getElementById('ChangePhoneContainer');
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
        <div className={styles.mainPage}>
            <Header />
            <div className={styles.container}>
                <div className={styles.pageName}>
                    <p className={styles.name}> تنظیمات </p>
                    <hr className={styles.hr}></hr>
                </div>

                <div className={styles.options}>
                    <div className={styles.option} onClick={() => {handleChangePassClick()}}>
                        <span>تغییر رمز عبور</span>
                        <FiLock />
                    </div>

                    <br></br>

                    <div className={styles.option} onClick={() => {handleChangePhoneClick()}}>
                        <span>تغییر تلفن همراه</span>
                        <FiPhoneCall style={{rotate:"270deg"}} />
                    </div>
                </div>
            </div>
            <Footer />


            <div id="ChangePassContainer" className={styles.change} style={{ display: 'none' }}>
                <div className={styles.passModal}>
                    <div className={styles.close}  onClick={() => {handleRestorePassClick_close()}}>
                        <button className={styles.closeBtn}>
                            <img className={styles.close_icon} alt="" src="/assets/img/close.png" />
                        </button>
                    </div>

                    <b className={styles.b}>تغییر رمز عبور</b>

                    <div className={styles.inputField}>
                        <input className={styles.input} type="password" />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> رمز عبور قبلی </p>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <input className={styles.input} type="password" />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> رمز عبور جدید </p>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <input className={styles.input} type="password" />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> تکرار رمز عبور قبلی</p>
                        </div>
                    </div>

                    <button className={styles.button}>
                        <div className={styles.divButton}>تایید</div>
                    </button>

                </div>
            </div>




            <div id="ChangePhoneContainer" className={styles.change} style={{ display: 'none' }}>
                <div className={styles.passModal}>
                    <div className={styles.close}  onClick={() => {handleRestorePhoneClick_close()}}>
                        <button className={styles.closeBtn}>
                            <img className={styles.close_icon} alt="" src="/assets/img/close.png" />
                        </button>
                    </div>

                    <b className={styles.b}>تغییر تلفن همراه</b>

                    <div className={styles.inputField}>
                        <input className={styles.input} type="password" />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> رمز عبور </p>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <input className={styles.input} type="tel" pattern='[0-9]{10}' />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> شماره تلفن جدید </p>
                        </div>
                    </div>


                    <button className={styles.button}>
                        <div className={styles.divButton}>تایید</div>
                    </button>

                </div>
            </div>

            
        </div>

    )
}

export default UserSetting;