import { KeyCategory, KeyProps } from "./key";

export const setKeysProps: KeyProps[] = [
  {
    id: "cap",
    label: "\\cap",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "cap",
      method: "cmd",
    },
  },
  {
    id: "cup",
    label: "\\cup",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "cup",
      method: "cmd",
    },
  },
  {
    id: "lbrace",
    label: "\\lbrace",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "{",
      method: "typedText",
    },
  },
  {
    id: "rbrace",
    label: "\\rbrace",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "}",
      method: "typedText",
    },
  },
  {
    id: "lbracket",
    label: "[",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "[",
      method: "typedText",
    },
  },
  {
    id: "rbracket",
    label: "]",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "]",
      method: "typedText",
    },
  },
  {
    id: "emptyset",
    label: "\\emptyset",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\emptyset",
      method: "cmd",
    },
  },
];
