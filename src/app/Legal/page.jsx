export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          <span className="font-semibold">Effective Date:</span> [Add Date] <br />
          <span className="font-semibold">Website:</span> BharatInvesto
        </p>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            BharatInvesto ("we", "our", or "us") respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your information
            when you use our website and services.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Information We Collect
          </h2>

          <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (if provided)</li>
            <li>Account login details</li>
          </ul>

          <h3 className="font-semibold text-lg mb-2">Non-Personal Information</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Browser type</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Pages visited and usage behavior</li>
          </ul>

          <p className="text-gray-700">
            We do not store sensitive banking details directly. Payments (if
            applicable) are processed securely through trusted third-party
            payment gateways.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Provide and improve our services</li>
            <li>Send important updates and notifications</li>
            <li>Respond to support inquiries</li>
            <li>Personalize user experience</li>
            <li>Enhance security and prevent fraud</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            BharatInvesto may use cookies and similar technologies to enhance
            user experience, analyze website traffic, and improve performance.
            You may disable cookies through your browser settings.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Data Sharing & Third Parties
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We do not sell or rent your personal data.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Information may be shared with trusted service providers such as
            payment processors, hosting services, analytics tools, or legal
            authorities when required by law.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your data from unauthorized access, misuse, or breaches.
            However, no online transmission is 100% secure.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain personal information only as long as necessary to provide
            services, comply with legal obligations, and resolve disputes.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You may request access, correction, or deletion of your personal
            data. To exercise your rights, please contact us using the details
            below.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Children’s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            BharatInvesto does not knowingly collect personal data from
            individuals under 18 years of age.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Continued use
            of our website after changes indicates acceptance of the updated
            policy.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions regarding this Privacy Policy, please contact:
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
