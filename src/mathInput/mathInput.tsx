import React, { useEffect, useRef, useState } from "react";
import { Keyboard } from "../keyboard/keyboard";
import { MathField } from "../types/types";
import { MathFieldContext } from "./mathfieldContext";
import { KeyProps } from "../keyboard/keys/key";
import { ToolbarTabIds } from "../keyboard/toolbar/toolbarTabs";
import { KeyId } from "../keyboard/keys/keyIds";
import { Langs } from "../keyboard/keys/keyGroup";
import { KeyboardThemeColor } from "../style/keyboardTheme";
import { applyTheme } from "../style/applyTheme";
import { useHandleFocus } from "./useHandleFocus";
import { useHandleKeyPressRejection } from "./useHandleKeypressRejection";
import { useInitialLatex } from "./useInitialLatex";
import { useHandleFocusChange } from "./useHandleFocusChange";
import $ from "jquery";
import { getAllIdsFromCursor } from "./getAllIdsFromCursor";

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
}: MathInputProps) => {
  const mathfield = useRef<MathField>();
  const mathfieldId = useRef<number>(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const [loaded, setLoaded] = useState(false);
  const allIds = useRef<number[]>([]);
  const groupedChars = useRef<number[][]>([]);
  useEffect(() => {
    window.jQuery = $;
    require("mathquill4keyboard/build/mathquill.css");
    require("mathquill4keyboard/build/mathquill");
    let MQ = window.MathQuill.getInterface(2);
    registerEmbedObjects?.forEach((obj) => {
      MQ.registerEmbed(obj.id, () => {
        return {
          htmlString: obj.htmlString,
          text: () => obj.text,
          latex: () => obj.latex,
        };
      });
    });
    const mf = MQ.MathField(spanRef.current, {
      handlers: {
        edit: function () {
          setValue?.(mf.latex());
          const cursor = mf.__controller.cursor;
          allIds.current = getAllIdsFromCursor(mf);
          const newIds = allIds.current.filter(
            (el) => !groupedChars.current.some((group) => group.includes(el))
          );
          if (newIds.length)
            groupedChars.current = [...groupedChars.current, newIds];
          console.log("current grouped", groupedChars.current);
          console.log(cursor);
        },
      },
      maxDepth: 8,
    }) as MathField;
    mathfieldId.current = MQ(spanRef.current).id;
    mathfield.current = mf;
    setMathfieldRef?.(mf);
    setClearRef?.(() => mf.latex(""));
    setLoaded(true);
  }, []);

  const { showKeyboard, onForceHideKeyboard } = useHandleFocus({
    mathfield: mathfield.current!,
    mathfieldId: mathfieldId.current,
    loaded,
  });
  useHandleKeyPressRejection({
    forbidOtherKeyboardKeys,
    numericToolbarKeys,
    loaded,
    mathfieldId: mathfieldId.current,
  });

  useInitialLatex({ loaded, initialLatex, mathfield: mathfield.current! });

  useHandleFocusChange({
    loaded,
    mathfield: mathfield.current!,
    showKeyboard,
    scrollType,
    rootElementId,
  });

  useEffect(() => {
    applyTheme(color);
  }, [color, showKeyboard]);

  const onDeleteSequence = (nodeId: number) => {
    console.log(mathfield.current?.__controller.cursor);
    const group = groupedChars.current.find((g) => g.includes(nodeId));
    console.log("del", nodeId, "group", group);
    if (group) {
      for (let i = 1; i < group.length; i++) {
        mathfield.current!.keystroke("Backspace");
      }
    }
  };
  return (
    <div
      style={{
        display: "flex",
        width: fullWidth ? "100%" : "auto",
        ...style,
      }}
      id={`mq-keyboard-${mathfieldId.current}-container`}
      className="react-math-keyboard-input-container"
    >
      {!loaded && <p>Loading...</p>}
      <span
        className="react-math-keyboard-input"
        style={{ padding: size === "small" ? "8px 4px" : "12px 6px" }}
        id={`mq-keyboard-${mathfieldId.current}-field`}
        ref={spanRef}
      ></span>
      {loaded && (
        <MathFieldContext.Provider value={mathfield.current!}>
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
              onDeleteSequence={onDeleteSequence}
            />
          )}
        </MathFieldContext.Provider>
      )}
    </div>
  );
};
