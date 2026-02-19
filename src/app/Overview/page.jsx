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
            BharatInvesto is a modern stock market intelligence platform designed
            to empower Indian investors with data-driven strategies, real-time
            analytics, and powerful research tools — all in one place.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To simplify investing by providing transparent, research-backed
              insights that help individuals make confident and informed
              financial decisions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become a trusted investment intelligence platform for every
              Indian investor — from beginners to experienced market
              participants.
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
                📊 Real-Time Market Data
              </h3>
              <p className="text-gray-600">
                Track live stock prices, trends, and market movements instantly.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                📈 Advanced Analytics
              </h3>
              <p className="text-gray-600">
                Use technical and fundamental analysis tools to evaluate stocks.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                💼 Portfolio Tracking
              </h3>
              <p className="text-gray-600">
                Monitor your investments and track performance in one dashboard.
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
                📑 Research Insights
              </h3>
              <p className="text-gray-600">
                Access in-depth stock research and data-backed strategies.
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
            We combine technology, research, and real-time intelligence to
            deliver a seamless investing experience. Our platform focuses on
            clarity, transparency, and performance — helping you stay ahead in
            dynamic market conditions.
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
