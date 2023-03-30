import { ToolbarProps } from "../toolbar/toolbar";
export type NumericLayoutProps = {
    toolbarProps: ToolbarProps;
    onSwitch?: () => void;
};
export declare const NumericLayout: ({ toolbarProps, onSwitch }: NumericLayoutProps) => JSX.Element;
