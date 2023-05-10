import React from "react";

export default function btns({toggle ,submit}) {
  return (
    <div className="final-btns-container">
      <button
        className="final-btns"
        onClick={submit}
      >
        ذخیره
      </button>
      <button className="final-btns" onClick={toggle}>
        انصراف
      </button>
    </div>
  );
}
