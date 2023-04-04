import React from "react";
import { KeyboardProps } from "../keyboard/keyboard";
type Props = {
    keyboardProps?: KeyboardProps;
    setValue?: (s: string) => void;
    style?: React.CSSProperties;
    size?: "small" | "medium" | "large";
};
export declare const MathInput: ({ keyboardProps, setValue, style, size, }: Props) => JSX.Element;
export {};
