import { useNavigate } from "react-router-dom";
import styles from "../styles/user_header.module.css"
const Header=() =>{
  const navigate=useNavigate();

    return(
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.name}>
            <b className={styles.b1}>دانشگاه اصفهان</b>
            <b className={styles.b1}>name.ui.ac.ir</b>
            </div>
          
            <img className={styles.university_of_isfahan} src="/assets/img/UI LogoWH.png"/>
          </div>
        <div className={styles.site_name}>
          <b style={{position :"relative"}}>سامانه ارزیابی کارکنان دانشکده مهندسی کامپیوتر</b>
        </div>
        
        <div className={styles.account}>
          <div className={styles.name}>
          <b className={styles.b1}>{localStorage.getItem('fullName')}</b>
        <div className={styles.icons}>
            <img className={styles.exit_icon} alt=""  src="/assets/img/rishutdownline.svg" onClick={()=>navigate("/")}/>

            <img className={styles.exit_icon} alt="" src="/assets/img/uilsetting.svg" onClick={()=>navigate("/usersetting")} />

            <div className={styles.home_parent}>
              <img className={styles.home_icon} alt=""  src="/assets/img/vector2.svg" onClick={()=>navigate("/UserMain")}/>
            </div>
          </div>
          </div>
       
          <img className={styles.person_icon} alt=""  src={localStorage.getItem('img')} />
          
        </div>
        
      </div>
    )
}

export default Header;