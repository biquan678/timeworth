type ProgressRingProps = {
  value: number;
  label: string;
};

export function ProgressRing({ value, label }: ProgressRingProps) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const safeValue = Math.max(0, Math.min(100, value));
  const offset = circumference - (safeValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-5">
      <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
        <circle cx="60" cy="60" r={radius} stroke="#e2e8f0" strokeWidth="10" fill="none" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#2563eb"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="-mt-20 text-center">
        <p className="text-2xl font-semibold text-ink">{safeValue.toFixed(1)}%</p>
        <p className="mt-1 text-sm text-soft">{label}</p>
      </div>
    </div>
  );
}
