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
    id: "vectorNul",
    label: "\\overrightarrow{0}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\overrightarrow{0}",
      method: "write",
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
    id: "vectorV",
    label: "\\overrightarrow{v}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\overrightarrow{v}",
      method: "write",
    },
    groups: ["geometry"],
  },
  {
    id: "vectorW",
    label: "\\overrightarrow{w}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\overrightarrow{w}",
      method: "write",
    },
    groups: ["geometry"],
  },
  {
    id: "vectorZ",
    label: "\\overrightarrow{z}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\overrightarrow{z}",
      method: "write",
    },
    groups: ["geometry"],
  },
  {
    id: "degree",
    label: "°",
    // keypressId: "°",
    labelType: "tex",
    mathfieldInstructions: {
      content: "^\\circ",
      method: "write",
    },
    groups: ["units", "geometry"],
  },
  // {
  //   id: "widehat",
  //   label: "\\widehat{\\square}",
  //   labelType: "tex",
  //   mathfieldInstructions: {
  //     content: "widehat",
  //     method: "cmd",
  //   },
  //   groups: ["geometry"],
  // },
];
