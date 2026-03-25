'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { WeeksGrid } from '@/components/charts/weeks-grid';
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
    <div className="min-h-screen bg-[#fffaf6] text-[#2f3332]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#fffaf6]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-black tracking-tight">
            TimeWorth
          </Link>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#7b746d]">Life in Weeks</div>
        </div>
      </header>

      <section className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 py-16 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#8A5033]">A small website for a big number</p>
        <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-[#2f3332] md:text-7xl">
          A life looks different when you count it in weeks.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5c605e] md:text-xl">
          Not years. Not decades. Just small little blocks of time, one week at a time.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#calculator" className="rounded-full bg-[#2f3332] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1f2322]">
            Start with your birthday
          </a>
          <a href="#result" className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-[#2f3332] transition hover:border-black/20">
            See the weeks
          </a>
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="grid gap-2 text-left text-sm font-bold text-[#2f3332]">
              Your birthday
              <input
                type="date"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
                className="min-h-12 rounded-2xl border border-black/10 bg-[#fffaf6] px-4 text-base font-medium text-[#2f3332] outline-none"
              />
            </label>
            <label className="grid gap-2 text-left text-sm font-bold text-[#2f3332]">
              Lifespan to imagine
              <input
                type="number"
                min={1}
                max={120}
                value={expectedLifespanYears}
                onChange={(event) => setExpectedLifespanYears(Number(event.target.value) || 1)}
                className="min-h-12 rounded-2xl border border-black/10 bg-[#fffaf6] px-4 text-base font-medium text-[#2f3332] outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      <section id="result" className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A5033]">Your result</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            You have lived <span className="text-[#8A5033]">{formatNumber(result.livedWeeks)}</span> weeks.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#5c605e] md:text-xl">
            If life reaches {expectedLifespanYears}, you may have around{' '}
            <span className="font-bold text-[#2f3332]">{formatNumber(result.remainingWeeks)}</span> left.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-sm md:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-[#7b746d]">
            <span>Each tiny square is one week.</span>
            <span>{formatPercent(result.usedPercent)} used</span>
          </div>
          <WeeksGrid totalWeeks={result.totalWeeks} completedWeeks={result.livedWeeks} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 text-center">
        <div className="rounded-[2rem] bg-[#ffe9dc] px-6 py-10 md:px-10">
          <p className="text-2xl font-black tracking-tight text-[#2f3332] md:text-4xl">
            A week is small.
            <br />
            A life is smaller than it feels.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5c605e] md:text-lg">
            That is what makes it precious. This is not meant to be scary. Just clear enough to feel real.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[2rem] bg-[#ffdada] p-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7b746d]">Weeks lived</p>
            <p className="mt-3 text-3xl font-black tracking-tight">{formatNumber(result.livedWeeks)}</p>
          </div>
          <div className="rounded-[2rem] bg-[#e2f5ff] p-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7b746d]">Weeks left</p>
            <p className="mt-3 text-3xl font-black tracking-tight">{formatNumber(result.remainingWeeks)}</p>
          </div>
          <div className="rounded-[2rem] bg-[#fce7f3] p-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7b746d]">Life used</p>
            <p className="mt-3 text-3xl font-black tracking-tight">{formatPercent(result.usedPercent)}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 text-center">
        <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A5033]">Share this feeling</p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-[#2f3332] md:text-4xl">
            Send this to someone you like.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5c605e] md:text-lg">
            Sometimes the nicest thing a website can do is make time feel real for a second.
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
