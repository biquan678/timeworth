import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';

export default function Page() {
  return (
    <>
      <PageHero title="How Much Is Your Time Worth?" description="A practical way to estimate the value of your time from income and working hours." />
      <Section title="Why Time Value Matters">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          People usually track money carefully but ignore time leakage. Estimating the value of an hour helps connect daily choices to long-term financial tradeoffs.
        </div>
      </Section>
      <Section title="A Useful Mental Model">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          If your hour has a clear value, small habits become easier to judge. Saving one hour a day or wasting one hour a day both add up fast over a year.
        </div>
      </Section>
    </>
  );
}
