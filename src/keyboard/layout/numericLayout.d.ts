import { KeyProps } from "../keys/key";
import { ToolbarTabIds } from "../toolbar/toolbarTabs";
import { KeyId } from "../keys/keyIds";
export type NumericLayoutProps = {
    toolbarKeys?: (KeyId | KeyProps | string)[];
    showTabs?: boolean;
    toolbarTabs?: ToolbarTabIds[];
    onSwitch?: () => void;
    onHideKeyboard?: () => void;
    divisionFormat: "fraction" | "obelus";
    allowAlphabeticKeyboard: boolean;
};
export declare const NumericLayout: ({ toolbarKeys, toolbarTabs, onSwitch, divisionFormat, allowAlphabeticKeyboard, onHideKeyboard, }: NumericLayoutProps) => JSX.Element;
