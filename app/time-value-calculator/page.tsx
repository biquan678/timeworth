'use client';

import { useMemo, useState } from 'react';
import { CalculatorShell } from '@/components/calculators/calculator-shell';
import { ScenarioPanel } from '@/components/calculators/scenario-panel';
import { StatCard } from '@/components/cards/stat-card';
import { ProgressRing } from '@/components/charts/progress-ring';
import { PageHero } from '@/components/layout/page-hero';
import { calculateTimeValue } from '@/lib/calculators/time-value';
import { formatCurrency } from '@/lib/format/currency';

export default function Page() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [workingHoursPerWeek, setWorkingHoursPerWeek] = useState(40);
  const [workingWeeksPerYear, setWorkingWeeksPerYear] = useState(50);

  const result = useMemo(
    () => calculateTimeValue({ monthlyIncome, workingHoursPerWeek, workingWeeksPerYear }),
    [monthlyIncome, workingHoursPerWeek, workingWeeksPerYear],
  );

  const timePressure = Math.min(100, (workingHoursPerWeek / 80) * 100);

  return (
    <>
      <PageHero title="Time Value Calculator" description="Find out what one hour of your life is really worth." />
      <CalculatorShell title="Time Value" description="Turn income and work hours into a clearer picture of time cost.">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-3">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Monthly income
              <input
                type="number"
                min={0}
                value={monthlyIncome}
                onChange={(event) => setMonthlyIncome(Number(event.target.value) || 0)}
                className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Working hours / week
              <input
                type="number"
                min={1}
                value={workingHoursPerWeek}
                onChange={(event) => setWorkingHoursPerWeek(Number(event.target.value) || 1)}
                className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Working weeks / year
              <input
                type="number"
                min={1}
                max={52}
                value={workingWeeksPerYear}
                onChange={(event) => setWorkingWeeksPerYear(Number(event.target.value) || 1)}
                className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard label="Hourly value" value={formatCurrency(result.hourlyValue)} />
            <StatCard label="8-hour day value" value={formatCurrency(result.dailyValue)} />
            <StatCard label="Losing 1 hour/day for a year" value={formatCurrency(result.yearlyLostOneHourPerDay)} />
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_220px]">
            <ScenarioPanel
              text={`At ${workingHoursPerWeek} hours a week, one lost hour per day costs about ${formatCurrency(result.yearlyLostOneHourPerDay)} per year at your current pace.`}
            />
            <ProgressRing value={timePressure} label="Weekly time load" />
          </div>
        </div>
      </CalculatorShell>
    </>
  );
}
