import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | FSV Berghausen 1928",
  description:
    "Official FSV Berghausen 1928 shop. Discover club merchandise, apparel, and fan products.",
};


const products = [
  {
    id: 1,
    name: "FSV Berghausen Home Jersey",
    description:
      "Official club jersey for supporters and fans.",
    price: "49.90 €",
    image: "/images/shop/home-jersey.jpg",
  },
  {
    id: 2,
    name: "FSV Berghausen Scarf",
    description:
      "Show your support with the official club scarf.",
    price: "19.90 €",
    image: "/images/shop/scarf.jpg",
  },
  {
    id: 3,
    name: "FSV Berghausen Cap",
    description:
      "Club cap with the official FSV Berghausen logo.",
    price: "14.90 €",
    image: "/images/shop/cap.jpg",
  },
];


export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">


        <div className="mb-12 text-center">

          <h1 className="text-4xl font-bold text-gray-900">
            Club Shop
          </h1>


          <p className="mt-4 text-gray-600">
            Official merchandise of FSV Berghausen 1928.
          </p>

        </div>




        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {products.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-lg border transition hover:shadow-lg"
            >


              <div className="relative h-64 w-full">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

              </div>



              <div className="p-6">


                <h2 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h2>


                <p className="mt-3 text-gray-600">
                  {product.description}
                </p>


                <p className="mt-4 text-lg font-bold text-gray-900">
                  {product.price}
                </p>



                <button
                  className="mt-6 rounded-md bg-black px-5 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Contact to Order
                </button>


              </div>


            </div>

          ))}


        </div>




        <section className="mt-16 rounded-lg border p-8 text-center">

          <h2 className="text-2xl font-bold text-gray-900">
            How to Order
          </h2>


          <p className="mt-4 text-gray-600">
            To order club merchandise, please contact FSV Berghausen 1928.
            We will provide availability and payment details.
          </p>


          <a
            href="/contact"
            className="mt-6 inline-block rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Contact Club Office
          </a>

        </section>


      </div>

    </main>
  );
}