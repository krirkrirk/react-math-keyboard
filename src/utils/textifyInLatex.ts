//pour une string du type "CO_2" cette fonction renvoit "\\text{CO}_2"

export const textifyInLatex = (s: string) => {
  let res = "";
  let isInText = false;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const isLetter = char.toUpperCase() != char.toLowerCase();
    if (isInText && isLetter) {
      res += char;
      if (i == s.length - 1) res += `}`;
    } else if (!isInText && isLetter) {
      res += `\\text{${char}`;
      isInText = true;
    } else if (isInText && !isLetter) {
      isInText = false;
      res += `}${char}`;
    } else if (!isInText && !isLetter) {
      res += char;
    }
  }
  return res;
};
