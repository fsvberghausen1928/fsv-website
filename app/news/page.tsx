import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import news from "@/data/news.json";

export const metadata: Metadata = {
  title: "News | FSV Berghausen 1928",
  description:
    "Latest news, updates, and announcements from FSV Berghausen 1928.",
};


export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Latest News
          </h1>


          <p className="mt-4 text-gray-600">
            Updates and stories from FSV Berghausen 1928.
          </p>

        </div>



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {news.map((article) => (

            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group overflow-hidden rounded-lg border transition hover:shadow-lg"
            >

              {article.image && (

                <div className="relative h-56 w-full">

                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                </div>

              )}



              <div className="p-6">


                <p className="text-sm text-gray-500">
                  {article.date}
                </p>


                <h2 className="mt-3 text-xl font-semibold text-gray-900">
                  {article.title}
                </h2>


                <p className="mt-3 text-gray-600">
                  {article.excerpt}
                </p>


                <p className="mt-4 text-sm font-medium text-gray-900">
                  Read more →
                </p>


              </div>


            </Link>

          ))}


        </div>


      </div>

    </main>
  );
}