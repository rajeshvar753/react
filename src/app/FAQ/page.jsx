export default function FAQ() {
  return (
    <div className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about BharatInvesto, our stock 
          suggestions, and our chart analysis methods.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-10">

        <div>
          <h3 className="text-xl font-semibold mb-2">
            What is BharatInvesto?
          </h3>
          <p className="text-gray-600">
            BharatInvesto is a specialized stock analysis platform providing 
            expert stock suggestions, technical chart analysis, and logical 
            reasoning to help traders navigate the Indian markets.
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
            Do you provide stock suggestions and analysis?
          </h3>
          <p className="text-gray-600">
            Yes, we provide high-conviction stock suggestions backed by 
            detailed chart analysis and logical reasoning. Every suggestion 
            includes a breakdown of price patterns and key levels.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Is there a subscription plan?
          </h3>
          <p className="text-gray-600">
            Yes, BharatInvesto offers both free analysis and premium plans 
            with high-conviction suggestions, detailed chart breakdowns, 
            and real-time breakout alerts.
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
          Our team is here to help you make confident trading decisions with expert analysis.
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
