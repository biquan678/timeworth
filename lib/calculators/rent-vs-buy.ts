export type RentVsBuyInput = {
  homePrice: number;
  downPayment: number;
  mortgageRate: number;
  monthlyRent: number;
  years: number;
  annualMaintenanceRate: number;
};

export function calculateRentVsBuy(input: RentVsBuyInput) {
  const loanAmount = Math.max(0, input.homePrice - input.downPayment);
  const monthlyRate = input.mortgageRate / 100 / 12;
  const months = Math.max(1, input.years * 12);
  const mortgagePayment =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);

  const buyCost = mortgagePayment * months + input.downPayment + input.homePrice * (input.annualMaintenanceRate / 100) * input.years;
  const rentCost = input.monthlyRent * months;

  return {
    mortgagePayment,
    buyCost,
    rentCost,
    difference: buyCost - rentCost,
  };
}
