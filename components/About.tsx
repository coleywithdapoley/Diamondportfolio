'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiLinkedin, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    { 
      icon: FiLinkedin, 
      href: 'https://www.linkedin.com/in/advertisingdiamondbazile/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    { 
      icon: FiInstagram, 
      href: 'https://instagram.com/diamondbazile', 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      icon: FiTwitter, 
      href: 'https://twitter.com/diamondbazile', 
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    { 
      icon: FiMail, 
      href: 'mailto:Diamondbazile1@gmail.com', 
      label: 'Email',
      color: 'hover:text-amber-400'
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-amber-50/30 dark:from-dark-900 dark:via-purple-950/30 dark:to-amber-950/20 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-purple-900 via-purple-700 to-amber-600 dark:from-purple-300 dark:via-purple-200 dark:to-amber-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          {/* Decorative underline */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full mx-2"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full mx-2"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image on Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1 flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-purple-400/20 to-amber-400/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-amber-200/50 dark:border-amber-300/30 bg-gradient-to-br from-purple-100 to-amber-100 dark:from-purple-900 dark:to-amber-900">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/about-photo.jpg"
                    alt="Diamond Bazile - Strategic Communications & Marketing Professional"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content on Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="font-semibold text-purple-900 dark:text-purple-200">
                Senior Advertising major from{' '}
                <span className="text-amber-600 dark:text-amber-400">Detroit, Michigan</span>
              </p>

              <p>
                Specializing in{' '}
                <span className="font-semibold text-purple-800 dark:text-purple-300">
                  strategic legal communications
                </span>{' '}
                with an advertising concentration, I bring a unique blend of legal insight and creative marketing expertise.
              </p>

              <p>
                With a{' '}
                <span className="font-semibold text-amber-700 dark:text-amber-400">
                  sports administration minor
                </span>
                , I understand the dynamic intersection of sports, entertainment, and marketing.
              </p>

              <p>
                I specialize in crafting{' '}
                <span className="font-semibold text-purple-800 dark:text-purple-300 italic">
                  dynamic marketing campaigns
                </span>{' '}
                for entertainment industry professionals, helping them stand out in a competitive landscape.
              </p>

              <p className="text-amber-700 dark:text-amber-400 font-medium italic">
                My passion lies in elevating the visual presence of emerging creatives, transforming their brand identity into powerful narratives that resonate with audiences.
              </p>
            </div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 border-t border-purple-200/50 dark:border-purple-800/50"
            >
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
                Connect With Me
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 sm:p-4 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 ${link.color} transition-all duration-300 border border-purple-100 dark:border-purple-900/50 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center`}
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

