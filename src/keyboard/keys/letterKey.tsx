import { Key } from "./key";
import React from "react";

export type LetterKeyProps = {
  letter: string;
  isMaj?: boolean;
  isInMathMode?: boolean;
};
export const LetterKey = ({
  letter,
  isMaj = false,
  isInMathMode = true,
}: LetterKeyProps) => {
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
    />
  );
};
