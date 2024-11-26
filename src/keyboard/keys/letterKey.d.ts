import { KeyId } from "./keyIds";
export type LetterKeyProps = {
    letter: KeyId;
    isMaj?: boolean;
    isInMathMode?: boolean;
    tabShouldSkipKeys?: boolean;
};
export declare const LetterKey: ({ letter, isMaj, isInMathMode, tabShouldSkipKeys, }: LetterKeyProps) => import("react/jsx-runtime").JSX.Element;
