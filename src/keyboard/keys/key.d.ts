import { ReactNode } from "react";
import { MathfieldInstructions } from "../../types/types";
export type KeyProps = {
    id: string;
    label: string | ReactNode;
    labelType: "raw" | "tex" | "svg";
    mathfieldInstructions?: MathfieldInstructions;
    onClick?: () => void;
    fullWidth?: boolean;
    isUtilityKey?: boolean;
};
export declare const Key: ({ id, label, labelType, onClick, mathfieldInstructions, fullWidth, isUtilityKey, }: KeyProps) => JSX.Element;
