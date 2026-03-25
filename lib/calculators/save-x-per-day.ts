export type SavePerDayInput = {
  dailySavings: number;
  years: number;
  annualReturnRate: number;
};

export function calculateSavePerDay(input: SavePerDayInput) {
  const days = Math.max(1, input.years * 365);
  const principal = input.dailySavings * days;
  const monthlyRate = input.annualReturnRate / 100 / 12;
  const months = Math.max(1, input.years * 12);
  const monthlyContribution = input.dailySavings * 30.4167;

  let futureValue = 0;
  for (let index = 0; index < months; index += 1) {
    futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;
  }

  return {
    principal,
    futureValue,
    growth: Math.max(0, futureValue - principal),
  };
}
