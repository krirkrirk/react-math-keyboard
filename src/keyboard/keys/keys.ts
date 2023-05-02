import { algebraKeysProps } from "./algebraKeys";
import { functionKeysProps } from "./functionKeys";
import { geometryKeysProps } from "./geometryKeys";
import { greekLettersKeysProps } from "./greekLetters";
import { KeyProps } from "./key";
import { KeyId } from "./keyIds";
import { majLettersKeysProps, minLettersKeysProps } from "./letterKeys";
import { numberKeysProps } from "./numberKeys";
import { operationKeysProps } from "./operationKeys";
import { ponctuationKeysProps } from "./ponctuationKeys";
import { setKeysProps } from "./setKeys";
import { utilityKeysProps } from "./utilityKeys";

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
