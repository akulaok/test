function ageFormatter(age: number): string {
  const suffixes = ['год', 'года', 'лет'];

  const lastLetter = age % 10;
  const lastTwoLetters = age % 100;
  let suffixIndex;

  if (lastTwoLetters > 4 && lastTwoLetters < 20) {
    suffixIndex = 2;
  } else {
    suffixIndex = [2, 0, 1, 1, 1, 2][lastLetter < 5 ? lastLetter : 5];
  }

  return `${age} ${suffixes[suffixIndex]}`;
}

export default ageFormatter;
