import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';

export default function Page() {
  return (
    <>
      <PageHero title="How Many Weeks Does a Person Live?" description="A simple way to understand a human lifespan through weeks instead of years." />
      <Section title="Why Weeks Feel Different">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          Most people think in years because calendars are built that way. Weeks feel more tangible. A week is short enough to feel real, but long enough to show a pattern. That is why a life in weeks view can create a stronger emotional response than a plain age number.
        </div>
      </Section>
      <Section title="A Simple Baseline">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          An 80-year life is a little over 4,100 weeks. An 85-year life is around 4,430 weeks. Once you see life as a grid of weekly blocks, time becomes less abstract and more visible.
        </div>
      </Section>
    </>
  );
}
