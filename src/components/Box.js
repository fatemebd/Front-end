import React from 'react';
import styles from "../styles/Box.module.css";
import { FiEdit3 } from 'react-icons/fi';

function Box (props) {
    return (
        <div className={styles.box}>
            <div className={styles.formName}>
                <FiEdit3 />
                <p> {props.formName} </p>
            </div>
            <div>
                <p> {props.numOfQuestions} سوال </p>
            </div>
        </div>
    )
}

export default Box;