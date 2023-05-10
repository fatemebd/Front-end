import React from "react";

export default function QuestionTextareaa({
  addQuestion,
  editStyles,
  questionInfo,
}) {
  return (
    <div className="question-textarea">
      <label htmlFor="question-input">سوال</label>
      <div className="textarea-container">
        <div className="textarea-options-container">
          <button
            className="textarea-option underline"
            onClick={editStyles}
            value="underline"
          >
            U
          </button>
          <button
            className="textarea-option italic"
            onClick={editStyles}
            value="italic"
          >
            I
          </button>
          <button
            className="textarea-option bold"
            onClick={editStyles}
            value="bold"
          >
            B
          </button>
        </div>
        <textarea
          placeholder="متن سوال..."
          id="question-input"
          className={`${questionInfo.styles.bold && "bold"} ${
            questionInfo.styles.italic && "italic"
          } ${questionInfo.styles.underline && "underline"} question-textarea`}
          onChange={addQuestion}
          value={questionInfo.question}
        />
      </div>
    </div>
  );
}
