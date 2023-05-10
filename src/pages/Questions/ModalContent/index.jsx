import "./modal-content.css";
import OptionsList from "./OptionsList";
import QuestionsDisplay from "./QuestionsDisplay";
import QuestionTextarea from "./QuestionTextarea";
import Btns from "./Btns";
import useCreateQuestions from "../../../helpers/hooks/createQuestionsFunctionality";

export default function ModalContent({
  numOfQuestion,
  toggle,
  setter,
  type,
  info,
}) {
  const {
    editStyles,
    removeOption,
    addOption,
    editOption,
    addQuestion,
    optionsAccess,
    questionInfo,
  } = useCreateQuestions(type, info, numOfQuestion);
  console.log(type , 'here');
  return (
    <div className="content-container">
      <div className="question-create-section">
        <QuestionTextarea
          addQuestion={addQuestion}
          editStyles={editStyles}
          questionInfo={questionInfo}
        />
        <OptionsList
          type={type}
          questionInfo={questionInfo}
          editOption={editOption}
          addOption={addOption}
          removeOption={removeOption}
        />
        <Btns
          submit={() => {
            if (questionInfo.question && optionsAccess.passage) {
              setter(questionInfo);
              toggle();
            }
          }}
          toggle={toggle}
        />
      </div>
      <QuestionsDisplay
        questionInfo={questionInfo}
        optionsAccess={optionsAccess}
      />
    </div>
  );
}
