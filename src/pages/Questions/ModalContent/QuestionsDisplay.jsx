import React, { useEffect, useState } from "react";

const QuestionsDisplay = ({
  questionInfo,
  transparent,
  answerMode,
  optionsAccess,
}) => {
  const { styles, number, question, type } = questionInfo;
  const [answerInfo, setAnswerInfo] = useState({
    questionInfo,
    answer: "",
  });

  useEffect(() => {
    answerInfo.answer &&
      typeof answerMode === "function" &&
      answerMode(answerInfo);
  }, [answerInfo, answerMode]);
  return (
    <div
      className={`question-display-section ${
        transparent && "question-display-transparent"
      }`}
    >
      <div
        className={`${styles.bold && "bold"} ${
          questionInfo.styles.italic && "italic"
        } ${styles.underline && "underline"} question`}
      >
        <p>{number}-</p>
        {question && <p>{question}</p>}
      </div>
      <div className="choices-container">
        {type === "multiple" &&
          questionInfo?.options.map(({ value, id }, index) =>
            value ? (
              <div key={id} className="choice-container">
                <button
                  onClick={() =>
                    setAnswerInfo((s) => ({
                      ...s,
                      answer: value,
                    }))
                  }
                  disabled={!answerMode}
                  className="choice"
                  style={{ fontFamily: "inherit", fontSize: "16px" }}
                >
                  {value}
                </button>
                <p
                  style={{
                    backgroundColor: answerInfo.answer === value && "#0f1959",
                    fontFamily: "inherit",
                    color: answerInfo.answer === value && "white",
                  }}
                  className="choice-number"
                >
                  {index + 1}
                </p>
              </div>
            ) : null
          )}
      </div>
      {type === "shortAnswer" && (
        <textarea
          maxLength={
            questionInfo?.options &&
            questionInfo?.options.find((option) => option.id === "max").value
          }
          minLength={
            questionInfo?.options &&
            questionInfo?.options.find((option) => option.id === "min").value
          }
          style={{ padding: 10, fontFamily: "inherit" }}
          className="display-textarea"
          disabled={!answerMode}
          onChange={(e) =>
            setAnswerInfo((s) => ({ ...s, answer: e.target.value }))
          }
          value={answerInfo.answer}
        />
      )}
      {type === "matrix" && optionsAccess.show && (
        <table>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>پرسش</th>
              {questionInfo?.options.map((column) => (
                <th key={column.id}>{column.value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {questionInfo?.rows &&
              questionInfo.rows.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.value}</td>
                  {questionInfo.options.map((column, index) => (
                    <td key={column.id}>
                      <button
                        style={{
                          width: "20px",
                          height: "20px",
                          fontFamily: "inherit",
                          border: "1px solid #0f1959",
                          borderRadius: "50px",
                          backgroundColor:
                            answerInfo?.answer[row.value] === column.value
                              ? "#0f1959"
                              : "transparent",
                        }}
                        onClick={() =>
                          setAnswerInfo((s) => ({
                            ...s,
                            answer: { ...s.answer, [row.value]: column.value },
                          }))
                        }
                        disabled={!answerMode}
                      ></button>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuestionsDisplay;
