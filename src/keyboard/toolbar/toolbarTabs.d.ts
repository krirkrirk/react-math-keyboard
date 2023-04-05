import { KeyProps } from "../keys/key";
import { KeyId } from "../keys/keys";
export type ToolbarTab = {
    id: ToolbarTabIds;
    label: string;
    keys: (KeyId | KeyProps)[];
};
export type ToolbarTabIds = "trigo" | "greek" | "sets" | "sequences" | "functions" | "polynomial";
export declare const toolbarTabs: ToolbarTab[];
export declare const defaultTabs: ToolbarTabIds[];
