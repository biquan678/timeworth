import { ReactNode } from 'react';

type CalculatorShellProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function CalculatorShell({ title, description, children }: CalculatorShellProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-line bg-white p-6">
          <h2 className="text-2xl font-semibold text-ink">{title}</h2>
          <p className="mt-3 text-soft">{description}</p>
          <div className="mt-6">{children}</div>
        </div>
        <div className="rounded-3xl border border-line bg-panel p-6">
          <p className="text-sm text-soft">MVP note</p>
          <p className="mt-3 text-base leading-7 text-ink">
            This first version establishes page structure, SEO surface, and component layout. Calculator logic and charts are the next layer.
          </p>
        </div>
      </div>
    </div>
  );
}
