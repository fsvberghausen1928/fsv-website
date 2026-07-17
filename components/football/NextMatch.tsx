import Image from "next/image";
import MatchCountdown from "./MatchCountdown";

import type { Match } from "@/types/match";


interface NextMatchCardProps {
  match: Match;
}



export default function NextMatchCard({
  match,
}: NextMatchCardProps) {


  return (
    <article className="rounded-xl border bg-white p-6 shadow-sm">


      <div className="mb-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Next Match
        </p>


        <p className="mt-2 text-sm text-gray-500">
          {match.competition}
        </p>

      </div>





      <div className="flex items-center justify-center gap-8">


        <div className="text-center">


          {match.homeLogo && (

            <div className="relative mx-auto h-16 w-16">

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






        <div className="text-xl font-bold text-gray-900">
          VS
        </div>






        <div className="text-center">


          {match.awayLogo && (

            <div className="relative mx-auto h-16 w-16">

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







      <div className="mt-8">

        <MatchCountdown
          date={match.date}
          time={match.time}
        />

      </div>







      {match.location && (

        <p className="mt-6 text-center text-sm text-gray-500">
          📍 {match.location}
        </p>

      )}


    </article>
  );
}