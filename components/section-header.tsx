import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function SectionLabel({ children, className }: { children: string; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-cyan to-transparent" />
      {children}
    </p>
  )
}

export function SectionHeader({
  label,
  title,
  description,
  id,
  className,
}: {
  label: string
  title: string
  description?: string
  id?: string
  className?: string
}) {
  return (
    <Reveal className={cn('mb-12 max-w-3xl md:mb-16', className)}>
      <SectionLabel>{label}</SectionLabel>
      <h2
        id={id}
        className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[11px] leading-none text-muted-foreground transition-colors',
        className,
      )}
    >
      {children}
    </span>
  )
}
