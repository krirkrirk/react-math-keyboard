import { KeyProps } from "./key";

export const setKeysProps: KeyProps[] = [
  {
    id: "belongs",
    label: "\\in",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\in",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "notin",
    label: "\\notin",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\notin",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "semicolon",
    label: ";",
    labelType: "tex",

    mathfieldInstructions: {
      content: ";",
      method: "write",
    },
    groups: ["sets"],
    keypressId: ";",
  },
  {
    id: "infty",
    label: "\\infty",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\infty",
      method: "cmd",
    },
    groups: ["sets", "functions"],
  },
  {
    id: "cap",
    label: "\\cap",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cap",
      method: "cmd",
    },
    groups: ["sets", "proba"],
  },
  {
    id: "cup",
    label: "\\cup",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cup",
      method: "cmd",
    },
    groups: ["sets", "proba"],
  },
  {
    id: "lbrace",
    label: "\\lbrace",
    labelType: "tex",

    mathfieldInstructions: {
      content: "{",
      method: "typedText",
    },
    groups: ["sets"],
    keypressId: "{",
  },
  {
    id: "rbrace",
    label: "\\rbrace",
    labelType: "tex",

    mathfieldInstructions: {
      content: "}",
      method: "typedText",
    },
    groups: ["sets"],
    keypressId: "}",
  },
  {
    id: "lbracket",
    label: "[",
    labelType: "tex",

    mathfieldInstructions: {
      content: "[",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "rbracket",
    label: "]",
    labelType: "tex",

    mathfieldInstructions: {
      content: "]",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "emptyset",
    label: "\\emptyset",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\emptyset",
      method: "cmd",
    },
    groups: ["sets"],
  },
  {
    id: "naturals",
    label: "\\mathbb{N}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{N}",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "integers",
    label: "\\mathbb{Z}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{Z}",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "decimals",
    label: "\\mathrm{D}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathrm{D}",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "rationals",
    label: "\\mathbb{Q}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{Q}",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "reals",
    label: "\\mathbb{R}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{R}",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "complex",
    label: "\\mathbb{C}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\mathbb{C}",
      method: "write",
    },
    groups: ["sets"],
  },
  {
    id: "ast",
    label: "\\square^\\ast",
    labelType: "tex",

    mathfieldInstructions: {
      content: "^\\ast",
      method: "write",
    },
    groups: ["sets"],
  },
];
