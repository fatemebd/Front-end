import React from "react";
import Options from "./Options";

const OptionsList = ({
  type,
  questionInfo,
  editOption,
  addOption,
  removeOption,
}) => (
  <div>
    <div className="question-options-container">
      <label>
        {type === "shortAnswer" && "محدودیت تعداد حروف پاسخ"}
        {type === "matrix" && "ستون ها"}
        {type === "multiple" && "گزینه ها"}
      </label>
      {questionInfo.options.map((option, index) => (
        <div style={{ position: "relative" }} key={option.id}>
          <Options
            type={type}
            property={"options"}
            editOption={editOption}
            addOption={addOption}
            removeOption={removeOption}
            value={option}
          />
          {type === "multiple" && (
            <p className="question-options-counter">{index + 1}</p>
          )}
        </div>
      ))}
    </div>

    {type === "matrix" && (
      <div className="question-options-container">
        <label>ردیف ها</label>
        {questionInfo?.rows.map((row, index) => (
          <Options
            type={type}
            key={row.id}
            property={"rows"}
            editOption={editOption}
            addOption={addOption}
            removeOption={removeOption}
            value={row}
          />
        ))}
      </div>
    )}
  </div>
);

export default OptionsList;
