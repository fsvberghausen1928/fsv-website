import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | FSV Berghausen 1928",
  description:
    "Contact FSV Berghausen 1928 for questions, membership inquiries, sponsorship, and general information.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600">
            Get in touch with FSV Berghausen 1928.
          </p>
        </div>


        <form
          action="/api/contact"
          method="POST"
          className="space-y-6 rounded-lg border bg-white p-8 shadow-sm"
        >

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              placeholder="Your name"
            />
          </div>


          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              placeholder="your@email.com"
            />
          </div>


          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              placeholder="Subject"
            />
          </div>


          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              placeholder="Your message"
            />
          </div>


          <button
            type="submit"
            className="rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Send Message
          </button>

        </form>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-lg border p-6">
            <h2 className="font-semibold">
              Address
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              FSV Berghausen 1928
              <br />
              Club House
            </p>
          </div>


          <div className="rounded-lg border p-6">
            <h2 className="font-semibold">
              Email
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              info@fsvberghausen1928.de
            </p>
          </div>


          <div className="rounded-lg border p-6">
            <h2 className="font-semibold">
              Phone
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Contact office
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}