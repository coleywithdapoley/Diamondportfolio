'use client'

import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/advertisingdiamondbazile/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:Diamondbazile1@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Portfolio</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              A modern portfolio showcasing my work, skills, and passion for
              creating exceptional digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-primary-400 active:text-primary-300 transition-colors touch-manipulation block py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-primary-400 active:text-primary-300 transition-colors touch-manipulation block py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-primary-400 active:text-primary-300 transition-colors touch-manipulation block py-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary-400 active:text-primary-300 transition-colors touch-manipulation block py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h3>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-2 bg-dark-800 hover:bg-dark-700 active:bg-dark-600 rounded-lg text-gray-400 hover:text-primary-400 active:text-primary-300 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center space-x-1">
            <span>© {currentYear} Portfolio. Made with</span>
            <FiHeart className="w-4 h-4 text-red-500" />
            <span>and Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

