import React from 'react';
import styles from "../styles/ChangePageIcon.module.css";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function ChangePageIcon (props) {
    if (props.before == "0" && props.next == "1") {
        return (
            <div className={styles.container}>
                <div className={styles.next}>
                    <FiChevronLeft />                
                </div>

                <div className={styles.before_disable}>
                    <FiChevronRight />
                </div>
            </div>
        )
    }
    else if (props.before == "1" && props.next == "0") {
        return (
            <div className={styles.container}>
                <div className={styles.next_disable}>
                    <FiChevronLeft />                
                </div>

                <div className={styles.before}>
                    <FiChevronRight />
                </div>
            </div>
        )
    }
    else if (props.before == "1" && props.next == "1") {
        return (
            <div className={styles.container}>
                <div className={styles.next}>
                    <FiChevronLeft />                
                </div>

                <div className={styles.before}>
                    <FiChevronRight />
                </div>
            </div>
        )
    }    
}

export default ChangePageIcon;