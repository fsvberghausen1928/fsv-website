"use client";

import { useState } from "react";
import Image from "next/image";


interface ImageLightboxProps {
  src: string;
  alt: string;
}



export default function ImageLightbox({
  src,
  alt,
}: ImageLightboxProps) {

  const [open, setOpen] = useState(false);


  return (
    <>


      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative aspect-square w-full overflow-hidden rounded-lg"
        aria-label={`Open ${alt}`}
      >

        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 hover:scale-105"
        />

      </button>







      {open && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpen(false)}
        >


          <div
            className="relative h-full max-h-[90vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
            />


            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-lg font-bold text-gray-900"
              aria-label="Close image"
            >
              ×
            </button>


          </div>


        </div>

      )}


    </>
  );
}