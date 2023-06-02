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
  const [surveyName, setSurveyName] = useState("");
  console.log(questions);

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

  console.log(edit);

  const onClick = (e) => {
    setModalview(e.currentTarget.value);
    toggle();
  };

  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Token" + localStorage.getItem("token"),
  });
  const postUrl = "localhost:8000/questionnaire/questionnaire_templates";
  const [loading, setLoading] = useState(false);
  const sendQuestions = () => {
    // send if all answered --------------------------------------------------------
    setLoading(true);
    fetch(postUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        template_name: surveyName,
        creator: localStorage.getItem("userid"),
        description: "",
        questions,
      }),
    })
      .then(() => {
        navigate("/UserMain");
      })
      .catch(() => alert("لطفا دوباره تلاش کنید."))
      .finally(() => setLoading(false));
    return;
  };

  return (
    <>
      <div className="main">
        <Header />
        <div className="container">
          <div className="name-of-survey-container">
            <input
              onBlur={(e) => setSurveyName(e.currentTarget.value)}
              id="name-of-survey"
            />
            <label htmlFor="name-of-survey"> : نام نظرسنجی</label>
          </div>
          <TypeBtn onClick={onClick} />
          <QuestionsList
            questions={questions.sort(
              (current, prev) => current.number - prev.number
            )}
            setEdit={setEdit}
            toggle={toggle}
            setQuestions={setQuestions}
          />
          <Modal
            show={show}
            toggle={() => {
              toggle();
              setEdit(null);
            }}
          >
            {modalview && (
              <ModalContent
                numOfQuestion={
                  edit !== null ? "درحال  تغییر" : questions.length + 1
                }
                toggle={() => {
                  toggle();
                  setEdit(null);
                }}
                setter={addQuestions}
                type={edit ? edit.type : modalview}
                info={edit}
              />
            )}
          </Modal>
        </div>
        <button
          onClick={sendQuestions}
          className="submit-btn"
          disabled={loading}
        >
          ذخیره
        </button>
        {/* <Footer/> */}
      </div>
    </>
  );
}
