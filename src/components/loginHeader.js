import styles from "../styles/loginHeader.module.css";
const Header = () => {

  return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.name}>
            <b className={styles.b1}> دانشگاه اصفهان </b>
            <b className={styles.b1}> name.ui.ac.ir </b>
          </div>
          
          <img className={styles.logoimg} src="/assets/img/UI LogoWH.png"/>
        </div>
        <div className={styles.wrapper}>
          <b className={styles.b}>
            سامانه ارزیابی کارکنان دانشکده مهندسی کامپیوتر
          </b>
        </div>
      </div>
  );
};

export default Header;
