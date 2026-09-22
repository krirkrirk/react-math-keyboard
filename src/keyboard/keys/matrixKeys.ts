import { KeyProps } from "./key";
import { KeyId } from "./keyIds";

export const matrixKeysProps: KeyProps[] = (() => {
  const keys: KeyProps[] = [
    //mat(2,2) --> mat(5,5)
    ...[2, 3, 4, 5].flatMap((nbRows) =>
      [2, 3, 4, 5].map((nbCols) => {
        const strMatrixContent = [...Array(nbRows).keys()]
          .map(() => [...Array(nbCols).keys()].map(() => 0).join(" & "))
          .join("\\\\ ");
        return {
          id: `mat-${nbRows}-${nbCols}` as KeyId,
          label: `\\begin{pmatrix}\\  & ${nbCols} \\\\ ${nbRows} & \\  \\end{pmatrix}`,
          labelType: "tex",
          mathfieldInstructions: {
            content: `\\begin{pmatrix} ${strMatrixContent} \\end{pmatrix}`,
            method: "write",
          },
          groups: ["matrix"],
        } as KeyProps;
      }),
    ),

    //determinant matrice 2x2
    (() => {
      const nbRows = 2;
      const nbCols = 2;
      const strMatrixContent = [...Array(nbRows).keys()]
        .map(() => [...Array(nbCols).keys()].map(() => 0).join(" & "))
        .join("\\\\ ");
      return {
        id: `det-2-2` as KeyId,
        label: `\\begin{vmatrix}\\ & 2 \\\\ 2 & \\  \\end{vmatrix}`,
        labelType: "tex",
        mathfieldInstructions: {
          content: `\\begin{vmatrix} ${strMatrixContent} \\end{vmatrix}`,
          method: "write",
        },
        groups: ["matrix"],
      } as KeyProps;
    })(),
  ];

  return keys;
})();
