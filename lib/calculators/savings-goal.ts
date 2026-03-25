export type SavingsGoalInput = {
  goalAmount: number;
  currentSavings: number;
  monthlySavings: number;
  annualReturnRate: number;
};

export function calculateSavingsGoal(input: SavingsGoalInput) {
  const monthlyRate = input.annualReturnRate / 100 / 12;
  let balance = input.currentSavings;
  let months = 0;

  while (balance < input.goalAmount && months < 1200) {
    balance = balance * (1 + monthlyRate) + input.monthlySavings;
    months += 1;
  }

  const years = months / 12;
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + months);

  return {
    months,
    years,
    targetDate,
    finalBalance: balance,
  };
}
