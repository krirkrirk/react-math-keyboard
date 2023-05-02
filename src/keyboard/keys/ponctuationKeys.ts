import { KeyProps } from "./key";

export const ponctuationKeysProps: Array<KeyProps> = [
  {
    id: "space",
    label: "",
    labelType: "raw",
    mathfieldInstructions: {
      content: " ",
      method: "write",
    },
    group: "alphabet",
  },
  {
    id: "guillemet",
    label: '"',
    labelType: "raw",

    mathfieldInstructions: {
      content: '"',
      method: "write",
    },
    group: "alphabet",
  },
  {
    id: "quote",
    label: "'",
    labelType: "raw",

    mathfieldInstructions: {
      content: "'",
      method: "write",
    },
    group: "alphabet",
  },
  {
    id: "hyphen",
    label: "-",
    labelType: "raw",

    mathfieldInstructions: {
      content: "-",
      method: "write",
    },
    group: "alphabet",
  },
  {
    id: "euro",
    label: "€",
    labelType: "raw",

    mathfieldInstructions: {
      content: "€",
      method: "write",
    },
    group: "alphabet",
  },
];
