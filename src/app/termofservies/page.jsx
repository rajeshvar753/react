export default function TermsOfService() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">
          <span className="font-semibold">Effective Date:</span> [Add Date] <br />
          <span className="font-semibold">Website:</span> BharatInvesto
        </p>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            Welcome to BharatInvesto. By accessing or using our website,
            services, tools, and content, you agree to comply with and be bound
            by these Terms of Service. If you do not agree with these terms,
            please do not use our platform.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Eligibility
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By using BharatInvesto, you confirm that you are at least 18 years
            old and legally capable of entering into a binding agreement.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Nature of Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            BharatInvesto provides stock market insights, analytics tools,
            educational financial content, and portfolio tracking features.
          </p>
          <p className="text-gray-700 font-medium">
            We do not provide financial, investment, tax, or legal advice.
            All information is for educational and informational purposes only.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. No Investment Advice
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The content on BharatInvesto does not constitute a recommendation
            to buy or sell securities. Investing in the stock market involves
            risk, including potential loss of capital. You are solely
            responsible for your investment decisions.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. User Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Provide accurate and truthful information</li>
            <li>Maintain confidentiality of account credentials</li>
            <li>Use the platform only for lawful purposes</li>
            <li>Not attempt to hack, disrupt, or misuse the website</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Accounts & Subscriptions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you create an account or subscribe to paid services,
            you are responsible for all activities under your account.
            Subscription fees (if applicable) are billed as per the selected
            plan and may be subject to change with notice.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content on BharatInvesto including logos, branding, research,
            tools, design elements, and software are the intellectual property
            of BharatInvesto and are protected by applicable laws.
            Unauthorized reproduction or distribution is strictly prohibited.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            BharatInvesto shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from the use of our
            platform. Market losses or trading losses are solely your
            responsibility.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites. We are not
            responsible for the content, privacy policies, or practices of
            those websites.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Termination
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate user accounts that
            violate these Terms of Service without prior notice.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Governing Law
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms of Service shall be governed by and interpreted in
            accordance with the laws of India. Any disputes shall be subject
            to the jurisdiction of Indian courts.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions regarding these Terms of Service,
            please contact us at:
          </p>
          <p className="text-gray-700 mt-2">
            Email: your-email@example.com <br />
            Website: BharatInvesto
          </p>
        </section>

      </div>
    </div>
  );
}
