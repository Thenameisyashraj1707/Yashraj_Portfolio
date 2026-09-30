import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/data/profile'
import { GithubIcon, LinkedinIcon } from '../brand-icons'
import { Reveal } from '../reveal'
import { SectionLabel } from '../section-header'

const channels = [
  { label: 'Email', value: profile.email, href: profile.mailto, icon: Mail, external: false },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone, external: false },
  { label: 'LinkedIn', value: 'in/yashraj-sah', href: profile.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: 'Thenameisyashraj1707', href: profile.github, icon: GithubIcon, external: true },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-7 md:p-14">
          <div
            aria-hidden="true"
            className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2),transparent_65%)]"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <Reveal>
              <SectionLabel>08 / Contact</SectionLabel>
              <h2
                id="contact-title"
                className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
              >
                {"Let's build something "}
                <span className="text-gradient">intelligent.</span>
              </h2>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">{profile.openTo}</p>
              <a
                href={profile.mailto}
                className="group mt-9 inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:shadow-[0_0_34px_-4px_rgba(34,211,238,0.7)]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email me
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <p className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <MapPin className="size-3.5 text-cyan" aria-hidden="true" />
                {profile.location}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="divide-y divide-border rounded-xl border border-border bg-background/70">
                {channels.map(({ label, value, href, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-2/60"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border text-cyan">
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {label}
                        </span>
                        <span className="block truncate text-foreground">{value}</span>
                      </span>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                        aria-hidden="true"
                      />
                      {external ? <span className="sr-only">(opens in new tab)</span> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
