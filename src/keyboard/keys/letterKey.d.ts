import { KeyId } from "./keyIds";
export type LetterKeyProps = {
    letter: KeyId;
    isMaj?: boolean;
    isInMathMode?: boolean;
};
export declare const LetterKey: ({ letter, isMaj, isInMathMode, }: LetterKeyProps) => import("react/jsx-runtime").JSX.Element;
