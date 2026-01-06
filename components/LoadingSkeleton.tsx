export function ProjectCardSkeleton() {
  return (
    <div className="bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-purple-100/50 dark:border-purple-900/30 animate-pulse">
      <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-900 dark:to-purple-800"></div>
      <div className="p-4 sm:p-6 space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-5/6"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded w-20"></div>
          <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded w-24"></div>
        </div>
        <div className="h-10 bg-gray-200 dark:bg-dark-700 rounded"></div>
      </div>
    </div>
  )
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 dark:bg-dark-700 rounded animate-pulse ${
            i === lines - 1 ? 'w-5/6' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  )
}

