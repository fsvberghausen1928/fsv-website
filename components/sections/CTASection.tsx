import Link from "next/link";


export default function CTASection() {

  return (
    <section className="bg-blue-700 py-16 text-white">


      <div className="mx-auto max-w-5xl px-6 text-center">


        <h2 className="text-3xl font-bold md:text-4xl">
          Become Part of FSV Berghausen 1928
        </h2>


        <p className="mx-auto mt-5 max-w-2xl text-blue-100">
          Join our football community, support the club, and be part of our
          tradition, passion, and future.
        </p>





        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">


          <Link
            href="/membership"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Become a Member
          </Link>



          <Link
            href="/contact"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700"
          >
            Contact Us
          </Link>


        </div>


      </div>


    </section>
  );
}