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

export const MathInput = ({ keyboardProps, setValue, style, size = "medium" }: Props) => {
  const [loaded, setLoaded] = useState(false);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const mathfield = useRef<MathField>({} as MathField);

  const inputTop = useRef<number>(0);
  const inputBottom = useRef<number>(0);

  useEffect(() => {
    window.jQuery = $;
    // require("mathquill4keyboard/build/mathquill.css");
    require("mathquill4keyboard/build/mathquill");
    const MQ = window.MathQuill.getInterface(2);
    const mf = MQ.MathField($("#mq-keyboard-field")[0], {
      handlers: {
        edit: function () {
          setValue?.(mf.latex());
        },
      },
    }) as MathField;
    mathfield.current = mf;
    const textarea = mf.el().querySelector("textarea");
    isMobile && textarea?.setAttribute("readonly", "readonly");
    textarea?.addEventListener("focusin", (e) => {
      setShowKeyboard(true);
      console.log("focus", e);
      $("body").css("padding-bottom", `300px`);
      window.scrollTo({
        top: mf.el().offsetTop - 24,
        left: 0,
        behavior: "smooth",
      });
    });
    textarea?.addEventListener("focusout", (e) => {
      console.log("focusout", e);
    });
    const el = mf.el();
    inputTop.current = el.offsetTop;
    inputBottom.current = el.offsetTop + el.offsetHeight;
    console.log(el.clientHeight, el.clientTop, el.offsetTop, el.offsetHeight);
    setLoaded(true);
    // $("body").css("transition", "all 0.30s ease");
  }, []);

  // Get arbitrary element with id "my-element"
  // var myElementToCheckIfClicksAreInsideOf = document.querySelector('#my-element');
  // // Listen for click events on body
  // document.body.addEventListener('click', function (event) {
  //     if (myElementToCheckIfClicksAreInsideOf.contains(event.target)) {
  //         console.log('clicked inside');
  //     } else {
  //         console.log('clicked outside');
  //     }
  // });

  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log("ev", e);
      console.log("target", e.target);
      console.log("clicked", e.offsetY, e.screenY, e.pageY, e.clientY);
      const isInputClick = e.offsetY > inputTop.current && e.offsetY < inputBottom.current;
      console.log("ey", e.pageY, "el top", inputTop.current, "el b", inputBottom.current);
      console.log("isInputClick", isInputClick);
      // console.log(e);
      if (e.target instanceof HTMLElement) {
        let isKeyboardClick = false;
        let element: HTMLElement | null = e.target;
        while (element !== null) {
          if (element.id.includes("mq-keyboard")) {
            isKeyboardClick = true;
            break;
          }
          element = element.parentElement;
        }
        console.log("isKeyboardClick", isKeyboardClick);

        if (
          // e.target?.parentElement?.id !== "mq-keyboard-field"
          //  &&
          // !isInputClick &&
          !isKeyboardClick
        ) {
          console.log("close", e, isKeyboardClick);
          setShowKeyboard(false);
          $("body").css("padding-bottom", 0);
        }
      }
    });
  }, []);

  return (
    <div {...(style && { style })} id="mq-keyboard-container">
      {!loaded && <p>Loading...</p>}
      <div style={{ margin: 5, padding: 5, backgroundColor: "red" }}>
        <span
          style={{
            width: "100%",
            borderRadius: "4px",
            padding: size === "small" ? "8px 4px" : "12px 6px",
            borderColor: "#ccc",
            alignItems: "center",
            display: "flex",
            scrollMarginTop: "24px",
          }}
          id="mq-keyboard-field"
        ></span>
      </div>
      <MathFieldContext.Provider value={mathfield.current}>
        {showKeyboard && <Keyboard {...keyboardProps} />}
      </MathFieldContext.Provider>
    </div>
  );
};
