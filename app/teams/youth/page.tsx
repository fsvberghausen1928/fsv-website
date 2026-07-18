// app/teams/youth/page.tsx

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import teams from "@/data/teams.json";
import players from "@/data/players.json";


export const metadata: Metadata = {
  title: "Youth Teams | FSV Berghausen 1928",
  description:
    "Discover the youth teams of FSV Berghausen 1928 and our commitment to developing young football players.",
};



export default function YouthPage() {

  const team = teams.find(
    (item) => item.slug === "youth"
  );


  if (!team) {
    return (
      <main className="min-h-screen bg-white py-16">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <h1 className="text-3xl font-bold text-gray-900">
            Youth Team Not Found
          </h1>

        </div>

      </main>
    );
  }



  const squad = players.filter((player) =>
    team.players?.includes(player.id)
  );



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





        <section className="rounded-lg border p-8">

          <h2 className="text-2xl font-bold text-gray-900">
            Youth Development
          </h2>


          <p className="mt-4 leading-relaxed text-gray-600">
            Our youth program focuses on developing young players,
            teamwork, football skills, and a passion for the game.
          </p>


        </section>







        <section className="mt-10">

          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Youth Squad
          </h2>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


            {squad.map((player) => (

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


              </div>

            ))}


          </div>


        </section>







        <div className="mt-12 text-center">

          <Link
            href="/contact"
            className="inline-block rounded-md bg-black px-6 py-3 font-semibold text-white"
          >
            Join Youth Program
          </Link>

        </div>


      </div>

    </main>
  );
}