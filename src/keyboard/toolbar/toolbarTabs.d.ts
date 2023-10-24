import { KeyProps } from "../keys/key";
import { KeyId } from "../keys/keyIds";
export type ToolbarTab = {
    id: ToolbarTabIds;
    label: string;
    rawLabel: string;
    keys: (KeyId | KeyProps)[];
};
export type ToolbarTabIds = "trigo" | "greek" | "sets" | "sequences" | "functions" | "polynomial" | "proba";
export declare const toolbarTabs: ToolbarTab[];
export declare const defaultTabs: ToolbarTabIds[];
