export interface MathFieldConfig {
    typingAsteriskWritesTimesSymbol?: boolean;
    spaceBehavesLikeTab?: boolean;
    leftRightIntoCmdGoes?: "up" | "down";
    restrictMismatchedBrackets?: boolean;
    sumStartsWithNEquals?: boolean;
    supSubsRequireOperand?: boolean;
    charsThatBreakOutOfSupSub?: string;
    autoSubscriptNumerals?: boolean;
    autoCommands?: string;
    autoOperatorNames?: string;
    substituteTextarea?: () => void;
    handlers?: {
        deleteOutOf?: (direction: Direction, mathField: MathField) => void;
        moveOutOf?: (direction: Direction, mathField: MathField) => void;
        selectOutOf?: (direction: Direction, mathField: MathField) => void;
        downOutOf?: (mathField: MathField) => void;
        upOutOf?: (mathField: MathField) => void;
        edit?: (mathField: MathField) => void;
        enter?: (mathField: MathField) => void;
    };
    maxDepth?: number;
}
export declare enum Direction {
    R = 0,
    L = 1
}
export interface MathField {
    revert(): void;
    reflow(): void;
    el(): HTMLElement;
    latex(): string;
    latex(latexString: string): void;
    text(): string;
    focus(): void;
    blur(): void;
    write(latex: string): void;
    cmd(latexString: string): void;
    select(): void;
    clearSelection(): void;
    moveToLeftEnd(): void;
    moveToRightEnd(): void;
    keystroke(keys: string): void;
    typedText(text: string): void;
    config(newConfig: MathFieldConfig): void;
}
export interface MathfieldInstructions {
    method: "write" | "cmd" | "keystroke" | "typedText";
    content: string;
}
