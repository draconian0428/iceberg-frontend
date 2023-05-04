export const counterWord = (words = '') => {
  return words.trim().split('').filter(function(n) { return n === ' ' }).length + 1;
}