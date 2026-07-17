interface Player {
  number: number;
  name: string;
  position: string;
}


interface LineupProps {
  formation?: string;
  players: Player[];
}


export default function Lineup({
  formation,
  players,
}: LineupProps) {

  return (
    <section className="rounded-lg border bg-white p-6">


      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900">
          Lineup
        </h2>


        {formation && (

          <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-700">
            {formation}
          </span>

        )}

      </div>





      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">


        {players.map((player) => (

          <div
            key={player.number}
            className="rounded-lg border p-4"
          >


            <div className="flex items-center gap-4">


              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                {player.number}
              </div>



              <div>

                <h3 className="font-semibold text-gray-900">
                  {player.name}
                </h3>


                <p className="text-sm text-gray-500">
                  {player.position}
                </p>

              </div>


            </div>


          </div>

        ))}


      </div>


    </section>
  );
}