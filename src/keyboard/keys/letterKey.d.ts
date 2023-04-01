/// <reference types="react" />
export type LetterKeyProps = {
    letter: string;
    isMaj?: boolean;
    isInMathMode?: boolean;
};
export declare const LetterKey: ({ letter, isMaj, isInMathMode }: LetterKeyProps) => JSX.Element;
