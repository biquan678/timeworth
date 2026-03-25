export type TimeValueInput = {
  monthlyIncome: number;
  workingHoursPerWeek: number;
  workingWeeksPerYear: number;
};

export function calculateTimeValue(input: TimeValueInput) {
  const yearlyIncome = input.monthlyIncome * 12;
  const yearlyHours = Math.max(1, input.workingHoursPerWeek * input.workingWeeksPerYear);
  const hourlyValue = yearlyIncome / yearlyHours;
  const dailyValue = hourlyValue * 8;
  const yearlyLostOneHourPerDay = hourlyValue * 365;

  return {
    yearlyIncome,
    yearlyHours,
    hourlyValue,
    dailyValue,
    yearlyLostOneHourPerDay,
  };
}
