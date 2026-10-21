import type { FeaturedProject } from '../data'
import ArrowIcon from './ArrowIcon'

type Props = {
  project: FeaturedProject
  onOpen: (project: FeaturedProject) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  // Projects with details open their own page; the rest link straight out
  const handleClick = (event: React.MouseEvent) => {
    if (!project.details || event.metaKey || event.ctrlKey) return
    event.preventDefault()
    onOpen(project)
  }

  return (
    <a href={project.href} onClick={handleClick} className="group block">
      {/* Outer frame spans the full column; the inner card lines up with the content edges */}
      <div className="-mx-2 rounded-[34px] bg-black/[0.025] p-2 sm:-mx-4 sm:rounded-[44px] sm:p-4">
        {project.cover ? (
          <div className="aspect-[3/2] overflow-hidden rounded-[26px] bg-neutral-200 ring-1 ring-black/[0.04] sm:rounded-[30px]">
            <img
              src={project.cover}
              alt={`${project.company} on laptop and phone`}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div
            className={`relative flex aspect-[4/5] items-center justify-center gap-[4%] overflow-hidden rounded-[26px] bg-gradient-to-b from-white ring-1 ring-black/[0.04] sm:aspect-[3/2] sm:rounded-[30px] ${project.tint} ${
              project.align === 'end' ? 'sm:items-end sm:pb-[6%]' : 'sm:items-start sm:pt-[7%]'
            }`}
          >
            {project.screens.map((src, i) => (
              <Phone key={src} src={src} className={i > 0 ? 'hidden sm:block' : ''} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="label max-sm:text-[13px]">{project.company}</p>
        <span className="sm:hidden">
          <ArrowIcon />
        </span>
      </div>
      <div className="mt-2 grid gap-3 sm:grid-cols-2 sm:gap-6">
        <h3 className="text-[22px] leading-[1.15] font-medium tracking-[-0.03em] sm:max-w-[16ch] sm:text-[20px] sm:tracking-[-0.02em]">
          {project.title}
        </h3>
        <div className="flex items-start justify-between gap-6">
          <p className="text-[15px] leading-[1.65] text-muted sm:max-w-[34ch] sm:text-[13px] sm:leading-relaxed">
            {project.summary}
          </p>
          <span className="hidden sm:block">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </a>
  )
}

export function Phone({ src, className = '' }: { src: string; className?: string }) {
  return (
    <div
      className={`w-[58%] max-w-[210px] shrink-0 rounded-[28px] bg-neutral-900 p-[5px] shadow-[0_12px_30px_-10px_rgb(0_0_0/0.35)] transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:w-[36%] sm:max-w-[190px] sm:rounded-[30px] sm:p-[6px] ${className}`}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[23px] bg-white sm:rounded-[24px]">
        <img src={src} alt="" loading="lazy" className="size-full object-cover object-top" />
        <div className="absolute top-2 left-1/2 h-4 w-1/3 -translate-x-1/2 rounded-full bg-neutral-900" />
      </div>
    </div>
  )
}
