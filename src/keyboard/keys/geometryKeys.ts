import { KeyProps } from "./key";

export const geometryKeysProps: KeyProps[] = [
  {
    id: "overrightarrow",
    label: "\\overrightarrow{\\ \\ \\ \\ \\ }",
    labelType: "tex",
    mathfieldInstructions: {
      content: "overrightarrow",
      method: "cmd",
    },
    groups: ["geometry"],
  },
  {
    id: "vectorU",
    label: "\\overrightarrow{u}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\overrightarrow{u}",
      method: "write",
    },
    groups: ["geometry"],
  },
  {
    id: "degree",
    label: "°",
    keypressId: "°",
    labelType: "tex",
    mathfieldInstructions: {
      content: "^\\circ",
      method: "write",
    },
    groups: ["units", "geometry"],
  },
  {
    id: "widehat",
    label: "\\widehat{\\square}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "widehat",
      method: "cmd",
    },
    groups: ["geometry"],
  },
];
