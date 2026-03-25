import { GuideCard } from '@/components/cards/guide-card';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { guides } from '@/data/guides';

export default function GuidesPage() {
  return (
    <>
      <PageHero title="Guides" description="Simple companion articles that support the calculators and expand search coverage." />
      <Section title="Featured Guides">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} title={guide.title} excerpt={guide.excerpt} href={`/guides/${guide.slug}`} />
          ))}
        </div>
      </Section>
    </>
  );
}
