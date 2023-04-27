import { KeyProps } from "./key";
import { KeyId } from "./keyIds";

export const minLettersIds: KeyId[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "é",
  "è",
  "à",
  "ç",
  "ù",
  "ô",
];

export const majLettersIds: KeyId[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "É",
  "È",
  "Ç",
  "À",
];

export const minLettersKeysProps = minLettersIds.map((label): KeyProps => {
  return {
    id: label,

    label: label,
    labelType: "tex",
    mathfieldInstructions: { content: label, method: "write" },
    group: "minLetters",
  };
});

export const majLettersKeysProps = majLettersIds.map((label): KeyProps => {
  return {
    id: label,

    label: label,
    labelType: "tex",
    mathfieldInstructions: { content: label, method: "write" },
    group: "majLetters",
  };
});
