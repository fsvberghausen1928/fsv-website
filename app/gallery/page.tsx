import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import gallery from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Gallery | FSV Berghausen 1928",
  description:
    "Explore photos from matches, teams, events, and club activities of FSV Berghausen 1928.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Gallery
          </h1>

          <p className="mt-4 text-gray-600">
            Moments from FSV Berghausen 1928.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((album) => (
            <Link
              key={album.slug}
              href={`/gallery/${album.slug}`}
              className="group overflow-hidden rounded-lg border transition hover:shadow-lg"
            >

              <div className="relative h-56 w-full">

                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

              </div>


              <div className="p-5">

                <h2 className="text-xl font-semibold text-gray-900">
                  {album.title}
                </h2>


                <p className="mt-2 text-sm text-gray-600">
                  {album.description}
                </p>


                <p className="mt-3 text-sm text-gray-500">
                  {album.images.length} photos
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}