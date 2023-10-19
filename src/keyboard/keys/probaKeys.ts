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
  },
  {
    id: "minProba",
    label: "p()",
    labelType: "tex",

    mathfieldInstructions: {
      content: "p(",
      method: "typedText",
    },
    group: "sets",
  },
  {
    id: "majProba",
    label: "P()",
    labelType: "tex",

    mathfieldInstructions: {
      content: "P(",
      method: "typedText",
    },
    group: "sets",
  },
];
