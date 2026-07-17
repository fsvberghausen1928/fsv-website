import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import teams from "@/data/teams.json";


interface TeamPageProps {
  params: Promise<{
    team: string;
  }>;
}


export async function generateMetadata(
  { params }: TeamPageProps
): Promise<Metadata> {

  const { team } = await params;


  const currentTeam = teams.find(
    (item) => item.slug === team
  );


  if (!currentTeam) {
    return {
      title: "Team Not Found | FSV Berghausen 1928",
    };
  }


  return {
    title: `${currentTeam.name} | FSV Berghausen 1928`,
    description:
      `Information about ${currentTeam.name} including players, staff, and team details.`,
  };
}



export default async function TeamPage(
  { params }: TeamPageProps
) {

  const { team } = await params;


  const currentTeam = teams.find(
    (item) => item.slug === team
  );


  if (!currentTeam) {
    notFound();
  }



  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">

          {currentTeam.image && (

            <div className="relative mx-auto mb-8 h-72 max-w-3xl overflow-hidden rounded-lg">

              <Image
                src={currentTeam.image}
                alt={currentTeam.name}
                fill
                className="object-cover"
              />

            </div>

          )}



          <h1 className="text-4xl font-bold text-gray-900">
            {currentTeam.name}
          </h1>


          {currentTeam.description && (

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              {currentTeam.description}
            </p>

          )}

        </div>





        {currentTeam.coach && (

          <section className="mb-10 rounded-lg border p-6">

            <h2 className="text-2xl font-bold text-gray-900">
              Coaching Staff
            </h2>


            <p className="mt-3 text-gray-600">
              {currentTeam.coach}
            </p>

          </section>

        )}






        {currentTeam.players && (

          <section>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Squad
            </h2>



            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


              {currentTeam.players.map((player) => (

                <div
                  key={player.id}
                  className="rounded-lg border p-6"
                >


                  {player.image && (

                    <div className="relative mb-4 h-48 overflow-hidden rounded-lg">

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
                      #{player.number}
                    </p>

                  )}


                </div>

              ))}


            </div>


          </section>

        )}


      </div>

    </main>
  );
}