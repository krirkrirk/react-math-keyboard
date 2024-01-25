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
    keypressId: " ",
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
    keypressId: '"',
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
    keypressId: "'",
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
    keypressId: "-",
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
    keypressId: "€",
  },
];
