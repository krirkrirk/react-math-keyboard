import { KeyProps } from "./key";

export const operationKeysIds = [
  "plus",
  "minus",
  "times",
  "frac",
  "obelus",
  "sqrt",
  "cube",
  "power",
  "percent",
  "leftParenthesis",
  "rightParenthesis",
  "equal",
  "comma",
  "semicolon",
  "dot",
];
export const operationKeysProps: KeyProps[] = [
  {
    id: "plus",
    label: "+",
    labelType: "tex",

    mathfieldInstructions: {
      content: "+",
      method: "write",
    },
  },
  {
    id: "minus",
    label: "-",
    labelType: "tex",

    mathfieldInstructions: {
      content: "-",
      method: "write",
    },
  },
  {
    id: "times",
    label: "\\times",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\times",
      method: "cmd",
    },
  },
  {
    id: "frac",
    label: "\\div",
    labelType: "tex",

    mathfieldInstructions: {
      content: "/",
      method: "cmd",
    },
  },
  {
    id: "sqrt",
    label: "\\sqrt{\\ }",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\sqrt",
      method: "cmd",
    },
  },
  {
    id: "square",
    label: "\\square^2",
    labelType: "tex",

    mathfieldInstructions: { content: "^2", method: "write" },
  },
  {
    id: "cube",
    label: "x^3",
    labelType: "tex",

    mathfieldInstructions: { content: "^3 ", method: "write" },
  },
  {
    id: "power",
    label: "\\square^n",
    labelType: "tex",

    mathfieldInstructions: { content: "^", method: "cmd" },
  },

  {
    id: "leftParenthesis",
    label: "(",
    labelType: "tex",

    mathfieldInstructions: {
      content: "(",
      method: "typedText",
    },
  },
  {
    id: "rightParenthesis",
    label: ")",
    labelType: "tex",

    mathfieldInstructions: {
      content: ")",
      method: "typedText",
    },
  },
  {
    id: "equal",
    label: "=",
    labelType: "tex",

    mathfieldInstructions: {
      content: "=",
      method: "write",
    },
  },
  {
    id: "leq",
    label: "\\leq",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\leq",
      method: "write",
    },
  },
  {
    id: "geq",
    label: "\\geq",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\geq",
      method: "write",
    },
  },
  {
    id: "inf",
    label: "<",
    labelType: "tex",

    mathfieldInstructions: {
      content: "<",
      method: "write",
    },
  },
  {
    id: "sup",
    label: ">",
    labelType: "tex",

    mathfieldInstructions: {
      content: ">",
      method: "write",
    },
  },
  {
    id: "comma",
    label: "{,}",
    labelType: "tex",

    mathfieldInstructions: {
      content: ",",
      method: "write",
    },
  },
  {
    id: "dot",
    label: ".",
    labelType: "tex",

    mathfieldInstructions: {
      content: ".",
      method: "write",
    },
  },
  {
    id: "obelus",
    label: "\\div",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\div",
      method: "write",
    },
  },
  {
    id: "percent",
    label: "\\%",
    labelType: "tex",

    mathfieldInstructions: {
      content: "%",
      method: "write",
    },
  },
  {
    id: "semicolon",
    label: ";",
    labelType: "tex",

    mathfieldInstructions: {
      content: ";",
      method: "write",
    },
  },
];
