import React from "react";
import { MathField } from "../types/types";
import { KeyProps } from "../keyboard/keys/key";
import { ToolbarTabIds } from "../keyboard/toolbar/toolbarTabs";
import { KeyId } from "../keyboard/keys/keyIds";
import { Langs } from "../keyboard/keys/keyGroup";
import { KeyboardThemeColor } from "../style/keyboardTheme";
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
  registerEmbedObjects?: {
    id: string;
    htmlString: string;
    text: string;
    latex: string;
  }[];
};
export declare const MathInput: ({
  numericToolbarKeys,
  numericToolbarTabs,
  alphabeticToolbarKeys,
  setValue,
  setMathfieldRef,
  setClearRef,
  style,
  initialLatex,
  rootElementId,
  divisionFormat,
  size,
  fullWidth,
  allowAlphabeticKeyboard,
  scrollType,
  lang,
  forbidOtherKeyboardKeys,
  registerEmbedObjects,
}: MathInputProps) => JSX.Element;
