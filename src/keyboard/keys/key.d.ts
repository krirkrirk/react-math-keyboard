import { ReactNode } from "react";
import { MathfieldInstructions } from "../../types/types";
import { KeyId } from "./keyIds";
import { KeyGroupIds } from "./keyGroup";
export type KeyProps = {
    id: KeyId;
    formatedId?: string;
    label: string | ReactNode;
    labelType: "raw" | "tex" | "svg";
    mathfieldInstructions?: MathfieldInstructions;
    onClick?: () => void;
    fullWidth?: boolean;
    isUtilityKey?: boolean;
    groups?: KeyGroupIds[];
    postKeystrokes?: string[];
    keypressId?: string;
};
export declare const Key: ({ id, formatedId, label, labelType, onClick, mathfieldInstructions, fullWidth, isUtilityKey, postKeystrokes, }: KeyProps) => JSX.Element;
