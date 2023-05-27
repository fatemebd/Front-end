import React from 'react';
import styles from "../styles/Box.module.css";
import { FiEdit3 } from 'react-icons/fi';

function Box () {
    return (
        <div className={styles.box}>
            <div className={styles.formName}>
                <FiEdit3 />
                <p>رفتار با دانشجویان</p>
            </div>
            <div>
                <p> ۷ سوال </p>
            </div>
        </div>
    )
}

export default Box;