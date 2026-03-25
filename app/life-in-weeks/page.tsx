'use client';

import { useMemo, useState } from 'react';
import { CalculatorShell } from '@/components/calculators/calculator-shell';
import { ScenarioPanel } from '@/components/calculators/scenario-panel';
import { StatCard } from '@/components/cards/stat-card';
import { WeeksGrid } from '@/components/charts/weeks-grid';
import { PageHero } from '@/components/layout/page-hero';
import { calculateLifeInWeeks } from '@/lib/calculators/life-in-weeks';
import { formatNumber } from '@/lib/format/number';
import { formatPercent } from '@/lib/format/percent';

export default function Page() {
  const [birthDate, setBirthDate] = useState('1995-01-01');
  const [expectedLifespanYears, setExpectedLifespanYears] = useState(85);

  const result = useMemo(
    () => calculateLifeInWeeks({ birthDate, expectedLifespanYears }),
    [birthDate, expectedLifespanYears],
  );

  return (
    <>
      <PageHero title="Life in Weeks Calculator" description="See your life as a grid of weeks, and understand how much time has passed and what may still be ahead." />
      <CalculatorShell title="Life in Weeks" description="The clearest way to feel time instead of just counting years.">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Birth date
              <input
                type="date"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
                className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Expected lifespan (years)
              <input
                type="number"
                min={1}
                max={120}
                value={expectedLifespanYears}
                onChange={(event) => setExpectedLifespanYears(Number(event.target.value) || 1)}
                className="rounded-xl border border-line px-4 py-3 text-base text-ink outline-none"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard label="Weeks lived" value={formatNumber(result.livedWeeks)} />
            <StatCard label="Weeks left" value={formatNumber(result.remainingWeeks)} />
            <StatCard label="Life used" value={formatPercent(result.usedPercent)} />
          </div>

          <div className="rounded-3xl border border-line bg-panel p-5">
            <p className="mb-4 text-sm text-soft">Each square represents one week.</p>
            <WeeksGrid totalWeeks={result.totalWeeks} completedWeeks={result.livedWeeks} />
          </div>

          <ScenarioPanel text={`At this setting, you have used about ${formatPercent(result.usedPercent)} of an ${expectedLifespanYears}-year timeline.`} />
        </div>
      </CalculatorShell>
    </>
  );
}
