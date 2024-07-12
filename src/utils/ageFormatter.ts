function ageFormatter(age: number): string {
  const suffixes = ['год', 'года', 'лет'];

  const suffixIndex = (age % 100 > 4 && age % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(age % 10 < 5) ? age % 10 : 5];

  return `${age} ${suffixes[suffixIndex]}`;
}

export default ageFormatter;
