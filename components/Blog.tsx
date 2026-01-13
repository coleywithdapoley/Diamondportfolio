'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCalendar, FiArrowRight, FiExternalLink } from 'react-icons/fi'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  imageUrl?: string
  imageAlt?: string
  imageCredit?: string
  imageCreditUrl?: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Campaigns, Clicks, and Change: A Howard Student\'s Inside Look at Political Advertising in the 2024 Election',
    excerpt: 'Reflecting on Kamala Harris\' and Donald Trump\'s campaign strategies, and how digital media shapes political engagement in the modern age.',
    content: `Kamala Harris' campaign stood out to me for several reasons. As a Howard alumna, her campaign made a concerted effort to connect with students, faculty, and the wider community at Historically Black Colleges and Universities (HBCUs). Harris used advertising strategies that were highly effective in reaching younger voters and those with strong ties to educational institutions like Howard. What struck me was not only her campaign's message but how they showcased the power of digital media to engage with audiences.

In contrast, Donald Trump's campaign relied heavily on social media platforms like X for advertising, but his strategy was quite different. Trump used the platform to dominate public discourse with controversial, attention-grabbing posts. The tone of his social media presence was often combative and polarizing, intentionally sparking reactions and driving conversations in ways that were both divisive and direct. While Trump's strategy generated significant attention, it also had the effect of further entrenching political divides. The content he posted often went viral, but it did so by provoking strong emotions both positive and negative among users. This type of advertising, while effective at creating visibility, was risky, as it alienated some groups and detracted from more substantive discussions around policy.

Reflecting on both campaigns, I've come to appreciate the power and complexity of political advertising in the digital age. Kamala Harris' campaign utilized social media to create a more inclusive, community-driven conversation, focusing on connection and empowerment. Meanwhile, Trump's campaign used bold, often provocative tactics to command attention and energize his base. Both strategies achieved their respective goals. Harris reached younger, diverse voters, while Trump leveraged controversy to maintain visibility and fuel the media cycle.

For me, the experience of contributing to Harris' campaign in a hands-on way as a senior at Howard was a defining moment. It solidified my understanding of how advertising not only shapes public opinion but also influences political engagement. The work we did in strategizing social media campaigns for Harris' election was not just an academic exercise, it was an opportunity to actively shape the narrative in a way that directly impacted the community I care about.`,
    date: '2024-12-15',
    imageUrl: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg',
    imageAlt: 'Climate sign outside with blurred background',
    imageCredit: 'Markus Spiske',
    imageCreditUrl: 'https://www.pexels.com/photo/climate-sign-outside-blur-2990644/'
  },
  {
    id: '2',
    title: 'How To Intern During Your Collegiate Career',
    excerpt: 'Practical tips for securing internships, building connections, and maximizing opportunities during your college years.',
    content: `According to Forbes, "Internships are an opportunity to network with great people and sharpen your skills before entering the workforce", The Importance Of Internships And The Invaluable Relationships They Bring emphasizes the pivotal role internships have in making a student successful during their collegiate career. Over the years I have understood how impactful it is to secure an internship to ensure I get the experience and long lasting connections I need to excel in my future.

While securing an internship is important, there are additional steps students can take to maximize their opportunities. Initiatives such as applying early, gaining relevant experience on campus, and networking with recruiters or peers who have held desired roles can significantly enhance your preparedness during the process. According to Forbes, 5 Tips For Landing Your Dream Summer Internship "After you've determined your dream list of employers, it's time to get your application materials in top shape, starting with your resume". Ensuring that your cover letter and resume is refined will also enhance your chances.

While securing an internship is a vital step in building your career, taking a proactive approach can greatly enhance your chances of success. By applying early, gaining relevant experience, networking, refining application materials, and seeking mentorship, you can effectively prepare yourself for the competitive landscape of internships.`,
    date: '2024-11-20'
  }
]

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState<string | null>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const toggleExpand = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId)
  }

  return (
    <section id="blog" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title font-heading text-h2 sm:text-h1 mb-4">
            Blog
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Insights, experiences, and reflections on advertising, politics, and career development
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-medium hover:shadow-large transition-all duration-400 overflow-hidden group"
            >
              {/* Post Image */}
              {post.imageUrl && (
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-950">
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  {post.imageCredit && (
                    <div className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/50 px-2 py-1 rounded">
                      Photo by{' '}
                      {post.imageCreditUrl ? (
                        <a
                          href={post.imageCreditUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-white"
                        >
                          {post.imageCredit}
                        </a>
                      ) : (
                        post.imageCredit
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Post Content */}
              <div className="p-6 sm:p-8">
                {/* Date */}
                <div className="flex items-center text-sm text-text-tertiary mb-4">
                  <FiCalendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>

                {/* Title */}
                <h3 className="font-heading text-h4 sm:text-h3 mb-4 text-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-body text-text-secondary mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => toggleExpand(post.id)}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group/btn transition-colors"
                >
                  {expandedPost === post.id ? 'Read Less' : 'Read More'}
                  <FiArrowRight
                    className={`ml-2 transition-transform duration-300 ${
                      expandedPost === post.id ? 'rotate-90' : 'group-hover/btn:translate-x-1'
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedPost === post.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-neutral-200 dark:border-dark-700"
                  >
                    <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
                      <div className="whitespace-pre-line text-body text-text-secondary leading-relaxed">
                        {post.content.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* External Blog Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://diamonddior5.wordpress.com/gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-medium hover:shadow-large"
          >
            View More on WordPress
            <FiExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}