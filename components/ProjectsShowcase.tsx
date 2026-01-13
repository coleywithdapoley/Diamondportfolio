'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiDownload, FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

type Category = 'All' | 'PR & Crisis' | 'Social Justice' | 'Beauty & Lifestyle' | 'Creative Tech'

interface Project {
  id: string
  title: string
  category: Category
  description: string
  highlights: string[]
  skills: string[]
  imageUrl?: string
  pdfUrl?: string
  detailsUrl?: string
  gradient: string // For placeholder gradient
}

// Helper function to create a project with minimal info
// Just provide: title, category, url (and optionally description, highlights, skills, pdfUrl)
function createProject(
  title: string,
  category: Category,
  url: string,
  options?: {
    description?: string
    highlights?: string[]
    skills?: string[]
    pdfUrl?: string
    imageUrl?: string
    gradient?: string
  }
): Project {
  const categoryGradients: Record<Category, string> = {
    'All': 'from-purple-600 to-purple-800',
    'PR & Crisis': 'from-purple-600 to-purple-800',
    'Social Justice': 'from-blue-600 to-indigo-800',
    'Beauty & Lifestyle': 'from-pink-500 to-rose-600',
    'Creative Tech': 'from-accent-500 to-accent-600'
  }

  return {
    id: title.toLowerCase().replace(/\s+/g, '-'),
    title,
    category,
    description: options?.description || `${title} - A strategic project in ${category}`,
    highlights: options?.highlights || [
      'Strategic campaign development',
      'Multi-channel execution',
      'Measurable results achieved'
    ],
    skills: options?.skills || ['Strategy', 'Marketing', 'Communications'],
    gradient: options?.gradient || categoryGradients[category],
    pdfUrl: options?.pdfUrl,
    imageUrl: options?.imageUrl,
    detailsUrl: url
  }
}

// EASIER WAY TO ADD PROJECTS:
// Just use createProject() with title, category, and URL!
// 
// SIMPLE VERSION (minimal info):
//   createProject('Adobe Campaign', 'Creative Tech', 'https://adobe.com/campaign')
//
// FULL VERSION (with all details):
//   createProject('Adobe Campaign', 'Creative Tech', 'https://adobe.com/campaign', {
//     description: 'Full description here...',
//     highlights: ['Result 1', 'Result 2', 'Result 3'],
//     skills: ['Skill 1', 'Skill 2'],
//     pdfUrl: '/pdfs/adobe-pitch-team-3.pdf',
//     imageUrl: '/images/adobe-project.jpg'
//   })

// Your projects
const projects: Project[] = [
  // Adobe Pitch Project
  createProject('Adobe Creative Campaign Pitch', 'Creative Tech', '/pdfs/adobe-pitch-team-3.pdf', {
    description: 'Strategic pitch presentation for Adobe campaign targeting creative professionals. Developed comprehensive marketing strategy with multi-channel approach and innovative creative solutions.',
    highlights: [
      'Created comprehensive campaign strategy and pitch deck',
      'Developed multi-channel marketing approach',
      'Designed strategic presentation for client engagement'
    ],
    skills: ['Campaign Strategy', 'Presentation Design', 'Creative Strategy', 'Client Pitching', 'Marketing'],
    pdfUrl: '/pdfs/adobe-pitch-team-3.pdf'
  }),
  
  // Crisis Management Project
  createProject('Crisis Management Project', 'PR & Crisis', '/pdfs/crisis-management-project-4.pdf', {
    description: 'Developed comprehensive crisis management framework for entertainment industry client facing media scrutiny. Implemented rapid response protocols and reputation recovery strategies.',
    highlights: [
      'Developed comprehensive crisis management framework',
      'Implemented rapid response protocols',
      'Created reputation recovery strategies'
    ],
    skills: ['Strategic Communications', 'Crisis Management', 'Media Relations', 'Reputation Management'],
    pdfUrl: '/pdfs/crisis-management-project-4.pdf'
  }),
  
  // Media Planning & Buying Project
  createProject('Media Planning & Buying Project', 'PR & Crisis', '/pdfs/media-planning-buying-project-2.pdf', {
    description: 'Strategic media planning and buying campaign designed to maximize reach and engagement. Developed comprehensive media strategy with optimal channel selection and budget allocation.',
    highlights: [
      'Developed strategic media planning framework',
      'Optimized media buying across multiple channels',
      'Maximized ROI through data-driven decisions'
    ],
    skills: ['Media Planning', 'Media Buying', 'Strategic Planning', 'Campaign Optimization', 'Budget Management'],
    pdfUrl: '/pdfs/media-planning-buying-project-2.pdf'
  }),
  
  // Pattern Beauty PR Project
  createProject('Pattern Beauty PR Project', 'Beauty & Lifestyle', '/pdfs/pattern-beauty-pr-project-2.pdf', {
    description: 'Comprehensive public relations campaign for Pattern Beauty brand. Developed strategic PR initiatives to enhance brand visibility and connect with target audience through authentic storytelling.',
    highlights: [
      'Developed comprehensive PR strategy for beauty brand',
      'Created authentic brand storytelling campaigns',
      'Enhanced brand visibility and audience engagement'
    ],
    skills: ['Public Relations', 'Brand Strategy', 'Beauty Marketing', 'Content Creation', 'Media Relations'],
    pdfUrl: '/pdfs/pattern-beauty-pr-project-2.pdf'
  })
]

const categories: Category[] = ['All', 'PR & Crisis', 'Social Justice', 'Beauty & Lifestyle', 'Creative Tech']

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const handleDownloadPDF = (pdfUrl: string, title: string) => {
    // Create download link
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title.replace(/\s+/g, '-')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/20 to-accent-50/20 dark:from-dark-900 dark:via-purple-950/20 dark:to-accent-950/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-purple-900 via-purple-700 to-accent-600 dark:from-purple-300 dark:via-purple-200 dark:to-accent-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
            <div className="w-2 h-2 bg-accent-500 rounded-full mx-2"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500"></div>
            <div className="w-2 h-2 bg-accent-500 rounded-full mx-2"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 touch-manipulation min-h-[44px] active:scale-95 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-accent-500 text-white shadow-lg scale-105'
                  : 'bg-white/80 dark:bg-dark-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-700 border border-purple-200 dark:border-purple-900'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/30 transition-all duration-300"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} dark:opacity-90`}>
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/30 text-6xl font-bold">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm text-xs font-semibold text-purple-700 dark:text-purple-300 rounded-full shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 sm:space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-accent-500 dark:text-accent-400 mt-1 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium border border-purple-200 dark:border-purple-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-gray-200 dark:border-dark-700">
                    <a
                      href={project.pdfUrl || project.detailsUrl}
                      target={project.pdfUrl ? "_blank" : undefined}
                      rel={project.pdfUrl ? "noopener noreferrer" : undefined}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 active:from-purple-800 active:to-purple-900 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 touch-manipulation min-h-[44px] group/btn"
                    >
                      <span>View Details</span>
                      <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    {project.pdfUrl && (
                      <button
                        onClick={() => handleDownloadPDF(project.pdfUrl!, project.title)}
                        className="flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 bg-white dark:bg-dark-700 border-2 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/30 active:bg-purple-100 dark:active:bg-purple-900/50 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 touch-manipulation min-h-[44px] min-w-[44px]"
                      >
                        <FiDownload className="w-4 h-4" />
                        <span className="hidden sm:inline">PDF</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

