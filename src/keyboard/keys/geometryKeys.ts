import { KeyProps } from "./key";

export const geometryKeysProps: KeyProps[] = [
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
];
