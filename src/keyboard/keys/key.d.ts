import { ReactNode } from "react";
import { MathfieldInstructions } from "../../types/types";
export declare enum KeyCategory {
    "number" = 0,
    "constant" = 1,
    "utility" = 2,
    "operator" = 3,
    "function" = 4,
    "text" = 5,
    "letter" = 6
}
export type KeyProps = {
    id: string;
    label: string | ReactNode;
    labelType: "raw" | "tex" | "svg";
    keyCategory: KeyCategory;
    mathfieldInstructions?: MathfieldInstructions;
    onClick?: () => void;
    fullWidth?: boolean;
};
export declare const Key: ({ id, label, labelType, keyCategory, onClick, mathfieldInstructions, fullWidth, }: KeyProps) => JSX.Element;
