import React, { useContext, useEffect, useRef, useState } from "react";
import $ from "jquery";
import { MathFieldContext } from "../mathInput/mathfieldContext";
import { AlphabetLayout } from "./layout/alphabetLayout";
import { defaultNumericLayoutProps } from "./layout/defaultNumericLayoutProps";
import { NumericLayout, NumericLayoutProps } from "./layout/numericLayout";

export type KeyboardProps = {
  layoutType?: "numeric" | "alphabet";
  numericLayoutProps?: NumericLayoutProps;
};

export const Keyboard = ({
  layoutType = "numeric",
  numericLayoutProps = defaultNumericLayoutProps,
}: KeyboardProps) => {
  const mathfield = useContext(MathFieldContext);
  useEffect(() => {
    $("#mq-keyboard").css("bottom", `0px`);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const [currentLayoutType, setCurrentLayoutType] = useState(layoutType);
  const onSwitch = () => {
    if (currentLayoutType === "numeric") {
      mathfield.cmd("text");
    } else {
      mathfield.moveToRightEnd();
    }
    setCurrentLayoutType((prev) =>
      prev === "numeric" ? "alphabet" : "numeric"
    );
  };

  useEffect(() => {
    const height = ref.current!.clientHeight;
    $("body").css("padding-bottom", `${height + 12}px`);
  }, [currentLayoutType]);

  return (
    <div
      id="mq-keyboard"
      ref={ref}
      onMouseDown={(e) => e.preventDefault()}
      className="fixed z-[1310] transition-[bottom] flex justify-center bottom-[-200px] left-0 first-letter:bottom-0 bg-slate-200 pb-1 m-0 w-full text-slate-900 gap-1 scrollbar"
    >
      {currentLayoutType === "numeric" && (
        <NumericLayout onSwitch={onSwitch} {...numericLayoutProps} />
      )}
      {currentLayoutType === "alphabet" && (
        <AlphabetLayout onSwitch={onSwitch} />
      )}
    </div>
  );
};
