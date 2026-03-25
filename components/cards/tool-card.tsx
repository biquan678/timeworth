import Link from 'next/link';

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export function ToolCard({ title, description, href, category }: ToolCardProps) {
  return (
    <Link href={href} className="block rounded-2xl border border-line bg-white p-5 transition hover:border-brand hover:shadow-sm">
      <p className="text-sm text-accent">{category}</p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-soft">{description}</p>
    </Link>
  );
}
