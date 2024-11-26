import { KeyProps } from "../keys/key";
import { ToolbarTabIds } from "./toolbarTabs";
import { KeyId } from "../keys/keyIds";
import { Langs } from "../keys/keyGroup";
export type ToolbarProps = {
    keys?: (KeyId | KeyProps)[];
    tabs?: ToolbarTabIds[];
    lang: Langs;
    tabShouldSkipKeys?: boolean;
};
export declare const Toolbar: ({ keys, tabs, lang, tabShouldSkipKeys, }: ToolbarProps) => import("react/jsx-runtime").JSX.Element;
