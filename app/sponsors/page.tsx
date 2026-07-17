import Image from "next/image";
import type { Metadata } from "next";
import sponsors from "@/data/sponsors.json";

export const metadata: Metadata = {
  title: "Sponsors | FSV Berghausen 1928",
  description:
    "Meet the sponsors and partners supporting FSV Berghausen 1928.",
};


export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Our Sponsors
          </h1>


          <p className="mt-4 text-gray-600">
            We thank our sponsors and partners for their valuable support.
          </p>

        </div>




        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">


          {sponsors.map((sponsor) => (

            <div
              key={sponsor.id}
              className="rounded-lg border p-6 text-center transition hover:shadow-lg"
            >


              <div className="relative mx-auto h-32 w-full">

                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />

              </div>



              <h2 className="mt-6 text-xl font-semibold text-gray-900">
                {sponsor.name}
              </h2>



              {sponsor.description && (

                <p className="mt-3 text-gray-600">
                  {sponsor.description}
                </p>

              )}



              {sponsor.website && (

                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-gray-900 underline"
                >
                  Visit Website
                </a>

              )}


            </div>

          ))}


        </div>




        <section className="mt-16 rounded-lg border p-8 text-center">

          <h2 className="text-2xl font-bold text-gray-900">
            Become a Sponsor
          </h2>


          <p className="mt-4 text-gray-600">
            Support FSV Berghausen 1928 and become part of our club community.
          </p>


          <a
            href="/contact"
            className="mt-6 inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Contact Us
          </a>


        </section>


      </div>

    </main>
  );
}