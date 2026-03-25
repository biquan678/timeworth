type ScenarioPanelProps = {
  text: string;
};

export function ScenarioPanel({ text }: ScenarioPanelProps) {
  return (
    <div className="rounded-2xl border border-dashed border-brand bg-blue-50 p-5 text-sm leading-6 text-ink">
      {text}
    </div>
  );
}
