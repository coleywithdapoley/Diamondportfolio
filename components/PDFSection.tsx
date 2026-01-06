'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiDownload, FiFile } from 'react-icons/fi'

interface PDFFile {
  name: string
  url: string
  description?: string
}

// Your PDF files
const pdfFiles: PDFFile[] = [
  {
    name: 'Adobe Pitch - Team 3',
    url: '/pdfs/adobe-pitch-team-3.pdf',
    description: 'Strategic pitch presentation for Adobe campaign',
  },
  {
    name: 'Crisis Management Project',
    url: '/pdfs/crisis-management-project-4.pdf',
    description: 'Comprehensive crisis management framework and strategies',
  },
  {
    name: 'Media Planning & Buying Project',
    url: '/pdfs/media-planning-buying-project-2.pdf',
    description: 'Strategic media planning and buying campaign framework',
  },
  {
    name: 'Pattern Beauty PR Project',
    url: '/pdfs/pattern-beauty-pr-project-2.pdf',
    description: 'Comprehensive PR campaign for beauty brand',
  },
]

export default function PDFSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [loading, setLoading] = useState<string | null>(null)

  const handleDownload = async (pdf: PDFFile) => {
    setLoading(pdf.name)
    try {
      const response = await fetch(pdf.url)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = pdf.name + '.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Error downloading PDF:', error)
    } finally {
      setLoading(null)
    }
  }

  return (
    <section
      id="documents"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-dark-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white px-2">
            Documents & Resources
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Download my resume, portfolio, and other professional documents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pdfFiles.map((pdf, index) => (
            <motion.div
              key={pdf.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl p-4 sm:p-6 hover:shadow-lg active:shadow-md transition-shadow border border-gray-200 dark:border-dark-700"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <FiFile className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {pdf.name}
                  </h3>
                  {pdf.description && (
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {pdf.description}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:space-x-3">
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 active:text-primary-800 dark:active:text-primary-200 font-medium touch-manipulation min-h-[44px] flex items-center"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleDownload(pdf)}
                      disabled={loading === pdf.name}
                      className="flex items-center space-x-1 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 active:text-primary-800 dark:active:text-primary-200 font-medium disabled:opacity-50 touch-manipulation min-h-[44px]"
                    >
                      <FiDownload className="w-4 h-4" />
                      <span>{loading === pdf.name ? 'Downloading...' : 'Download'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {pdfFiles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400">
              No PDF files available. Add PDFs to the public/pdfs folder to display them here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

