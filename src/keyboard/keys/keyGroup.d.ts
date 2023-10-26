export type KeyGroupIds = "sets" | "proba" | "functions" | "trigo" | "sequences" | "complex" | "minLetters" | "majLetters" | "greek" | "utility" | "sequences" | "alphabet" | "basicOperations" | "otherOperations" | "numbers" | "algebra" | "geometry" | "words" | "units" | "atoms" | "molecules";
export type KeyGroup = {
    id: KeyGroupIds;
    label: string;
};
export declare const keyGroups: KeyGroup[];
