import Link from "next/link";

import navigation from "@/data/navigation.json";


export default function Footer() {

  return (
    <footer className="border-t bg-gray-900 text-white">


      <div className="mx-auto max-w-7xl px-6 py-12">


        <div className="grid gap-10 md:grid-cols-3">


          <div>


            <h2 className="text-xl font-bold">
              FSV Berghausen 1928
            </h2>


            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Tradition. Leidenschaft. Gemeinschaft.
              <br />
              Official website of FSV Berghausen 1928.
            </p>


          </div>






          <div>


            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>


            <nav className="mt-4 flex flex-col gap-3">


              {navigation.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {item.label}
                </Link>

              ))}


            </nav>


          </div>







          <div>


            <h3 className="text-lg font-semibold">
              Contact
            </h3>


            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              FSV Berghausen 1928
              <br />
              Football Club
              <br />
              Germany
            </p>


            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              Contact Us →
            </Link>


          </div>


        </div>







        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} FSV Berghausen 1928. All rights reserved.

        </div>


      </div>


    </footer>
  );
}