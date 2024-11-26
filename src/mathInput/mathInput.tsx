import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import { Keyboard, KeyboardProps } from "../keyboard/keyboard";
import { MathField } from "../types/types";
import { MathFieldContext } from "./mathfieldContext";
import { KeyProps } from "../keyboard/keys/key";
import { ToolbarTabIds } from "../keyboard/toolbar/toolbarTabs";
import { KeyId } from "../keyboard/keys/keyIds";
import { Langs } from "../keyboard/keys/keyGroup";
import { KeysPropsMap } from "../keyboard/keys/keys";
import { KeyboardThemeColor } from "../style/keyboardTheme";
import { applyTheme } from "../style/applyTheme";
import { Portal } from "../components/portal";

export type MathInputProps = {
  numericToolbarKeys?: (KeyId | KeyProps)[];
  numericToolbarTabs?: ToolbarTabIds[];
  alphabeticToolbarKeys?: (KeyId | KeyProps)[];
  allowAlphabeticKeyboard?: boolean;
  setMathfieldRef?: (mf: MathField) => void;
  setClearRef?: (f: () => void) => void;
  initialLatex?: string;
  setValue?: (s: string) => void;
  divisionFormat?: "fraction" | "obelus";
  color?: KeyboardThemeColor;
  style?: React.CSSProperties;
  size?: "small" | "medium";
  rootElementId?: string;
  fullWidth?: boolean;
  container?: any;
  scrollType?: "window" | "raw";
  lang?: Langs;
  forbidOtherKeyboardKeys?: boolean;
  parenthesisShouldNotProduceLeftRight?: boolean;
  registerEmbedObjects?: {
    id: string;
    htmlString: string;
    text: string;
    latex: string;
  }[];
  tabShouldSkipKeys?: boolean;
  forbidPaste?: boolean;
};

const vanillaKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  ",",
  "(",
  ")",
  "²",
  "^",
  "*",
  "/",
];

const convertDoubleBackslashes = (str: string) => {
  return str.replace(/\\\\/g, "\\");
};

export const MathInput = ({
  numericToolbarKeys,
  numericToolbarTabs,
  alphabeticToolbarKeys,
  setValue,
  setMathfieldRef,
  setClearRef,
  style = {},
  initialLatex,
  rootElementId,
  divisionFormat = "fraction",
  parenthesisShouldNotProduceLeftRight = false,
  color = "grey",
  size = "medium",
  fullWidth = true,
  allowAlphabeticKeyboard = true,
  scrollType = "window",
  lang = "en",
  forbidOtherKeyboardKeys = false,
  registerEmbedObjects,
  tabShouldSkipKeys = false,
  forbidPaste = false,
}: MathInputProps) => {
  const [loaded, setLoaded] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const mathfield = useRef<MathField>({} as MathField);

  const showKeyboardRequest = useRef<"close" | "open">();
  const timeout = useRef<any>(null);

  const request = (type: "close" | "open") => {
    if (type === "close" && showKeyboardRequest.current === "open") return;
    if (timeout.current) clearTimeout(timeout.current);

    showKeyboardRequest.current = type;
    const eventually = () => {
      setShowKeyboard(showKeyboardRequest.current === "open");
      showKeyboardRequest.current = undefined;
    };
    timeout.current = setTimeout(eventually, 300);
  };

  const idCounter = useRef<number>(0);
  useEffect(() => {
    window.jQuery = $;
    require("mathquill4keyboard/build/mathquill.css");
    require("mathquill4keyboard/build/mathquill");
    let MQ = window.MathQuill.getInterface(2);

    if (registerEmbedObjects) {
      registerEmbedObjects.forEach((obj) => {
        MQ.registerEmbed(obj.id, function registerObject() {
          return {
            htmlString: obj.htmlString,
            text: function text() {
              return obj.text;
            },
            latex: function latex() {
              return obj.latex;
            },
          };
        });
      });
    }

    const mf = MQ.MathField(spanRef.current, {
      handlers: {
        edit: function (a: any) {
          setValue?.(mf.latex());
        },
      },
    }) as MathField;
    idCounter.current = MQ(spanRef.current).id;
    mathfield.current = mf;
    const textarea = mf.el().querySelector("textarea");
    isMobile && textarea?.setAttribute("readonly", "readonly");
    textarea?.addEventListener("focusin", (e) => {
      request("open");
    });
    setMathfieldRef?.(mf);
    setClearRef?.(() => mf.latex(""));
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!forbidOtherKeyboardKeys || !loaded) return;
    let keys: (string | undefined)[] = [...vanillaKeys];
    if (numericToolbarKeys)
      keys.push(
        ...numericToolbarKeys.map((key) => {
          return typeof key === "string"
            ? KeysPropsMap.get(key)!.keypressId
            : key.keypressId;
        })
      );

    keys = keys.filter((e) => e !== undefined);

    const exec = (event: KeyboardEvent) => {
      if (!keys.includes(event.key)) event.preventDefault();
    };
    const inputElement = document.getElementById(
      `mq-keyboard-${idCounter.current}-container`
    );
    inputElement?.addEventListener("keypress", exec);
    return () => inputElement?.removeEventListener("keypress", exec);
  }, [forbidOtherKeyboardKeys, numericToolbarKeys, loaded]);

  useEffect(() => {
    if (!forbidPaste || !loaded) return;
    const inputElement = document.getElementById(
      `mq-keyboard-${idCounter.current}-container`
    );
    inputElement && (inputElement.onpaste = (e) => e.preventDefault());
  }, [forbidPaste, loaded]);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        let isKeyboardClick = false;
        let isCloseKeyClick = false;
        let element: HTMLElement | null = e.target;
        while (element !== null) {
          if (element.id.includes("close")) isCloseKeyClick = true;
          if (element.id.includes(`mq-keyboard-${idCounter.current}`)) {
            isKeyboardClick = true;
            break;
          }
          element = element.parentElement;
        }
        if (!isKeyboardClick || isCloseKeyClick) {
          request("close");
        } else request("open");
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, []);

  const spanRef = useRef<HTMLSpanElement | null>(null);
  const wasInitialLatexSet = useRef(false);
  useEffect(() => {
    if (!loaded || !initialLatex) return;
    if (wasInitialLatexSet.current) return;
    mathfield.current.latex(convertDoubleBackslashes(initialLatex));
    wasInitialLatexSet.current = true;
  }, [loaded, initialLatex]);

  useEffect(() => {
    if (showKeyboard) {
      if (rootElementId) {
        $(`#${rootElementId}`).css("padding-bottom", `300px`);
      } else {
        $("body").css("padding-bottom", `300px`);
      }
      const delta =
        window.innerHeight - mathfield.current.el().getBoundingClientRect().top;
      if (delta < 400) {
        if (scrollType === "window")
          window.scrollBy({ top: 400 - delta, behavior: "smooth" });
        else mathfield.current.el().scrollIntoView({ behavior: "smooth" });
      }
      if (delta > window.innerHeight - 30)
        if (scrollType === "window")
          window.scrollBy({ top: -50, behavior: "smooth" });
        else mathfield.current.el().scrollIntoView({ behavior: "smooth" });
    } else {
      if (rootElementId) {
        $(`#${rootElementId}`).css("padding-bottom", 0);
      } else {
        $("body").css("padding-bottom", 0);
      }
    }
    return () => {
      if (rootElementId) {
        $(`#${rootElementId}`).css("padding-bottom", 0);
      } else {
        $("body").css("padding-bottom", 0);
      }
    };
  }, [showKeyboard, rootElementId, scrollType]);

  useEffect(() => {
    applyTheme(color);
  }, [color, showKeyboard]);

  const onForceHideKeyboard = () => {
    setShowKeyboard(false);
    // mathfield.current.blur();
  };
  return (
    <div
      style={{
        display: "flex",
        width: fullWidth ? "100%" : "auto",
        ...style,
      }}
      id={`mq-keyboard-${idCounter.current}-container`}
      className="react-math-keyboard-input-container"
    >
      {!loaded && <p>Loading...</p>}
      <span
        className="react-math-keyboard-input"
        style={{ padding: size === "small" ? "8px 4px" : "12px 6px" }}
        id={`mq-keyboard-${idCounter.current}-field`}
        ref={spanRef}
      ></span>
      <MathFieldContext.Provider value={mathfield.current}>
        <Portal open={showKeyboard}>
          {showKeyboard && (
            <Keyboard
              divisionFormat={divisionFormat}
              numericToolbarKeys={numericToolbarKeys}
              numericToolbarTabs={numericToolbarTabs}
              alphabeticToolbarKeys={alphabeticToolbarKeys}
              onHideKeyboard={onForceHideKeyboard}
              allowAlphabeticKeyboard={allowAlphabeticKeyboard}
              lang={lang}
              parenthesisShouldNotProduceLeftRight={
                parenthesisShouldNotProduceLeftRight
              }
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          )}
        </Portal>
      </MathFieldContext.Provider>
    </div>
  );
};
