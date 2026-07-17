import Image from "next/image";
import Link from "next/link";

import news from "@/data/news.json";


export default function LatestNews() {

  const latestNews = news.slice(0, 3);


  return (
    <section className="bg-gray-50 py-16">


      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">


          <h2 className="text-3xl font-bold text-gray-900">
            Latest News
          </h2>


          <p className="mt-4 text-gray-600">
            Stay updated with the latest news from FSV Berghausen 1928.
          </p>


        </div>








        <div className="grid gap-8 md:grid-cols-3">


          {latestNews.map((article) => (

            <article
              key={article.slug}
              className="overflow-hidden rounded-lg border bg-white"
            >



              {article.image && (

                <div className="relative h-56 w-full">

                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />

                </div>

              )}





              <div className="p-6">


                {article.date && (

                  <p className="text-sm text-gray-500">
                    {article.date}
                  </p>

                )}




                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  {article.title}
                </h3>




                <p className="mt-3 text-gray-600">
                  {article.excerpt}
                </p>





                <Link
                  href={`/news/${article.slug}`}
                  className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-800"
                >
                  Read More →
                </Link>


              </div>


            </article>

          ))}


        </div>






        <div className="mt-10 text-center">


          <Link
            href="/news"
            className="inline-block rounded-md bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            View All News
          </Link>


        </div>


      </div>


    </section>
  );
}