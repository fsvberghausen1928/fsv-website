import Image from "next/image";
import Link from "next/link";

import sponsors from "@/data/sponsors.json";


export default function Sponsors() {

  const featuredSponsors = sponsors.slice(0, 6);


  return (
    <section className="bg-gray-50 py-16">


      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">


          <h2 className="text-3xl font-bold text-gray-900">
            Our Sponsors
          </h2>


          <p className="mt-4 text-gray-600">
            We thank our partners for their support of FSV Berghausen 1928.
          </p>


        </div>








        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">


          {featuredSponsors.map((sponsor) => (

            <div
              key={sponsor.name}
              className="flex h-32 items-center justify-center rounded-lg border bg-white p-6"
            >



              {sponsor.logo && (

                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />

              )}



            </div>

          ))}


        </div>







        <div className="mt-10 text-center">


          <Link
            href="/sponsors"
            className="inline-block rounded-md bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Become a Sponsor
          </Link>


        </div>


      </div>


    </section>
  );
}