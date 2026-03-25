type WeeksGridProps = {
  totalWeeks: number;
  completedWeeks: number;
  columns?: number;
};

export function WeeksGrid({ totalWeeks, completedWeeks, columns = 52 }: WeeksGridProps) {
  const cells = Array.from({ length: totalWeeks }, (_, index) => index < completedWeeks);

  return (
    <div
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {cells.map((done, index) => (
        <div
          key={index}
          className={`aspect-square rounded-[2px] ${done ? 'bg-ink' : 'bg-slate-200'}`}
          title={`Week ${index + 1}`}
        />
      ))}
    </div>
  );
}
