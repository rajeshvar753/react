export default function Blog() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          BharatInvesto Blog
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Market insights, investment strategies, financial education,
          and real-time analysis to help you invest with confidence.
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
              How to Analyze Stocks Like a Professional Investor
            </h3>
            <p className="text-gray-600 mb-4">
              Learn the fundamentals of stock analysis, including financial
              ratios, sector comparison, and long-term growth evaluation.
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
              Understanding Market Trends in 2026
            </h3>
            <p className="text-gray-600 mb-4">
              A detailed look at current market movements and sector growth patterns.
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
            Market Analysis
          </span>
          <span className="border px-4 py-2 rounded-lg text-gray-600">
            Investment Strategies
          </span>
          <span className="border px-4 py-2 rounded-lg text-gray-600">
            Financial Education
          </span>
          <span className="border px-4 py-2 rounded-lg text-gray-600">
            Risk Management
          </span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Updated with Market Insights
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to receive the latest stock market analysis and updates.
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
