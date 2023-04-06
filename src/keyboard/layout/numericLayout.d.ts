import { KeyProps } from "../keys/key";
import { KeyId } from "../keys/keys";
import { ToolbarTabIds } from "../toolbar/toolbarTabs";
export type NumericLayoutProps = {
    toolbarKeys?: (KeyId | KeyProps)[];
    showTabs?: boolean;
    toolbarTabs?: ToolbarTabIds[];
    onSwitch?: () => void;
};
export declare const NumericLayout: ({ toolbarKeys, toolbarTabs, onSwitch, }: NumericLayoutProps) => JSX.Element;
