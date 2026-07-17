import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./MobileMenu";

import navigation from "@/data/navigation.json";


export default function Navigation() {

  return (
    <header className="sticky top-0 z-50 border-b bg-white">


      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">


        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <Image
            src="/logos/logo.svg"
            alt="FSV Berghausen 1928"
            width={48}
            height={48}
          />


          <span className="hidden text-lg font-bold text-gray-900 sm:block">
            FSV Berghausen 1928
          </span>

        </Link>






        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-blue-700"
            >
              {item.label}
            </Link>

          ))}

        </nav>





        <div className="lg:hidden">

          <MobileMenu />

        </div>


      </div>


    </header>
  );
}