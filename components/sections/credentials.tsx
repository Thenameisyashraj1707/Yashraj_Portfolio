'use client'

import { Download, ExternalLink, FileText, ImageIcon, Lock, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { documentCategories, type DocumentCategory, type PortfolioDocument } from '@/data/documents'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { SectionHeader } from '../section-header'

type Doc = PortfolioDocument & { available: boolean }

export function Credentials({ docs }: { docs: Doc[] }) {
  const [filter, setFilter] = useState<DocumentCategory | 'All'>('All')
  const [preview, setPreview] = useState<Doc | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const visible = filter === 'All' ? docs : docs.filter((d) => d.category === filter)
  const tabs: { id: DocumentCategory | 'All'; label: string }[] = [
    { id: 'All', label: 'All' },
    ...documentCategories
      .filter((c) => docs.some((d) => d.category === c.id))
      .map((c) => ({ id: c.id, label: c.label })),
  ]

  const open = (doc: Doc) => {
    setPreview(doc)
    dialogRef.current?.showModal()
  }
  const close = () => {
    dialogRef.current?.close()
  }

  return (
    <section id="credentials" aria-labelledby="credentials-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="credentials-title"
          label="07 / Credentials"
          title="Document vault."
          description="Academic, internship and certification documents. Items not yet uploaded are available on request."
        />

        <div role="tablist" aria-label="Filter documents" className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {tabs.map((t) => {
            const count = t.id === 'All' ? docs.length : docs.filter((d) => d.category === t.id).length
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={filter === t.id}
                onClick={() => setFilter(t.id)}
                className={cn(
                  'shrink-0 rounded-lg border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors',
                  filter === t.id
                    ? 'border-cyan/60 bg-cyan/10 text-cyan'
                    : 'border-border text-muted-foreground hover:text-foreground',
                )}
              >
                {t.label}
                <span className="ml-2 opacity-60">{count}</span>
              </button>
            )
          })}
        </div>

        <ul role="tabpanel" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d) => {
            const code = documentCategories.find((c) => c.id === d.category)?.code
            return (
              <li
                key={d.file}
                className={cn(
                  'flex flex-col rounded-xl border bg-surface p-5 transition-colors',
                  d.available ? 'border-border hover:border-cyan/35' : 'border-dashed border-border',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background text-cyan">
                    {d.type === 'image' ? (
                      <ImageIcon className="size-4" aria-hidden="true" />
                    ) : (
                      <FileText className="size-4" aria-hidden="true" />
                    )}
                  </span>
                  <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {code} · {d.type.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-semibold leading-snug">{d.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {d.issuer}
                  {d.date ? ` · ${d.date}` : ''}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-5">
                  {d.available ? (
                    <>
                      <button
                        type="button"
                        onClick={() => open(d)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:border-cyan/50"
                      >
                        Preview
                        <span className="sr-only">{d.title}</span>
                      </button>
                      <a
                        href={d.file}
                        download
                        className="grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`Download ${d.title}`}
                      >
                        <Download className="size-3.5" aria-hidden="true" />
                      </a>
                    </>
                  ) : (
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(`Document request: ${d.title}`)}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-cyan"
                    >
                      <Lock className="size-3.5" aria-hidden="true" />
                      Available on request
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setPreview(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-labelledby="doc-preview-title"
        className="m-auto h-[88dvh] w-[min(960px,94vw)] max-w-none overflow-hidden rounded-2xl border border-border bg-surface p-0 text-foreground"
      >
        {preview ? (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
              <p id="doc-preview-title" className="truncate font-display font-semibold">
                {preview.title}
              </p>
              <div className="flex shrink-0 items-center gap-1">
                <a
                  href={preview.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                  aria-label="Open in new tab"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                  aria-label="Close preview"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 bg-background">
              {preview.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview.file} alt={preview.title} className="size-full object-contain" />
              ) : (
                <iframe src={preview.file} title={preview.title} className="size-full" />
              )}
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}
