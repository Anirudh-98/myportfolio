import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect, useRef, useState } from 'react'
import About from './components/About'
import { CursorDot /* , SoundToggle */ } from './components/Ambient'
import Footer from './components/Footer'
import Header, { type View } from './components/Header'
import MobileMenu from './components/MobileMenu'
import ProjectDetail from './components/ProjectDetail'
import Projects from './components/Projects'
import type { FeaturedProject } from './data'

function App() {
  const [view, setView] = useState<View>('projects')
  const [project, setProject] = useState<FeaturedProject | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const projectsScroll = useRef(0)

  // Smooth scrolling (skipped for people who prefer reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.09 })
    lenisRef.current = lenis
    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo = (y: number) => {
    if (lenisRef.current) lenisRef.current.scrollTo(y, { immediate: true })
    else window.scrollTo(0, y)
  }

  const changeView = (next: View) => {
    setView(next)
    setProject(null)
    scrollTo(0)
  }

  const openProject = (next: FeaturedProject) => {
    projectsScroll.current = window.scrollY
    setProject(next)
    scrollTo(0)
  }

  // Return to the card the visitor came from
  const closeProject = () => {
    setProject(null)
    requestAnimationFrame(() => scrollTo(projectsScroll.current))
  }

  const onAbout = view === 'about'
  const onSubpage = onAbout || project !== null

  return (
    <>
      <CursorDot />
      <div className="relative mx-auto min-h-svh max-w-[750px] px-4">
        <GuideLines />

        {onSubpage && (
          <button
            type="button"
            onClick={() => (project ? closeProject() : changeView('projects'))}
            aria-label="Back to projects"
            className="absolute top-14 left-4 z-20 grid size-11 place-items-center rounded-full bg-black/[0.03] text-muted ring-1 ring-black/[0.04] transition-colors hover:bg-black/[0.06] hover:text-ink"
          >
            <svg viewBox="0 0 16 16" className="size-5 fill-none stroke-current stroke-[1.1]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 8H3m4-4L3 8l4 4" />
            </svg>
          </button>
        )}

        <div
          className={`absolute right-4 z-20 flex gap-2 ${
            onSubpage ? 'top-14' : 'top-20 sm:top-6 lg:top-14 lg:-right-24'
          }`}
        >
          {/* Sound toggle hidden for now */}
          {/* <SoundToggle /> */}
          <MobileMenu onViewChange={changeView} />
        </div>

        <div className="relative">
          {project ? (
            <main>
              <ProjectDetail project={project} onBack={closeProject} />
            </main>
          ) : onAbout ? (
            <main>
              <About />
            </main>
          ) : (
            <>
              <Header view={view} onViewChange={changeView} />
              <main className="mt-28 sm:mt-48">
                <Projects onOpen={openProject} />
              </main>
            </>
          )}

          <Footer />
        </div>
      </div>
    </>
  )
}

/** Dashed 6-column guides (2 on phones) running the full page height. */
function GuideLines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 guide-x">
      <div className="grid h-full grid-cols-2 gap-4 px-4 sm:grid-cols-6">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={`guide-x ${i >= 2 ? 'hidden sm:block' : ''}`} />
        ))}
      </div>
    </div>
  )
}

export default App
