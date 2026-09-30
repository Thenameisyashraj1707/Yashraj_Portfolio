'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

export function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => window.clearInterval(id)
  }, [roles.length, reduce])

  return (
    <p className="flex h-8 items-center gap-3 overflow-hidden font-mono text-sm text-muted-foreground sm:text-base">
      <span className="text-cyan" aria-hidden="true">
        {'>'}
      </span>
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden="true" className="relative inline-flex h-8 items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="whitespace-nowrap text-foreground"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
        <span className="caret ml-1 inline-block h-4 w-2 bg-cyan" />
      </span>
    </p>
  )
}
