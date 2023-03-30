import React, { useState } from "react";
import { Key, KeyCategory } from "../keys/key";
import { KeysPropsMap } from "../keys/keys";
import { LetterKey } from "../keys/letterKey";
export type AlphabetLayoutProps = {
  onSwitch?: () => void;
};

const rows = [
  ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
  ["w", "x", "c", "v", "b", "n"],
];

export const AlphabetLayout = ({ onSwitch }: AlphabetLayoutProps) => {
  const [isMaj, setIsMaj] = useState(false);
  const onMaj = () => {
    setIsMaj((prev) => !prev);
  };
  return (
    <div className='w-full max-w-3xl p-1 pt-2 gap-y-1 flex flex-col'>
      <div className=' grid grid-cols-10 gap-x-1 gap-y-1'>
        {rows[0].map((letter) => (
          <LetterKey letter={letter} key={letter} isInMathMode={false} isMaj={isMaj} />
        ))}
        {rows[1].map((letter) => (
          <LetterKey letter={letter} key={letter} isInMathMode={false} isMaj={isMaj} />
        ))}
        <div className='col-span-2'>
          <Key
            id={"maj"}
            label={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-shift'
                viewBox='0 0 16 16'
              >
                <path d='M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z' />
              </svg>
            }
            labelType='svg'
            keyCategory={KeyCategory.utility}
            onClick={onMaj}
          />
        </div>
        {rows[2].map((letter) => (
          <LetterKey letter={letter} key={letter} isInMathMode={false} isMaj={isMaj} />
        ))}
        <Key {...KeysPropsMap.get("comma")!} />
        <Key {...KeysPropsMap.get("dot")!} />
      </div>
      <div className='flex gap-x-1'>
        <div className='grow-[1]'>
          <Key id='switch' label={"123"} labelType='raw' keyCategory={KeyCategory.utility} onClick={onSwitch} />
        </div>
        <div className='grow-[0.5]'>
          <Key {...KeysPropsMap.get("left")!} />
        </div>
        <div className='grow-[4]'>
          <Key {...KeysPropsMap.get("space")!} />
        </div>
        <div className='grow-[0.5]'>
          <Key {...KeysPropsMap.get("right")!} />
        </div>
        <div className='grow-[1]'>
          <Key {...KeysPropsMap.get("del")!} />
        </div>
      </div>
    </div>
  );
};
