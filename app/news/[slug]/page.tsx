import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import news from "@/data/news.json";


interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}



export async function generateMetadata(
  { params }: NewsPageProps
): Promise<Metadata> {

  const { slug } = await params;


  const article = news.find(
    (item) => item.slug === slug
  );


  if (!article) {
    return {
      title: "News Not Found | FSV Berghausen 1928",
    };
  }


  return {
    title: `${article.title} | FSV Berghausen 1928`,
    description: article.excerpt,
  };
}




export default async function NewsArticlePage(
  { params }: NewsPageProps
) {

  const { slug } = await params;


  const article = news.find(
    (item) => item.slug === slug
  );


  if (!article) {
    notFound();
  }



  return (
    <main className="min-h-screen bg-white py-16">


      <article className="mx-auto max-w-4xl px-6">


        {article.image && (

          <div className="relative mb-10 h-96 overflow-hidden rounded-lg">

            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />

          </div>

        )}



        <p className="text-sm text-gray-500">
          {article.date}
        </p>



        <h1 className="mt-4 text-4xl font-bold text-gray-900">
          {article.title}
        </h1>



        <div className="mt-8 leading-relaxed text-gray-700">

          {article.content}

        </div>


      </article>


    </main>
  );
}