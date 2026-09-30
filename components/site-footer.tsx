import { ArrowUp } from 'lucide-react'
import { profile } from '@/data/profile'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:px-8">
        <p>
          {'© 2026 '}
          {profile.name} · {profile.primaryRole}
        </p>
        <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan">
          Back to top
          <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
