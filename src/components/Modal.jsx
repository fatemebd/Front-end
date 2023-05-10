import React from "react";
import "../styles/modal.css";
import useOuterClick from "../helpers/hooks/outerClick";
import { RxCross2 } from "react-icons/rx";

//do not use this inside a container with display relative
export default function Modal({ header, children, show, toggle }) {
  const ref = useOuterClick(toggle);
  return (
    <>
      {show && (
        <div className="modal-container">
          <div ref={ref} className="modal-content-container">
            <div className="modal-header">
              <div>{header}</div>
              <button
                style={{ fontSize: 20 }}
                className="modal-close-btn"
                onClick={toggle}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
