import Header from "../components/Header";
import styles from "./ManagerMainPage.module.css";
import Table from "../components/Table";
import Footer from "../components/Footer"

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
      <Footer />
    </div>
  );
};

export default ManagerMainPage;
