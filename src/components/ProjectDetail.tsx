import type { FeaturedProject } from '../data'
import { Phone } from './ProjectCard'

type Props = {
  project: FeaturedProject
  onBack: () => void
}

export default function ProjectDetail({ project, onBack }: Props) {
  const details = project.details
  if (!details) return null

  const siteLabel = project.href.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <article className="pt-36 sm:pt-40">
      <p className="label animate-fade-up">case study · {project.company}</p>
      <h1 className="animate-fade-up mt-4 max-w-[18ch] text-[32px] leading-[1.05] font-medium tracking-[-0.04em] [animation-delay:100ms] sm:text-[44px]">
        {project.title}
      </h1>
      <p className="animate-fade-up mt-5 max-w-[56ch] text-[15px] leading-[1.65] text-muted [animation-delay:200ms]">
        {details.overview}
      </p>

      <div className="animate-fade-up mt-8 [animation-delay:300ms]">
        <VisitButton href={project.href} label={siteLabel} />
      </div>

      <dl className="animate-fade-up mt-12 grid gap-6 border-y border-dashed border-black/10 py-6 [animation-delay:350ms] sm:grid-cols-3 sm:gap-4">
        <Meta term="role">{details.role}</Meta>
        <Meta term="stack">{details.stack.join(', ')}</Meta>
        <Meta term="scale">{details.scale}</Meta>
      </dl>

      {/* Hero: the laptop + phone mockup, or the card's phones */}
      <div className="animate-fade-up -mx-2 mt-12 rounded-[34px] bg-black/[0.025] p-2 [animation-delay:400ms] sm:-mx-4 sm:rounded-[44px] sm:p-4">
        {project.cover ? (
          <img
            src={project.cover}
            alt={`${project.company} on laptop and phone`}
            className="aspect-[3/2] w-full rounded-[26px] bg-neutral-200 object-cover ring-1 ring-black/[0.04] sm:rounded-[30px]"
          />
        ) : (
          <div
            className={`flex aspect-[4/5] items-center justify-center gap-[4%] overflow-hidden rounded-[26px] bg-gradient-to-b from-white ring-1 ring-black/[0.04] sm:aspect-[3/2] sm:rounded-[30px] ${project.tint}`}
          >
            {project.screens.map((src, i) => (
              <Phone key={src} src={src} className={i > 0 ? 'hidden sm:block' : ''} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-20 flex flex-col gap-14">
        {details.sections.map((section) => (
          <section key={section.heading} className="grid gap-3 sm:grid-cols-[1fr_2fr] sm:gap-4">
            <h2 className="label pt-1">{section.heading}</h2>
            <p className="text-[18px] leading-[1.45] tracking-[-0.015em] sm:text-[20px]">{section.body}</p>
          </section>
        ))}
      </div>

      <h2 className="label mt-24">highlights</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {details.highlights.map((item, i) => (
          <li key={item.title} className="rounded-[22px] bg-white/60 p-5 ring-1 ring-black/[0.05]">
            <p className="label">0{i + 1}</p>
            <p className="mt-6 text-[17px] leading-tight font-medium tracking-[-0.02em]">{item.title}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>

      <h2 className="label mt-24">interface</h2>
      <div className="-mx-2 mt-6 rounded-[34px] bg-black/[0.025] p-2 sm:-mx-4 sm:rounded-[44px] sm:p-4">
        {details.screenshots ? (
          <div className="flex flex-col items-center gap-8 rounded-[26px] bg-white px-4 py-8 ring-1 ring-black/[0.04] sm:flex-row sm:items-end sm:gap-6 sm:rounded-[30px] sm:px-8 sm:py-10">
            <Browser src={details.screenshots.desktop} url={siteLabel} />
            <Phone src={details.screenshots.mobile} className="!w-[58%] !max-w-[200px] sm:!w-[24%]" />
          </div>
        ) : (
          <div className="grid grid-cols-2 justify-items-center gap-6 rounded-[26px] bg-white px-4 py-10 ring-1 ring-black/[0.04] sm:grid-cols-3 sm:rounded-[30px] sm:px-8">
            {details.gallery.map((src) => (
              <Phone key={src} src={src} className="!w-full !max-w-[200px]" />
            ))}
          </div>
        )}
      </div>

      <div className="mt-24 flex flex-col items-start gap-6 border-t border-dashed border-black/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[24ch] text-[22px] leading-[1.15] font-medium tracking-[-0.03em]">
          See it live, or head back to more work.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full bg-black/[0.06] px-5 py-3 text-[14px] text-ink transition-colors hover:bg-black/[0.1]"
          >
            All projects
          </button>
          <VisitButton href={project.href} label="Visit site" />
        </div>
      </div>
    </article>
  )
}

function Meta({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="label">{term}</dt>
      <dd className="mt-2 text-[14px] leading-snug">{children}</dd>
    </div>
  )
}

function Browser({ src, url }: { src: string; url: string }) {
  return (
    <div className="w-full flex-1 overflow-hidden rounded-[14px] bg-neutral-100 shadow-[0_12px_30px_-12px_rgb(0_0_0/0.3)] ring-1 ring-black/[0.08]">
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-2.5 rounded-full bg-black/[0.12]" />
        ))}
        <span className="label mx-auto truncate rounded-full bg-white px-3 py-0.5 !text-[10px]">{url}</span>
      </div>
      <img src={src} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
    </div>
  )
}

function VisitButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] text-white transition-colors hover:bg-accent"
    >
      {label}
      <svg
        viewBox="0 0 16 16"
        aria-hidden
        className="size-3.5 fill-none stroke-current stroke-[1.4] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path d="M4 12 12 4M5.5 4H12v6.5" />
      </svg>
    </a>
  )
}
