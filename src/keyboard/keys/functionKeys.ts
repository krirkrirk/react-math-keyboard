import { KeyProps } from "./key";

export const functionKeysProps: KeyProps[] = [
  {
    id: "log",
    label: "\\log",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\log",
      method: "cmd",
    },
    groups: ["functions"],
  },
  {
    id: "logBrackets",
    label: "\\log\\left(...\\right)",
    labelType: "tex",

    mathfieldInstructions: {
      content: "log(",
      method: "typedText",
    },
    groups: ["functions"],
  },
  {
    id: "ln",
    label: "\\ln",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\ln",
      method: "cmd",
    },
    groups: ["functions"],
  },
  {
    id: "lnBrackets",
    label: "\\ln\\left(...\\right)",
    labelType: "tex",

    mathfieldInstructions: {
      content: "ln(",
      method: "typedText",
    },
    groups: ["functions"],
  },
  {
    id: "exp",
    label: "\\exp",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\exp(",
      method: "typedText",
    },
    groups: ["functions"],
  },
  {
    id: "epower",
    label: "e^\\square",
    labelType: "tex",

    mathfieldInstructions: {
      content: "e^",
      method: "typedText",
    },
    groups: ["functions"],
  },

  {
    id: "abs",
    label: "\\left|\\square\\right|",
    labelType: "tex",

    mathfieldInstructions: {
      content: "|",
      method: "cmd",
    },
    groups: ["functions"],
  },
  {
    id: "fx",
    label: "f(x)",
    labelType: "tex",
    mathfieldInstructions: {
      content: "f(x)",
      method: "write",
    },
    groups: ["functions"],
  },
  {
    id: "fParenthesis",
    label: "f\\left(...\\right)",
    labelType: "tex",
    mathfieldInstructions: {
      content: "f(",
      method: "typedText",
    },
    groups: ["functions"],
  },
];
