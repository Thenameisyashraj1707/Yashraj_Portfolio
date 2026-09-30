import { ArrowUpRight, BadgeCheck, FileText } from 'lucide-react'
import type { Certification } from '@/data/certifications'
import { Reveal } from '../reveal'
import { SectionHeader } from '../section-header'

type CertWithAvailability = Certification & { available: boolean }

export function Certifications({ items }: { items: CertWithAvailability[] }) {
  const featured = items.find((c) => c.featured)
  const rest = items.filter((c) => !c.featured)

  return (
    <section id="certifications" aria-labelledby="certs-title" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader id="certs-title" label="06 / Certifications" title="Continuous learning, verified." />

        <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
          {featured ? (
            <Reveal className="relative overflow-hidden rounded-2xl border border-cyan/30 bg-surface p-7 md:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 size-64 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_65%)]"
              />
              <BadgeCheck className="size-7 text-cyan" aria-hidden="true" />
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan">
                Featured · {featured.issuer}
              </p>
              <h3 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight">{featured.title}</h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.credentialUrl ? (
                  <a
                    href={featured.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    Verify on Credly
                    <span className="sr-only">(opens in new tab)</span>
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
                {featured.available && featured.file ? (
                  <a
                    href={featured.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    View certificate
                  </a>
                ) : null}
              </div>
            </Reveal>
          ) : null}

          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {rest.map((c) => (
              <li key={c.title} className="flex flex-col justify-between gap-4 bg-background p-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {c.issuer ?? 'Certification'}
                    {c.date ? ` · ${c.date}` : ''}
                  </p>
                  <h3 className="mt-2 font-display font-semibold leading-snug">{c.title}</h3>
                </div>
                {c.available && c.file ? (
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 font-mono text-xs text-cyan hover:underline"
                  >
                    View
                    <span className="sr-only">{c.title} certificate (opens in new tab)</span>
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-muted-foreground">Available on request</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
