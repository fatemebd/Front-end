import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ChoosingSurveyTemplate.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import SearchBox from "../../components/SearchBox";
import Box from "../../components/Box"
import StatusBar from '../../components/StatusBar';
import ChangePageIcon from '../../components/ChangePageIcon';

function ChoosingSurveyTemplate () {
    const navigate = useNavigate();
    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }      

    return (
        <div className={styles.mainPage}>
            <Header />
            <SearchBox text="جست و جو در قالب ها"/>
            <div className={styles.main}>
                <div className={styles.stat}>
                    <StatusBar status="2" />
                </div>
                <div className={styles.container}>

                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />
                    <Box formName="رفتار با دانشجویان" numOfQuestions="۸" />

                </div>

                
            </div>
            <ChangePageIcon before="/ChoosingTargetEmployee" next="/ChoosingRespondents" />
            <Footer />
        </div>
    )
}

export default ChoosingSurveyTemplate;