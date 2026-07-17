import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import teams from "@/data/teams.json";

export const metadata: Metadata = {
  title: "Second Team | FSV Berghausen 1928",
  description:
    "Meet the second team of FSV Berghausen 1928, including squad information, coaching staff, and team details.",
};


export default function SecondTeamPage() {

  const team = teams.find(
    (item) => item.slug === "second-team"
  );


  if (!team) {
    return (
      <main className="min-h-screen bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Second Team Not Found
          </h1>
        </div>
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">


          {team.image && (
            <div className="relative mx-auto mb-8 h-72 max-w-3xl overflow-hidden rounded-lg">

              <Image
                src={team.image}
                alt={team.name}
                fill
                className="object-cover"
              />

            </div>
          )}



          <h1 className="text-4xl font-bold text-gray-900">
            {team.name}
          </h1>



          {team.description && (
            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              {team.description}
            </p>
          )}

        </div>





        {team.coach && (
          <section className="mb-10 rounded-lg border p-6">

            <h2 className="text-2xl font-bold text-gray-900">
              Coaching Staff
            </h2>


            <p className="mt-3 text-gray-600">
              {team.coach}
            </p>

          </section>
        )}






        {team.players && (
          <section>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Second Team Squad
            </h2>


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


              {team.players.map((player) => (

                <div
                  key={player.id}
                  className="rounded-lg border p-6"
                >

                  {player.image && (
                    <div className="relative mb-4 h-56 overflow-hidden rounded-lg">

                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />

                    </div>
                  )}


                  <h3 className="text-xl font-semibold text-gray-900">
                    {player.name}
                  </h3>


                  {player.position && (
                    <p className="mt-2 text-gray-600">
                      {player.position}
                    </p>
                  )}


                  {player.number && (
                    <p className="mt-1 text-sm text-gray-500">
                      Shirt Number: {player.number}
                    </p>
                  )}

                </div>

              ))}


            </div>

          </section>
        )}



        <div className="mt-12 text-center">

          <Link
            href="/teams"
            className="inline-block rounded-md bg-black px-6 py-3 font-semibold text-white"
          >
            Back to Teams
          </Link>

        </div>


      </div>

    </main>
  );
}