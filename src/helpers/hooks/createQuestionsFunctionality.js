import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useCreateQuestions = (type, info, number) => {
  const initialState = info
    ? info
    : {
        type,
        number,
        question: "",
        styles: {
          bold: false,
          italic: false,
          underline: false,
        },
        questionId: uuidv4(),
        options: [
          {
            id:
              type !== "shortAnswer"
                ? uuidv4()
                : "min",
            value: "",
          },
          {
            id:
              type !== "shortAnswer"
                ? uuidv4()
                : "max",
            value: "",
          },
        ],
        rows:
          type === "matrix"
            ? [
                {
                  id: Math.floor(Math.random() * 10000),
                  value: "",
                },
                {
                  id: Math.floor(Math.random() * 10000),
                  value: "",
                },
              ]
            : null,
      };

  const [questionInfo, setQuestionInfo] = useState(initialState);
  const [optionsAccess, setOptionsAccess] = useState({
    show: false,
    passage: false,
  });

  const addQuestion = (e) => {
    setQuestionInfo((s) => ({ ...s, question: e.target.value }));
  };

  const editOption = (e, property, OptionsId) => {
    setQuestionInfo((s) => {
      const items = s[property]
        ? s[property].map((option) => {
            if (option.id === OptionsId) {
              return {
                id: OptionsId,
                value: e.target.value,
              };
            }
            return option;
          })
        : [];
      return {
        ...s,
        [property]: items,
      };
    });
  };

  const addOption = (property) => {
    setQuestionInfo((s) => ({
      ...s,
      [property]: [
        ...s[property],
        { id: Math.floor(Math.random() * 10000), value: "" },
      ],
    }));
  };

  const removeOption = (property, optionId) => {
    if (questionInfo[property].length > 2) {
      setQuestionInfo((s) => ({
        ...s,
        [property]: s[property].filter(({ id }) => id !== optionId),
      }));
    }
  };

  const editStyles = (e) => {
    setQuestionInfo((s) => ({
      ...s,
      styles: { ...s.styles, [e.target.value]: !s.styles[e.target.value] },
    }));
  };

  const checker = () => {
    if (questionInfo?.options) {
      setOptionsAccess({
        show:
          questionInfo?.options.filter((option) => !!option.value).length > 0,
        passage:
          questionInfo?.options.filter((option) => !!option.value).length > 1,
      });
    }

    if (type === "matrix") {
      setOptionsAccess((s) => ({
        passage: questionInfo?.rows.filter((row) => !!row.value).length > 1,
        show:
          s.show ||
          questionInfo?.rows.filter((row) => Boolean(row.value)).length > 0,
      }));
    }
  };

  useEffect(checker, [questionInfo?.options, questionInfo?.rows, type]);

  return {
    editStyles,
    removeOption,
    addOption,
    editOption,
    addQuestion,
    optionsAccess,
    questionInfo,
  };
};

export default useCreateQuestions;
