export const percentCalculate = (final: number, initial: number) => {
  if (isNaN(final) || isNaN(initial) || initial === 0) {
    return 0;
  }

  let percent = (final / initial) * 100;
  return percent;
};
