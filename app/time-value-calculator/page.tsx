'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { calculateTimeValue } from '@/lib/calculators/time-value';
import { formatCurrency } from '@/lib/format/currency';

const items = [
  { name: 'Coffee', icon: '☕', cost: 5 },
  { name: 'Books', icon: '📚', cost: 18 },
  { name: 'Movie tickets', icon: '🎟️', cost: 14 },
  { name: 'Burgers', icon: '🍔', cost: 9 },
  { name: 'Bubble teas', icon: '🧋', cost: 6 },
  { name: 'Train rides', icon: '🚆', cost: 3 },
  { name: 'Flowers', icon: '🌷', cost: 12 },
  { name: 'Tiny trips', icon: '🧳', cost: 120 },
];

function repeatIcons(icon: string, count: number) {
  return Array.from({ length: Math.min(count, 18) }, (_, index) => (
    <span key={`${icon}-${index}`} className="text-3xl md:text-4xl">
      {icon}
    </span>
  ));
}

export default function Page() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [workingHoursPerWeek, setWorkingHoursPerWeek] = useState(40);
  const [workingWeeksPerYear, setWorkingWeeksPerYear] = useState(50);

  const result = useMemo(
    () => calculateTimeValue({ monthlyIncome, workingHoursPerWeek, workingWeeksPerYear }),
    [monthlyIncome, workingHoursPerWeek, workingWeeksPerYear],
  );

  const hourlyValue = Math.max(0, result.hourlyValue);
  const dailyValue = Math.max(0, result.dailyValue);
  const chosenItems = items.map((item) => ({
    ...item,
    hourlyCount: Math.max(0, Math.floor(hourlyValue / item.cost)),
    dailyCount: Math.max(0, Math.floor(dailyValue / item.cost)),
  }));

  const topHourly = [...chosenItems].sort((a, b) => b.hourlyCount - a.hourlyCount)[0];
  const topDaily = [...chosenItems].sort((a, b) => b.dailyCount - a.dailyCount)[0];

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#2f3332]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#fffaf6]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-black tracking-tight">
            TimeWorth
          </Link>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#7b746d]">Value of Your Time</div>
        </div>
      </header>

      <section className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-16 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8A5033]">Time turns into things</p>
        <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          What does one hour of your life actually buy?
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5c605e] md:text-xl">
          Not just a number. A coffee. A train ride. A movie night. A tiny piece of your life, turned into stuff.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-6">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <label className="grid gap-2 text-left text-sm font-bold text-[#2f3332]">
              Monthly income
              <input
                type="number"
                min={0}
                value={monthlyIncome}
                onChange={(event) => setMonthlyIncome(Number(event.target.value) || 0)}
                className="min-h-12 rounded-2xl border border-black/10 bg-[#fffaf6] px-4 text-base font-medium text-[#2f3332] outline-none"
              />
            </label>
            <label className="grid gap-2 text-left text-sm font-bold text-[#2f3332]">
              Work hours / week
              <input
                type="number"
                min={1}
                value={workingHoursPerWeek}
                onChange={(event) => setWorkingHoursPerWeek(Number(event.target.value) || 1)}
                className="min-h-12 rounded-2xl border border-black/10 bg-[#fffaf6] px-4 text-base font-medium text-[#2f3332] outline-none"
              />
            </label>
            <label className="grid gap-2 text-left text-sm font-bold text-[#2f3332]">
              Work weeks / year
              <input
                type="number"
                min={1}
                max={52}
                value={workingWeeksPerYear}
                onChange={(event) => setWorkingWeeksPerYear(Number(event.target.value) || 1)}
                className="min-h-12 rounded-2xl border border-black/10 bg-[#fffaf6] px-4 text-base font-medium text-[#2f3332] outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#ffdada] p-8 text-center shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b746d]">One hour of your life</p>
            <p className="mt-4 text-5xl font-black tracking-tight md:text-6xl">{formatCurrency(hourlyValue)}</p>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#5c605e] md:text-lg">
              Roughly enough for <span className="font-bold text-[#2f3332]">{topHourly?.hourlyCount}</span> {topHourly?.name.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {topHourly ? repeatIcons(topHourly.icon, topHourly.hourlyCount) : null}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#e2f5ff] p-8 text-center shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b746d]">One work day of your life</p>
            <p className="mt-4 text-5xl font-black tracking-tight md:text-6xl">{formatCurrency(dailyValue)}</p>
            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#5c605e] md:text-lg">
              That is about <span className="font-bold text-[#2f3332]">{topDaily?.dailyCount}</span> {topDaily?.name.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {topDaily ? repeatIcons(topDaily.icon, topDaily.dailyCount) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8A5033]">Your time, turned into things</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">A tiny store powered by your life.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {chosenItems.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-black/5 bg-[#fffaf6] p-5 text-center transition hover:-translate-y-1 hover:shadow-sm">
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-3 text-lg font-black tracking-tight">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5c605e]">
                  1 hour = <span className="font-bold text-[#2f3332]">{item.hourlyCount}</span>
                </p>
                <p className="text-sm leading-6 text-[#5c605e]">
                  1 day = <span className="font-bold text-[#2f3332]">{item.dailyCount}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 text-center">
        <div className="rounded-[2rem] bg-[#fce7f3] px-6 py-10 md:px-10">
          <p className="text-2xl font-black tracking-tight text-[#2f3332] md:text-4xl">
            Money is numbers.
            <br />
            Time is your actual life.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5c605e] md:text-lg">
            Looking at time as coffee, books, rides, and tiny trips makes it feel much less abstract.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 text-center">
        <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A5033]">Share this page</p>
          <h3 className="mt-3 text-2xl font-black tracking-tight md:text-4xl">
            Send someone the cost of one hour.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5c605e] md:text-lg">
            Sometimes the easiest way to understand time is to see what it quietly turns into.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#2f3332] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1f2322]">
              Copy Result
            </button>
            <Link href="/" className="rounded-full border border-black/10 bg-[#fffaf6] px-6 py-3 text-sm font-bold text-[#2f3332] transition hover:border-black/20">
              Back to tiny tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
