import { useState, useCallback } from "react";
import ManagerSide from "./ManagerSide";
import PortalPopup from "./PortalPopup";
import "../styles/adminHeader.css";
import styles from "../styles/adminHeader.css";

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
      <div className="header">
      <div className="logo">
            <div className="name">
            <b className="b1">دانشگاه اصفهان</b>
            <b className="b1">name.ui.acir</b>
            </div>
          
            <img className="universityOfIsfahanLogo2Icon" src="/assets/img/UI LogoWH.png"/>
          </div>
        <div className="wrapper">
          <b className="b1">
            سامانه ارزیابی کارکنان دانشکده مهندسی کامپیوتر
          </b>
        </div>
        <div className="accountWrapper" onClick={openManagerSide}>
            <img className="phlistIcon "alt="" src="/assets/img/phlist.svg" />
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
