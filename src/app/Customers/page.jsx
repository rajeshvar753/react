export default function Customers() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Smart Investors
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thousands of investors rely on BharatInvesto to make confident,
            data-driven investment decisions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900">10K+</h2>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900">95%</h2>
            <p className="text-gray-600 mt-2">Customer Satisfaction</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900">4.8/5</h2>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "BharatInvesto completely changed how I analyze stocks.
                The real-time insights and alerts help me stay ahead."
              </p>
              <h4 className="font-semibold text-gray-900">— Rohan Sharma</h4>
              <p className="text-sm text-gray-500">Active Trader</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "As a beginner, I found the platform very easy to use.
                The research reports are detailed and clear."
              </p>
              <h4 className="font-semibold text-gray-900">— Priya Verma</h4>
              <p className="text-sm text-gray-500">Long-Term Investor</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "Portfolio tracking and smart alerts are my favorite features.
                Highly recommended for serious investors."
              </p>
              <h4 className="font-semibold text-gray-900">— Amit Kapoor</h4>
              <p className="text-sm text-gray-500">Market Enthusiast</p>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Thousands of Confident Investors
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Experience powerful market intelligence and data-driven strategies
            designed to support smarter investing decisions.
          </p>
<a href="/signup" className="text-white underline">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Start Investing Today
          </button>
          </a>
        </div>

      </div>
    </div>
  );
}
