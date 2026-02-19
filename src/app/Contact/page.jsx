export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about BharatInvesto? We’re here to help you.
            Reach out and our team will respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                📧 Email
              </h3>
              <p className="text-gray-700">
                support@bharatinvesto.com
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                📍 Location
              </h3>
              <p className="text-gray-700">
                India
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                ⏰ Support Hours
              </h3>
              <p className="text-gray-700">
                Monday – Friday <br />
                9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
