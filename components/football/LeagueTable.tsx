interface TeamStanding {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goals: string;
  points: number;
}


interface LeagueTableProps {
  standings: TeamStanding[];
}


export default function LeagueTable({
  standings,
}: LeagueTableProps) {

  return (
    <div className="overflow-x-auto rounded-lg border bg-white">

      <table className="w-full text-left">

        <thead className="border-b bg-gray-50">

          <tr>

            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              Pos
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              Team
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              P
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              W
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              D
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              L
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              GD
            </th>

            <th className="px-4 py-3 text-sm font-semibold text-gray-700">
              Pts
            </th>

          </tr>

        </thead>





        <tbody>

          {standings.map((team) => (

            <tr
              key={team.position}
              className="border-b last:border-none"
            >

              <td className="px-4 py-4 font-semibold text-gray-900">
                {team.position}
              </td>


              <td className="px-4 py-4 font-medium text-gray-900">
                {team.team}
              </td>


              <td className="px-4 py-4 text-gray-600">
                {team.played}
              </td>


              <td className="px-4 py-4 text-gray-600">
                {team.won}
              </td>


              <td className="px-4 py-4 text-gray-600">
                {team.drawn}
              </td>


              <td className="px-4 py-4 text-gray-600">
                {team.lost}
              </td>


              <td className="px-4 py-4 text-gray-600">
                {team.goals}
              </td>


              <td className="px-4 py-4 font-bold text-gray-900">
                {team.points}
              </td>

            </tr>

          ))}

        </tbody>


      </table>

    </div>
  );
}