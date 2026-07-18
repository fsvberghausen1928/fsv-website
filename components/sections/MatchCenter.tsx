import Link from "next/link";

import NextMatchCard from "@/components/football/NextMatchCard";
import ResultCard from "@/components/football/ResultCard";

import matches from "@/data/matches.json";


export default function MatchCenter() {


  const upcomingMatch = matches.find(
    (match) => match.status === "upcoming"
  );


  const latestResult = matches.find(
    (match) => match.status === "finished"
  );



  return (
    <section className="bg-white py-16">


      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">


          <h2 className="text-3xl font-bold text-gray-900">
            Match Center
          </h2>


          <p className="mt-4 text-gray-600">
            Upcoming fixtures and latest results.
          </p>


        </div>








        <div className="grid gap-8 lg:grid-cols-2">



          {upcomingMatch && (

            <NextMatchCard
              match={upcomingMatch}
            />

          )}





          {latestResult && (

            <ResultCard
              match={latestResult}
            />

          )}



        </div>








        <div className="mt-10 text-center">


          <Link
            href="/fixtures"
            className="inline-block rounded-md bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            View All Fixtures
          </Link>


        </div>


      </div>


    </section>
  );
}