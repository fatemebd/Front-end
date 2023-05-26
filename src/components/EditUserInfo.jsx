import React from 'react';
import { useState, useRef } from 'react';
import styles from "../styles/EditUserInfo.module.css";


function EditUserInfo() {
  const [fname, setFname] = useState(["فاطمه"]);
  const [lname, setLname] = useState(["عبادی"]);
  const [email, setEmail] = useState(["fateme.s.e.81@gmail.com"]);
  const [position, setPosition] = useState(["دانشجو"]);
  const [college, setCollege] = useState(["کامپیوتر"]);
  const [username, setUsername] = useState(["۹۹۳۶۲۳۰۳۲"]);
  const [image, setImage] = useState("/assets/img/materialsymbolsaccountcircle.svg");
  const inputFile = useRef(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const imageUrl = selectedFile ? URL.createObjectURL(selectedFile) : image;
    setImage(imageUrl);
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
      <div className={styles.editUser}>
        <div className={styles.icon}>
          <img className={styles.vectorIcon} alt="" src="/assets/img/close.png"/>
        </div>

        <div className={styles.wrapper}>
          <b className={styles.b}>ویرایش اطلاعات</b>
        </div>

        <div className={styles.info}>
          <div className={styles.profile}>
            <div className={styles.prpfile}>
              {image && <img src={image} alt="profile photo" height={"100%"} width={"100%"} />}
            </div>
            <div>
              <input
                style={{ display: "none" }}
                accept=".jpg,.png"
                ref={inputFile}
                onChange={handleImageChange}
                type="file"
              />
              <div className={styles.upload} onClick={onButtonClick}>
                بارگذاری تصویر
              </div>
            </div>
          </div>
          

          <div className={styles.main}>
            <div className={styles.name}>
              <div className={styles.inputFieldLastname}>
                <input className={styles.input} type="text" required value={lname} onChange={(e) => {setLname(e.target.value)}} />
                <div className={styles.container}>
                  <p className={styles.b2}>نام خانوادگی</p>
                </div>
              </div>
              <div className={styles.inputFieldName}>
                <input className={styles.input} type="text" required value={fname} onChange={(e) => {setFname(e.target.value)}} />
                <div className={styles.frame}>
                  <p className={styles.b2}>نام </p>
                </div>
              </div>
            </div>

              
              <div className={styles.inputFieldEmail}>
                <input className={styles.input} type="text"  value={email} required onChange={(e) => {setEmail(e.target.value)}} />
                <div className={styles.frameDiv}>
                  <p className={styles.b2}>پست الکترونیک</p>
                </div>
              </div>

            <div className={styles.job}>
              <div className={styles.inputFieldLastname}>
                <input className={styles.input} type="text" required value={college} onChange={(e) => {setCollege(e.target.value)}} />
                <div className={styles.container}>
                  <p className={styles.b2}>دانشکده</p>
                </div>
              </div>
              <div className={styles.inputFieldLastname}>
                <input className={styles.input} type="text" required value={position} onChange={(e) => {setPosition(e.target.value)}} />
                <div className={styles.wrapper2}>
                  <p className={styles.b2}>سمت</p>
                </div>
              </div>
            </div>

            <div className={styles.inputFieldLastname}>
              <input className={styles.input} type="text" required value={username} onChange={(e) => {setUsername(e.target.value)}} />
              <div className={styles.container}>
                <p className={styles.b2}>نام کاربری</p>
              </div>
            </div>

            <div className={styles.success}>
              <b className={styles.b}> با موفقیت افزوده شد.</b>
            </div>

            <div className={styles.save}>
              <button className={styles.button}>
                <p className={styles.buttom}>ذخیره</p>
              </button>
              <div className={styles.button1}>
                <p className={styles.b}>شبکه ارتباطات</p>
              </div>
            </div>
          </div>

        </div>

      </div>
  );
};

export default EditUserInfo;
