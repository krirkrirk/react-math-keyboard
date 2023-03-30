import { NumericLayoutProps } from "./layout/numericLayout";
export type KeyboardProps = {
    layoutType?: "numeric" | "alphabet";
    numericLayoutProps?: NumericLayoutProps;
};
export declare const Keyboard: ({ layoutType, numericLayoutProps }: KeyboardProps) => JSX.Element;
