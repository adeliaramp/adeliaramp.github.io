'use client'

import { useEffect, useState } from 'react'

type Repo = {
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics: string[]
  stargazers_count: number | null
}

// Hand-picked repos for the grid, in display order. Everything else on the
// account (older case studies, the profile config repo, this site) stays off
// the page. To feature a new project, add its repo name here and to
// fallbackRepos below.
const shownRepoNames = [
  'revenue-retention-analytics',
  'ride-share-cancellation-behavior',
  'transaction-fraud-detection',
  'seller-quality-dbt',
  'ab-testing-express-checkout',
  'cancellation-unsupervised-ml',
  'connectly-churn-reduction',
]

// Shown if the GitHub API call fails (rate limit, offline). These are real
// repos with their real descriptions, copied from the API. Star counts are
// omitted here on purpose: they only render when fetched live.
const fallbackRepos: Repo[] = [
  {
    name: 'revenue-retention-analytics',
    description:
      'Cohort and lifetime value study of a digital storefront. Follows 60K users across a year to show acquisition channel value splitting about 5.5 to 1 ($235 vs $43 per user over 12 months), traces 64% of the gap to retention rather than price, and sizes a first order retention experiment with a power analysis. Built with Python, DuckDB, and BigQuery SQL.',
    html_url: 'https://github.com/adeliaramp/revenue-retention-analytics',
    language: 'Jupyter Notebook',
    topics: ['cohort-analysis', 'retention', 'revenue-analytics', 'python', 'sql', 'bigquery'],
    stargazers_count: null,
  },
  {
    name: 'ride-share-cancellation-behavior',
    description:
      'Analyzed 9.14M NYC taxi trips using survival analysis (Cox PH, HR = 1.92) and A/B testing to identify a 22.6× surge cancellation gap, uncover opposing subgroup effects hidden in a null aggregate result, and size $654K in quarterly revenue at risk, producing segment-level rollout recommendations.',
    html_url: 'https://github.com/adeliaramp/ride-share-cancellation-behavior',
    language: 'Jupyter Notebook',
    topics: [],
    stargazers_count: null,
  },
  {
    name: 'transaction-fraud-detection',
    description:
      'Behavioral anomaly scoring system for e-commerce fraud detection. Engineers 18 features across 80K users (velocity, refunds, device, payment health, temporal patterns), trains an Isolation Forest, and assigns risk tiers, achieving 50.5% precision at High Risk with $165,936 net savings per scoring cycle.',
    html_url: 'https://github.com/adeliaramp/transaction-fraud-detection',
    language: 'Jupyter Notebook',
    topics: ['fraud-detection', 'machine-learning', 'python'],
    stargazers_count: null,
  },
  {
    name: 'seller-quality-dbt',
    description:
      'Seller quality scoring pipeline built with dbt and DuckDB. Transforms 100K orders from the Olist dataset into a daily seller scorecard with composite scoring, tier assignment, and SCD Type 2 tier history.',
    html_url: 'https://github.com/adeliaramp/seller-quality-dbt',
    language: null,
    topics: ['analytics-engineering', 'data-pipeline', 'dbt', 'duckdb', 'e-commerce', 'python', 'sql'],
    stargazers_count: null,
  },
  {
    name: 'ab-testing-express-checkout',
    description:
      'End-to-end A/B test analysis of an Express Checkout feature: statistical testing, novelty-effect detection, segmentation, and a production-ready Python utility library.',
    html_url: 'https://github.com/adeliaramp/ab-testing-express-checkout',
    language: 'Jupyter Notebook',
    topics: ['a-b-testing', 'experimentation', 'hypothesis-testing', 'pandas', 'python', 'statistics'],
    stargazers_count: null,
  },
  {
    name: 'cancellation-unsupervised-ml',
    description:
      'KMeans user segmentation by cancellation behavior in ride-hailing. 2M synthetic orders, 6 archetypes, end-to-end unsupervised ML pipeline.',
    html_url: 'https://github.com/adeliaramp/cancellation-unsupervised-ml',
    language: 'Jupyter Notebook',
    topics: [],
    stargazers_count: null,
  },
  {
    name: 'connectly-churn-reduction',
    description:
      'Churn Reduction Analytics: Connectly SaaS — EDA, behavioral modeling, A/B experiment design, and statistical evaluation',
    html_url: 'https://github.com/adeliaramp/connectly-churn-reduction',
    language: 'Jupyter Notebook',
    topics: [],
    stargazers_count: null,
  },
]

// GitHub reports most of these repos as "Jupyter Notebook", so filters are
// derived from topics, language, and description keywords instead.
function deriveTags(repo: Repo): string[] {
  const haystack = [
    repo.language ?? '',
    repo.topics.join(' '),
    repo.description ?? '',
  ]
    .join(' ')
    .toLowerCase()

  const tags: string[] = []
  if (/jupyter|python|pandas/.test(haystack)) tags.push('Python')
  if (/\bsql\b|duckdb|bigquery/.test(haystack)) tags.push('SQL')
  if (/\bdbt\b/.test(haystack)) tags.push('dbt')
  return tags
}

// "ab-testing-express-checkout" -> "AB Testing Express Checkout"
function formatRepoName(name: string): string {
  const specialWords: Record<string, string> = {
    ab: 'A/B',
    ml: 'ML',
    dbt: 'dbt',
  }
  return name
    .split(/[-_]/)
    .map((word) => specialWords[word] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const filters = ['All', 'Python', 'SQL', 'dbt'] as const
type Filter = (typeof filters)[number]

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [usedFallback, setUsedFallback] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  useEffect(() => {
    async function loadRepos() {
      try {
        const res = await fetch(
          'https://api.github.com/users/adeliaramp/repos?per_page=100&sort=updated'
        )
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)
        const data: Repo[] = await res.json()

        // Keep the curated list only, in the order defined above
        const portfolio = shownRepoNames
          .map((name) => data.find((repo) => repo.name === name))
          .filter((repo): repo is Repo => repo !== undefined)
        setRepos(portfolio)
      } catch {
        setRepos(fallbackRepos)
        setUsedFallback(true)
      } finally {
        setLoading(false)
      }
    }
    loadRepos()
  }, [])

  const visibleRepos =
    activeFilter === 'All'
      ? repos
      : repos.filter((repo) => deriveTags(repo).includes(activeFilter))

  return (
    <section id="projects" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
          Portfolio Projects
        </h2>
        <p className="mt-3 max-w-2xl text-warm-gray">
          Public analyses and pipelines, pulled straight from my GitHub.
        </p>

        {/* Filter buttons */}
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by tool">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                activeFilter === filter
                  ? 'bg-dusty-blue text-white shadow-sm'
                  : 'border border-dusty-blue/40 bg-white text-warm-gray hover:bg-dusty-blue/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {loading && <p className="mt-10 text-warm-gray">Loading projects from GitHub...</p>}

        {!loading && (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleRepos.map((repo) => (
              <li key={repo.name}>
                <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-semibold leading-snug text-charcoal">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-dusty-blue"
                      >
                        {formatRepoName(repo.name)}
                      </a>
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${formatRepoName(repo.name)} on GitHub`}
                      className="shrink-0 text-warm-gray transition hover:text-charcoal"
                    >
                      <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-gray">
                    {repo.description ?? 'No description yet.'}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {deriveTags(repo).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-dusty-rose/20 px-2.5 py-1 text-xs text-charcoal"
                      >
                        {tag}
                      </span>
                    ))}
                    {/* Stars come from the live API only; fallback cards skip them */}
                    {repo.stargazers_count !== null && repo.stargazers_count > 0 && (
                      <span className="ml-auto text-xs text-warm-gray">
                        &#9733; {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}

        {!loading && visibleRepos.length === 0 && (
          <p className="mt-8 text-warm-gray">No projects match this filter yet.</p>
        )}

        {usedFallback && (
          <p className="mt-6 text-sm text-warm-gray">
            Showing a snapshot of selected projects. See all of them on{' '}
            <a
              href="https://github.com/adeliaramp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-charcoal"
            >
              GitHub
            </a>
            .
          </p>
        )}
      </div>
    </section>
  )
}
