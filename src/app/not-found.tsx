'use client';

import { Ghost } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 text-center p-4">
      <Ghost className="w-24 h-24 text-gray-400 mb-6 animate-bounce" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg shadow-md"
      >
        Go Home
      </Link>
    </div>
  );
}
