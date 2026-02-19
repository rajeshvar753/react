export default function About() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About BharatInvesto
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empowering investors with data-driven insights, real-time market analysis,
          and research-backed strategies to build long-term wealth.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            BharatInvesto is a stock market insights platform focused on delivering
            reliable financial research and educational resources. Our goal is to
            simplify market data and help investors make informed decisions.
          </p>
          <p className="text-gray-600">
            We believe that smart investing is built on knowledge, discipline,
            and strategy — not speculation.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
          <img
            src="aboutpageiamge.jpg"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Our mission is to empower retail investors across India by providing
            transparent market insights, risk-aware strategies, and structured
            learning resources. We aim to make stock market participation
            informed, confident, and responsible.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Market Research
            </h3>
            <p className="text-gray-600">
              In-depth stock analysis, sector insights, and trend evaluations
              to help you understand market movements.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time Updates
            </h3>
            <p className="text-gray-600">
              Timely market updates and analysis to keep you informed
              about important developments.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Investor Education
            </h3>
            <p className="text-gray-600">
              Educational content designed to improve financial literacy
              and long-term investment skills.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-600 mb-4">
            Transparency • Integrity • Research-Driven Decisions • Long-Term Vision
          </p>
          <p className="text-gray-600">
            We prioritize responsible investing and aim to provide content
            that is factual, unbiased, and educational in nature.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Start Your Investment Journey Today
        </h2>
        <p className="text-gray-600 mb-6">
          Join BharatInvesto and take informed steps toward building
          sustainable wealth.
        </p>
        <a
          href="/Pricing"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          View Plans
        </a>
      </section>

    </div>
  );
}
