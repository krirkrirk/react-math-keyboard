import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import { Keyboard, KeyboardProps } from "../keyboard/keyboard";
import { MathField } from "../types/types";
import { MathFieldContext } from "./mathfieldContext";
import "mathquill4keyboard/build/mathquill.css";
type Props = {
  keyboardProps?: KeyboardProps;
  setValue?: (s: string) => void;
  style?: React.CSSProperties;
  size?: "small" | "medium";
};

export const MathInput = ({
  keyboardProps,
  setValue,
  style,
  size = "medium",
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const mathfield = useRef<MathField>({} as MathField);

  useEffect(() => {
    window.jQuery = $;
    // require("mathquill4keyboard/build/mathquill.css");
    require("mathquill4keyboard/build/mathquill");
    const MQ = window.MathQuill.getInterface(2);
    const mf = MQ.MathField($("#mq-keyboard-field")[0], {
      handlers: {
        edit: function () {
          setValue?.(mf.latex());
          // setLatex(mf.latex());
        },
      },
    }) as MathField;
    // mf.config({
    //   autoCommands: "pi",
    //   substituteTextarea: function () {
    //     return <div></div>;
    //   },
    // });
    mathfield.current = mf;
    const textarea = mf.el().querySelector("textarea");
    isMobile && textarea?.setAttribute("readonly", "readonly");
    textarea?.addEventListener("focusin", () => {
      setShowKeyboard(true);
    });
    setLoaded(true);
    $("body").css("transition", "all 0.15s ease");
  }, []);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e);
      if (e.target instanceof HTMLElement) {
        let isKeyboardClick = false;
        let element: HTMLElement | null = e.target;
        while (element !== null) {
          if (element.id.includes("mq-keyboard")) {
            isKeyboardClick = true;
            element.scrollIntoView();
            break;
          }
          element = element.parentElement;
        }
        if (
          // e.target?.parentElement?.id !== "mq-keyboard-field" &&
          // ?.contains(event.target);
          e.target?.parentElement?.id !== "mq-keyboard-field" &&
          !isKeyboardClick
        ) {
          console.log("isKeyboardClick", isKeyboardClick);
          console.log("will close");
          setShowKeyboard(false);
          $("body").css("padding-bottom", 0);
        }
      }
    });
  }, []);

  return (
    <div
      {...(style && { style })}
      id="mq-keyboard-container"
      onClick={(e) => console.log(e)}
    >
      {/* <div> */}
      {!loaded && <p>Loading...</p>}
      <span
        style={{
          width: "100%",
          borderRadius: "4px",
          padding: size === "small" ? "8px 4px" : "12px 6px",
          borderColor: "#ccc",
          alignItems: "center",
          display: "flex",
        }}
        id="mq-keyboard-field"
      ></span>
      <MathFieldContext.Provider value={mathfield.current}>
        {showKeyboard && <Keyboard {...keyboardProps} />}
      </MathFieldContext.Provider>
      {/* <div className={` ${showKeyboard ? "h-[294px]" : "h-0"}`}></div> */}
    </div>
  );
};
