import { experience } from '@/data/experience'
import { cn } from '@/lib/utils'
import { Reveal } from '../reveal'
import { SectionHeader, Tag } from '../section-header'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="experience-title"
          label="02 / Experience"
          title="Where I have built."
          description="Internships across enterprise Agentic AI, production automation and AI research."
        />

        <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-gradient-to-b before:from-cyan/60 before:via-violet/40 before:to-transparent md:before:left-[27px]">
          {experience.map((job, i) => {
            const major = Boolean(job.details || job.selectedWork)
            return (
              <li key={job.id} className="relative pl-14 md:pl-20">
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute left-0 top-5 grid size-10 place-items-center rounded-lg border bg-background font-mono text-[10px] font-semibold md:size-14 md:text-xs',
                    i === 0 ? 'border-cyan/60 text-cyan' : 'border-border text-muted-foreground',
                  )}
                >
                  {job.shortName}
                </span>
                <Reveal
                  delay={0.04 * i}
                  className={cn(
                    'rounded-xl border border-border p-5 transition-colors hover:border-cyan/30 md:p-7',
                    major ? 'bg-surface' : 'bg-transparent',
                  )}
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{job.company}</h3>
                      <p className="mt-1 text-cyan">{job.role}</p>
                    </div>
                    <p className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{job.summary}</p>

                  {major ? (
                    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto]">
                      <div className="space-y-5">
                        {job.details?.map((d) => (
                          <div key={d.label}>
                            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                              {d.label}
                            </p>
                            <div className="mt-2.5 flex flex-wrap gap-1.5">
                              {d.items.map((it) => (
                                <Tag key={it} className="border-violet/25 text-foreground/80">
                                  {it}
                                </Tag>
                              ))}
                            </div>
                          </div>
                        ))}
                        {job.selectedWork ? (
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                              Selected work
                            </p>
                            <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                              {job.selectedWork.map((w) => (
                                <li key={w} className="flex items-center gap-2 text-sm text-foreground/90">
                                  <span className="size-1 rounded-full bg-cyan" aria-hidden="true" />
                                  {w}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {job.tech ? (
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                              Stack
                            </p>
                            <div className="mt-2.5 flex flex-wrap gap-1.5">
                              {job.tech.map((t) => (
                                <Tag key={t}>{t}</Tag>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                      {job.highlight ? (
                        <div className="rounded-lg border border-cyan/25 bg-cyan/5 p-5 lg:w-64">
                          <p className="font-display text-4xl font-semibold tracking-tight text-cyan">
                            {job.highlight.value}
                          </p>
                          <p className="mt-2 text-sm leading-snug text-foreground">{job.highlight.label}</p>
                          <p className="mt-3 text-xs leading-snug text-muted-foreground">{job.highlight.disclaimer}</p>
                        </div>
                      ) : null}
                    </div>
                  ) : job.tech ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  ) : null}
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
