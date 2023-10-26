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
];
