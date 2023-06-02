import style from "../styles/TemplateSearch.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import Box from './Box';



const TemplateSearch = (props) => {
  const [data, setData] = useState([]);
  const [questionnaires, setQuestionnaires] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  const handleSearch = (e) => {
      if (e.key === "Enter") {
        const link = "http://localhost:8000/questionnaire/questionnaire_templates/" + "?search=" + e.target.value;
        fetch(link)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }
  };

  const boxes = questionnaires.map((questionnaire) => (
    <Box key={questionnaire.id} formName={questionnaire.template_name} />
  ));


  return (
    <>
      <div className={style.search_box}>
        <button className={style.search_icon}>
          <img
            className={style.ssearch_rounde_icon}
            alt=""
            src="assets/img/loupe.png"
          />
        </button>
        <input
          className={style.input_search}
          type="text"
          placeholder={props.text}
          onKeyDown={handleSearch}
        />
      </div>


      <div className={style.container}>
        <div>
          {props.selectMode == '0' && 
            <div className={style.box} onClick={() => navigate('/questions')}>
                <div className={style.formName}>
                    <FiPlusCircle />
                    <p> پرسشنامه جدید </p>
                </div>
            </div>
          }
        </div>


        {boxes}

      </div>
    </>
  );
};

export default TemplateSearch;
