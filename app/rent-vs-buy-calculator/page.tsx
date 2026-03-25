'use client';

import { useMemo, useState } from 'react';
import { CalculatorShell } from '@/components/calculators/calculator-shell';
import { ScenarioPanel } from '@/components/calculators/scenario-panel';
import { StatCard } from '@/components/cards/stat-card';
import { ComparisonBarChart } from '@/components/charts/comparison-bar-chart';
import { PageHero } from '@/components/layout/page-hero';
import { calculateRentVsBuy } from '@/lib/calculators/rent-vs-buy';
import { formatCurrency } from '@/lib/format/currency';

export default function Page() {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [mortgageRate, setMortgageRate] = useState(6);
  const [monthlyRent, setMonthlyRent] = useState(1800);
  const [years, setYears] = useState(10);
  const [annualMaintenanceRate, setAnnualMaintenanceRate] = useState(1.2);

  const result = useMemo(
    () => calculateRentVsBuy({ homePrice, downPayment, mortgageRate, monthlyRent, years, annualMaintenanceRate }),
    [homePrice, downPayment, mortgageRate, monthlyRent, years, annualMaintenanceRate],
  );

  const cheaper = result.difference > 0 ? 'Renting looks cheaper' : 'Buying looks cheaper';

  return (
    <>
      <PageHero title="Rent vs Buy Calculator" description="Compare the long-term cost of renting and buying in a clearer way." />
      <CalculatorShell title="Rent vs Buy" description="Compare a rough cost path for housing decisions.">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Home price
              <input type="number" min={0} value={homePrice} onChange={(event) => setHomePrice(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Down payment
              <input type="number" min={0} value={downPayment} onChange={(event) => setDownPayment(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Mortgage rate %
              <input type="number" min={0} step="0.1" value={mortgageRate} onChange={(event) => setMortgageRate(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Monthly rent
              <input type="number" min={0} value={monthlyRent} onChange={(event) => setMonthlyRent(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Years
              <input type="number" min={1} value={years} onChange={(event) => setYears(Number(event.target.value) || 1)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Maintenance % / year
              <input type="number" min={0} step="0.1" value={annualMaintenanceRate} onChange={(event) => setAnnualMaintenanceRate(Number(event.target.value) || 0)} className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none" />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard label="Monthly mortgage" value={formatCurrency(result.mortgagePayment)} />
            <StatCard label="Buy total cost" value={formatCurrency(result.buyCost)} />
            <StatCard label="Rent total cost" value={formatCurrency(result.rentCost)} />
          </div>

          <ComparisonBarChart leftLabel="Buy" leftValue={result.buyCost} rightLabel="Rent" rightValue={result.rentCost} />

          <ScenarioPanel text={`${cheaper} over ${years} years in this rough model. Cost difference: ${formatCurrency(Math.abs(result.difference))}.`} />
        </div>
      </CalculatorShell>
    </>
  );
}
