import { KeyProps } from "../keys/key";
import { ToolbarTabIds } from "./toolbarTabs";
import { KeyId } from "../keys/keyIds";
import { Langs } from "../keys/keyGroup";
export type ToolbarProps = {
    keys?: (KeyId | KeyProps)[];
    tabs?: ToolbarTabIds[];
    lang: Langs;
};
export declare const Toolbar: ({ keys, tabs, lang }: ToolbarProps) => import("react/jsx-runtime").JSX.Element;
