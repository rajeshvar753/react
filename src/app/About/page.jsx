export default function About() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About BharatInvesto
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empowering traders with expert stock suggestions, detailed reasoning,
          and technical chart analysis to identify the best market opportunities.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            BharatInvesto is a specialized stock analysis platform focused on delivering
            high-conviction stock suggestions and in-depth technical research. Our 
            goal is to provide the 'why' behind every trade by combining pattern 
            recognition with logical reasoning.
          </p>
          <p className="text-gray-600">
            We believe that successful trading is built on discipline, strategy, 
            and deep analysis — not guesswork.
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
            Our mission is to empower retail traders across India by providing
            expert-level stock suggestions, transparent reasoning, and high-quality
            chart analysis. We aim to make the stock market more accessible by 
            breaking down complex patterns into actionable insights.
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
              In-depth stock suggests, technical chart analysis, and logic-based 
              reasoning to help you understand every price movement.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time Updates
            </h3>
            <p className="text-gray-600">
              Timely stock alerts and analysis to keep you ahead of 
              significant breakout opportunities.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Investor Education
            </h3>
            <p className="text-gray-600">
              Educational breakdowns of technical patterns and trading logic
              to sharpen your market analysis skills.
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
            Transparency • Logic-Driven Analysis • Strategy Over Speculation
          </p>
          <p className="text-gray-600">
            We prioritize logical analysis and aim to provide content
            that is pattern-based, transparent, and actionable.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Start Your Smarter Trading Journey Today
        </h2>
        <p className="text-gray-600 mb-6">
          Join BharatInvesto and gain the edge with expert chart analysis
          and logical stock suggestions.
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
