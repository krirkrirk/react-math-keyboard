import React from "react";
import ReactDOM from "react-dom";
import { MathInput } from "../mathInput/mathInput";
import "../style.css";
const Test = () => {
  return (
    <div>
      Test
      <MathInput />
    </div>
  );
};
ReactDOM.render(<Test />, document.getElementById("root"));
