import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';

export default function Page() {
  return (
    <>
      <PageHero title="Should You Rent or Buy?" description="A simple framework for comparing housing costs over time." />
      <Section title="Why This Decision Is Hard">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          Renting and buying are both emotional and financial choices. A fair comparison needs more than monthly payment alone. It should include maintenance, down payment, rates, and time horizon.
        </div>
      </Section>
      <Section title="Think in Time Horizons">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          The answer often changes depending on whether you stay for three years, ten years, or longer. That is why a rent vs buy calculator should focus on total cost over time, not just the first monthly number.
        </div>
      </Section>
    </>
  );
}
