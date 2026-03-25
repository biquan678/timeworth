import Link from 'next/link';

type GuideCardProps = {
  title: string;
  excerpt: string;
  href: string;
};

export function GuideCard({ title, excerpt, href }: GuideCardProps) {
  return (
    <Link href={href} className="block rounded-2xl border border-line bg-white p-5 transition hover:border-brand hover:shadow-sm">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-soft">{excerpt}</p>
    </Link>
  );
}
