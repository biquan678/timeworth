import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';

export default function Page() {
  return (
    <>
      <PageHero title="How Much Money Do You Need to Retire?" description="A basic framework for thinking about retirement through spending and withdrawal rate." />
      <Section title="Start With Spending">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          Retirement planning begins with expected yearly spending. Without a clear spending target, a retirement number is only guesswork.
        </div>
      </Section>
      <Section title="Why FIRE Calculators Use a Withdrawal Rate">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          Many FIRE models start with a simple rule: divide annual spending by a chosen withdrawal rate. It is not perfect, but it offers a useful starting point for planning.
        </div>
      </Section>
    </>
  );
}
