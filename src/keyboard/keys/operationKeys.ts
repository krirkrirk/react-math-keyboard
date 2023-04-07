import { KeyCategory, KeyProps } from "./key";

export const operationKeysIds = [
  "plus",
  "minus",
  "times",
  "frac",
  "div",
  "sqrt",
  "cube",
  "power",
  "percent",
  "leftParenthesis",
  "rightParenthesis",
  "equal",
  "comma",
  "obele",
  "semicolon",
  "dot",
];
export const operationKeysProps: KeyProps[] = [
  {
    id: "plus",
    label: "+",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "+",
      method: "write",
    },
  },
  {
    id: "minus",
    label: "-",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "-",
      method: "write",
    },
  },
  {
    id: "times",
    label: "\\times",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\times",
      method: "cmd",
    },
  },
  {
    id: "frac",
    label: "\\div",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "/",
      method: "cmd",
    },
  },
  {
    id: "sqrt",
    label: "\\sqrt{\\ }",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\sqrt",
      method: "cmd",
    },
  },
  {
    id: "square",
    label: "\\square^2",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: { content: "^2", method: "write" },
  },
  {
    id: "cube",
    label: "x^3",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: { content: "^3 ", method: "write" },
  },
  {
    id: "power",
    label: "x^\\square",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: { content: "^", method: "cmd" },
  },

  {
    id: "leftParenthesis",
    label: "(",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "(",
      method: "typedText",
    },
  },
  {
    id: "rightParenthesis",
    label: ")",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: ")",
      method: "typedText",
    },
  },
  {
    id: "equal",
    label: "=",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "=",
      method: "write",
    },
  },
  {
    id: "comma",
    label: "{,}",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: ",",
      method: "write",
    },
  },
  {
    id: "dot",
    label: ".",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: ".",
      method: "write",
    },
  },
  {
    id: "obele",
    label: "\\div",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "\\div",
      method: "write",
    },
  },
  {
    id: "percent",
    label: "\\%",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "%",
      method: "write",
    },
  },
  {
    id: "semicolon",
    label: ";",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: ";",
      method: "write",
    },
  },
];
