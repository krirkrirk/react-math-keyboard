import React from "react";
import "mathquill4keyboard/build/mathquill.css";
import { KeyId } from "../keyboard/keys/keys";
import { KeyProps } from "../keyboard/keys/key";
import { ToolbarTabIds } from "../keyboard/toolbar/toolbarTabs";
type Props = {
    numericToolbarKeys?: (KeyId | KeyProps)[];
    numericToolbarTabs?: ToolbarTabIds[];
    alphabeticToolbarKeys?: (KeyId | KeyProps)[];
    setValue?: (s: string) => void;
    style?: React.CSSProperties;
    size?: "small" | "medium";
};
export declare const MathInput: ({ numericToolbarKeys, numericToolbarTabs, alphabeticToolbarKeys, setValue, style, size, }: Props) => JSX.Element;
export {};
