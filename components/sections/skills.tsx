import { capabilities, skillMatrix } from '@/data/skills'
import { Reveal } from '../reveal'
import { SectionHeader } from '../section-header'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="skills-title"
          label="05 / Capabilities"
          title="What I work with."
          description="Grouped by the kind of system being built — not by a percentage bar."
        />

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.code} delay={(i % 4) * 0.04} className="group bg-background p-6 transition-colors hover:bg-surface">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg border border-cyan/30 font-mono text-xs font-semibold text-cyan transition-colors group-hover:border-cyan/70 group-hover:bg-cyan/10">
                  {c.code}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.skills.join(' · ')}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Skill matrix</h3>
        </Reveal>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {skillMatrix.map((row) => (
            <Reveal key={row.group} className="grid gap-3 py-5 md:grid-cols-[200px_1fr] md:gap-8">
              <dt className="font-display font-semibold text-foreground">{row.group}</dt>
              <dd className="flex flex-wrap gap-x-2 gap-y-2">
                {row.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border px-2.5 py-1 text-sm text-foreground/80 transition-colors hover:border-cyan/50 hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
