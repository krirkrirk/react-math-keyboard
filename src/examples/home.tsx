import React from "react";
import ReactDOM from "react-dom";
import { MathInput } from "../mathInput/mathInput";
import "../style.css";
import "mathquill4keyboard/build/mathquill.css";
const Test = () => {
  return (
    <div>
      Test
      <p>
        <MathInput />
      </p>
    </div>
  );
};
ReactDOM.render(<Test />, document.getElementById("root"));
