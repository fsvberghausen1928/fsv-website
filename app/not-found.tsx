// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto max-w-2xl text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
          Error 404
        </span>

        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Return Home
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </main>
  );
}