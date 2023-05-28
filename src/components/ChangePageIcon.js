import React from 'react';
import styles from "../styles/ChangePageIcon.module.css";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function ChangePageIcon (props) {
    const navigate = useNavigate();

    if (props.before == null) {
        return (
            <div className={styles.container}>
                <div className={styles.next} onClick={() => {navigate(props.next)}}>
                    <FiChevronLeft />                
                </div>

                <div className={styles.before_disable}>
                    <FiChevronRight />
                </div>
            </div>
        )
    }
    else if (props.next == null) {
        return (
            <div className={styles.container}>
                <div className={styles.next_disable}>
                    <FiChevronLeft />                
                </div>

                <div className={styles.before} onClick={() => {navigate(props.before)}}>
                    <FiChevronRight />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.container}>
                <div className={styles.next} onClick={() => {navigate(props.next)}}>
                    <FiChevronLeft />                
                </div>

                <div className={styles.before} onClick={() => {navigate(props.before)}}>
                    <FiChevronRight />
                </div>
            </div>
        )
    }    
}

export default ChangePageIcon;