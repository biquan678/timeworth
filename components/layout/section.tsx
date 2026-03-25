import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
  description?: string;
};

export function Section({ title, children, description }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-soft">{description}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
