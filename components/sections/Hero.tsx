import Link from "next/link";

import HeroVideo from "@/components/media/HeroVideo";


export default function Hero() {

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">


      <HeroVideo
        src="/videos/hero.mp4"
        poster="/images/hero/hero.jpg"
        className="absolute inset-0 h-full w-full"
      />



      <div className="absolute inset-0 bg-black/50" />






      <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">


        <div className="max-w-3xl">


          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Since 1928
          </p>




          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            FSV Berghausen 1928
          </h1>




          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
            Tradition, passion, and community.
            Follow our teams, fixtures, news, and the history of our club.
          </p>






          <div className="mt-8 flex flex-col gap-4 sm:flex-row">


            <Link
              href="/teams"
              className="rounded-lg bg-blue-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
            >
              Our Teams
            </Link>



            <Link
              href="/contact"
              className="rounded-lg border border-white px-6 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </Link>


          </div>


        </div>


      </div>


    </section>
  );
}