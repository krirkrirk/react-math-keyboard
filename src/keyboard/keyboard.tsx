import React, { useContext, useEffect, useRef, useState } from "react";
import $ from "jquery";
import { MathFieldContext } from "../mathInput/mathfieldContext";
import { AlphabetLayout } from "./layout/alphabetLayout";
import { NumericLayout, NumericLayoutProps } from "./layout/numericLayout";

import { KeyProps } from "./keys/key";
import { ToolbarTabIds } from "./toolbar/toolbarTabs";
import { KeyId } from "./keys/keyIds";

export type KeyboardProps = {
  numericToolbarKeys?: (KeyId | KeyProps)[];
  numericToolbarTabs?: ToolbarTabIds[];
  alphabeticToolbarKeys?: (KeyId | KeyProps)[];
  divisionFormat: "fraction" | "obelus";
  allowAlphabeticKeyboard: boolean;
  onHideKeyboard?: () => void;
};

export const Keyboard = ({
  numericToolbarKeys,
  numericToolbarTabs,
  alphabeticToolbarKeys,
  divisionFormat,
  allowAlphabeticKeyboard,
  onHideKeyboard,
}: KeyboardProps) => {
  const mathfield = useContext(MathFieldContext);
  useEffect(() => {
    $(`#mq-keyboard-${mathfield.id}`).css("bottom", `0px`);
  }, []);

  const [currentLayoutType, setCurrentLayoutType] = useState("numeric");

  const onSwitch = () => {
    if (currentLayoutType === "numeric") {
      mathfield.cmd("text");
    } else {
      mathfield.moveToRightEnd();
    }
    setCurrentLayoutType((prev) => (prev === "numeric" ? "alphabet" : "numeric"));
  };
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLElement && e.target.nodeName !== "SELECT") e.preventDefault();
    mathfield.focus();
  };

  return (
    <div
      id={`mq-keyboard-${mathfield.id}`}
      onMouseDown={onMouseDown}
      // className="fixed z-[1310] transition-[bottom] duration-300 flex justify-center bottom-[-300px] left-0 first-letter:bottom-0 bg-slate-200 pb-1 m-0 w-full text-slate-900 gap-1 scrollbar"
      className="react-math-keyboard-keyboard-container scrollbar"
    >
      {currentLayoutType === "numeric" && (
        <NumericLayout
          onSwitch={onSwitch}
          toolbarKeys={numericToolbarKeys}
          toolbarTabs={numericToolbarTabs}
          divisionFormat={divisionFormat}
          allowAlphabeticKeyboard={allowAlphabeticKeyboard}
          onHideKeyboard={onHideKeyboard}
        />
      )}
      {currentLayoutType === "alphabet" && <AlphabetLayout onSwitch={onSwitch} toolbarKeys={alphabeticToolbarKeys} />}
    </div>
  );
};
