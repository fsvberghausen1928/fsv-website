"use client";

import { useState } from "react";
import Link from "next/link";

import navigation from "@/data/navigation.json";


export default function MobileMenu() {

  const [open, setOpen] = useState(false);


  return (
    <div>


      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 text-gray-900"
        aria-label="Toggle menu"
      >

        <span className="block h-0.5 w-6 bg-gray-900"></span>

        <span className="mt-1.5 block h-0.5 w-6 bg-gray-900"></span>

        <span className="mt-1.5 block h-0.5 w-6 bg-gray-900"></span>

      </button>






      {open && (

        <div className="absolute left-0 top-20 w-full border-b bg-white shadow-lg">


          <nav className="flex flex-col px-6 py-6">


            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b py-3 font-medium text-gray-700 last:border-none hover:text-blue-700"
              >
                {item.label}
              </Link>

            ))}


          </nav>


        </div>

      )}


    </div>
  );
}