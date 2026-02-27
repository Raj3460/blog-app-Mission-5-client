"use client";

import { useEffect } from "react";

export default function AboutError({ error  , reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])


  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500">Failed to load about page.</h1>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Retry
      </button>
    </div>
  );
}