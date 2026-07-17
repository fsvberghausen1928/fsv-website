import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership | FSV Berghausen 1928",
  description:
    "Become a member of FSV Berghausen 1928 and support our football club.",
};


export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Become a Member
          </h1>


          <p className="mt-4 text-gray-600">
            Join FSV Berghausen 1928 and become part of our football family.
          </p>

        </div>



        <div className="grid gap-8 md:grid-cols-2">


          <section className="rounded-lg border p-8">

            <h2 className="text-2xl font-bold text-gray-900">
              Why Become a Member?
            </h2>


            <ul className="mt-6 space-y-4 text-gray-600">

              <li>
                • Support the future of FSV Berghausen 1928
              </li>

              <li>
                • Be part of our football community
              </li>

              <li>
                • Support youth development and teams
              </li>

              <li>
                • Participate in club activities and events
              </li>

            </ul>

          </section>




          <section className="rounded-lg border p-8">

            <h2 className="text-2xl font-bold text-gray-900">
              Membership Information
            </h2>


            <div className="mt-6 space-y-4 text-gray-600">

              <p>
                Membership applications can be submitted through the club office.
              </p>


              <p>
                For questions regarding membership, please contact us.
              </p>


              <p>
                Existing members can also use this page for updates and club information.
              </p>

            </div>


            <a
              href="/contact"
              className="mt-8 inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Contact Club Office
            </a>

          </section>


        </div>




        <section className="mt-12 rounded-lg border p-8">

          <h2 className="text-2xl font-bold text-gray-900">
            Membership Request
          </h2>


          <form className="mt-6 space-y-6">


            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                placeholder="Your full name"
              />
            </div>



            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                placeholder="your@email.com"
              />
            </div>



            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Membership Type
              </label>

              <select
                id="category"
                name="category"
                className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
              >
                <option value="">
                  Select membership type
                </option>

                <option value="player">
                  Player
                </option>

                <option value="supporter">
                  Supporter
                </option>

                <option value="family">
                  Family
                </option>

              </select>

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
                rows={5}
                className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2"
                placeholder="Additional information"
              />

            </div>



            <button
              type="submit"
              className="rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Submit Request
            </button>


          </form>

        </section>


      </div>

    </main>
  );
}