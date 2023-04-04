import { Key, KeyCategory } from "../keys/key";
import { KeysPropsMap } from "../keys/keys";
import { Toolbar, ToolbarProps } from "../toolbar/toolbar";
import React from "react";
export type NumericLayoutProps = {
  toolbarProps: ToolbarProps;
  onSwitch?: () => void;
};

export const NumericLayout = ({ toolbarProps, onSwitch }: NumericLayoutProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Toolbar {...toolbarProps} />
      <div className="max-w-3xl w-full p-1 pt-2 grid grid-cols-[2fr_3fr_1fr] gap-x-3 sm:gap-x-10">
        <div className="grid grid-cols-2 gap-y-1 grow gap-x-1 sm:gap-x-2 justify-stretch">
          <Key {...KeysPropsMap.get("times")!} />
          <Key {...KeysPropsMap.get("plus")!} />
          <Key {...KeysPropsMap.get("frac")!} />
          <Key {...KeysPropsMap.get("minus")!} />
          <Key {...KeysPropsMap.get("sqrt")!} />
          <Key {...KeysPropsMap.get("square")!} />
          <Key id="switch" label={"abc"} labelType="raw" keyCategory={KeyCategory.utility} onClick={onSwitch} />
          <Key {...KeysPropsMap.get("percent")!} />
        </div>
        <div className="grid grid-cols-3 gap-y-1 grow-[2] gap-x-1 sm:gap-x-2 justify-stretch">
          <Key {...KeysPropsMap.get("7")!} />
          <Key {...KeysPropsMap.get("8")!} />
          <Key {...KeysPropsMap.get("9")!} />
          <Key {...KeysPropsMap.get("4")!} />
          <Key {...KeysPropsMap.get("5")!} />
          <Key {...KeysPropsMap.get("6")!} />
          <Key {...KeysPropsMap.get("1")!} />
          <Key {...KeysPropsMap.get("2")!} />
          <Key {...KeysPropsMap.get("3")!} />
          <Key {...KeysPropsMap.get("left")!} />
          <Key {...KeysPropsMap.get("0")!} />
          <Key {...KeysPropsMap.get("right")!} />
        </div>

        <div className="flex flex-col gap-y-1 grow">
          <Key {...KeysPropsMap.get("leftParenthesis")!} />
          <Key {...KeysPropsMap.get("rightParenthesis")!} />
          <Key {...KeysPropsMap.get("comma")!} />
          <Key {...KeysPropsMap.get("del")!} />
        </div>
      </div>
    </div>
  );
};
