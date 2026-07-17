import Image from "next/image";
import type { Metadata } from "next";
import history from "@/data/history.json";

export const metadata: Metadata = {
  title: "History | FSV Berghausen 1928",
  description:
    "Discover the history, milestones, and heritage of FSV Berghausen 1928.",
};


export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Club History
          </h1>


          <p className="mt-4 text-gray-600">
            The story and heritage of FSV Berghausen 1928.
          </p>

        </div>



        <div className="space-y-12">


          {history.map((item, index) => (

            <section
              key={index}
              className="grid gap-8 rounded-lg border p-8 md:grid-cols-2 md:items-center"
            >


              {item.image && (

                <div className="relative h-72 overflow-hidden rounded-lg">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </div>

              )}



              <div>

                <h2 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h2>


                <p className="mt-4 leading-relaxed text-gray-600">
                  {item.description}
                </p>


                {item.year && (

                  <p className="mt-4 text-sm font-semibold text-gray-500">
                    {item.year}
                  </p>

                )}

              </div>


            </section>

          ))}


        </div>


      </div>

    </main>
  );
}