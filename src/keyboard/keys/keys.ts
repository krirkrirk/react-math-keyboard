import { algebraKeysProps } from "./algebraKeys";
import { atomKeysProps } from "./atomKeys";
import { functionKeysProps } from "./functionKeys";
import { geometryKeysProps } from "./geometryKeys";
import { greekLettersKeysProps } from "./greekLetters";
import { KeyProps } from "./key";
import { KeyId } from "./keyIds";
import { majLettersKeysProps, minLettersKeysProps } from "./letterKeys";
import { moleculesKeysProps } from "./moleculeKeys";
import { numberKeysProps } from "./numberKeys";
import { operationKeysProps } from "./operationKeys";
import { ponctuationKeysProps } from "./ponctuationKeys";
import { probaKeysProps } from "./probaKeys";
import { setKeysProps } from "./setKeys";
import { unitKeysProps } from "./unitKeys";
import { utilityKeysProps } from "./utilityKeys";
import { wordKeysProps } from "./wordKeys";

export const allKeysProps: KeyProps[] = [
  ...numberKeysProps,
  ...minLettersKeysProps,
  ...majLettersKeysProps,

  ...operationKeysProps,
  ...functionKeysProps,
  ...utilityKeysProps,
  ...setKeysProps,
  ...greekLettersKeysProps,
  ...geometryKeysProps,
  ...algebraKeysProps,
  ...ponctuationKeysProps,
  ...unitKeysProps,
  ...wordKeysProps,
  ...atomKeysProps,
  ...moleculesKeysProps,
  ...probaKeysProps,
  {
    id: "rightarrow",
    label: "\\rightarrow",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\rightarrow",
      method: "write",
    },
  },
  {
    id: "overrightarrow",
    label: "\\overrightarrow{AB}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "overrightarrow",
      method: "cmd",
    },
  },
  {
    id: "overline",
    label: "\\overline{z}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "overline",
      method: "cmd",
    },
  },

  {
    id: "underscore",
    label: "\\square_n",
    labelType: "tex",
    mathfieldInstructions: { content: "_", method: "cmd" },
    group: "sequences",
  },
];

export const KeysPropsMap = new Map<KeyId, KeyProps>(
  allKeysProps.map((obj) => {
    return [obj.id as KeyId, obj];
  })
);
