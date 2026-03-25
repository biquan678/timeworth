'use client';

import { useMemo, useState } from 'react';
import { CalculatorShell } from '@/components/calculators/calculator-shell';
import { ScenarioPanel } from '@/components/calculators/scenario-panel';
import { StatCard } from '@/components/cards/stat-card';
import { LineGrowthChart } from '@/components/charts/line-growth-chart';
import { PageHero } from '@/components/layout/page-hero';
import { calculateFire } from '@/lib/calculators/fire';
import { formatCurrency } from '@/lib/format/currency';

export default function Page() {
  const [annualSpending, setAnnualSpending] = useState(40000);
  const [currentInvestments, setCurrentInvestments] = useState(120000);
  const [yearlyContribution, setYearlyContribution] = useState(18000);
  const [annualReturnRate, setAnnualReturnRate] = useState(7);
  const [withdrawalRate, setWithdrawalRate] = useState(4);

  const result = useMemo(
    () => calculateFire({ annualSpending, currentInvestments, yearlyContribution, annualReturnRate, withdrawalRate }),
    [annualSpending, currentInvestments, yearlyContribution, annualReturnRate, withdrawalRate],
  );

  const chartData = Array.from({ length: result.years + 1 }, (_, index) => ({
    label: `${index}y`,
    value: currentInvestments + ((result.finalBalance - currentInvestments) / Math.max(1, result.years)) * index,
  }));

  return (
    <>
      <PageHero title="FIRE Calculator" description="See how far you are from financial independence." />
      <CalculatorShell title="FIRE" description="Estimate a rough timeline to early retirement.">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Annual spending
              <input type="number" min={0} value={annualSpending} onChange={(event) => setAnnualSpending(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Current investments
              <input type="number" min={0} value={currentInvestments} onChange={(event) => setCurrentInvestments(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Yearly contribution
              <input type="number" min={0} value={yearlyContribution} onChange={(event) => setYearlyContribution(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Annual return %
              <input type="number" min={0} step="0.1" value={annualReturnRate} onChange={(event) => setAnnualReturnRate(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Withdrawal rate %
              <input type="number" min={1} step="0.1" value={withdrawalRate} onChange={(event) => setWithdrawalRate(Number(event.target.value) || 1)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard label="FIRE target" value={formatCurrency(result.fireTarget)} />
            <StatCard label="Years to target" value={String(result.years)} />
            <StatCard label="Current shortfall" value={formatCurrency(result.shortfall)} />
          </div>

          <LineGrowthChart data={chartData} />

          <ScenarioPanel text={`With ${formatCurrency(yearlyContribution)} invested each year, your current setup reaches roughly ${formatCurrency(result.fireTarget)} in about ${result.years} years.`} />
        </div>
      </CalculatorShell>
    </>
  );
}
