import { Award, GraduationCap } from 'lucide-react'
import { buildProcess, profile } from '@/data/profile'
import { Reveal } from '../reveal'
import { SectionHeader } from '../section-header'
import { HeroVisual } from '../visuals/hero-visual'

export function About() {
  const { education, achievement } = profile
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader id="about-title" label="01 / About" title="AI engineering, grounded in real software." />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {profile.about.map((p, i) => (
                <p key={i} className={i === 2 ? 'text-foreground' : undefined}>
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.05} className="rounded-xl border border-border bg-surface p-5">
                <GraduationCap className="size-5 text-cyan" aria-hidden="true" />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {education.degree} · {education.period}
                </p>
                <p className="mt-2 font-display font-semibold leading-snug">{education.field}</p>
                <p className="mt-1 text-sm text-muted-foreground">{education.specialization}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="text-muted-foreground">{education.institution}</span>
                  <span className="font-mono text-cyan">CGPA {education.cgpa}</span>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="rounded-xl border border-border bg-surface p-5">
                <Award className="size-5 text-violet" aria-hidden="true" />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Achievement
                </p>
                <p className="mt-2 font-display text-3xl font-semibold tracking-tight">{achievement.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{achievement.event}</p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <HeroVisual />
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              How I build
            </p>
          </Reveal>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-6">
            {buildProcess.map((s, i) => (
              <li key={s.step} className="group relative bg-background p-5 transition-colors hover:bg-surface">
                <Reveal delay={i * 0.05}>
                  <span className="font-mono text-xs text-cyan">{s.step}</span>
                  <p className="mt-6 font-display font-semibold leading-snug">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan to-violet transition-transform duration-500 group-hover:scale-x-100"
                  />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
