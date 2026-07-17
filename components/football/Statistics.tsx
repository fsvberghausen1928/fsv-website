interface Statistic {
  label: string;
  value: string | number;
  icon?: string;
}


interface StatisticsProps {
  title?: string;
  statistics: Statistic[];
}


export default function Statistics({
  title = "Match Statistics",
  statistics,
}: StatisticsProps) {

  return (
    <section className="rounded-lg border bg-white p-6">


      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        {title}
      </h2>





      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">


        {statistics.map((stat) => (

          <div
            key={stat.label}
            className="rounded-lg bg-gray-50 p-5 text-center"
          >


            {stat.icon && (

              <div className="mb-3 text-2xl">
                {stat.icon}
              </div>

            )}





            <p className="text-sm font-medium text-gray-500">
              {stat.label}
            </p>




            <p className="mt-2 text-3xl font-bold text-gray-900">
              {stat.value}
            </p>


          </div>

        ))}


      </div>


    </section>
  );
}