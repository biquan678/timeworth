type InputRowProps = {
  label: string;
  hint: string;
};

export function InputRow({ label, hint }: InputRowProps) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-4">
      <p className="text-sm font-medium text-ink">{label}</p>
      <p className="mt-1 text-sm text-soft">{hint}</p>
    </div>
  );
}
