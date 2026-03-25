export type LifeInWeeksInput = {
  birthDate: string;
  expectedLifespanYears: number;
};

const MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

export function calculateLifeInWeeks(input: LifeInWeeksInput) {
  const birth = new Date(input.birthDate);
  const now = new Date();
  const totalWeeks = Math.max(1, Math.round(input.expectedLifespanYears * 52.1429));
  const livedWeeks = Math.max(0, Math.floor((now.getTime() - birth.getTime()) / MS_PER_WEEK));
  const cappedLivedWeeks = Math.min(livedWeeks, totalWeeks);
  const remainingWeeks = Math.max(0, totalWeeks - cappedLivedWeeks);
  const usedPercent = totalWeeks === 0 ? 0 : (cappedLivedWeeks / totalWeeks) * 100;

  return {
    totalWeeks,
    livedWeeks: cappedLivedWeeks,
    remainingWeeks,
    usedPercent,
  };
}
