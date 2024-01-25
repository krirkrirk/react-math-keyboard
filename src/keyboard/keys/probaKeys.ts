import { KeyProps } from "./key";

export const probaKeysProps: KeyProps[] = [
  {
    id: "overlineProba",
    label: "\\overline{A}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "overline",
      method: "cmd",
    },
    groups: ["proba"],
  },
  {
    id: "minProba",
    label: "p()",
    labelType: "tex",

    mathfieldInstructions: {
      content: "p(",
      method: "typedText",
    },
    groups: ["proba"],
    keypressId: "p",
  },
  {
    id: "majProba",
    label: "P()",
    labelType: "tex",

    mathfieldInstructions: {
      content: "P(",
      method: "typedText",
    },
    groups: ["proba"],
    keypressId: "P",
  },
  {
    id: "binom",
    label: "\\binom{a}{b}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "binom",
      method: "cmd",
    },
    groups: ["proba"],
  },
];
