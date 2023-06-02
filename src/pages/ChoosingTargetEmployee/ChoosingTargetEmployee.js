import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ChoosingTargetEmployee.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import SearchBox from "../../components/SearchBox";
import StatusBar from '../../components/StatusBar';
import ChangePageIcon from '../../components/ChangePageIcon';

const columns=['radio','سمت ','نام و نام خانوادگی','نام کاربری','ردیف'];
const values=['position','name','username'];



function ChoosingTargetEmployee () {
    const navigate = useNavigate();
    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }      

    return (
        <div className={styles.mainPage}>
            <Header />
            <SearchBox text="جست‌و‌جو در کارمندان" />
            <div className={styles.main}>
                <div className={styles.stat}>
                    <StatusBar status="1" />
                </div>
               

                
            </div>
            <ChangePageIcon next="/ChoosingSurveyTemplate" />
            <Footer />
        </div>
    )
}

export default ChoosingTargetEmployee;