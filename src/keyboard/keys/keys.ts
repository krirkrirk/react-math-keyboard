import { algebraKeysProps } from "./algebraKeys";
import { atomKeysProps } from "./atomKeys";
import { complexKeysProps } from "./complexKeys";
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
import { sequenceKeysProps } from "./sequenceKeys";
import { setKeysProps } from "./setKeys";
import { trigoKeysProps } from "./trigoKeys";
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
  ...sequenceKeysProps,
  ...complexKeysProps,
  ...trigoKeysProps,
  {
    id: "rightarrow",
    label: "\\rightarrow",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\rightarrow",
      method: "write",
    },
  },
];

export const KeysPropsMap = new Map<KeyId, KeyProps>(
  allKeysProps.map((obj) => {
    return [obj.id as KeyId, obj];
  })
);
