type ProjectLink = {
  label: string
  href: string
}

type FeaturedProject = {
  title: string
  eyebrow: string
  question: string
  finding: string
  decision: string
  limitations: string
  tags: string[]
  chart: {
    type: 'image' | 'seller-tiers'
    src?: string
    alt: string
    caption: string
  }
  links: ProjectLink[]
}

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Revenue Retention Analytics',
    eyebrow: 'Growth & financial analytics',
    question:
      'Which acquisition channels produce durable revenue, and where should the next growth dollar go?',
    finding:
      'Twelve-month value split 5.5 to 1 across channels ($235 vs $43 per user), with retention explaining 64% of the gap.',
    decision:
      'Hold new Display spend flat, shift budget toward Email and Organic, and test a first-order retention intervention.',
    limitations:
      'Results use a reproducible, schema-matched simulation. Channel effects are associative rather than causal.',
    tags: ['Python', 'SQL', 'DuckDB', 'BigQuery'],
    chart: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/adeliaramp/revenue-retention-analytics/main/assets/decomp.png',
      alt: 'Decomposition of the lifetime value gap between acquisition channels',
      caption: 'Retention, not price, explains most of the channel value gap.',
    },
    links: [
      {
        label: 'Case study',
        href: 'https://adeliaramp.github.io/revenue-retention-analytics/reports/case-study.html',
      },
      {
        label: 'Code',
        href: 'https://github.com/adeliaramp/revenue-retention-analytics',
      },
      {
        label: 'Methodology',
        href: 'https://github.com/adeliaramp/revenue-retention-analytics/blob/main/project-design.md',
      },
    ],
  },
  {
    title: 'Ride-Share Cancellation Behavior',
    eyebrow: 'Product analytics & experimentation',
    question:
      'Where are cancellations concentrated, and should a wait-time redesign roll out broadly?',
    finding:
      'Across 9.14M trips, surge conditions showed a 22.6× cancellation gap. A null aggregate test masked opposing segment effects.',
    decision:
      'Do not roll out broadly. Validate the overnight result with a randomized test and treat airport pickup friction separately.',
    limitations:
      'Cancellation and surge are inferred proxies, and the intervention analysis uses a temporal split rather than randomized assignment.',
    tags: ['Python', 'Survival Analysis', 'A/B Testing', 'SQL'],
    chart: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/adeliaramp/ride-share-cancellation-behavior/main/outputs/03c_hte_forest_plot.png',
      alt: 'Forest plot of heterogeneous treatment effects by ride segment',
      caption: 'Opposing segment effects disappear when only the aggregate is reviewed.',
    },
    links: [
      {
        label: 'Case study',
        href: 'https://github.com/adeliaramp/ride-share-cancellation-behavior#readme',
      },
      {
        label: 'Code',
        href: 'https://github.com/adeliaramp/ride-share-cancellation-behavior/tree/main/notebooks',
      },
      {
        label: 'Methodology',
        href: 'https://github.com/adeliaramp/ride-share-cancellation-behavior/blob/main/docs/limitations.md',
      },
    ],
  },
  {
    title: 'Seller Quality dbt',
    eyebrow: 'Analytics engineering',
    question:
      'How can marketplace operations identify degrading sellers before customer impact becomes visible?',
    finding:
      'The pipeline scored 1,794 sellers and identified 123 for suspension. High GMV did not consistently imply high quality.',
    decision:
      'Give operations a daily scorecard with tier history, investigate degrading sellers, and replace signals that do not discriminate.',
    limitations:
      'The Olist source is a static export; synthetic seed data demonstrates tier history, and 93% of trajectory flags default to stable.',
    tags: ['dbt', 'SQL', 'DuckDB', 'Data Quality'],
    chart: {
      type: 'seller-tiers',
      alt: 'Distribution of scored sellers across quality tiers',
      caption: '123 sellers triggered the suspension rule despite a gold-heavy distribution.',
    },
    links: [
      {
        label: 'Case study',
        href: 'https://github.com/adeliaramp/seller-quality-dbt#readme',
      },
      {
        label: 'Code',
        href: 'https://github.com/adeliaramp/seller-quality-dbt/blob/main/models/marts/analytics/mrt_seller_quality_scorecard.sql',
      },
      {
        label: 'Methodology',
        href: 'https://github.com/adeliaramp/seller-quality-dbt#key-engineering-decisions',
      },
    ],
  },
]

const moreProjects = [
  {
    title: 'Transaction Fraud Detection',
    description:
      'A reproducible simulation of behavioral anomaly scoring, risk tiers, and review-cost tradeoffs across 80K users.',
    label: 'Simulation',
    href: 'https://github.com/adeliaramp/transaction-fraud-detection',
  },
  {
    title: 'A/B Testing Express Checkout',
    description:
      'An end-to-end experiment analysis covering power, novelty effects, segmentation, and rollout decisions.',
    label: 'Experimentation',
    href: 'https://github.com/adeliaramp/ab-testing-express-checkout',
  },
  {
    title: 'Cancellation Unsupervised ML',
    description:
      'K-means segmentation of 2M synthetic ride-hailing orders into six behavioral archetypes.',
    label: 'Simulation',
    href: 'https://github.com/adeliaramp/cancellation-unsupervised-ml',
  },
  {
    title: 'Connectly Churn Reduction',
    description:
      'SaaS churn analysis combining behavioral exploration, experiment design, and statistical evaluation.',
    label: 'Product analytics',
    href: 'https://github.com/adeliaramp/connectly-churn-reduction',
  },
]

const sellerTiers = [
  { label: 'Platinum', count: 188, share: 10.5 },
  { label: 'Gold', count: 1465, share: 81.7 },
  { label: 'Silver', count: 17, share: 0.9 },
  { label: 'Bronze', count: 1, share: 0.1 },
  { label: 'Suspended', count: 123, share: 6.9 },
]

function SellerTierChart() {
  return (
    <div
      className="rounded-xl border border-dusty-blue/15 bg-white p-5"
      role="img"
      aria-label="Seller tier distribution: 188 platinum, 1,465 gold, 17 silver, 1 bronze, and 123 suspended"
    >
      <p className="text-sm font-semibold text-charcoal">Scored seller distribution</p>
      <p className="mt-1 text-xs text-warm-gray">1,794 sellers with sufficient order history</p>
      <div className="mt-5 space-y-3">
        {sellerTiers.map((tier) => (
          <div key={tier.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-medium text-charcoal">{tier.label}</span>
              <span className="text-warm-gray">
                {tier.count.toLocaleString('en-US')} · {tier.share}%
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-dusty-blue/10">
              <div
                className={`h-full rounded-full ${
                  tier.label === 'Suspended' ? 'bg-dusty-rose' : 'bg-dusty-blue'
                }`}
                style={{ width: `${Math.max(tier.share, 1.5)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-dusty-blue underline decoration-dusty-blue/40 underline-offset-4 hover:text-charcoal"
        >
          {link.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
          Featured Case Studies
        </h2>
        <p className="mt-3 max-w-2xl text-warm-gray">
          Three decision-focused projects showing how I frame questions, test evidence,
          and turn analysis into a recommended action.
        </p>

        <div className="mt-10 space-y-8">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-dusty-blue/15 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-5">
                <figure className="flex flex-col justify-center bg-dusty-blue/5 p-5 sm:p-7 lg:col-span-2">
                  {project.chart.type === 'image' && project.chart.src ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={project.chart.src}
                      alt={project.chart.alt}
                      className="aspect-[4/3] w-full rounded-xl border border-dusty-blue/15 bg-white object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <SellerTierChart />
                  )}
                  <figcaption className="mt-3 text-sm leading-relaxed text-warm-gray">
                    {project.chart.caption}
                  </figcaption>
                </figure>

                <div className="p-6 sm:p-8 lg:col-span-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-dusty-blue">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-charcoal">
                    {project.title}
                  </h3>

                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className="text-sm font-semibold text-charcoal">Business question</dt>
                      <dd className="mt-1 leading-relaxed text-warm-gray">{project.question}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-charcoal">Key finding</dt>
                      <dd className="mt-1 leading-relaxed text-warm-gray">{project.finding}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-charcoal">Recommended decision</dt>
                      <dd className="mt-1 leading-relaxed text-warm-gray">{project.decision}</dd>
                    </div>
                    <div className="rounded-xl bg-cream px-4 py-3">
                      <dt className="text-sm font-semibold text-charcoal">Data limitations</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-warm-gray">
                        {project.limitations}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools and methods">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-dusty-rose/20 px-2.5 py-1 text-xs text-charcoal"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <ProjectLinks links={project.links} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal">More projects</h3>
              <p className="mt-2 text-warm-gray">
                Additional work in experimentation, segmentation, fraud, and churn.
              </p>
            </div>
            <a
              href="https://github.com/adeliaramp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-dusty-blue hover:underline"
            >
              All projects on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {moreProjects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-dusty-blue/15 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-dusty-blue">
                    {project.label}
                  </span>
                  <span className="mt-2 font-serif text-lg font-semibold text-charcoal group-hover:text-dusty-blue">
                    {project.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-warm-gray">
                    {project.description}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
