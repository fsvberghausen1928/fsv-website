import Image from "next/image";

import type { Player } from "@/types/player";


interface PlayerCardProps {
  player: Player;
}


export default function PlayerCard({
  player,
}: PlayerCardProps) {

  return (
    <article className="overflow-hidden rounded-lg border bg-white">


      {player.image && (

        <div className="relative h-64 w-full">

          <Image
            src={player.image}
            alt={player.name}
            fill
            className="object-cover"
          />

        </div>

      )}





      <div className="p-6">


        <div className="flex items-center justify-between">

          <h3 className="text-xl font-bold text-gray-900">
            {player.name}
          </h3>


          {player.number && (

            <span className="rounded-full bg-blue-700 px-3 py-1 text-sm font-bold text-white">
              #{player.number}
            </span>

          )}

        </div>





        {player.position && (

          <p className="mt-3 text-gray-600">
            {player.position}
          </p>

        )}





        {player.nationality && (

          <p className="mt-2 text-sm text-gray-500">
            Nationality: {player.nationality}
          </p>

        )}





        {player.age && (

          <p className="mt-1 text-sm text-gray-500">
            Age: {player.age}
          </p>

        )}





        {player.bio && (

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            {player.bio}
          </p>

        )}


      </div>


    </article>
  );
}