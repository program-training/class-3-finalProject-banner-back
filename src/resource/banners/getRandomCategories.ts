export function shuffleAndSlice<T>(array: T[]): T[] {
  const shuffledArray = array.slice();
  const quantityAsNumber = 1;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, quantityAsNumber);
}
