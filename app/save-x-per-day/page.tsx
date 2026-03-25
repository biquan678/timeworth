'use client';

import { useMemo, useState } from 'react';
import { CalculatorShell } from '@/components/calculators/calculator-shell';
import { ScenarioPanel } from '@/components/calculators/scenario-panel';
import { StatCard } from '@/components/cards/stat-card';
import { LineGrowthChart } from '@/components/charts/line-growth-chart';
import { PageHero } from '@/components/layout/page-hero';
import { calculateSavePerDay } from '@/lib/calculators/save-x-per-day';
import { formatCurrency } from '@/lib/format/currency';

export default function Page() {
  const [dailySavings, setDailySavings] = useState(10);
  const [years, setYears] = useState(5);
  const [annualReturnRate, setAnnualReturnRate] = useState(5);

  const result = useMemo(
    () => calculateSavePerDay({ dailySavings, years, annualReturnRate }),
    [dailySavings, years, annualReturnRate],
  );

  const chartData = Array.from({ length: years + 1 }, (_, yearIndex) => ({
    label: `${yearIndex}y`,
    value: (result.futureValue / Math.max(1, years)) * yearIndex,
  }));

  return (
    <>
      <PageHero title="Save X Per Day Calculator" description="Small daily savings can become a much bigger number than they feel." />
      <CalculatorShell title="Save X Per Day" description="See how consistency compounds over time.">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-3">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Daily savings
              <input type="number" min={0} value={dailySavings} onChange={(event) => setDailySavings(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Years
              <input type="number" min={1} value={years} onChange={(event) => setYears(Number(event.target.value) || 1)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Annual return %
              <input type="number" min={0} step="0.1" value={annualReturnRate} onChange={(event) => setAnnualReturnRate(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard label="Final value" value={formatCurrency(result.futureValue)} />
            <StatCard label="Principal" value={formatCurrency(result.principal)} />
            <StatCard label="Growth" value={formatCurrency(result.growth)} />
          </div>

          <LineGrowthChart data={chartData} />

          <ScenarioPanel text={`Saving ${formatCurrency(dailySavings)} per day for ${years} years can grow to about ${formatCurrency(result.futureValue)} at ${annualReturnRate}% annual return.`} />
        </div>
      </CalculatorShell>
    </>
  );
}
