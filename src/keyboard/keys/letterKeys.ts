import { KeyProps } from "./key";
import { KeyGroupIds } from "./keyGroup";
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
  const groups: KeyGroupIds[] = ["minLetters"];
  switch (label) {
    case "f":
      groups.push("functions");
      break;
    case "n":
    case "u":
    case "v":
      groups.push("sequences");
      break;
    case "x":
    case "y":
      groups.push("algebra");
      groups.push("functions");
      break;
    case "z":
      groups.push("complex");
      break;
  }
  return {
    id: label,

    label: label,
    labelType: "tex",
    mathfieldInstructions: { content: label, method: "write" },
    groups: groups,
  };
});

export const majLettersKeysProps = majLettersIds.map((label): KeyProps => {
  return {
    id: label,

    label: label,
    labelType: "tex",
    mathfieldInstructions: { content: label, method: "write" },
    groups: ["majLetters"],
  };
});
