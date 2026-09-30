import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function HeroIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <div
      className={cn('animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700', className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
