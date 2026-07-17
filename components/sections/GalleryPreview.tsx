import Image from "next/image";
import Link from "next/link";

import gallery from "@/data/gallery.json";


export default function GalleryPreview() {

  const previewImages = gallery.slice(0, 6);


  return (
    <section className="bg-white py-16">


      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">


          <h2 className="text-3xl font-bold text-gray-900">
            Gallery
          </h2>


          <p className="mt-4 text-gray-600">
            Explore moments, matches, and memories from FSV Berghausen 1928.
          </p>


        </div>







        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">


          {previewImages.map((image, index) => (

            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg"
            >

              <Image
                src={image.image}
                alt={image.title ?? "FSV Berghausen Gallery"}
                fill
                className="object-cover transition duration-300 hover:scale-105"
              />

            </div>

          ))}


        </div>







        <div className="mt-10 text-center">


          <Link
            href="/gallery"
            className="inline-block rounded-md bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            View Full Gallery
          </Link>


        </div>


      </div>


    </section>
  );
}