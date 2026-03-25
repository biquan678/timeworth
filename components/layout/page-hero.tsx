type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-soft">{description}</p>
      </div>
    </section>
  );
}
