const contactLinks = [
  { label: 'Email', href: 'mailto:adeliaramp@gmail.com', text: 'adeliaramp@gmail.com' },
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
          Hiring for a data team, or just want to talk shop about experiments
          and fraud patterns? My inbox is open.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Direct links */}
          <ul className="space-y-4">
            {contactLinks.map((item) => (
              <li key={item.label}>
                <p className="text-sm text-warm-gray">{item.label}</p>
                <a
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="font-medium text-charcoal underline decoration-dusty-blue/50 underline-offset-4 hover:text-dusty-blue"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact form via Formspree (free tier, no backend).
              Replace YOUR_FORMSPREE_ID with the form ID from formspree.io */}
          <form
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
            className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1.5 w-full rounded-lg border border-dusty-blue/30 bg-cream px-3.5 py-2.5 text-charcoal focus:border-dusty-blue focus:outline-none focus:ring-1 focus:ring-dusty-blue"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1.5 w-full rounded-lg border border-dusty-blue/30 bg-cream px-3.5 py-2.5 text-charcoal focus:border-dusty-blue focus:outline-none focus:ring-1 focus:ring-dusty-blue"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1.5 w-full rounded-lg border border-dusty-blue/30 bg-cream px-3.5 py-2.5 text-charcoal focus:border-dusty-blue focus:outline-none focus:ring-1 focus:ring-dusty-blue"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-dusty-blue px-8 py-3 font-medium text-white shadow-sm transition hover:bg-dusty-blue/85"
            >
              Send Message
            </button>
          </form>
        </div>

        <footer className="mt-16 border-t border-dusty-blue/20 pt-6 text-center text-sm text-warm-gray">
          <p>&copy; {new Date().getFullYear()} Adelia Ramadhani Putri</p>
        </footer>
      </div>
    </section>
  )
}
