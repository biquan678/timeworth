import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TimeWorth - Visual tools for money, time, and life decisions',
  description: 'Interactive visual calculators for savings, retirement, rent vs buy, time value, life in weeks, and future planning.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
