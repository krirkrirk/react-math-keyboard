import { KeyProps } from "./key";

export const setKeysProps: KeyProps[] = [
  {
    id: "cap",
    label: "\\cap",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cap",
      method: "cmd",
    },
  },
  {
    id: "cup",
    label: "\\cup",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cup",
      method: "cmd",
    },
  },
  {
    id: "lbrace",
    label: "\\lbrace",
    labelType: "tex",

    mathfieldInstructions: {
      content: "{",
      method: "typedText",
    },
  },
  {
    id: "rbrace",
    label: "\\rbrace",
    labelType: "tex",

    mathfieldInstructions: {
      content: "}",
      method: "typedText",
    },
  },
  {
    id: "lbracket",
    label: "[",
    labelType: "tex",

    mathfieldInstructions: {
      content: "[",
      method: "write",
    },
  },
  {
    id: "rbracket",
    label: "]",
    labelType: "tex",

    mathfieldInstructions: {
      content: "]",
      method: "write",
    },
  },
  {
    id: "emptyset",
    label: "\\emptyset",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\emptyset",
      method: "cmd",
    },
  },
  {
    id: "naturals",
    label: "\\mathbb{N}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{N}",
      method: "write",
    },
  },
  {
    id: "integers",
    label: "\\mathbb{Z}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{Z}",
      method: "write",
    },
  },
  {
    id: "rationals",
    label: "\\mathbb{Q}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{Q}",
      method: "write",
    },
  },
  {
    id: "reals",
    label: "\\mathbb{R}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{R}",
      method: "write",
    },
  },
  {
    id: "complex",
    label: "\\mathbb{C}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{C}",
      method: "write",
    },
  },
  {
    id: "ast",
    label: "\\square^\\ast",
    labelType: "tex",

    mathfieldInstructions: {
      content: "^\\ast",
      method: "write",
    },
  },
];
