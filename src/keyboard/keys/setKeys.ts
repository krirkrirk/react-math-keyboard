import { KeyProps } from "./key";

export const setKeysProps: KeyProps[] = [
  {
    id: "semicolon",
    label: ";",
    labelType: "tex",

    mathfieldInstructions: {
      content: ";",
      method: "write",
    },
    group: "sets",
  },
  {
    id: "infty",
    label: "\\infty",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\infty",
      method: "cmd",
    },
    group: "sets",
  },
  {
    id: "cap",
    label: "\\cap",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cap",
      method: "cmd",
    },
    group: "sets",
  },
  {
    id: "cup",
    label: "\\cup",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cup",
      method: "cmd",
    },
    group: "sets",
  },
  {
    id: "lbrace",
    label: "\\lbrace",
    labelType: "tex",

    mathfieldInstructions: {
      content: "{",
      method: "typedText",
    },
    group: "sets",
  },
  {
    id: "rbrace",
    label: "\\rbrace",
    labelType: "tex",

    mathfieldInstructions: {
      content: "}",
      method: "typedText",
    },
    group: "sets",
  },
  {
    id: "lbracket",
    label: "[",
    labelType: "tex",

    mathfieldInstructions: {
      content: "[",
      method: "write",
    },
    group: "sets",
  },
  {
    id: "rbracket",
    label: "]",
    labelType: "tex",

    mathfieldInstructions: {
      content: "]",
      method: "write",
    },
    group: "sets",
  },
  {
    id: "emptyset",
    label: "\\emptyset",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\emptyset",
      method: "cmd",
    },
    group: "sets",
  },
  {
    id: "naturals",
    label: "\\mathbb{N}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{N}",
      method: "write",
    },
    group: "sets",
  },
  {
    id: "integers",
    label: "\\mathbb{Z}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{Z}",
      method: "write",
    },
    group: "sets",
  },
  {
    id: "rationals",
    label: "\\mathbb{Q}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{Q}",
      method: "write",
    },
    group: "sets",
  },
  {
    id: "reals",
    label: "\\mathbb{R}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{R}",
      method: "write",
    },
    group: "sets",
  },
  {
    id: "complex",
    label: "\\mathbb{C}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{C}",
      method: "write",
    },
    group: "sets",
  },
  {
    id: "ast",
    label: "\\square^\\ast",
    labelType: "tex",

    mathfieldInstructions: {
      content: "^\\ast",
      method: "write",
    },
    group: "sets",
  },
];
