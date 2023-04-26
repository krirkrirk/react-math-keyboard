import { KeyProps } from "../keys/key";
import { ToolbarTabIds } from "../toolbar/toolbarTabs";
import { KeyId } from "../keys/keyIds";
export type NumericLayoutProps = {
    toolbarKeys?: (KeyId | KeyProps)[];
    showTabs?: boolean;
    toolbarTabs?: ToolbarTabIds[];
    onSwitch?: () => void;
    divisionFormat: "fraction" | "obelus";
};
export declare const NumericLayout: ({ toolbarKeys, toolbarTabs, onSwitch, divisionFormat }: NumericLayoutProps) => JSX.Element;
