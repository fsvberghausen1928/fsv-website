import Image from "next/image";
import Link from "next/link";

import type { Match } from "@/types/match";


interface ResultCardProps {
  match: Match;
}



export default function ResultCard({
  match,
}: ResultCardProps) {

  return (
    <article className="rounded-lg border bg-white p-6">


      <div className="mb-4 flex justify-between text-sm text-gray-500">

        <span>
          {match.competition}
        </span>


        <span>
          {match.date}
        </span>

      </div>






      <div className="flex items-center justify-center gap-8 text-center">


        <div className="flex-1">


          {match.homeLogo && (

            <div className="relative mx-auto h-14 w-14">

              <Image
                src={match.homeLogo}
                alt={match.homeTeam}
                fill
                className="object-contain"
              />

            </div>

          )}



          <h3 className="mt-3 font-bold text-gray-900">
            {match.homeTeam}
          </h3>


        </div>







        <div>

          <div className="text-3xl font-bold text-gray-900">

            {match.homeScore}
            {" - "}
            {match.awayScore}

          </div>


          <p className="mt-2 text-sm text-gray-500">
            Full Time
          </p>

        </div>







        <div className="flex-1">


          {match.awayLogo && (

            <div className="relative mx-auto h-14 w-14">

              <Image
                src={match.awayLogo}
                alt={match.awayTeam}
                fill
                className="object-contain"
              />

            </div>

          )}



          <h3 className="mt-3 font-bold text-gray-900">
            {match.awayTeam}
          </h3>


        </div>


      </div>







      <div className="mt-6 text-center">


        <Link
          href={`/fixtures/${match.slug}`}
          className="text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          Match Report →
        </Link>


      </div>


    </article>
  );
}