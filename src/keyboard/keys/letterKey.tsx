import { Key } from "./key";
import React from "react";
import { KeyId } from "./keyIds";

export type LetterKeyProps = {
  letter: KeyId;
  isMaj?: boolean;
  isInMathMode?: boolean;
};
export const LetterKey = ({ letter, isMaj = false, isInMathMode = true }: LetterKeyProps) => {
  const displayedLetter = isMaj ? letter.toLocaleUpperCase() : letter;
  return (
    <Key
      id={letter}
      label={displayedLetter}
      labelType={isInMathMode ? "tex" : "raw"}
      mathfieldInstructions={{
        content: displayedLetter,
        method: "write",
      }}
      groups={isMaj ? ["majLetters"] : ["minLetters"]}
    />
  );
};
