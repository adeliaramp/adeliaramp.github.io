const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/adeliaramp', text: 'github.com/adeliaramp' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/adeliaramp', text: 'linkedin.com/in/adeliaramp' },
  { label: 'Medium', href: 'https://medium.com/@adeliaramp', text: 'medium.com/@adeliaramp' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-dusty-blue/15 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-3 max-w-2xl text-warm-gray">
          Interested in analytics, measurement, or building trustworthy metrics?
          I am always happy to exchange ideas.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-dusty-blue/15 bg-cream/70 p-6 sm:p-8 lg:col-span-2">
            <h3 className="font-serif text-xl font-semibold text-charcoal">
              Find me elsewhere
            </h3>
            <ul className="mt-6 space-y-5">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <p className="text-sm text-warm-gray">{item.label}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-charcoal underline decoration-dusty-blue/50 underline-offset-4 hover:text-dusty-blue"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-wider text-dusty-blue">
              Start a conversation
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
              Let&apos;s talk data
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-warm-gray">
              Have a question, an idea, or an interesting data problem? Email is
              the best way to reach me, and I will get back to you as soon as I can.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:adeliaramp@gmail.com?subject=Hello%20Adelia"
                className="inline-flex items-center justify-center rounded-full bg-dusty-blue px-7 py-3 font-medium text-white shadow-sm transition hover:bg-dusty-blue/85"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/adeliaramp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-dusty-rose bg-white px-7 py-3 font-medium text-charcoal shadow-sm transition hover:bg-dusty-rose/15"
              >
                Connect on LinkedIn
              </a>
            </div>
            <p className="mt-4 text-sm text-warm-gray">adeliaramp@gmail.com</p>
          </div>
        </div>

        <footer className="mt-16 border-t border-dusty-blue/20 pt-6 text-center text-sm text-warm-gray">
          <p>&copy; {new Date().getFullYear()} Adelia Ramadhani Putri</p>
        </footer>
      </div>
    </section>
  )
}
