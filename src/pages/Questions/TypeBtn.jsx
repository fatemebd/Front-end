import { FiFileText } from "react-icons/fi";
import { BsUiChecks } from "react-icons/bs";
import { ImTable } from "react-icons/im";

const TypeBtn = ({ onClick }) => (
  <div className="btn-container">
    <button className="btn" onClick={onClick} value={"multiple"}>
      <p>چندگزینه ای</p>
      <BsUiChecks />
    </button>
    <button className="btn" onClick={onClick} value={"matrix"}>
      <p>ماتریس</p>
      <ImTable />
    </button>
    <button className="btn" onClick={onClick} value={"shortAnswer"}>
      <p>متن</p>
      <FiFileText />
    </button>
  </div>
);

export default TypeBtn;
