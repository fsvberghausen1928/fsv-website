import Image from "next/image";
import Link from "next/link";

import type { Team } from "@/types/team";


interface TeamCardProps {
  team: Team;
}



export default function TeamCard({
  team,
}: TeamCardProps) {

  return (
    <article className="overflow-hidden rounded-lg border bg-white transition hover:shadow-lg">


      {team.image && (

        <div className="relative h-64 w-full">

          <Image
            src={team.image}
            alt={team.name}
            fill
            className="object-cover"
          />

        </div>

      )}







      <div className="p-6">


        <h3 className="text-2xl font-bold text-gray-900">
          {team.name}
        </h3>





        {team.category && (

          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
            {team.category}
          </p>

        )}






        {team.description && (

          <p className="mt-4 text-gray-600">
            {team.description}
          </p>

        )}






        <Link
          href={`/teams/${team.slug}`}
          className="mt-6 inline-block rounded-md bg-blue-700 px-5 py-2 font-semibold text-white transition hover:bg-blue-800"
        >
          View Team
        </Link>


      </div>


    </article>
  );
}