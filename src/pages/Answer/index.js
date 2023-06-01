import QuestionsDisplay from "../Questions/ModalContent/QuestionsDisplay";
import UserHeader from "../../components/User_Header";
import { useRef } from "react";
import "../Questions/ModalContent/modal-content.css";
const data = {
  time: "farda",
  name: "sina",
  questions: [
    {
      number: 1,

      options: [
        { id: "sina", value: "sina" },
        { id: "sina2", value: "sina2" },
      ],
      question: "adw",
      questionId: 8506,
      rows: [
        { id: "sina", value: "sina" },
        { id: "sina2", value: "sina2" },
      ],
      styles: { bold: false, italic: false, underline: false },

      type: "matrix",
    },
    {
      number: 2,

      options: [
        { id: "sina", value: "sina" },
        { id: "sina2", value: "sina2" },
      ],
      question: "adwfadw",
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
      question: "adwfadw",
      questionId: 85350346,
      styles: { bold: true, italic: true, underline: false },
      type: "shortAnswer",
    },
  ],
};
export const Answer = () => {
  const answers = useRef({});

  const addAnswer = (answer) =>
    (answers.current = {
      ...answers.current,
      ...(answer?.questionInfo && {
        [answer.questionInfo.number]: answer,
      }),
    });
  return (
    <div>
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
        onClick={() => console.log(answers.current)}
        style={{
          position: "fixed",
          boxSizing: "border-box",
          bottom: 100,
          left: "10%",
          backgroundColor: "rgba(15, 25, 89, 1)",
          color: "white",
          padding: "10px 45px",
          borderRadius: 20,
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        ارسال
      </button>
    </div>
  );
};

export default Answer;
