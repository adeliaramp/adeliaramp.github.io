export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-dusty-blue/30 via-cream to-cream pb-20 pt-36 sm:pb-28 sm:pt-44"
    >
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        {/* Avatar placeholder. To use a photo: add public/avatar.jpg and swap
            this div for <img src="/avatar.jpg" alt="Adelia Ramadhani Putri" ... /> */}
        <div
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dusty-blue/40 bg-white font-serif text-2xl text-dusty-blue shadow-sm"
          aria-hidden="true"
        >
          AP
        </div>

        <h1 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl md:text-6xl">
          Adelia Ramadhani Putri
        </h1>
        <p className="mt-4 text-lg font-medium text-warm-gray sm:text-xl">
          Data Analyst
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-warm-gray sm:text-lg">
          I turn messy operational data into decisions teams actually make.
          Four years across health tech, e-commerce fraud, and ride-hailing.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="w-full rounded-full bg-dusty-blue px-8 py-3 font-medium text-white shadow-sm transition hover:bg-dusty-blue/85 sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#writing"
            className="w-full rounded-full border border-dusty-rose bg-white px-8 py-3 font-medium text-charcoal shadow-sm transition hover:bg-dusty-rose/15 sm:w-auto"
          >
            Read My Writing
          </a>
        </div>
      </div>
    </section>
  )
}
