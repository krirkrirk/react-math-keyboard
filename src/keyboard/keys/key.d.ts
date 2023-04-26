import { ReactNode } from "react";
import { MathfieldInstructions } from "../../types/types";
import { KeyId } from "./keyIds";
export type KeyProps = {
    id: KeyId | string;
    label: string | ReactNode;
    labelType: "raw" | "tex" | "svg";
    mathfieldInstructions?: MathfieldInstructions;
    onClick?: () => void;
    fullWidth?: boolean;
    isUtilityKey?: boolean;
};
export declare const Key: ({ id, label, labelType, onClick, mathfieldInstructions, fullWidth, isUtilityKey, }: KeyProps) => JSX.Element;
