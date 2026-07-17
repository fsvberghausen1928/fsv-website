import Link from "next/link";
import type { Metadata } from "next";
import matches from "@/data/matches.json";

export const metadata: Metadata = {
  title: "Fixtures | FSV Berghausen 1928",
  description:
    "View upcoming fixtures, match schedules, and results of FSV Berghausen 1928.",
};

export default function FixturesPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Fixtures
          </h1>

          <p className="mt-4 text-gray-600">
            Upcoming matches and recent results.
          </p>
        </div>


        <div className="grid gap-6">

          {matches.map((match) => (
            <Link
              key={match.id}
              href={`/fixtures/${match.id}`}
              className="rounded-lg border p-6 transition hover:shadow-md"
            >

              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                <div>
                  <p className="text-sm text-gray-500">
                    {match.competition}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {match.homeTeam} vs {match.awayTeam}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {match.date}
                  </p>
                </div>


                <div className="text-sm font-medium text-gray-700">
                  View Match →
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}