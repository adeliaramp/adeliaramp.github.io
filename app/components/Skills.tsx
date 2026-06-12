const skillGroups = [
  {
    title: 'Analytics',
    skills: ['SQL', 'Python', 'dbt', 'Looker', 'Tableau'],
  },
  {
    title: 'Data Engineering',
    skills: ['BigQuery', 'Airflow', 'dbt', 'DuckDB'],
  },
  {
    title: 'Stats & Modeling',
    skills: ['A/B Testing', 'Survival Analysis', 'IFRS 9 / ECL', 'Anomaly Detection'],
  },
  {
    title: 'Ways of Working',
    skills: ['Stakeholder Communication', 'Multi-market BI', 'Fraud Analytics', 'Metric Design'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-dusty-rose/15 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
          Skills & Tech Stack
        </h2>
        <p className="mt-3 max-w-2xl text-warm-gray">
          The tools I reach for daily, and the methods behind the analyses.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl bg-white p-6 shadow-sm sm:p-7"
            >
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-dusty-rose/40 bg-cream px-3.5 py-1.5 text-sm text-charcoal"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
