import { XMLParser } from 'fast-xml-parser'

type MediumPost = {
  title: string
  link: string
  pubDate: string
  excerpt: string
  thumbnail: string | null
}

const MEDIUM_FEED_URL = 'https://medium.com/feed/@adeliaramp'
const MEDIUM_PROFILE_URL = 'https://medium.com/@adeliaramp'

// The Medium feed mixes work-related writing with personal essays, so the
// posts shown here are hand-picked. Each entry is the trailing id from the
// post URL. To show a new post, add its id; the first id is the featured one.
const featuredPostId = 'ae2c930638cc' // Learning Python as a Data Analyst
const shownPostIds = [
  featuredPostId,
  'd53f27e7d870', // I Was the Slowest Data Analyst on the Team
  'a45a200f86ff', // I Stopped Trying to Learn Everything
  'dc12d8bda409', // "Make It Stick" Changed How I Study Data Analytics
  'a532aee3cb6e', // I Did Not Pass. And Then I Had to Go Home.
]

// Runs once at build time (static export), so posts refresh on each deploy.
// The deploy workflow also rebuilds weekly, but a new post only appears after
// its id is added to shownPostIds above.
async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(MEDIUM_FEED_URL)
    if (!res.ok) return []
    const xml = await res.text()

    const parser = new XMLParser({ ignoreAttributes: false })
    const parsed = parser.parse(xml)

    let items = parsed?.rss?.channel?.item ?? []
    if (!Array.isArray(items)) items = [items]

    const allPosts: MediumPost[] = items.map((item: Record<string, string>) => {
      const content: string = item['content:encoded'] ?? ''

      // First image in the post body doubles as the thumbnail
      const imageMatch = content.match(/<img[^>]+src="([^"]+)"/)

      // Strip HTML tags and take the opening of the post as the excerpt
      const plainText = content
        .replace(/<figcaption>[\s\S]*?<\/figcaption>/g, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
      const excerpt =
        plainText.length > 180 ? `${plainText.slice(0, 180).trimEnd()}...` : plainText

      return {
        title: item.title ?? 'Untitled',
        // Drop Medium's RSS tracking query string for a clean link
        link: (item.link ?? MEDIUM_PROFILE_URL).split('?')[0],
        pubDate: item.pubDate ?? '',
        excerpt,
        thumbnail: imageMatch ? imageMatch[1] : null,
      }
    })

    // Keep hand-picked posts only, featured one first, the rest newest first
    // (the feed already arrives in date order)
    const shown = allPosts.filter((post) =>
      shownPostIds.some((id) => post.link.endsWith(id))
    )
    const featured = shown.find((post) => post.link.endsWith(featuredPostId))
    if (!featured) return shown
    return [featured, ...shown.filter((post) => post !== featured)]
  } catch {
    // Network hiccup at build time: render the section with a profile link only
    return []
  }
}

function formatDate(pubDate: string): string {
  const date = new Date(pubDate)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default async function Blog() {
  const posts = await getMediumPosts()
  const [featured, ...recent] = posts

  return (
    <section id="writing" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
          Writing
        </h2>
        <p className="mt-3 max-w-2xl text-warm-gray">
          Essays on learning data analytics, career switches, and the slow
          parts nobody posts about. Full reads live on Medium.
        </p>

        {posts.length === 0 && (
          <p className="mt-8 text-warm-gray">
            Find my latest essays on{' '}
            <a
              href={MEDIUM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-charcoal"
            >
              Medium
            </a>
            .
          </p>
        )}

        {posts.length > 0 && (
          <div className="mt-10 grid gap-10 lg:grid-cols-5">
            {/* Featured post */}
            {featured && (
              <article className="lg:col-span-3">
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-dusty-blue/20 bg-cream shadow-sm transition hover:shadow-md"
                >
                  {featured.thumbnail && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={featured.thumbnail}
                      alt={`Cover image for "${featured.title}"`}
                      className="h-56 w-full object-cover sm:h-72"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6 sm:p-8">
                    <p className="text-xs uppercase tracking-wide text-dusty-blue">
                      Featured &middot; {formatDate(featured.pubDate)}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-charcoal group-hover:text-dusty-blue">
                      {featured.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-warm-gray">
                      {featured.excerpt}
                    </p>
                  </div>
                </a>
              </article>
            )}

            {/* Recent list */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-lg font-semibold text-charcoal">
                More recent
              </h3>
              <ul className="mt-4 divide-y divide-dusty-blue/15">
                {recent.map((post) => (
                  <li key={post.link}>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block py-4"
                    >
                      <p className="text-xs text-warm-gray">{formatDate(post.pubDate)}</p>
                      <h4 className="mt-1 font-medium leading-snug text-charcoal group-hover:text-dusty-blue">
                        {post.title}
                      </h4>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={MEDIUM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-dusty-blue hover:underline"
              >
                All posts on Medium &rarr;
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
