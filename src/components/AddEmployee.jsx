import React from 'react';
import { useState, useRef } from 'react';
import styles from "../styles/AddEmployee.module.css";

const close_Click = () => {
      
  const popup = document.getElementById('addEmp');     
  popup.style.display = 'none';    
};

function EditUserInfo(prop) {
 
  const [username, setUsername] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [faculty, setfaculty] = useState('');
  const [image, setImage] = useState("/assets/img/materialsymbolsaccountcircle.svg");//prop.info.image_path//
  const inputFile = useRef(null);
  const [phone, setphone] = useState('');

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const imageUrl = selectedFile ? URL.createObjectURL(selectedFile) : image;
    setImage(imageUrl);
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleSave = async () => {
    
    try {
      const response = await fetch('http://localhost:8000/accounts/edit-stu', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({ username, first_name,last_name,email,faculty,position,phone })
      });
    

       if (response.status === 200) 
        console.log(response.message)
      
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={styles.Edit} id="addEmp">
      <div className={styles.editUser} >
        <div className={styles.icon}>
          <img className={styles.vectorIcon} alt="" src="/assets/img/close.png" onClick={close_Click}/>
        </div>

        <div className={styles.wrapper}>
          <b className={styles.b}>افزودن کارمند</b>
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
                <input className={styles.input} type="text" required value={last_name} onChange={(e) => {setlast_name(e.target.value)}} />
                <div className={styles.container}>
                  <p className={styles.b2}>نام خانوادگی</p>
                </div>
              </div>
              <div className={styles.inputFieldName}>
                <input className={styles.input} type="text" required value={first_name} onChange={(e) => {setfirst_name(e.target.value)}} />
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
                <input className={styles.input} type="text" required value={faculty} onChange={(e) => {setfaculty(e.target.value)}} />
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
              <input className={styles.input} type="text" required value={phone} onChange={(e) => {setphone(e.target.value)}} />
              <div className={styles.container}>
                <p className={styles.b2}> تلفن همراه </p>
              </div>
            </div>
          
           


            <div className={styles.success}>
              <b className={styles.b}> با موفقیت افزوده شد.</b>
            </div>

            <div className={styles.save}>
              <button onClick={handleSave} className={styles.button}>
                <p className={styles.buttom}>ذخیره</p>
              </button>
              
            </div>
          </div>

          </div>

        </div>
      </div>
  );
};

export default EditUserInfo;
