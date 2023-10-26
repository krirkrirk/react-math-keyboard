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
    groups: ["alphabet"],
  },
  {
    id: "guillemet",
    label: '"',
    labelType: "raw",

    mathfieldInstructions: {
      content: '"',
      method: "write",
    },
    groups: ["alphabet"],
  },
  {
    id: "quote",
    label: "'",
    labelType: "raw",

    mathfieldInstructions: {
      content: "'",
      method: "write",
    },
    groups: ["alphabet"],
  },
  {
    id: "hyphen",
    label: "-",
    labelType: "raw",

    mathfieldInstructions: {
      content: "-",
      method: "write",
    },
    groups: ["alphabet"],
  },
  {
    id: "euro",
    label: "€",
    labelType: "raw",

    mathfieldInstructions: {
      content: "€",
      method: "write",
    },
    groups: ["alphabet"],
  },
];
