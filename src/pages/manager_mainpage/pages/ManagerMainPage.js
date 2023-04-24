import Header from "../components/Header";
import styles from "./ManagerMainPage.module.css";
import Table from "../components/Table";

const ManagerMainPage = () => {
  return (
    <div className={styles.managerMainPage}>
      <Header />
      <div className={styles.searchBox}>
        <div className={styles.parent}>
          <b className={styles.b}>جست‌وجو در نظرسنجی‌ها</b>
          <img
            className={styles.materialSymbolssearchRoundeIcon}
            alt=""
            src="/materialsymbolssearchrounded.svg"
          />
        </div>
      </div>
      <Table />
      <div className={styles.footer}>
        <b className={styles.b1}>
          تمامی حقوق استفاده از این سامانه متعلق به دانشگاه اصفهان می‌باشد.
        </b>
      </div>
    </div>
  );
};

export default ManagerMainPage;
