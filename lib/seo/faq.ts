export function buildToolFaq(title: string) {
  return [
    {
      question: `What is the ${title}?`,
      answer: `${title} is a free visual calculator on TimeWorth.` ,
    },
    {
      question: 'Are the results exact?',
      answer: 'No. The results are estimates intended for planning and education.',
    },
    {
      question: 'Can I use this on mobile?',
      answer: 'Yes. The TimeWorth MVP is designed to work on both desktop and mobile.',
    },
  ];
}
