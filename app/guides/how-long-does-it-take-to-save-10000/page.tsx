import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';

export default function Page() {
  return (
    <>
      <PageHero title="How Long Does It Take to Save $10,000?" description="A straightforward way to think about savings pace, consistency, and time." />
      <Section title="The Core Variables">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          Reaching a savings target depends on three things: where you start, how much you save each month, and whether your money compounds along the way.
        </div>
      </Section>
      <Section title="Why Small Changes Matter">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          A small increase in monthly savings can shorten the timeline by months. That is why visual savings tools work well: they make progress easier to see and easier to sustain.
        </div>
      </Section>
    </>
  );
}
