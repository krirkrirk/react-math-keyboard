/// <reference types="react" />
import { KeyProps } from "../keys/key";
import { KeyId } from "../keys/keys";
export type ToolbarProps = {
    keys: (KeyId | KeyProps)[];
};
export declare const Toolbar: ({ keys }: ToolbarProps) => JSX.Element;
