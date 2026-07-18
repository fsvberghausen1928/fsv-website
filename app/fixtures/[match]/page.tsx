import { notFound } from "next/navigation";
import type { Metadata } from "next";
import matches from "@/data/matches.json";

interface MatchPageProps {
  params: Promise<{
    match: string;
  }>;
}

export async function generateMetadata({
  params,
}: MatchPageProps): Promise<Metadata> {
  const { match } = await params;

  const fixture = matches.find(
    (item) => item.id.toString() === match
  );

  if (!fixture) {
    return {
      title: "Match Not Found | FSV Berghausen 1928",
    };
  }

  return {
    title: `${fixture.homeTeam} vs ${fixture.awayTeam} | FSV Berghausen 1928`,
    description: `Match details for ${fixture.homeTeam} vs ${fixture.awayTeam}.`,
  };
}

export default async function MatchDetailPage({
  params,
}: MatchPageProps) {
  const { match } = await params;

  const fixture = matches.find(
    (item) => item.id.toString() === match
  );

  if (!fixture) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-lg border p-8 text-center">
          <p className="text-sm text-gray-500">
            {fixture.competition}
          </p>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            {fixture.homeTeam}
            <span className="mx-3">vs</span>
            {fixture.awayTeam}
          </h1>

          <div className="mt-8 space-y-3 text-gray-600">
            <p>
              Date: {fixture.date}
            </p>

            {fixture.time && (
              <p>
                Kick-off: {fixture.time}
              </p>
            )}

            {fixture.location && (
              <p>
                Venue: {fixture.location}
              </p>
            )}
          </div>

          {fixture.status === "finished" &&
            fixture.homeScore !== undefined &&
            fixture.awayScore !== undefined && (
              <div className="mt-8 rounded-md bg-gray-100 p-4">
                <h2 className="font-semibold">
                  Result
                </h2>

                <p className="mt-2 text-2xl font-bold">
                  {fixture.homeScore} : {fixture.awayScore}
                </p>
              </div>
            )}
        </div>
      </div>
    </main>
  );
}