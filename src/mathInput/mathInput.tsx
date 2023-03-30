import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import { Keyboard, KeyboardProps } from "../keyboard/keyboard";
import { MathField } from "../types/types";
import { MathFieldContext } from "./mathfieldContext";
// import "mathquill4keyboard/build/mathquill.css";
//! L'import du css plantait à cause de @,
//! donc j'ai inclu node_module dans le plugin css webpack;
//! mais au final ça fait planter l'import...
//! donc repasser en mode css + fonts mathquill dans le répo
//! ...mais ca crée le bug de publicPath (que j'ai pas investigué)
type Props = {
  keyboardProps?: KeyboardProps;
  setValue?: (s: string) => void;
};

export const MathInput = ({ keyboardProps, setValue }: Props) => {
  const [loaded, setLoaded] = useState(false);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const mathfield = useRef<MathField>({} as MathField);
  useEffect(() => {
    // window.global ||= window;
    window.jQuery = $;
    require("mathquill4keyboard/build/mathquill.css");
    import("mathquill4keyboard/build/mathquill").then(() => {
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
    });
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
        if (e.target?.parentElement?.id !== "mq-keyboard-field" && !isKeyboardClick) {
          setShowKeyboard(false);
        }
      }
    });
  }, []);

  return (
    <div>
      {!loaded && <p>Loading...</p>}
      <span style={{ width: "50%" }} id="mq-keyboard-field"></span>
      <MathFieldContext.Provider value={mathfield.current}>
        {showKeyboard && <Keyboard {...keyboardProps} />}
      </MathFieldContext.Provider>
    </div>
  );
};
