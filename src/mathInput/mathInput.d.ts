import { KeyboardProps } from "../keyboard/keyboard";
type Props = {
    keyboardProps?: KeyboardProps;
    setValue?: (s: string) => void;
};
export declare const MathInput: ({ keyboardProps, setValue }: Props) => JSX.Element;
export {};
