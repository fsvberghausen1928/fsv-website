import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import teams from "@/data/teams.json";

export const metadata: Metadata = {
  title: "Teams | FSV Berghausen 1928",
  description:
    "Explore all teams of FSV Berghausen 1928 including first team, second team, and youth teams.",
};


export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Our Teams
          </h1>


          <p className="mt-4 text-gray-600">
            Discover the teams representing FSV Berghausen 1928.
          </p>

        </div>





        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {teams.map((team) => (

            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="group overflow-hidden rounded-lg border transition hover:shadow-lg"
            >


              {team.image && (

                <div className="relative h-64 w-full">

                  <Image
                    src={team.image}
                    alt={team.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                </div>

              )}



              <div className="p-6">


                <h2 className="text-2xl font-bold text-gray-900">
                  {team.name}
                </h2>


                {team.description && (

                  <p className="mt-3 text-gray-600">
                    {team.description}
                  </p>

                )}



                <p className="mt-5 text-sm font-semibold text-gray-900">
                  View Team →
                </p>


              </div>


            </Link>

          ))}


        </div>




      </div>

    </main>
  );
}