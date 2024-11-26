import { KeyProps } from "../keys/key";
import { KeyId } from "../keys/keyIds";
import { Langs } from "../keys/keyGroup";
export type AlphabetLayoutProps = {
    toolbarKeys?: (KeyId | KeyProps)[];
    onSwitch?: () => void;
    lang: Langs;
    tabShouldSkipKeys?: boolean;
};
export declare const AlphabetLayout: ({ toolbarKeys, onSwitch, lang, tabShouldSkipKeys, }: AlphabetLayoutProps) => import("react/jsx-runtime").JSX.Element;
