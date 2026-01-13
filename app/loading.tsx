export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-accent-600 dark:from-purple-950 dark:via-purple-900 dark:to-accent-700">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-accent-200/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-accent-200 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-accent-100 dark:text-accent-200 text-lg font-medium">
          Loading...
        </p>
      </div>
    </div>
  )
}

