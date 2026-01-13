'use client'

import Link from 'next/link'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-accent-600 dark:from-purple-950 dark:via-purple-900 dark:to-accent-700 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-9xl sm:text-[12rem] font-bold text-white/20 dark:text-white/10 mb-4">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg sm:text-xl text-accent-100 dark:text-accent-200 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 touch-manipulation min-h-[44px]"
          >
            <FiHome className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-md border-2 border-accent-300/50 hover:border-accent-200 text-accent-100 hover:text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 touch-manipulation min-h-[44px]"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  )
}

