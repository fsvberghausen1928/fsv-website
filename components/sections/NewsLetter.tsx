"use client";

import { useState } from "react";


export default function Newsletter() {

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);



  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    setSubmitted(true);

    setEmail("");

  }





  return (
    <section className="bg-blue-700 py-16 text-white">


      <div className="mx-auto max-w-4xl px-6 text-center">


        <h2 className="text-3xl font-bold">
          Stay Updated
        </h2>



        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Subscribe to receive the latest news, fixtures, and club updates.
        </p>







        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row"
        >


          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="flex-1 rounded-lg px-5 py-3 text-gray-900 outline-none"
          />



          <button
            type="submit"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Subscribe
          </button>


        </form>







        {submitted && (

          <p className="mt-4 text-sm text-blue-100">
            Thank you for subscribing!
          </p>

        )}


      </div>


    </section>
  );
}