import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Contact from '@/components/Contact'
import PDFSection from '@/components/PDFSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <ProjectsShowcase />
      <PDFSection />
      <Contact />
    </div>
  )
}

