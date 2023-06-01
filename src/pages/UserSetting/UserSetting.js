import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from "./UserSetting.module.css";
import Header from '../../components/User_Header';
import Footer from '../../components/Footer';
import { FiLock, FiPhoneCall, FiMail } from 'react-icons/fi';


function UserSetting () {
    const [m1Pass, setM1Pass] = useState('');
    const [m1NewPass, setM1NewPass] = useState('');
    const [m1RepeatNewPass, setM1RepeatNewPass] = useState('');
    const [m2Pass, setM2Pass] = useState('');
    const [m2Phone, setM2Phone] = useState('');
    const [m3Pass, setM3Pass] = useState('');
    const [m3Email, setM3Email] = useState('');

    const navigate = useNavigate();
    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }

    //Inputs
    const handleM1PassChange = (event) => {
        setM1Pass(event.target.value);
    };
    const handleM1NewPassChange = (event) => {
        setM1NewPass(event.target.value);
    };
    const handleM1RepeatNewPassChange = (event) => {
        setM1RepeatNewPass(event.target.value);
    };
    const handleM2PassChange = (event) => {
        setM2Pass(event.target.value);
    };
    const handleM2PhoneChange = (event) => {
        setM2Phone(event.target.value);
    };
    const handleM3PassChange = (event) => {
        setM3Pass(event.target.value);
    };
    const handleM3EmailChange = (event) => {
        setM3Email(event.target.value);
    };


    //Open and Close modals.
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

    const handleChangeEmailClick = () => {
        const popup = document.getElementById('ChangeEmailContainer');
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

    const handleRestoreEmailClick_close = () => {
        const closeModal = () => {
            const popup = document.getElementById('ChangeEmailContainer');
            if (!popup) return;
            popup.removeEventListener('click', onClick);
            popup.style.display = 'none';
        }
        
        const popup = document.getElementById('ChangeEmailContainer');
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


    //API
    const handleChangePhone = async (newPhone, pass) => {
        try {
          const response = await fetch('http://localhost:8000/accounts/change-phone/', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              new_phone: newPhone,
              password: pass,
            }),
          });
      
          if (response.status === 400) {
            alert(response.message);
          }
          else if (response.status === 200) {
            alert('تغییرات با موفقیت ذخیره شد.');
            handleRestorePhoneClick_close();
          }
      
        } catch (error) {
          console.error(error.message);
        }
    };

    const handleChangeEmail = async (newEmail, pass) => {
        try {
          const response = await fetch('http://localhost:8000/accounts/change-email/', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              new_email: newEmail,
              password: pass,
            }),
          });
      
          if (response.status === 400) {
            alert(response.message);
          }
          else if (response.status === 200) {
            alert('تغییرات با موفقیت ذخیره شد.');
            handleRestoreEmailClick_close();
          }
      
        } catch (error) {
          console.error(error.message);
        }
    };

    const handleChangePass = async (pass, newPass, confPass) => {
        try {
          const response = await fetch('http://localhost:8000/accounts/change-password/', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              old_password: pass,
              new_password: newPass,
              confirm_password: confPass,
            }),
          });
      
          if (response.status === 400) {
            alert(response.message);
          }
          else if (response.status === 200) {
            alert('تغییرات با موفقیت ذخیره شد.');
            handleRestorePassClick_close();
          }
      
        } catch (error) {
          console.error(error.message);
        }
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

                    <br></br>

                    <div className={styles.option} onClick={() => {handleChangeEmailClick()}}>
                        <span>تغییر پست الکترونیک</span>
                        <FiMail />
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
                        <input className={styles.input} type="password" onChange={handleM1PassChange} />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> رمز عبور فعلی </p>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <input className={styles.input} type="password" onChange={handleM1NewPassChange} />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> رمز عبور جدید </p>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <input className={styles.input} type="password" onChange={handleM1RepeatNewPassChange} />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> تکرار رمز عبور جدید</p>
                        </div>
                    </div>

                    <button className={styles.button} onClick={() => {handleChangePass(m1Pass, m1NewPass, m1RepeatNewPass)}}>
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
                        <input className={styles.input} type="password" onChange={handleM2PassChange} />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> رمز عبور </p>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <input className={styles.input} type="tel" pattern='[0-9]{10}' onChange={handleM2PhoneChange} />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> شماره تلفن جدید </p>
                        </div>
                    </div>


                    <button className={styles.button} onClick={() => {handleChangePhone(m2Phone, m2Pass)}}>
                        <div className={styles.divButton}>تایید</div>
                    </button>

                </div>
            </div>


            <div id="ChangeEmailContainer" className={styles.change} style={{ display: 'none' }}>
                <div className={styles.passModal}>
                    <div className={styles.close}  onClick={() => {handleRestoreEmailClick_close()}}>
                        <button className={styles.closeBtn}>
                            <img className={styles.close_icon} alt="" src="/assets/img/close.png" />
                        </button>
                    </div>

                    <b className={styles.b}>تغییر پست الکترونیک</b>

                    <div className={styles.inputField}>
                        <input className={styles.input} type="password" onChange={handleM3PassChange} />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> رمز عبور </p>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <input className={styles.input} type="mail" onChange={handleM3EmailChange} />

                        <div className={styles.wrapper}>              
                            <p className={styles.b1}> پست الکترونیک جدید </p>
                        </div>
                    </div>


                    <button className={styles.button} onClick={() => {handleChangeEmail(m3Email, m3Pass)}}>
                        <div className={styles.divButton}>تایید</div>
                    </button>

                </div>
            </div>

            
        </div>

    )
}

export default UserSetting;