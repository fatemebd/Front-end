import { BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Options = ({
  type,
  editOption,
  addOption,
  removeOption,
  value,
  property,
}) => {
  return (
    <div className="input-container">
      {type === "shortAnswer" && (
        <p className="shortAnswer-option-text">
          {value.id === "max" ? ":حداکثر" : ":حداقل"}
        </p>
      )}
      <input
        className={`${type === "multiple" && "input-container-choice-padding"}`}
        onChange={(e) => editOption(e, property, value.id)}
        type={type === "shortAnswer" ? "number" : "text"}
        value={value.value}
      />
      {type !== "shortAnswer" && (
        <div className="input-option-container">
          <button className="input-option" onClick={() => addOption(property)}>
            <BiPlus style={{ width: 30 }} />
          </button>
          <button
            className="input-option"
            onClick={() => removeOption(property, value.id)}
          >
            <RxCross2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default Options;
