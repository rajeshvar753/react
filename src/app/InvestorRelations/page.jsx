export default function InvestorRelations() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Investor Relations
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transparent communication, financial responsibility, and long-term
          value creation for our stakeholders.
        </p>
      </section>

      {/* Financial Overview */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Financial Overview
          </h2>
          <p className="text-gray-600 mb-4">
            BharatInvesto is committed to sustainable growth and responsible
            financial management. We focus on building a scalable digital
            platform that delivers value to investors and stakeholders.
          </p>
          <p className="text-gray-600">
            Our revenue model is built around subscription services, premium
            research access, and strategic partnerships.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
          <img
            src="investerimage.jpg"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      {/* Reports & Disclosures */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Reports & Disclosures
          </h2>

          <div className="space-y-6">
            <div className="border p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Annual Reports
              </h3>
              <p className="text-gray-600">
                Detailed overview of financial performance, operational
                milestones, and strategic direction.
              </p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Quarterly Results
              </h3>
              <p className="text-gray-600">
                Transparent updates on financial performance and growth metrics.
              </p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Corporate Announcements
              </h3>
              <p className="text-gray-600">
                Important updates, strategic initiatives, and compliance
                disclosures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Corporate Governance
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Transparency
            </h3>
            <p className="text-gray-600">
              We maintain open communication with stakeholders and provide
              clear financial disclosures.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Compliance
            </h3>
            <p className="text-gray-600">
              Adherence to applicable regulatory standards and responsible
              business practices.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Long-Term Vision
            </h3>
            <p className="text-gray-600">
              Focused on sustainable growth and long-term value creation.
            </p>
          </div>
        </div>
      </section>

      {/* Investor Contact */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Investor Contact
        </h2>
        <p className="text-gray-600 mb-6">
          For investor-related inquiries, partnerships, or financial
          disclosures, please contact our Investor Relations team.
        </p>
        <a
          href="/Contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Investor Relations
        </a>
      </section>

    </div>
  );
}
