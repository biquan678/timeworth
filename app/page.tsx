import Link from 'next/link';
import { guides } from '@/data/guides';
import { tools } from '@/data/tools';

const cardStyles = [
  'bg-[#FFDADA]',
  'bg-[#E2F5FF]',
  'bg-[#DCFCE7]',
  'bg-[#FFFBEB]',
  'bg-[#F3E8FF]',
  'bg-[#FEF3C7]',
  'bg-[#ECFCCB]',
  'bg-[#E0F2FE]',
  'bg-[#FFEDD5]',
  'bg-[#FCE7F3]',
  'bg-[#F5F3FF]',
  'bg-[#F1F5F9]',
];

const cardIcons = ['⏳', '🕰️', '💸', '🎯', '🔥', '🏠', '🌍', '🏙️', '🪙', '📈', '🧠', '☁️'];

const homepageItems = [
  ...tools.map((tool, index) => ({
    title: tool.title,
    href: `/${tool.slug}`,
    style: cardStyles[index % cardStyles.length],
    icon: cardIcons[index % cardIcons.length],
  })),
  ...guides.slice(0, 4).map((guide, index) => ({
    title: guide.title,
    href: `/guides/${guide.slug}`,
    style: cardStyles[(index + tools.length) % cardStyles.length],
    icon: cardIcons[(index + tools.length) % cardIcons.length],
  })),
];

export default function HomePage() {
  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-tighter text-[#2F3332]">TimeWorth</div>
            <p className="mt-1 text-sm text-[#5C605E]">Tiny tools for time, money, and meaning.</p>
          </div>
          <div className="flex gap-6 text-sm font-bold text-[#5C605E]">
            <Link className="hover:text-[#8A5033] transition-colors" href="/about">
              About
            </Link>
            <Link className="hover:text-[#8A5033] transition-colors" href="/guides">
              Guides
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-black tracking-tight text-[#2F3332] md:text-4xl">
            A small website for big life questions.
          </h1>
          <p className="mt-3 text-base leading-7 text-[#5C605E]">
            Explore simple, playful tools about life, time, money, habits, and the future.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6">
            {homepageItems.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                className={`aspect-square rounded-2xl border border-black/5 ${item.style} group flex flex-col items-center justify-center p-6 text-center shadow-sm transition hover:scale-[1.03] hover:shadow-md`}
              >
                <div className="mb-4 text-5xl">{item.icon}</div>
                <h3 className="text-lg font-bold leading-tight text-[#2F3332]">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8A5033]">Stay in the loop</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#2F3332] md:text-3xl">
              Get new tiny tools in your inbox.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5C605E] md:text-base">
              Subscribe for new experiments, life tools, and simple little pages worth sharing.
            </p>
          </div>

          <form className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-12 flex-1 rounded-full border border-gray-200 bg-[#F9F9F7] px-5 text-sm text-[#2F3332] outline-none placeholder:text-[#777C79]"
            />
            <button
              type="submit"
              className="min-h-12 rounded-full bg-[#2F3332] px-6 text-sm font-bold text-white transition hover:bg-[#1f2322]"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-3 text-xs text-[#777C79]">No spam. Just small things worth opening.</p>
        </section>
      </main>

      <footer className="mt-12 w-full border-t border-gray-200 bg-white py-10">
        <div className="flex w-full flex-col items-center gap-4 px-8 text-center">
          <div className="flex gap-8">
            <Link className="text-sm font-bold text-[#5C605E] transition-colors hover:text-[#8A5033]" href="/privacy-policy">
              Privacy
            </Link>
            <Link className="text-sm font-bold text-[#5C605E] transition-colors hover:text-[#8A5033]" href="/guides">
              Share
            </Link>
            <Link className="text-sm font-bold text-[#5C605E] transition-colors hover:text-[#8A5033]" href="/about">
              Contact
            </Link>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5C605E]">
            © 2026 TimeWorth. Inspired by things that matter.
          </p>
        </div>
      </footer>
    </>
  );
}
