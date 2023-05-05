import styles from "../styles/ManagerSide.module.css";
const ManagerSide = ({ onClose }) => {
  return (
    <div className={styles.managerSide}>
      <div className={styles.account}>
        <img
          className={styles.materialSymbolsaccountCirclIcon}
          alt=""
          src="/assets/img/materialsymbolsaccountcircle.svg"
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
            src="/assets/img/rihome4line.svg"
          />
        </button>
        <button className={styles.parent}>
          <b className={styles.b2}>ایجاد قالب</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/assets/img/carbondocumentadd.svg"
          />
        </button>
        <button className={styles.parent}>
          <b className={styles.b2}>ایجاد پرسشنامه</b>
          <img className={styles.rihome4LineIcon} alt="" src="/assets/img/wpfsurvey.svg" />
        </button>
        <button className={styles.parent}>
          <b className={styles.b2}>فهرست کارمندان</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/assets/img/fluentpeoplelist20regular.svg"
          />
        </button>
        <button className={styles.parent}>
        <b className={styles.b2}>فهرست کاربران</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/assets/img/materialsymbolspatientlistrounded.svg"
          />
        </button>
        <button className={styles.parent}>
          <b className={styles.b2}>لیست قالب‌ها</b>
          <img
            className={styles.rihome4LineIcon}
            alt=""
            src="/assets/img/fluentappslistdetail20regular.svg"
          />
        </button>
      </div>
      <div className={styles.rishutDownLineParent}>
        <button className={styles.rishutDownLine}>
          <img className={styles.vectorIcon} alt="" src="/assets/img/vector.svg" />
        </button>
        <button className={styles.rishutDownLine}>
          <img className={styles.vectorIcon1} alt="" src="/assets/img/vector1.svg" />
        </button>
        <button className={styles.icroundKeyboardDoubleArrowWrapper}>
          <img
            className={styles.icroundKeyboardDoubleArrowIcon}
            alt=""
            src="/assets/img/icroundkeyboarddoublearrowleft.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ManagerSide;
