import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';

export default function Page() {
  return (
    <>
      <PageHero title="Terms" description="This placeholder page will hold the project's terms and disclaimers." />
      <Section title="Draft Notice">
        <div className="rounded-2xl border border-line bg-white p-6 text-sm leading-7 text-soft">
          Final legal and usage language should be added before public launch.
        </div>
      </Section>
    </>
  );
}
