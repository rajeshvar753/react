export default function FAQ() {
  return (
    <div className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about BharatInvesto, our services,
          and how we help investors make smarter decisions.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-10">

        <div>
          <h3 className="text-xl font-semibold mb-2">
            What is BharatInvesto?
          </h3>
          <p className="text-gray-600">
            BharatInvesto is a stock market insights platform providing 
            data-driven strategies, real-time analysis, and educational 
            resources to help investors make informed financial decisions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Is BharatInvesto SEBI registered?
          </h3>
          <p className="text-gray-600">
            BharatInvesto provides market research and educational insights. 
            We do not offer personalized financial advisory services unless 
            explicitly stated.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Do you provide buy/sell recommendations?
          </h3>
          <p className="text-gray-600">
            Our platform shares research-based insights and market analysis. 
            Investment decisions should be made at your own discretion after 
            proper research or consultation with a licensed advisor.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Is there a subscription plan?
          </h3>
          <p className="text-gray-600">
            Yes, BharatInvesto offers both free insights and premium plans 
            with advanced analysis, priority updates, and exclusive reports.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            How can I contact support?
          </h3>
          <p className="text-gray-600">
            You can reach us through our Contact page or email us directly 
            for any queries related to your account or subscriptions.
          </p>
        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Our team is here to help you make confident investment decisions.
        </p>
        <a
          href="/Contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
