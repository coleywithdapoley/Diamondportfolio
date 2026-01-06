import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Optimized font loading with display swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://diamondbazile.com'), // Update with your actual domain
  title: {
    default: 'Diamond Bazile - Strategic Communications & Marketing Professional',
    template: '%s | Diamond Bazile',
  },
  description: 'Senior Advertising major from Detroit, Michigan specializing in strategic legal communications, crisis management, and dynamic marketing campaigns for entertainment industry professionals.',
  keywords: [
    'Diamond Bazile',
    'Advertising',
    'Strategic Communications',
    'Crisis Management',
    'Marketing',
    'PR & Crisis',
    'Beauty & Lifestyle Marketing',
    'Creative Tech',
    'Detroit',
    'Howard University',
    'Portfolio',
  ],
  authors: [{ name: 'Diamond Bazile' }],
  creator: 'Diamond Bazile',
  publisher: 'Diamond Bazile',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diamondbazile.com',
    siteName: 'Diamond Bazile Portfolio',
    title: 'Diamond Bazile - Strategic Communications & Marketing Professional',
    description: 'Senior Advertising major specializing in strategic legal communications, crisis management, and dynamic marketing campaigns for entertainment industry professionals.',
    images: [
      {
        url: '/images/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Diamond Bazile - Professional Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamond Bazile - Strategic Communications & Marketing Professional',
    description: 'Senior Advertising major specializing in strategic legal communications, crisis management, and dynamic marketing campaigns.',
    images: ['/images/og-image.jpg'],
    creator: '@diamondbazile', // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Diamond Bazile',
    jobTitle: 'Strategic Communications & Marketing Professional',
    description: 'Senior Advertising major from Detroit, Michigan specializing in strategic legal communications, crisis management, and dynamic marketing campaigns for entertainment industry professionals.',
    url: 'https://diamondbazile.com',
    sameAs: [
      'https://www.linkedin.com/in/advertisingdiamondbazile/',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Howard University',
    },
    knowsAbout: [
      'Strategic Communications',
      'Crisis Management',
      'Media Planning',
      'Public Relations',
      'Marketing Strategy',
      'Beauty & Lifestyle Marketing',
      'Creative Technology',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <body className={inter.className}>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

