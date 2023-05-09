import style from "../styles/notif.module.css";

const Notification=() =>{

    const close_Click = () => {
      
          const popup = document.getElementById('Container');     
          popup.style.display = 'none';    
      };
    
    return(
        <div id="Container" className={style.popup_overlay} >
      <div className={style.parent}>
        <img className={style.polygon} alt="" src="/assets/img/polygon_1.svg" />

        <div className={style.notification}>
          <div className={style.content}>
            <div className={style.app_time_title}>
                <img className={style.close_icon} alt=""  src="/assets/img/vector.svg" onClick={close_Click} />
              <div className={style.text}>
                <div className={style.name_time}>
                  <b className={style.b} style={{direction: "rtl"}}>۲ هفته پیش</b>
                  <div className={style.dot}>•</div>
                  <b className={style.b}>دانشجویان</b>
                </div>
                <b className={style.title}>پرسشنامه اسفند ۱۴۰۱</b>
              </div>
            </div>
            <div className={style.body}>
              Do ullamco ex velit anim do proident exercitation et anim tempor.
              Lorem sunt deserunt labore non excepteur veniam enim quis officia
              magna anim...
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default Notification;