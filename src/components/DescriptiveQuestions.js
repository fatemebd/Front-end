import React from "react";
import styles from "../styles/DescriptiveQuestions.module.css";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const DescriptiveQuestions = (props)=>{
    return(
      <div className={styles.q}>
        <p> {props.question} متن </p>
        <div contenteditable="false" className={styles.textarea}>
          <div className={styles.icons}>
            <div onClick={props.nextFunc}>
              <FiChevronLeft className={styles.icon} /> 
            </div>
            <div onClick={props.prevFunc}>
              <FiChevronRight className={styles.icon}/> 
            </div>
          </div>
          <br></br>
           {props.text} سلام
        </div>
      </div>

    )
}
export default DescriptiveQuestions;