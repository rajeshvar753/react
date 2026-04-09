export default function Blog() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          BharatInvesto Blog
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          High-conviction stock suggestions, detailed technical chart analysis,
          logical reasoning, and market strategy breakdowns.
        </p>
      </section>

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-8">Featured Article</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center border rounded-lg p-6">
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
           <img
            src="blogimage.jpg"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full w-full object-cover object-center"
          />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              How to Read Technical Charts for High-Conviction Trades
            </h3>
            <p className="text-gray-600 mb-4">
              Learn the essentials of chart patterns, support/resistance levels, 
              and volume analysis to identify high-potential breakout stocks.
            </p>
            <a
              href="#"
              className="text-black font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-12 text-center">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">
              Top Technical Patterns to Watch in 2026
            </h3>
            <p className="text-gray-600 mb-4">
              A detailed look at the most reliable chart patterns for current market conditions.
            </p>
            <a href="#" className="text-black font-medium hover:underline">
              Read More →
            </a>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">
              Long-Term Investing vs Trading
            </h3>
            <p className="text-gray-600 mb-4">
              Comparing investment approaches and how to choose the right strategy.
            </p>
            <a href="#" className="text-black font-medium hover:underline">
              Read More →
            </a>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">
              Risk Management in Stock Market
            </h3>
            <p className="text-gray-600 mb-4">
              Practical strategies to manage risk and protect your capital.
            </p>
            <a href="#" className="text-black font-medium hover:underline">
              Read More →
            </a>
          </div>

        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">
          Explore Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="border px-4 py-2 rounded-lg text-gray-600">
            Chart Analysis
          </span>
          <span className="border px-4 py-2 rounded-lg text-gray-600">
            Stock Suggestions
          </span>
          <span className="border px-4 py-2 rounded-lg text-gray-600">
            Pattern Recognition
          </span>
          <span className="border px-4 py-2 rounded-lg text-gray-600">
            Breakout Alerts
          </span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Updated with Stock Analysis
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to receive the latest expert chart analysis and high-conviction stock suggestions.
        </p>
        <a
          href="/Pricing"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Subscribe Now
        </a>
      </section>

    </div>
  );
}
