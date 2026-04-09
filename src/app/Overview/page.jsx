export default function Overview() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Overview of BharatInvesto
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BharatInvesto is a specialized stock market intelligence platform 
            dedicated to providing high-conviction stock suggestions, detailed 
            chart analysis, and transparent logical reasoning — all designed to 
            give Indian traders a definitive market edge.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver expert stock suggestions backed by logic and technical 
              patterns, helping traders navigate the markets with clarity 
              and confidence.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become the most reliable source for chart-based stock 
              analysis and trading logic for the Indian stock market 
              community.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                🎯 Expert Stock Suggestions
              </h3>
              <p className="text-gray-600">
                Daily high-conviction stock picks across various sectors.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                📈 Technical Chart Analysis
              </h3>
              <p className="text-gray-600">
                In-depth breakdown of price patterns and key support/resistance levels.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                🧠 Logical Reasoning
              </h3>
              <p className="text-gray-600">
                Understand the "why" behind every suggestion with transparent logic.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                🔔 Smart Alerts
              </h3>
              <p className="text-gray-600">
                Get instant notifications on important market movements.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                📊 Pattern Recognition
              </h3>
              <p className="text-gray-600">
                Expert identification of breakouts, reversals, and trend continuations.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                🎯 Beginner Friendly
              </h3>
              <p className="text-gray-600">
                Designed for both new investors and experienced traders.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose BharatInvesto?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            We blend expert chart analysis with transparent reasoning to
            deliver a superior trading experience. Our platform focuses on
            high-conviction ideas, clear logic, and actionable insights —
            helping you stay ahead in dynamic market conditions.
          </p>
<a href="/signup" className="text-black underline">
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            Get Started
          </button>
        </a>
        </div>

      </div>
    </div>
  );
}
