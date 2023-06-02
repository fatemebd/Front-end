import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./TemplatesList.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import TemplateSearch from "../../components/TemplateSearch"
import { useState, useEffect } from 'react';



function TemplatesList () {
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
            <TemplateSearch text="جست‌و‌جو در قالب‌ها" selectMode="0" onChange={() => {handleSearchChange()}} />
            <Footer />
        </div>
    )
}

export default TemplatesList;