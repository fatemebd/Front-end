import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./TemplatesList.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import TemplateSearch from "../../components/TemplateSearch"
import Box from '../../components/Box';
import { useState, useEffect } from 'react';
import { FiPlusCircle } from 'react-icons/fi';



function TemplatesList () {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const url = "http://localhost:8000/questionnaire/questionnaire_templates/";
        const headers = new Headers({
            "Content-Type": "application/json",
            "Authorization": "Token " + localStorage.getItem('token'),
        });
        fetch(url, { headers })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setQuestionnaires(data))
            .catch(error => console.log(error));
    }, [searchQuery]);

    

    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }
    
    const boxes = questionnaires.map((questionnaire) => (
        <Box key={questionnaire.id} formName={questionnaire.template_name} />
    ));


    return (
        <div className={styles.mainPage}>
            <Header />
            <TemplateSearch text="جست‌و‌جو در قالب‌ها" onChange={() => {handleSearchChange()}} />
            <div className={styles.container}>
                <div className={styles.box} onClick={() => navigate('/questions')}>
                    <div className={styles.formName}>
                        <FiPlusCircle />
                        <p> پرسشنامه جدید </p>
                    </div>
                </div>

                {boxes}

            </div>
            <Footer />
        </div>
    )
}

export default TemplatesList;