import { Key, KeyProps } from "../keys/key";
import { KeyId, KeysPropsMap } from "../keys/keys";
import React from "react";
export type ToolbarProps = {
  keys: (KeyId | KeyProps)[];
};

export const Toolbar = ({ keys }: ToolbarProps) => {
  return (
    <div className='bg-slate-400 pt-2 items-center w-full'>
      <div className='flex mx-auto max-w-3xl md:max-w-full overflow-auto'>
        <div className='flex gap-x-1 px-1 md:min-w-[768px] md:mx-auto pb-1'>
          {keys.map((keyData) =>
            typeof keyData === "string" ? (
              <Key {...KeysPropsMap.get(keyData)!} key={keyData} fullWidth={false} />
            ) : (
              <Key {...keyData} key={keyData.id} fullWidth={false} />
            ),
          )}
        </div>
      </div>
      <hr className='border-t-2 border-slate-500 mt-1' />
    </div>
  );
};
