import { ArrowDownRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { GithubIcon, LinkedinIcon } from '../brand-icons'
import { ProfilePortrait } from '../profile-portrait'
import { HeroIn as Reveal } from '../hero-in'
import { RoleRotator } from '../role-rotator'

export function Hero({ photoAvailable, resumeAvailable }: { photoAvailable: boolean; resumeAvailable: boolean }) {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-12 sm:px-8 md:pt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-10 lg:pb-24">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <MapPin className="size-3.5 text-cyan" aria-hidden="true" />
              {profile.location}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="hero-title"
              className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-5">
            <RoleRotator roles={profile.roles} />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-balance font-display text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
              {profile.headline}
            </p>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">{profile.subtitle}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px_rgba(34,211,238,0.7)]"
              >
                View Projects
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              {resumeAvailable ? (
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/70 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-cyan/50"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download Resume
                </a>
              ) : (
                <a
                  href={`mailto:${profile.email}?subject=Resume%20request%20-%20Yashraj%20Sah`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/70 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-cyan/50"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Resume on request
                </a>
              )}
              <a
                href={profile.mailto}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email Me
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
                className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-cyan/50 hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
                className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-cyan/50 hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {profile.education.institution} · {profile.education.period}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <ProfilePortrait available={photoAvailable} />
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 border-y border-border md:grid-cols-4">
          {profile.metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-2 py-6 sm:px-6 ${i % 2 ? 'border-l' : ''} ${i > 1 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''} border-border`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{m.label}</dt>
              <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
