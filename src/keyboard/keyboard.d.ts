import { KeyId } from "./keys/keys";
import { KeyProps } from "./keys/key";
import { ToolbarTabIds } from "./toolbar/toolbarTabs";
export type KeyboardProps = {
    numericToolbarKeys?: (KeyId | KeyProps)[];
    numericToolbarTabs?: ToolbarTabIds[];
    alphabeticToolbarKeys?: (KeyId | KeyProps)[];
};
export declare const Keyboard: ({ numericToolbarKeys, numericToolbarTabs, alphabeticToolbarKeys }: KeyboardProps) => JSX.Element;
