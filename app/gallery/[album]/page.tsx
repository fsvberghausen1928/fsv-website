import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import gallery from "@/data/gallery.json";

interface AlbumPageProps {
  params: Promise<{
    album: string;
  }>;
}


export async function generateMetadata(
  { params }: AlbumPageProps
): Promise<Metadata> {

  const { album } = await params;


  const currentAlbum = gallery.find(
    (item) => item.slug === album
  );


  if (!currentAlbum) {
    return {
      title: "Album Not Found | FSV Berghausen 1928",
    };
  }


  return {
    title: `${currentAlbum.title} | FSV Berghausen 1928`,
    description: `View photos from ${currentAlbum.title} | FSV Berghausen 1928`,
  };
}


export default async function AlbumPage(
  { params }: AlbumPageProps
) {

  const { album } = await params;


  const currentAlbum = gallery.find(
    (item) => item.slug === album
  );


  if (!currentAlbum) {
    notFound();
  }


  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            {currentAlbum.title}
          </h1>


          <p className="mt-4 text-gray-600">
            {currentAlbum.description}
          </p>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {currentAlbum.images.map((image, index) => (

            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg"
            >

              <Image
                src={image}
                alt={`${currentAlbum.title} photo ${index + 1}`}
                fill
                className="object-cover"
              />

            </div>

          ))}

        </div>


      </div>

    </main>
  );
}