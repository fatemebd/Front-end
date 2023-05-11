import { useState, useCallback } from "react";
import PortalPopup from './PortalPopup';
import EditUserInfo from "./EditUserInfo"
export const Result = () => {

    return (
        <div className='result'>
            <img src="/assets/img/result.svg"/>
        </div>
    );
};
export const Edit = ()=>{
    const [isEditOpen, setEditOpen] = useState(false);

  const openEditSide = useCallback(() => {
    setEditOpen(true);
  }, []);

  const closeEdit = useCallback(() => {
    console.log("ddddddddddd")
    setEditOpen(false);
  }, []);
    return(
        <div>
            <img src="/assets/img/edit.svg" onClick={openEditSide}/>
            {isEditOpen&&(
            <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
          placement="center"
          onOutsideClick={closeEdit}>
                <EditUserInfo onClose={closeEdit}/>
            </PortalPopup>
        )}
        </div>
         
    )
}

export const Delete = ()=>{
    return(
        <div>
            <img src="/assets/img/delete.svg"/>
        </div>
    )
}

