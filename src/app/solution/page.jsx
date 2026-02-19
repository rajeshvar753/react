export default function Solutions() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Investment Solutions
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
              We deliver real-time data and trend analysis so you can make
              informed decisions instead of emotional trades.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              📊 Too Much Data, No Clarity?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our advanced analytics simplify complex data into actionable
              insights that are easy to understand and use.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              💼 Struggling to Track Portfolio?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Monitor all your investments in one dashboard with performance
              tracking and intelligent reporting tools.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              🔔 Missing Market Opportunities?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Get smart alerts and notifications so you never miss important
              market movements or price changes.
            </p>
          </div>

        </div>

        {/* Target Audience Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Built For Every Investor
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">🎯 Beginners</h3>
              <p className="text-gray-600">
                Easy-to-understand insights and simplified tools to start your
                investing journey confidently.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">📈 Active Traders</h3>
              <p className="text-gray-600">
                Real-time analytics, alerts, and strategy tools designed for
                faster decision-making.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">💎 Long-Term Investors</h3>
              <p className="text-gray-600">
                Research-backed insights and portfolio tracking to support
                long-term wealth creation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Invest Smarter with BharatInvesto
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Transform market data into actionable investment strategies and
            stay ahead in dynamic market conditions.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Explore Pricing
          </button>
        </div>

      </div>
    </div>
  );
}
