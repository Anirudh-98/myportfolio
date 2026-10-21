import { profile } from '../data'
import PhotoStack from './PhotoStack'

export default function About() {
  const { about } = profile

  return (
    <section className="animate-fade-up pt-36 sm:pt-40">
      {/* Intro video only shows once one is added in src/data.ts */}
      {about.video && (
        <>
          <h2 className="label">60s intro video</h2>
          <div className="-mx-4 mt-6 mb-16 aspect-video overflow-hidden bg-neutral-900">
            <video
              src={about.video}
              poster={about.videoPoster}
              controls
              preload="metadata"
              className="size-full object-cover"
            />
          </div>
        </>
      )}

      <div className="grid items-center gap-16 sm:grid-cols-2 sm:gap-4">
        <div>
          <h2 className="label">about me</h2>
          <p className="mt-6 max-w-[330px] text-[24px] leading-[1.15] font-medium tracking-[-0.03em]">
            {about.heading}
          </p>
          <div className="mt-5 flex max-w-[330px] flex-col gap-3 text-[13px] leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <PhotoStack photos={about.photos} />
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-dashed border-black/10 pt-8">
        <a href={`mailto:${profile.email}`} className="label flex items-center gap-1.5 !text-ink hover:!text-accent">
          <svg viewBox="0 0 16 16" aria-hidden className="size-4 fill-none stroke-current stroke-[1.25]" strokeLinecap="round">
            <path d="M10.5 4.5 5.4 9.6a1.3 1.3 0 0 0 1.8 1.8l5.4-5.4a2.6 2.6 0 0 0-3.7-3.7L3.5 7.7a3.9 3.9 0 0 0 5.5 5.5l4-4" />
          </svg>
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.tel}`} className="label flex items-center gap-1.5 !text-ink hover:!text-accent">
          <svg viewBox="0 0 16 16" aria-hidden className="size-4 fill-none stroke-current stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5.6 2.5H3.8a1.3 1.3 0 0 0-1.3 1.4 10.5 10.5 0 0 0 9.6 9.6 1.3 1.3 0 0 0 1.4-1.3v-1.8l-2.6-1.1-1.3 1.3a7 7 0 0 1-3.1-3.1l1.3-1.3z" />
          </svg>
          {profile.phone.display}
        </a>
        <a
          href={profile.previously.href}
          target="_blank"
          rel="noreferrer"
          className="label flex items-center gap-1.5 !text-ink hover:!text-accent"
        >
          <svg viewBox="0 0 16 16" aria-hidden className="size-4 fill-none stroke-current stroke-[1.25]" strokeLinecap="round">
            <path d="M4 12 12 4M5.5 4H12v6.5" />
          </svg>
          {profile.previously.label.toLowerCase()}.com
        </a>
      </div>
    </section>
  )
}
