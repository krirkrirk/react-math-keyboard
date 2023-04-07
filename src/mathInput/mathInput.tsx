import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import { Keyboard, KeyboardProps } from "../keyboard/keyboard";
import { MathField } from "../types/types";
import { MathFieldContext } from "./mathfieldContext";
import { KeyId } from "../keyboard/keys/keys";
import { KeyProps } from "../keyboard/keys/key";
import { ToolbarTabIds } from "../keyboard/toolbar/toolbarTabs";
type Props = {
  numericToolbarKeys?: (KeyId | KeyProps)[];
  numericToolbarTabs?: ToolbarTabIds[];
  alphabeticToolbarKeys?: (KeyId | KeyProps)[];
  setMathfieldRef?: (mf: MathField) => void;
  setValue?: (s: string) => void;
  style?: React.CSSProperties;
  size?: "small" | "medium";
};

export const MathInput = ({
  numericToolbarKeys,
  numericToolbarTabs,
  alphabeticToolbarKeys,
  setValue,
  setMathfieldRef,
  style = {},
  size = "medium",
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const mathfield = useRef<MathField>({} as MathField);

  const showKeyboardRequest = useRef<"close" | "open">();
  const timeout = useRef<any>(null);

  const request = (type: "close" | "open") => {
    if (type === "close" && showKeyboardRequest.current === "open") return;

    showKeyboardRequest.current = type;
    const eventually = () => {
      if (showKeyboardRequest.current === "open") {
        $("body").css("padding-bottom", `300px`);
        // $("body").css("transition", "all 0.30s ease");
        window.scrollTo({
          top: mathfield.current.el().offsetTop - 24,
          left: 0,
          behavior: "smooth",
        });
        setShowKeyboard(true);
      } else {
        $("body").css("padding-bottom", 0);
        setShowKeyboard(false);
      }
      showKeyboardRequest.current = undefined;
    };
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(eventually, 300);
  };

  useEffect(() => {
    window.jQuery = $;
    require("mathquill4keyboard/build/mathquill.css");
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
      request("open");
    });
    setMathfieldRef?.(mf);

    setLoaded(true);
  }, []);

  useEffect(() => {
    window.addEventListener("click", (e) => {
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

        if (!isKeyboardClick) {
          request("close");
        }
      }
    });
  }, []);

  return (
    // <div {...(style && { style})} id="mq-keyboard-container">
    <div style={{ display: "flex", ...style }} id="mq-keyboard-container">
      {!loaded && <p>Loading...</p>}
      <span
        className="react-math-keyboard-input"
        style={{
          // width: "100%",
          // borderRadius: "4px",
          padding: size === "small" ? "8px 4px" : "12px 6px",
          // borderColor: "#ccc",
          // alignItems: "center",
          // display: "flex",
          // scrollMarginTop: "24px",
        }}
        id="mq-keyboard-field"
      ></span>
      <MathFieldContext.Provider value={mathfield.current}>
        {showKeyboard && (
          <Keyboard
            numericToolbarKeys={numericToolbarKeys}
            numericToolbarTabs={numericToolbarTabs}
            alphabeticToolbarKeys={alphabeticToolbarKeys}
          />
        )}
      </MathFieldContext.Provider>
    </div>
  );
};
