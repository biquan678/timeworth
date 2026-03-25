import Link from 'next/link';
import { GuideCard } from '@/components/cards/guide-card';
import { ToolCard } from '@/components/cards/tool-card';
import { PageHero } from '@/components/layout/page-hero';
import { Section } from '@/components/layout/section';
import { faqs } from '@/data/faqs';
import { guides } from '@/data/guides';
import { tools } from '@/data/tools';

export default function HomePage() {
  return (
    <>
      <PageHero
        title="See your time, money, and life decisions clearly."
        description="Interactive tools that turn savings, retirement, housing, salary, and life planning into visuals you can actually feel."
      />

      <section className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex gap-4">
          <Link href="/life-in-weeks" className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white">
            Start with Life in Weeks
          </Link>
          <Link href="/guides" className="rounded-full border border-line px-5 py-3 text-sm font-medium text-ink">
            Explore Guides
          </Link>
        </div>
      </section>

      <Section title="Popular Visual Tools">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={`/${tool.slug}`}
              category={tool.category}
            />
          ))}
        </div>
      </Section>

      <Section title="Featured Guides">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} title={guide.title} excerpt={guide.excerpt} href={`/guides/${guide.slug}`} />
          ))}
        </div>
      </Section>

      <Section title="FAQ">
        <div className="grid gap-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-lg font-semibold text-ink">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-soft">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
