export type KeyGroupIds = "sets" | "proba" | "functions" | "trigo" | "sequences" | "complex" | "minLetters" | "majLetters" | "greek" | "utility" | "sequences" | "alphabet" | "basicOperations" | "otherOperations" | "numbers" | "algebra" | "geometry" | "words" | "units" | "atoms" | "molecules" | "physicalQuantities";
export type Langs = "en" | "fr";
export type KeyGroup = {
    id: KeyGroupIds;
    label: {
        [x in Langs]: string;
    };
};
export declare const keyGroups: KeyGroup[];
