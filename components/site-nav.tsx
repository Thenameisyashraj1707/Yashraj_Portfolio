'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '@/data/profile'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled || open
          ? 'border-border bg-background/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#home" className="group flex shrink-0 items-center gap-2.5" aria-label="Yashraj Sah — home">
          <span className="grid size-8 place-items-center rounded-lg border border-cyan/30 bg-surface-2 font-mono text-xs font-semibold text-cyan transition-colors group-hover:border-cyan/70">
            YS
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? 'true' : undefined}
                className={cn(
                  'relative rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors',
                  active === item.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
                {active === item.href ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-px h-px bg-cyan"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.mailto}
            className="hidden items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/20 sm:inline-flex"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            Email me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-lg border border-border bg-surface-2/70 text-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-border bg-background/95 xl:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-5 py-6 sm:px-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.08 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-border py-4 font-display text-2xl font-medium tracking-tight text-foreground"
                  >
                    <span className="font-mono text-xs text-cyan">{String(i).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-6">
                <a
                  href={profile.mailto}
                  className="flex items-center justify-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-cyan"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {profile.email}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
