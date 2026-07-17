import Link from "next/link";
import type { Match } from "@/types/match";


interface FixtureCardProps {
  match: Match;
}



export default function FixtureCard({
  match,
}: FixtureCardProps) {

  return (
    <article className="rounded-lg border bg-white p-6 transition hover:shadow-lg">


      <div className="mb-4 flex items-center justify-between text-sm text-gray-500">

        <span>
          {match.competition}
        </span>


        <span>
          {match.date}
        </span>

      </div>





      <div className="flex items-center justify-center gap-6 text-center">


        <div className="flex-1">

          <h3 className="text-lg font-bold text-gray-900">
            {match.homeTeam}
          </h3>

          {match.homeLogo && (
            <img
              src={match.homeLogo}
              alt={match.homeTeam}
              className="mx-auto mt-3 h-12 w-12 object-contain"
            />
          )}

        </div>





        <div className="text-center">

          <span className="block text-sm font-medium text-gray-500">
            {match.time}
          </span>


          <span className="mt-2 block text-xl font-bold text-gray-900">
            VS
          </span>

        </div>





        <div className="flex-1">

          <h3 className="text-lg font-bold text-gray-900">
            {match.awayTeam}
          </h3>


          {match.awayLogo && (
            <img
              src={match.awayLogo}
              alt={match.awayTeam}
              className="mx-auto mt-3 h-12 w-12 object-contain"
            />
          )}

        </div>


      </div>






      {match.location && (

        <p className="mt-6 text-center text-sm text-gray-500">
          📍 {match.location}
        </p>

      )}






      <div className="mt-6 text-center">

        <Link
          href={`/fixtures/${match.slug}`}
          className="inline-block rounded-md bg-blue-700 px-5 py-2 font-semibold text-white transition hover:bg-blue-800"
        >
          Match Details
        </Link>

      </div>


    </article>
  );
}