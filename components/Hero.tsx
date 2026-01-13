'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-accent-600 dark:from-purple-950 dark:via-purple-900 dark:to-accent-700"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-accent-600/30 dark:from-purple-950/50 dark:to-accent-700/30 animate-gradient-shift"></div>

      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
            style={{ opacity, y }}
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-[1.1] sm:leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-accent-100 to-accent-200 dark:from-white dark:via-accent-50 dark:to-accent-100 bg-clip-text text-transparent">
                Diamond
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent-200 via-accent-300 to-accent-400 dark:from-accent-100 dark:via-accent-200 dark:to-accent-300 bg-clip-text text-transparent">
                Bazile
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 md:mb-12 text-accent-200 dark:text-accent-100 font-light italic tracking-wide px-2 sm:px-0"
              style={{ fontFamily: 'var(--font-dancing), Georgia, serif' }}
            >
              "Dropping Gems, Shaping Futures!"
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 active:from-accent-600 active:to-accent-700 text-white rounded-lg font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-accent-300/50 hover:border-accent-200 active:border-accent-400 text-accent-100 hover:text-white rounded-lg font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Headshot Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-4 border-accent-400/30 animate-pulse-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-accent-300/20"></div>

              {/* Dropping Gems Logo */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-accent-200/50 dark:border-accent-300/50 bg-white dark:bg-white/10 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8">
                <Image
                  src="/images/dia-logo.png"
                  alt="Dropping Gems with Diamond Bazile - Logo"
                  fill
                  className="object-contain p-2"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  quality={90}
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-400/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-float-delayed"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-accent-200/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-accent-200/50 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

