export const counterWord = (words: string = '') => {
  return words.trim().split('').filter(function(n) { return n == ' ' }).length + 1;
}