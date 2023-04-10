import { KeyProps } from "../keys/key";
import { KeyId } from "../keys/keys";
export type AlphabetLayoutProps = {
    toolbarKeys?: (KeyId | KeyProps)[];
    onSwitch?: () => void;
};
export declare const AlphabetLayout: ({ toolbarKeys, onSwitch, }: AlphabetLayoutProps) => JSX.Element;
