type ComparisonBarChartProps = {
  leftLabel: string;
  leftValue: number;
  rightLabel: string;
  rightValue: number;
};

export function ComparisonBarChart({ leftLabel, leftValue, rightLabel, rightValue }: ComparisonBarChartProps) {
  const maxValue = Math.max(leftValue, rightValue, 1);
  const leftWidth = `${(leftValue / maxValue) * 100}%`;
  const rightWidth = `${(rightValue / maxValue) * 100}%`;

  return (
    <div className="rounded-3xl border border-line bg-white p-5">
      <div className="space-y-4">
        <div>
          <div className="mb-2 flex justify-between text-sm text-soft">
            <span>{leftLabel}</span>
            <span>{leftValue.toFixed(0)}</span>
          </div>
          <div className="h-3 rounded-full bg-slate-100">
            <div className="h-3 rounded-full bg-ink" style={{ width: leftWidth }} />
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between text-sm text-soft">
            <span>{rightLabel}</span>
            <span>{rightValue.toFixed(0)}</span>
          </div>
          <div className="h-3 rounded-full bg-slate-100">
            <div className="h-3 rounded-full bg-brand" style={{ width: rightWidth }} />
          </div>
        </div>
      </div>
    </div>
  );
}
