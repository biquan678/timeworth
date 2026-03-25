import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';

export default function Page() {
  return (
    <>
      <PageHero title="About TimeWorth" description="TimeWorth turns money, time, and life planning decisions into clear visual experiences." />
      <Section title="What This Project Is">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          TimeWorth is a visual tools project focused on savings, retirement, housing, time value, and life planning.
        </div>
      </Section>
    </>
  );
}
