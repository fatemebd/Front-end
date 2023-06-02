import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ChoosingSurveyTemplate.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import Box from "../../components/Box"
import TemplateSearch from "../../components/TemplateSearch"
import StatusBar from '../../components/StatusBar';
import ChangePageIcon from '../../components/ChangePageIcon';
import { useState, useEffect } from 'react';


function ChoosingSurveyTemplate () {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };



    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }      


    return (
        <div className={styles.mainPage}>
            <Header />
            
            <div className={styles.main}>
                <div className={styles.stat}>
                    <StatusBar status="2" />
                </div>
                <div className={styles.container}>

                    <TemplateSearch text="جست‌و‌جو در قالب‌ها"/>

                </div>

                
            </div>
            <ChangePageIcon before="/ChoosingTargetEmployee" next="/ChoosingRespondents" />
            <Footer />
        </div>
    )
}

export default ChoosingSurveyTemplate;