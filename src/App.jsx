import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="bg-[#0a0a0f] text-slate-400 font-sans antialiased leading-relaxed min-h-screen selection:bg-red-900/60 selection:text-red-200">
      <div className="grid-bg" />

      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-14 pt-24 lg:pt-0">
        <div className="lg:flex lg:justify-between lg:gap-8">
          <Sidebar />

          <main className="pt-16 pb-24 lg:w-[58%] lg:py-28">
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <ContactCTA />
            <Footer />
          </main>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
