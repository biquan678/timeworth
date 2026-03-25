export type FireInput = {
  annualSpending: number;
  currentInvestments: number;
  yearlyContribution: number;
  annualReturnRate: number;
  withdrawalRate: number;
};

export function calculateFire(input: FireInput) {
  const fireTarget = input.annualSpending / (input.withdrawalRate / 100);
  let balance = input.currentInvestments;
  let years = 0;
  const rate = input.annualReturnRate / 100;

  while (balance < fireTarget && years < 100) {
    balance = balance * (1 + rate) + input.yearlyContribution;
    years += 1;
  }

  return {
    fireTarget,
    years,
    shortfall: Math.max(0, fireTarget - input.currentInvestments),
    finalBalance: balance,
  };
}
