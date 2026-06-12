export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
          About Me
        </h2>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-warm-gray sm:text-lg">
          <p>
            I did not start in data. I started in pharmacy, where I learned that
            a wrong number is never just a number: someone downstream acts on
            it. That habit of treating every figure as a decision waiting to
            happen followed me when I switched careers, and it never left.
          </p>
          <p>
            My first data role was at Prixa.ai, a health tech startup, where I
            built analytics from the ground up and learned how much of the job
            is asking better questions. From there I moved to Shopee under Sea
            Group, working on fraud detection, ECL modeling under IFRS 9, and
            BI across multiple markets. Today I work at Gojek on ride and car
            order cancellation analytics and fraud feature engineering.
          </p>
          <p>
            What drives me is the gap between what the dashboard says and what
            is actually happening. A cancellation spike, a fraud pattern, a
            metric that moved for no obvious reason. I like sitting in that gap
            until the story makes sense, then explaining it so clearly that the
            decision becomes obvious.
          </p>
          <p>
            I am looking for a senior analyst or analytics engineer role on a
            team where analysts sit close to the decision, in Europe or APAC.
            If your team argues about metric definitions, I will fit right in.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-dusty-rose/30 bg-cream p-6 sm:p-8">
          <h3 className="font-serif text-xl font-semibold text-charcoal">
            Currently
          </h3>
          <ul className="mt-4 space-y-2.5 text-warm-gray">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dusty-blue" aria-hidden="true" />
              Interviewing for Senior Data Analyst and Analytics Engineer roles
              in Europe and APAC
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dusty-blue" aria-hidden="true" />
              Building a portfolio in public on GitHub and writing about the
              process on Medium
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dusty-blue" aria-hidden="true" />
              Strength training most mornings before work
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
