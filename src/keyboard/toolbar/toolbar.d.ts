import { KeyProps } from "../keys/key";
import { ToolbarTabIds } from "./toolbarTabs";
import { KeyId } from "../keys/keyIds";
export type ToolbarProps = {
    keys?: (KeyId | KeyProps)[];
    tabs?: ToolbarTabIds[];
};
export declare const Toolbar: ({ keys, tabs }: ToolbarProps) => JSX.Element;
