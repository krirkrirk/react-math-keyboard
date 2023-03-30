import React, { useContext, useState } from "react";
import { MathFieldContext } from "../mathInput/mathfieldContext";
import { AlphabetLayout } from "./layout/alphabetLayout";
import { defaultNumericLayoutProps } from "./layout/defaultNumericLayoutProps";
import { NumericLayout, NumericLayoutProps } from "./layout/numericLayout";

export type KeyboardProps = {
  layoutType?: "numeric" | "alphabet";
  numericLayoutProps?: NumericLayoutProps;
};

export const Keyboard = ({ layoutType = "numeric", numericLayoutProps = defaultNumericLayoutProps }: KeyboardProps) => {
  const mathfield = useContext(MathFieldContext);

  const [currentLayoutType, setCurrentLayoutType] = useState(layoutType);
  const onSwitch = () => {
    if (currentLayoutType === "numeric") {
      mathfield.cmd("text");
    } else {
      mathfield.moveToRightEnd();
    }
    setCurrentLayoutType((prev) => (prev === "numeric" ? "alphabet" : "numeric"));
  };
  return (
    <div
      id="mq-keyboard"
      onMouseDown={(e) => e.preventDefault()}
      className="absolute z-[1310] flex justify-center bottom-0 first-letter:bottom-0 bg-slate-200 pb-1 m-0 w-full text-slate-900 gap-1 scrollbar"
    >
      {currentLayoutType === "numeric" && <NumericLayout onSwitch={onSwitch} {...numericLayoutProps} />}
      {currentLayoutType === "alphabet" && <AlphabetLayout onSwitch={onSwitch} />}
    </div>
  );
};
