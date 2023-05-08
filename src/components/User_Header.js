import "../styles/user_header.css";

const Header=() =>{

  const notifClick = () =>{
    var notif = document.getElementById("notif");
    if (notif) {
   
        var popup = document.getElementById("Container");
        if (!popup) return;
        var popupStyle = popup.style;
        if (popupStyle) {
          popupStyle.display = "flex";
          popupStyle.zIndex = 100;
          popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
          popupStyle.alignItems = "center";
          popupStyle.justifyContent = "center";
        }
        popup.setAttribute("closable", "");
    
        var onClick =
          popup.onClick ||
          function (e) {
            if (e.target === popup && popup.hasAttribute("closable")) {
              popupStyle.display = "none";
            }
          };
        popup.addEventListener("click", onClick);
      
  }


  
  }
    return(
        <div class="header">
          <div class="logo">
            <div class="name">
            <b class="b1">دانشگاه اصفهان</b>
            <b class="b1">name.ui.ac.ir</b>
            </div>
          
            <img class="university-of-isfahan" src="/assets/img/UI LogoWH.png"/>
          </div>
        <div class="site-name">
          <b style={{position :"relative"}}>سامانه ارزیابی کارکنان دانشکده مهندسی کامپیوتر</b>
        </div>
        
        <div class="account">
          <div class="name">
          <b class="b1">مطهره وکیلی</b>
        <div class="icons">
            <img class="exit-icon" alt=""  src="/assets/img/rishutdownline.svg"/>
            <div class="notif_icon">
              <img class="exit-icon" 
              alt=""  id="notif" 
              src="/assets/img/claritynotificationline.svg" onClick={notifClick} />
            </div>
            <img class="exit-icon" alt="" src="/assets/img/uilsetting.svg"/>

            <div class="home_parent">
              <img class="home_icon" alt=""  src="/assets/img/vector2.svg" />
            </div>
          </div>
          </div>
       
          <img class="person_icon" alt=""  src="/assets/img/vector1.svg" />
          
        </div>
        
      </div>
    )
}

export default Header;