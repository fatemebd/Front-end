import React, { useState } from "react";
import Modal from "../../components/Modal";
import useToggle from "../../helpers/hooks/toggle";
import "./index.css";
import ModalContent from "./ModalContent";
import Header from "../../components/Admin_Header";
import Footer from "../../components/Footer";
import TypeBtn from "./TypeBtn";
import QuestionsList from "./QuestionsList";
import { useNavigate } from "react-router-dom";

export default function Questions() {
  const [show, toggle] = useToggle();
  const [modalview, setModalview] = useState();
  // get method  , setQuestions gets request value
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const [edit, setEdit] = useState(null);
  const [surveyName,setSurveyName]= useState("")
  const [tempId, setTempId] = useState();
  const [content, setContent] = useState(false);

  const addQuestions = (question) => {
    if (edit) {
      setQuestions((s) => [
        ...s.filter((q) => q.questionId !== question.questionId),
        question,
      ]);

      setEdit(null);
      return;
    }
    setQuestions((s) => [...s, question]);
  };

  // console.log(edit);

  const onClick = (e) => {
    setModalview(e.currentTarget.value);
    toggle();
  };

  // const headers = new Headers({
  //   "Content-Type": "application/json",
  //   "Authorization": "Token " + localStorage.getItem("token"),
  // });
  const postUrl = "localhost:8000/questionnaire/questionnaire_templates";
  const [loading, setLoading] = useState(false);

  const sendQuestions = () => {
    console.log(localStorage.getItem("tempId"))
    // const headers = new Headers({
    //   "Content-Type": "application/json",
    //   "Authorization": `Token ${localStorage.getItem('token')}`,
    // });
    // send if all answered --------------------------------------------------------
    setLoading(true);
    fetch('http://localhost:8000/question/create/' ,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    "Authorization": `Token ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        template_id: tempId,
        questions,
      }),
    })
      .then(() => {
        alert("قالب جدید با موفقیت اضافه شد.");
      })
      .catch(() => alert("لطفا دوباره تلاش کنید."))
      .finally(() => setLoading(false));
    return;
  };
  const sendTemp = async () => {

    const template_name=surveyName;
    const creator=localStorage.getItem("uid");
    const description= "";

    try {
      const response = await fetch('http://localhost:8000/questionnaire/questionnaire_templates/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify( {template_name,
          creator,
          description})
      });

      if (response.status === 201) {
        const data = await response.json();
        setTempId(data.id)
        alert("نظرسنجی ایجاد شد. لطفا سوالات را طراحی نمایید.")
      setModalview(null)
      // Set the state with the desired JSX
      setContent(
        true
      );
      } else {
        alert("لطفا دوباره تلاش کنید.")        
      }
    } catch (error) {
      console.error(error);
    }
  };







// const sendTemp=()=>{
  
//   setLoading(true);
//   // const headers = new Headers({
//   //   "Content-Type": "application/json",
//   //   "Authorization": `Token ${localStorage.getItem('token')}`,
//   // });
//   const demand= fetch(
//     'http://localhost:8000/questionnaire/questionnaire_templates/',{
//     method: 'POST',
//      headers:{
//       "Content-Type": "application/json",
//       "Authorization": `Token ${localStorage.getItem('token')}`,
//     }, 
//     template_name:surveyName,
//     creator:localStorage.getItem("userid"),
//     description: "",
//   })
//   // const data =  demand.json();
//   console.log(demand)
//     demand.then((response) => {
//       alert(`نظرسنجی ایجاد شد. لطفا سوالات را طراحی نمایید.`)
//       setModalview(null)
//       console.log("then");
//       // Set the state with the desired JSX
//       setContent(
//         true
//       );
//     })
//     .catch(() => alert("لطفا دوباره تلاش کنید."))
//     .finally(() => setLoading(false));
//   return;
// }
  return (
    <>
      <div className="main">
        <Header />
        <div className="container">
          <div className="name-of-survey-container">
          <button
          onClick={sendTemp}
          className="submit-temp-btn"
          disabled={loading}
        >
          ذخیره قالب
        </button>
            <input
              onBlur={(e) => setSurveyName(e.currentTarget.value)}
              id="name-of-survey"
            />
            <label htmlFor="name-of-survey"> : نام نظرسنجی</label>
           
          </div>
      
        <div>
     <TypeBtn onClick={onClick} /> 

          <QuestionsList
          questions={questions.sort((current, prev) => current.number - prev.number)}
          setEdit={setEdit}
          toggle={toggle}
          setQuestions={setQuestions}
          />
          {content&&modalview &&<Modal
          show={show}
          toggle={() => {
          toggle();
          setEdit(null);
          }}
          >
          {modalview &&content&& (
            <ModalContent
            numOfQuestion={edit !== null ? "درحال  تغییر" : questions.length + 1}
            toggle={() => {
            toggle();
            setEdit(null);
            }}
            setter={addQuestions}
            type={edit ? edit.type : modalview}
            info={edit}
            />
          )}
          </Modal>}
        </div>
         
        </div>

        
        <button
          onClick={sendQuestions}
          className="submit-btn"
          disabled={loading}
        >
          ذخیره
        </button>
        <Footer/>
      </div>
    </>
  );
}
