import { KeyProps } from "./key";

export const operationKeysProps: KeyProps[] = [
  {
    id: "plus",
    label: "+",
    labelType: "tex",

    mathfieldInstructions: {
      content: "+",
      method: "write",
    },
    group: "basicOperations",
  },
  {
    id: "minus",
    label: "-",
    labelType: "tex",

    mathfieldInstructions: {
      content: "-",
      method: "write",
    },
    group: "basicOperations",
  },
  {
    id: "times",
    label: "\\times",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\times",
      method: "cmd",
    },
    group: "basicOperations",
  },
  {
    id: "frac",
    label: "\\div",
    labelType: "tex",

    mathfieldInstructions: {
      content: "/",
      method: "cmd",
    },
    group: "basicOperations",
  },
  {
    id: "sqrt",
    label: "\\sqrt{\\ }",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\sqrt",
      method: "cmd",
    },
    group: "basicOperations",
  },
  {
    id: "square",
    label: "\\square^2",
    labelType: "tex",
    group: "basicOperations",
    mathfieldInstructions: { content: "^2", method: "write" },
  },

  {
    id: "cube",
    label: "\\square^3",
    labelType: "tex",

    mathfieldInstructions: { content: "^3 ", method: "write" },
    group: "otherOperations",
  },
  {
    id: "power",
    label: "\\square^n",
    labelType: "tex",
    group: "basicOperations",

    mathfieldInstructions: { content: "^", method: "cmd" },
  },

  {
    id: "leftParenthesis",
    label: "(",
    labelType: "tex",
    group: "basicOperations",

    mathfieldInstructions: {
      content: "(",
      method: "typedText",
    },
  },
  {
    id: "rightParenthesis",
    label: ")",
    labelType: "tex",
    group: "basicOperations",

    mathfieldInstructions: {
      content: ")",
      method: "typedText",
    },
  },

  {
    id: "comma",
    label: "{,}",
    labelType: "tex",
    group: "basicOperations",

    mathfieldInstructions: {
      content: ",",
      method: "write",
    },
  },
  {
    id: "dot",
    label: ".",
    labelType: "tex",
    group: "basicOperations",

    mathfieldInstructions: {
      content: ".",
      method: "write",
    },
  },
  {
    id: "obelus",
    label: "\\div",
    labelType: "tex",
    group: "basicOperations",

    mathfieldInstructions: {
      content: "\\div",
      method: "write",
    },
  },
  {
    id: "percent",
    label: "\\%",
    labelType: "tex",
    group: "otherOperations",

    mathfieldInstructions: {
      content: "%",
      method: "write",
    },
  },
];
