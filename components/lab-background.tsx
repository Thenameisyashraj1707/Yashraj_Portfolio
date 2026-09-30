const particles = [
  [8, 22], [18, 64], [27, 12], [36, 82], [44, 38], [53, 71], [61, 18], [69, 55],
  [77, 88], [84, 30], [91, 62], [13, 44], [48, 94], [72, 6], [95, 14], [4, 86],
]

export function LabBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(59,130,246,0.14),transparent_60%),radial-gradient(ellipse_60%_50%_at_0%_40%,rgba(139,92,246,0.08),transparent_60%)]" />
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_90%_70%_at_50%_20%,black,transparent_80%)]" />
      {particles.map(([x, y], i) => (
        <span
          key={i}
          className="pulse-soft absolute h-px w-px rounded-full bg-cyan shadow-[0_0_6px_1px_rgba(34,211,238,0.6)]"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(i % 6) * 0.7}s` }}
        />
      ))}
    </div>
  )
}
