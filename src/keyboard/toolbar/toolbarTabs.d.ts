import { KeyProps } from "../keys/key";
import { KeyGroupIds } from "../keys/keyGroup";
import { KeyId } from "../keys/keyIds";
export type ToolbarTab = {
    id: ToolbarTabIds;
    label: string;
    rawLabel: string;
    keys: (KeyId | KeyProps)[];
};
export type ToolbarTabIds = KeyGroupIds;
export declare const toolbarTabs: {
    id: KeyGroupIds;
    label: {
        en: string;
        fr: string;
    };
    rawLabel: {
        en: string;
        fr: string;
    };
    keys: KeyProps[];
}[];
export declare const defaultTabs: ToolbarTabIds[];
