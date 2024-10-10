import { MathField } from "../types/types";

export const getAllIdsFromCursor = (mathfield: MathField) => {
  const cursor = mathfield.__controller.cursor;
  const allIds: number[] = [];
  let rootParent = { ...cursor };
  while (!!rootParent?.parent?.id) {
    rootParent = rootParent.parent;
  }
  console.log("rootparentid", rootParent.id);

  let node: any = rootParent.ends[-1];
  while (node?.id) {
    allIds.push(node.id);
    node = node[1];
  }
  console.log("ids", allIds);
  return allIds;
};

type CursorNode = {
  id: number;
  "1": CursorNode | 0 | undefined;
  "-1": CursorNode | 0 | undefined;
  parent: CursorNode | 0 | undefined;
};
