export const longestCommonSubstring = (str1: string, str2: string) => {
  const table = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let maxI = 0;
  let maxJ = 0;

  for (let i = 1; i <= str1.length; i += 1) {
    for (let j = 1; j <= str2.length; j += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
        if (table[i][j] > table[maxI][maxJ]) {
          maxI = i;
          maxJ = j;
        }
      } else {
        table[i][j] = 0;
      }
    }
  }
  return str1.substring(maxI - table[maxI][maxJ], maxI);
};