import React from "react";
import QuestionsDisplay from "./ModalContent/QuestionsDisplay";

const QuestionsList = ({ questions, setEdit, toggle, setQuestions }) => (
  <div>
    {questions.map((q, index) => (
      <div key={q.questionId}>
        <QuestionsDisplay
          numOfQuestion={index + 1}
          questionInfo={q}
          transparent
          optionsAccess={{ show: true }}
        />
        <div className="edit-delete-container">
          <button
            onClick={() =>
              setQuestions((s) => {
                const removedArray = s.filter(
                  ({ questionId }) => questionId !== q.questionId
                );
                return removedArray.map((q, index) => ({
                  ...q,
                  number: index + 1,
                }));
              })
            }
          >
            حذف
          </button>
          <button
            onClick={() => {
              setEdit(q);
              toggle();
            }}
          >
            تغییر
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default QuestionsList;
