import { useState, useCallback } from "react";
import ManagerSide from "./ManagerSide";
import PortalPopup from "./PortalPopup";
import style from "../styles/adminHeader.module.css";

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
      <div className={style.header}>
      <div className={style.logo}>
            <div className={style.name}>
            <b className={style.b1}>دانشگاه اصفهان</b>
            <b className={style.b1}>name.ui.acir</b>
            </div>
          
            <img className={style.universityOfIsfahanLogo2Icon} src="/assets/img/UI LogoWH.png"/>
          </div>
        <div className={style.wrapper}>
          <b className={style.b1}>
            سامانه ارزیابی کارکنان دانشکده مهندسی کامپیوتر
          </b>
        </div>
        <div className={style.accountWrapper} onClick={openManagerSide}>
            <img className={style.phlistIcon} alt="" src="/assets/img/phlist.svg" />
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
