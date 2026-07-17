import Image from "next/image";
import Link from "next/link";

import history from "@/data/history.json";


export default function ClubHistory() {

  const previewItems = history.slice(0, 2);


  return (
    <section className="bg-gray-50 py-16">


      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Club History
          </h2>


          <p className="mt-4 text-gray-600">
            Discover the journey and tradition of FSV Berghausen 1928.
          </p>

        </div>







        <div className="grid gap-8 md:grid-cols-2">


          {previewItems.map((item) => (

            <article
              key={item.year}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >


              {item.image && (

                <div className="relative h-64 w-full">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </div>

              )}




              <div className="p-6">


                <span className="text-sm font-bold text-blue-700">
                  {item.year}
                </span>


                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>


                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>


              </div>


            </article>

          ))}


        </div>







        <div className="mt-10 text-center">

          <Link
            href="/history"
            className="inline-block rounded-md bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Read Full History
          </Link>

        </div>


      </div>


    </section>
  );
}