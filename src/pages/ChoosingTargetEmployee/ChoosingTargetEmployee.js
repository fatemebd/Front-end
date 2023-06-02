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

    const survey = {

        template : null,
        employee : null,
        deadline : null,
        users : [], 
      }
      window.localStorage.setItem("survey", JSON.stringify(survey));

    const navigate = useNavigate();
    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }      

    return (
        <div className={styles.mainPage}>
            <Header />
            <div className={styles.main}>
                <div className={styles.stat}>
                    <StatusBar status="1" />
                </div>
               
            <div className={styles.searchcontainer}>
            <SearchBox  text="جست‌و‌جو در کارمندان..." columns={columns} values={values} apilink="http://localhost:8000/accounts/get-emp/" />

            </div>
                
            </div>
            <ChangePageIcon next="/ChoosingSurveyTemplate" />
            <Footer />
        </div>
    )
}

export default ChoosingTargetEmployee;