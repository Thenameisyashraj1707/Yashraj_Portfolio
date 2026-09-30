import { engineeringWork } from '@/data/engineering-work'
import { cn } from '@/lib/utils'
import { Reveal } from '../reveal'
import { SectionHeader, Tag } from '../section-header'
import { WorkVisualArt } from '../visuals/work-visuals'

export function EngineeringWorkSection() {
  return (
    <section aria-labelledby="work-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="work-title"
          label="03 / Professional Engineering Work"
          title="Systems shipped inside real organisations."
          description="Internship engineering work presented as case studies — no confidential data, only the shape of each problem and system."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {engineeringWork.map((w, i) => (
            <Reveal
              key={w.id}
              delay={(i % 3) * 0.05}
              className={cn(i === 0 && 'md:col-span-2 lg:col-span-2 lg:row-span-2')}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-cyan/35">
                <div
                  className={cn(
                    'relative border-b border-border bg-background/60',
                    i === 0 ? 'aspect-[16/9] lg:aspect-[16/8]' : 'aspect-[16/10]',
                  )}
                >
                  <div className="absolute inset-0 p-3 transition-transform duration-700 group-hover:scale-[1.02]">
                    <WorkVisualArt visual={w.visual} />
                  </div>
                  <span className="absolute left-3 top-3 rounded border border-border bg-background/80 px-2 py-1 font-mono text-[10px] text-muted-foreground">
                    {w.index}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan">{w.org}</p>
                  <h3 className={cn('mt-2 font-display font-semibold tracking-tight', i === 0 ? 'text-2xl' : 'text-lg')}>
                    {w.title}
                  </h3>
                  <dl className={cn('mt-4 grid gap-3 text-sm', i === 0 && 'md:grid-cols-2 md:gap-6')}>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Problem</dt>
                      <dd className="mt-1 leading-relaxed text-foreground/85">{w.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Solution</dt>
                      <dd className="mt-1 leading-relaxed text-foreground/85">{w.solution}</dd>
                    </div>
                    <div className={cn(i === 0 && 'md:col-span-2')}>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        My contribution
                      </dt>
                      <dd className="mt-1 leading-relaxed text-muted-foreground">{w.contribution}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-5">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {w.stackLabel}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {w.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
