import { KeyProps } from "../keys/key";
import { KeyId } from "../keys/keyIds";
import { Langs } from "../keys/keyGroup";
export type AlphabetLayoutProps = {
    toolbarKeys?: (KeyId | KeyProps)[];
    onSwitch?: () => void;
    lang: Langs;
};
export declare const AlphabetLayout: ({ toolbarKeys, onSwitch, lang, }: AlphabetLayoutProps) => import("react/jsx-runtime").JSX.Element;
