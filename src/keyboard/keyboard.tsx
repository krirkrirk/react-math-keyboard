import React, { useContext, useEffect, useRef, useState } from "react";
import $ from "jquery";
import { MathFieldContext } from "../mathInput/mathfieldContext";
import { AlphabetLayout } from "./layout/alphabetLayout";
import { NumericLayout, NumericLayoutProps } from "./layout/numericLayout";
import { KeyId } from "./keys/keys";
import { KeyProps } from "./keys/key";
import { ToolbarTabIds } from "./toolbar/toolbarTabs";

export type KeyboardProps = {
  numericToolbarKeys?: (KeyId | KeyProps)[];
  numericToolbarTabs?: ToolbarTabIds[];
  alphabeticToolbarKeys?: (KeyId | KeyProps)[];
};

export const Keyboard = ({
  numericToolbarKeys,
  numericToolbarTabs,
  alphabeticToolbarKeys,
}: KeyboardProps) => {
  const mathfield = useContext(MathFieldContext);
  useEffect(() => {
    $("#mq-keyboard").css("bottom", `0px`);
  }, []);

  const [currentLayoutType, setCurrentLayoutType] = useState("numeric");
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

  return (
    <div
      id="mq-keyboard"
      // onMouseDown={(e) => e.preventDefault()}
      className="fixed z-[1310] transition-[bottom] duration-300 flex justify-center bottom-[-300px] left-0 first-letter:bottom-0 bg-slate-200 pb-1 m-0 w-full text-slate-900 gap-1 scrollbar"
    >
      {currentLayoutType === "numeric" && (
        <NumericLayout
          onSwitch={onSwitch}
          toolbarKeys={numericToolbarKeys}
          toolbarTabs={numericToolbarTabs}
        />
      )}
      {currentLayoutType === "alphabet" && (
        <AlphabetLayout
          onSwitch={onSwitch}
          toolbarKeys={alphabeticToolbarKeys}
        />
      )}
    </div>
  );
};
