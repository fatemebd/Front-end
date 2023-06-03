import React, { useState, useEffect } from 'react';
import styles from "../styles/Box.module.css";
import { FiEdit3 } from 'react-icons/fi';
import { useLayoutEffect } from 'react';


function Box (props) {
    const [id, setId] = useState('1');
    const [num, setNum] = useState();

    useLayoutEffect(() => {
        setId(props.key);
        console.log(typeof id);
        const fetchNumberQuestions = async () => {
          try {
            const url = "http://localhost:8000/questionnaire/questionnaires/number_questions/?id=" + id;
            const headers = new Headers({
              "Content-Type": "application/json",
              "Authorization": "Token " + localStorage.getItem('token'),
            });
            const response = await fetch(url, { headers, mode: 'cors' });
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setNum(data.number_questions);
          } catch (error) {
            console.error(error);
          }
        };
        fetchNumberQuestions();
      }, [id]);

    return (
        <div className={styles.box}>
            <div className={styles.formName}>
                <FiEdit3 />
                <p> {props.formName} </p>
            </div>
            <div>
                <p> {"۳"} سؤال </p>
            </div>
        </div>
    )
}

export default Box;