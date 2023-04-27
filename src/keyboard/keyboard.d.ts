import { KeyProps } from "./keys/key";
import { ToolbarTabIds } from "./toolbar/toolbarTabs";
import { KeyId } from "./keys/keyIds";
export type KeyboardProps = {
    numericToolbarKeys?: (KeyId | KeyProps)[];
    numericToolbarTabs?: ToolbarTabIds[];
    alphabeticToolbarKeys?: (KeyId | KeyProps)[];
    divisionFormat: "fraction" | "obelus";
    allowAlphabeticKeyboard: boolean;
    onHideKeyboard?: () => void;
};
export declare const Keyboard: ({ numericToolbarKeys, numericToolbarTabs, alphabeticToolbarKeys, divisionFormat, allowAlphabeticKeyboard, onHideKeyboard, }: KeyboardProps) => JSX.Element;
