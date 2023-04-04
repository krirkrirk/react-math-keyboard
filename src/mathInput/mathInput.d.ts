import React from "react";
import { KeyboardProps } from "../keyboard/keyboard";
import "mathquill4keyboard/build/mathquill.css";
type Props = {
    keyboardProps?: KeyboardProps;
    setValue?: (s: string) => void;
    style?: React.CSSProperties;
    size?: "small" | "medium";
};
export declare const MathInput: ({ keyboardProps, setValue, style, size, }: Props) => JSX.Element;
export {};
