function calculatePreciseAge(birthDateString: string) {
  const [year, month, day] = birthDateString.split('-').map(Number);
  const birthDate = new Date(year, month, day);
  const difference = Date.now() - birthDate.getTime();
  return Math.abs(new Date(difference).getUTCFullYear() - 1970);
}

export default calculatePreciseAge;