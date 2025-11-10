"use client";

import { useEffect } from "react";

export default function MinimalMigrationNotice() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://irfanwork.vercel.app";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = "https://irfanwork.vercel.app";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm dark:bg-gray-900/95">
      <div className="mx-4 max-w-sm text-center">
        {/* Simple Icon */}
        <div className="mb-4 flex justify-center">
          <svg
            className="h-12 w-12 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          Website Dipindahkan
        </h2>

        {/* URL */}
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          irfanwork.vercel.app
        </p>

        {/* Button */}
        <button
          onClick={handleRedirect}
          className="rounded-md bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        >
          Kunjungi
        </button>

        {/* Timer */}
        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
          Auto redirect dalam 5 detik
        </p>
      </div>
    </div>
  );
}
