import "../styles/notif.css";

const Notification=() =>{

    const close_Click = () => {
      
          const popup = document.getElementById('Container');     
          popup.style.display = 'none';    
      };
    
    return(
        <div id="Container" class="popup-overlay" >
      <div class="parent">
        <img class="polygon" alt="" src="/assets/img/polygon-1.svg" />

        <div class="notification">
          <div class="content">
            <div class="app-time-title">
                <img class="close-icon" alt=""  src="/assets/img/vector.svg" onClick={close_Click} />
              <div class="text">
                <div class="name-time">
                  <b class="b" style={{direction: "rtl"}}>۲ هفته پیش</b>
                  <div class="dot">•</div>
                  <b class="b">دانشجویان</b>
                </div>
                <b class="title">پرسشنامه اسفند ۱۴۰۱</b>
              </div>
            </div>
            <div class="body">
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