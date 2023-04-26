import { KeyProps } from "./key";

export const ponctuationKeysProps: Array<KeyProps> = [
  {
    id: "guillemet",
    label: '"',
    labelType: "raw",

    mathfieldInstructions: {
      content: '"',
      method: "write",
    },
  },
  {
    id: "quote",
    label: "'",
    labelType: "raw",

    mathfieldInstructions: {
      content: "'",
      method: "write",
    },
  },
  {
    id: "hyphen",
    label: "-",
    labelType: "raw",

    mathfieldInstructions: {
      content: "-",
      method: "write",
    },
  },
  {
    id: "euro",
    label: "€",
    labelType: "raw",

    mathfieldInstructions: {
      content: "€",
      method: "write",
    },
  },
];
