import Image from "next/image";


interface GalleryImage {
  src: string;
  alt: string;
}


interface GalleryGridProps {
  images: GalleryImage[];
}



export default function GalleryGrid({
  images,
}: GalleryGridProps) {

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


      {images.map((image, index) => (

        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-lg"
        >

          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition duration-300 hover:scale-105"
          />

        </div>

      ))}


    </div>
  );
}