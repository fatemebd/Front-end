import { useState, useCallback } from "react";
import ManagerSide from "./ManagerSide";
import PortalPopup from "./PortalPopup";
import styles from "./Header.module.css";
const Header = () => {
  const [isManagerSideOpen, setManagerSideOpen] = useState(false);

  const openManagerSide = useCallback(() => {
    setManagerSideOpen(true);
  }, []);

  const closeManagerSide = useCallback(() => {
    setManagerSideOpen(false);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <img
          className={styles.universityOfIsfahanLogo2Icon}
          alt=""
          src="/assets/"
        />
        <div className={styles.wrapper}>
          <b className={styles.b}>
            سامانه ارزیابی کارکنان دانشکده مهندسی کامپیوتر
          </b>
        </div>
        <div className={styles.accountWrapper} onClick={openManagerSide}>
          <div className={styles.account}>
            <img className={styles.phlistIcon} alt="" src="/phlist.svg" />
          </div>
        </div>
      </div>
      {isManagerSideOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeManagerSide}
        >
          <ManagerSide onClose={closeManagerSide} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
