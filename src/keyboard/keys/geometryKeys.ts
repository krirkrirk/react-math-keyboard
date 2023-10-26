import { KeyProps } from "./key";

export const geometryKeysProps: KeyProps[] = [
  {
    id: "degree",
    label: "°",
    labelType: "raw",
    mathfieldInstructions: {
      content: "°",
      method: "write",
    },
    groups: ["geometry"],
  },
  {
    id: "overrightarrow",
    label: "\\overrightarrow{AB}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "overrightarrow",
      method: "cmd",
    },
    groups: ["geometry"],
  },
];
