import QuestionsDisplay from "../Questions/ModalContent/QuestionsDisplay";
import UserHeader from "../../components/User_Header";
import { useLayoutEffect, useRef, useState } from "react";
import "./modal-content.css";
import { useNavigate } from "react-router-dom";

// you should fetch data below --------------------------------------
const data = {
  time: "تاریخ",
  name: "زهرا ثمربخش",
  questions: [
    {
      number: 1,

      options: [
        { id: "sina", value: "ستون ۱" },
        { id: "sina2", value: "ستون ۲" },
      ],
      question: "سوال ماتریسی",
      questionId: 8506,
      rows: [
        { id: "sina", value: "سطر ۱" },
        { id: "sina2", value: "سطر ۲" },
      ],
      styles: { bold: false, italic: false, underline: false },

      type: "matrix",
    },
    {
      number: 2,

      options: [
        { id: "sina", value: "گزینه ۱" },
        { id: "sina2", value: "گزینه ۲" },
      ],
      question: "سوال تستی",
      questionId: 853506,
      styles: { bold: true, italic: false, underline: false },
      type: "multiple",
    },
    {
      number: 3,
      options: [
        { id: "max", value: 500 },
        { id: "min", value: 52 },
      ],
      question: "سوال تشریحی",
      questionId: 85350346,
      styles: { bold: true, italic: true, underline: false },
      type: "shortAnswer",
    },
  ],
};
export const Answer = () => {
  const answers = useRef({});
  const navigate = useNavigate();
  const addAnswer = (answer) => {
    answers.current = {
      ...answers.current,
      ...(answer?.questionInfo && {
        [answer.questionInfo.number]: answer.answer,
      }),
    };
  };
  // fetch data here and replace with dummy data --------------------------------------------------------------
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Token" + localStorage.getItem("token"),
  });
  // test realData then replace with dummy data -----------------------------------------------------------
  const [realData, setData] = useState();
  console.log(realData);
  const getUrl = "localhost:8000/question/get/";
  const fetchedData = () => {
    fetch(getUrl, {
      method: "GET",
      headers,
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => alert("لطفا دوباره تلاش کنید."));
  };

  useLayoutEffect(() => {
    fetchedData();
  }, []);
  const [loading, setLoading] = useState(false);
  const postUrl = "localhost:8000/questionnaire/submissions/create/";
  // send data --------------------------------------------------------------------
  const send = () => {
    // send if all answered --------------------------------------------------------
    setLoading(true);
    if (data.questions.length === Object.values(answers.current).length) {
      fetch(postUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          userId: localStorage.getItem("userid"),
          answers: answers.current,
        }),
      })
        .then(() => {
          navigate("/UserMain");
        })
        .catch(() => alert("لطفا دوباره تلاش کنید."))
        .finally(() => setLoading(false));
      return;
    }
    alert("لطفا به تمامی سوالات پاسخ دهید.");
  };

  return (
    <div className="mainPage">
      <UserHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0  180px",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            color: "rgba(103, 137, 131, 1)",
            fontSize: 25,
          }}
        >
          {data.time}
        </p>
        <p
          style={{
            fontWeight: "bold",
            color: "rgba(103, 137, 131, 1)",
            fontSize: 25,
          }}
        >
          {data.name}
        </p>
      </div>
      {data.questions.map((q) => (
        <QuestionsDisplay
          questionInfo={q}
          transparent
          answerMode={addAnswer}
          optionsAccess={{ show: true }}
        />
      ))}
      <button
        onClick={send}
        disabled={loading}
        className="sendBtn"
        style={{
          position: "fixed",
          boxSizing: "border-box",
          bottom: 50,
          left: "5%",
          backgroundColor: "rgba(15, 25, 89, 1)",
          color: "white",
          padding: "10px 45px",
          borderRadius: 20,
          fontWeight: "bold",
        }}
      >
        ارسال
      </button>
    </div>
  );
};

export default Answer;
