export const getValue = (n: number) => {
  const m1 = 5, m2 = 10;
  return m1 * n + (n > 5 ? (n - 5) * (m2 - m1) : 0);
}