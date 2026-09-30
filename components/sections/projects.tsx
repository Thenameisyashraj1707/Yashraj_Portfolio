import { ArrowUpRight, Terminal } from 'lucide-react'
import { projects, type Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import { GithubIcon } from '../brand-icons'
import { Reveal } from '../reveal'
import { SectionHeader, Tag } from '../section-header'
import { ProjectVisual } from '../visuals/project-visuals'

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-cyan/50"
      >
        <GithubIcon className="size-4" />
        GitHub
        <span className="sr-only">repository for {project.name} (opens in new tab)</span>
        <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
      </a>
      {project.liveDemo ? (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan px-3.5 py-2 text-sm font-semibold text-primary-foreground"
        >
          Live demo
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  )
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em]">
      <span className="text-cyan">{project.index}</span>
      <span className="h-px w-6 bg-border" aria-hidden="true" />
      <span className="text-muted-foreground">{project.category}</span>
    </p>
  )
}

function Architecture({ steps }: { steps: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Architecture</p>
      <ol className="mt-3 flex flex-wrap items-center gap-y-2 text-sm">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center">
            <span className="rounded-md border border-border bg-background/70 px-2.5 py-1 text-foreground/85">{s}</span>
            {i < steps.length - 1 ? (
              <span className="px-1.5 font-mono text-cyan" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function TechList({ tech }: { tech: string[] }) {
  if (!tech.length) return null
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  )
}

function Cinematic({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[4/3] border-b border-border bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_70%)] sm:aspect-[16/8] lg:aspect-[16/7]">
        <div className="absolute inset-0 p-4 transition-transform duration-700 group-hover:scale-[1.015] sm:p-8">
          <ProjectVisual visual={project.visual} />
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-cyan/40 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
          Flagship
        </span>
      </div>
      <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <Meta project={project} />
          <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">{project.name}</h3>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{project.tagline}</p>
          <div className="mt-7">
            <Links project={project} />
          </div>
        </div>
        <div className="space-y-6">
          {project.capabilities ? (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Decision capabilities
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
                {project.capabilities.map((c) => (
                  <li key={c} className="bg-surface px-3 py-2.5 text-sm text-foreground/90">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.architecture ? <Architecture steps={project.architecture} /> : null}
          <TechList tech={project.tech} />
        </div>
      </div>
    </article>
  )
}

function Split({ project, reverse }: { project: Project; reverse?: boolean }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-2">
      <div
        className={cn(
          'relative aspect-[16/11] border-b border-border bg-background/60 lg:aspect-auto lg:min-h-[440px] lg:border-b-0',
          reverse ? 'lg:order-2 lg:border-l' : 'lg:border-r',
        )}
      >
        <div className="absolute inset-0 p-5 transition-transform duration-700 group-hover:scale-[1.02] md:p-8">
          <ProjectVisual visual={project.visual} />
        </div>
      </div>
      <div className="flex flex-col p-6 md:p-10">
        <Meta project={project} />
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">{project.name}</h3>
        {project.note ? (
          <p className="mt-2 font-mono text-[11px] text-muted-foreground">{project.note}</p>
        ) : null}
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{project.tagline}</p>
        {project.problem ? (
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Problem</dt>
              <dd className="mt-1 leading-relaxed text-foreground/85">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Solution</dt>
              <dd className="mt-1 leading-relaxed text-foreground/85">{project.solution}</dd>
            </div>
          </dl>
        ) : null}
        {project.architecture ? (
          <div className="mt-6">
            <Architecture steps={project.architecture} />
          </div>
        ) : null}
        <div className="mt-6">
          <TechList tech={project.tech} />
        </div>
        <div className="mt-auto pt-8">
          <Links project={project} />
        </div>
      </div>
    </article>
  )
}

function Compact({ project }: { project: Project }) {
  const terminal = project.layout === 'terminal'
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-cyan/35">
      {terminal ? (
        <div className="flex items-center gap-2 border-b border-border bg-background/80 px-4 py-2.5 font-mono text-[10px] text-muted-foreground">
          <Terminal className="size-3.5 text-cyan" aria-hidden="true" />
          ~/{project.id}
        </div>
      ) : null}
      <div className="relative aspect-[16/10] border-b border-border bg-background/60">
        <div className="absolute inset-0 p-3 transition-transform duration-700 group-hover:scale-[1.03]">
          <ProjectVisual visual={project.visual} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Meta project={project} />
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
        {project.note ? <p className="mt-2 font-mono text-[10px] text-muted-foreground/80">{project.note}</p> : null}
        {project.architecture ? (
          <p className="mt-3 font-mono text-[11px] text-foreground/75">{project.architecture.join(' → ')}</p>
        ) : null}
        {project.tech.length ? (
          <div className="mt-4">
            <TechList tech={project.tech} />
          </div>
        ) : null}
        <div className="mt-auto pt-5">
          <Links project={project} />
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [flagship, ...rest] = projects
  const featured = rest.slice(0, 3)
  const more = rest.slice(3)

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="projects-title"
          label="04 / Projects"
          title="A lab of intelligent systems."
          description="Agentic AI, generative design, LLM engineering, computer vision and backend work — each with its own visual story."
        />

        <div className="space-y-6">
          <Reveal>
            <Cinematic project={flagship} />
          </Reveal>
          {featured.map((p, i) => (
            <Reveal key={p.id}>
              <Split project={p} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-6 mt-20 flex items-end justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-tight">More experiments</h3>
          <a
            href="https://github.com/Thenameisyashraj1707"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-cyan"
          >
            All repositories
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05} className="h-full">
              <Compact project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
