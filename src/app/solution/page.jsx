export default function Solutions() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Stock Analysis Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BharatInvesto provides powerful tools and intelligent insights to
            help you navigate the stock market with clarity and confidence.
          </p>
        </div>

        {/* Problem → Solution Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              📉 Market Uncertainty?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We deliver expert stock suggestions and technical breakouts so you 
              can trade based on logic instead of emotional impulses.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              📊 Too Much Data, No Clarity?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our chart analysis breaks down complex price movements into 
              simple, actionable trading logic that's easy to follow.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              💼 Struggling to Track Portfolio?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Understand the 'Why' behind every pick with our transparent 
              reasoning and detailed technical chart breakdowns.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              🔔 Missing Market Opportunities?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Get real-time breakout alerts and entry/exit strategy notes so 
              you never miss a high-conviction market movement.
            </p>
          </div>

        </div>

        {/* Target Audience Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Built For Every Trader
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">🎯 Beginners</h3>
              <p className="text-gray-600">
                Easy-to-follow chart breakdowns and logic-based suggestions to 
                start your trading journey with precision.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">📈 Active Traders</h3>
              <p className="text-gray-600">
                Advanced technical patterns, logic-based reasoning, and breakout 
                alerts designed for high-performance trading.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">💎 Long-Term Investors</h3>
              <p className="text-gray-600">
                High-conviction structural picks and long-term chart trends 
                to support sustainable portfolio growth.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Trade Smarter with BharatInvesto
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Transform professional chart analysis into actionable trading logic 
            and stay ahead in every market cycle.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Explore Pricing
          </button>
        </div>

      </div>
    </div>
  );
}
