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
    group: "proba",
  },
  {
    id: "minProba",
    label: "p()",
    labelType: "tex",

    mathfieldInstructions: {
      content: "p(",
      method: "typedText",
    },
    group: "proba",
  },
  {
    id: "majProba",
    label: "P()",
    labelType: "tex",

    mathfieldInstructions: {
      content: "P(",
      method: "typedText",
    },
    group: "proba",
  },
];
