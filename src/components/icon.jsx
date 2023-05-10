import React from 'react';
import { useState, useCallback } from "react";
import EditUserInfo from "./EditUserInfo.jsx"
import { useNavigate } from 'react-router-dom';

export const Result = () => {

    return (
        <div className='result'>
            <img src="/assets/img/result.svg"/>
        </div>
    );
};
export const Edit = ()=>{

    const [isEditOpen, setEditOpen] = useState(false);

  const openEdit = useCallback(() => {
    setEditOpen(true);
  }, []);

  const closeEdit = useCallback(() => {
    setEditOpen(false);
  }, []);
    return(
        <div>
            <img src="/assets/img/edit.svg"onclick={openEdit} />
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

