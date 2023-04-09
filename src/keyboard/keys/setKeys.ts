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
  {
    id: "naturals",
    label: "\\mathbb{N}",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\mathbb{N}",
      method: "write",
    },
  },
  {
    id: "integers",
    label: "\\mathbb{Z}",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\mathbb{Z}",
      method: "write",
    },
  },
  {
    id: "rationals",
    label: "\\mathbb{Q}",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\mathbb{Q}",
      method: "write",
    },
  },
  {
    id: "reals",
    label: "\\mathbb{R}",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\mathbb{R}",
      method: "write",
    },
  },
  {
    id: "complex",
    label: "\\mathbb{C}",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\mathbb{C}",
      method: "write",
    },
  },
  {
    id: "ast",
    label: "\\square^\\ast",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "^\\ast",
      method: "write",
    },
  },
];
