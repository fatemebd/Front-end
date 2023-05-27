import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./TemplatesList.module.css";
import Header from '../../components/Admin_Header';
import Footer from '../../components/Footer';
import SearchBox from "../../components/SearchBox";
import Box from "../../components/Box"

function TemplatesList () {
    const navigate = useNavigate();
    if (localStorage.getItem('token') == 'null') {
        navigate("/");
        return;
    }      

    return (
        <div className={styles.mainPage}>
            <Header />
            <SearchBox />
            <div className={styles.container}>
                <Box />
            </div>
            <Footer />
        </div>
    )
}

export default TemplatesList;