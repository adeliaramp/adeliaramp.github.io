const entries = [
  {
    company: 'Gojek',
    role: 'Data Analyst',
    years: '2025 - Present',
    summary:
      'Own ride and car order cancellation analytics. Engineer behavioral features for fraud detection models.',
    current: true,
  },
  {
    company: 'Shopee / Sea Group',
    role: 'Data Analyst',
    years: '2022 - 2025',
    summary:
      'Worked on fraud detection and ECL modeling under IFRS 9. Built and maintained BI reporting across multiple markets.',
    current: false,
  },
  {
    company: 'Prixa.ai',
    role: 'Data Analyst',
    years: '2022',
    summary:
      'First data role, at a health tech startup. Built analytics and reporting for clinical and product teams.',
    current: false,
  },
]

export default function Timeline() {
  return (
    <section id="experience" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
          Experience
        </h2>
        <p className="mt-3 text-warm-gray">
          The short version. The longer one is on LinkedIn.
        </p>

        <ol className="relative mt-10 space-y-10 border-l-2 border-dusty-blue/30 pl-8">
          {entries.map((entry) => (
            <li key={entry.company} className="relative">
              <span
                className={`absolute -left-[2.45rem] top-1.5 h-4 w-4 rounded-full border-2 ${
                  entry.current
                    ? 'border-dusty-blue bg-dusty-blue'
                    : 'border-dusty-blue bg-cream'
                }`}
                aria-hidden="true"
              />
              <p className="text-sm text-warm-gray">{entry.years}</p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-charcoal">
                {entry.role} &middot; {entry.company}
              </h3>
              <p className="mt-2 leading-relaxed text-warm-gray">{entry.summary}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-dusty-rose/50 bg-dusty-rose/15 px-4 py-2 text-sm font-medium text-charcoal">
            <span className="h-2 w-2 rounded-full bg-dusty-rose" aria-hidden="true" />
            Available for new opportunities
          </span>
          {/* No resume download on purpose: resumes are tailored per application */}
          <a
            href="https://linkedin.com/in/adeliaramp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-dusty-blue hover:underline"
          >
            Full history on LinkedIn &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
