'use client'

import { UserRound } from 'lucide-react'
import { useState } from 'react'
import { profile } from '@/data/profile'

export function ProfilePortrait({ available }: { available: boolean }) {
  const [failed, setFailed] = useState(false)
  const showImage = available && !failed

  return (
    <div className="relative mx-auto grid aspect-square w-[220px] place-items-center sm:w-[260px] lg:w-[320px]">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="spin-slow absolute inset-[-12%] size-[124%] text-cyan/30"
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 5" />
        <circle cx="100" cy="4" r="2" fill="#22d3ee" />
        <circle cx="196" cy="100" r="1.4" fill="#8b5cf6" />
      </svg>
      <div
        aria-hidden="true"
        className="absolute inset-[-4%] rounded-full border border-violet/20"
      />
      <div className="relative size-full overflow-hidden rounded-full border border-cyan/40 bg-surface-2 p-1.5 shadow-[0_0_60px_-18px_rgba(34,211,238,0.55)]">
        <div className="relative size-full overflow-hidden rounded-full bg-gradient-to-br from-surface-2 via-surface to-violet/20">
          {showImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={320}
              height={320}
              onError={() => setFailed(true)}
              className="size-full object-cover object-[50%_25%]"
            />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-3 text-muted-foreground">
              <UserRound className="size-16 text-cyan/60" strokeWidth={1.2} aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{profile.name}</span>
              <span className="sr-only">Profile photo coming soon</span>
            </div>
          )}
        </div>
      </div>
      <span className="absolute bottom-[6%] right-[4%] flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
        <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" aria-hidden="true" />
        Open to work
      </span>
    </div>
  )
}
