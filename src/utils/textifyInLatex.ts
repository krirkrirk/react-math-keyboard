/**
 *
 * @param s latex
 * @returns a textified latex version of s, e.g : CO_2 is turned into \\text{CO}_2
 */
export const textifyInLatex = (s: string) => {
  let res = "";
  let isInText = false;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const isLetter = char.toUpperCase() != char.toLowerCase();
    if (isInText && isLetter) {
      res += char;
      if (i === s.length - 1) res += `}`;
    } else if (!isInText && isLetter) {
      res += `\\text{${char}`;
      isInText = true;
      if (i === s.length - 1) res += `}`;
    } else if (isInText && !isLetter) {
      isInText = false;
      res += `}${char}`;
    } else if (!isInText && !isLetter) {
      res += char;
    }
  }
  return res;
};
