import React from "react";
import "./user_main.css"
import "./global.css"
import Table from "../../components/Table";

const UsermainpagePage = () => {
    return (
        <>
        <div class="user-main-page">
        <div class="header">
        <img
          class="university-of-isfahan-logo-3-icon"
          alt=""
          src="/assets/img/university-of-isfahanlogo-3@2x.png"
        />

        <div class="site-name">
          <b class="b2">سامانه ارزیابی کارکنان دانشکده مهندسی کامپیوتر</b>
        </div>
        <div class="account">
          <div class="material-symbolsaccount-circl">
            <img class="vector-icon1" alt="" src="/assets/img/vector1.svg" />
          </div>
          <b class="b5">مطهره وکیلی</b>
          <div class="rishut-down-line-parent">
            <img
              class="rishut-down-line-icon"
              alt=""
              src="/assets/img/rishutdownline.svg"
            />

            <div class="claritynotification-line-wrapper">
              <img
                class="rishut-down-line-icon"
                alt=""
                src="/assets/img/claritynotificationline.svg"
                id="claritynotificationLineIcon"
              />
            </div>
            <img
              class="rishut-down-line-icon"
              alt=""
              src="/assets/img/uilsetting.svg"
            />

            <div class="vector-wrapper">
              <img class="vector-icon2" alt="" src="/assets/img/vector2.svg" />
            </div>
          </div>
        </div>
       
      </div>
      <div class="body">
      <Table/>
      </div>
         
      </div>
      
     </> 
      
                 );
                       };
  
  export default UsermainpagePage;



