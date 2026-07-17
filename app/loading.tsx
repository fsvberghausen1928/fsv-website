// app/loading.tsx

import { Spinner } from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <Spinner />

        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Loading...
          </h2>

          <p className="text-sm text-gray-500">
            Please wait while we prepare the page.
          </p>
        </div>
      </div>
    </main>
  );
}