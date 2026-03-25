'use client';

import { useMemo, useState } from 'react';
import { CalculatorShell } from '@/components/calculators/calculator-shell';
import { ScenarioPanel } from '@/components/calculators/scenario-panel';
import { StatCard } from '@/components/cards/stat-card';
import { PageHero } from '@/components/layout/page-hero';
import { calculateSavingsGoal } from '@/lib/calculators/savings-goal';
import { formatCurrency } from '@/lib/format/currency';
import { formatDate } from '@/lib/format/date';

export default function Page() {
  const [goalAmount, setGoalAmount] = useState(10000);
  const [currentSavings, setCurrentSavings] = useState(1500);
  const [monthlySavings, setMonthlySavings] = useState(300);
  const [annualReturnRate, setAnnualReturnRate] = useState(4);

  const result = useMemo(
    () => calculateSavingsGoal({ goalAmount, currentSavings, monthlySavings, annualReturnRate }),
    [goalAmount, currentSavings, monthlySavings, annualReturnRate],
  );

  return (
    <>
      <PageHero title="Savings Goal Calculator" description="Find out how long your money needs to reach your target." />
      <CalculatorShell title="Savings Goal" description="Turn a savings target into a visible timeline.">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Goal amount
              <input type="number" min={0} value={goalAmount} onChange={(event) => setGoalAmount(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Current savings
              <input type="number" min={0} value={currentSavings} onChange={(event) => setCurrentSavings(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Monthly savings
              <input type="number" min={0} value={monthlySavings} onChange={(event) => setMonthlySavings(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Annual return %
              <input type="number" min={0} step="0.1" value={annualReturnRate} onChange={(event) => setAnnualReturnRate(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard label="Months needed" value={String(result.months)} />
            <StatCard label="Target date" value={formatDate(result.targetDate.toISOString())} />
            <StatCard label="Projected balance" value={formatCurrency(result.finalBalance)} />
          </div>

          <ScenarioPanel text={`At ${formatCurrency(monthlySavings)} per month, you reach ${formatCurrency(goalAmount)} in about ${result.months} months.`} />
        </div>
      </CalculatorShell>
    </>
  );
}
