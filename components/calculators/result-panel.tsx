import { ReactNode } from 'react';

type ResultPanelProps = {
  children: ReactNode;
};

export function ResultPanel({ children }: ResultPanelProps) {
  return <div className="grid gap-4 md:grid-cols-3">{children}</div>;
}
