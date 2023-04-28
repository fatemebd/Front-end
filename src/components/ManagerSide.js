import styles from "../styles/ManagerSide.module.css";
const ManagerSide = ({ onClose }) => {
  return (
    <div className={styles.managerSide}>
      <div className={styles.account}>
        <img
          className={styles.materialSymbolsaccountCirclIcon}
          alt=""
          src="/materialsymbolsaccountcircle.svg"
        />
        <b className={styles.b}>مطهره وکیلی</b>
        <img className={styles.accountChild} alt="" src="/line-1.svg" />
        <div className={styles.accountItem} />
      </div>
      <div className={styles.list}>
        <button className={styles.parent}>
          <b className={styles.b1}>خانه</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/rihome4line.svg"
          />
        </button>
        <button className={styles.parent}>
          <b className={styles.b2}>ایجاد قالب</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/carbondocumentadd.svg"
          />
        </button>
        <button className={styles.parent}>
          <b className={styles.b2}>ایجاد پرسشنامه</b>
          <img className={styles.rihome4LineIcon} alt="" src="/wpfsurvey.svg" />
        </button>
        <button className={styles.parent}>
          <b className={styles.b2}>فهرست کارمندان</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/fluentpeoplelist20regular.svg"
          />
        </button>
        <button className={styles.parent}>
        <b className={styles.b2}>فهرست کاربران</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/materialsymbolspatientlistrounded.svg"
          />
        </button>
        <button className={styles.parent}>
          <b className={styles.b2}>لیست قالب‌ها</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/fluentappslistdetail20regular.svg"
          />
        </button>
      </div>
      <div className={styles.rishutDownLineParent}>
        <button className={styles.rishutDownLine}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
        <button className={styles.rishutDownLine}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </button>
        <button className={styles.icroundKeyboardDoubleArrowWrapper}>
          <img
            className={styles.icroundKeyboardDoubleArrowIcon}
            alt=""
            src="/icroundkeyboarddoublearrowleft.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ManagerSide;
