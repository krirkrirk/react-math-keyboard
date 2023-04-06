import { KeyCategory, KeyProps } from "./key";

const ponctuationKeys = ['"', "'", "-", "€"];

export const ponctuationKeysProps: Array<KeyProps> = [
  {
    id: "guillemet",
    label: '"',
    labelType: "raw",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: '"',
      method: "write",
    },
  },
  {
    id: "quote",
    label: "'",
    labelType: "raw",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "'",
      method: "write",
    },
  },
  {
    id: "hyphen",
    label: "-",
    labelType: "raw",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "-",
      method: "write",
    },
  },
  {
    id: "euro",
    label: "€",
    labelType: "raw",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "€",
      method: "write",
    },
  },
];
