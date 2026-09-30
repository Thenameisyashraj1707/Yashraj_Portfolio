const C = '#22d3ee'
const V = '#8b5cf6'
const M = '#d946ef'
const DIM = 'rgba(148,163,199,0.22)'

const layers = [
  { x: 60, labels: ['query', 'context', 'memory'] },
  { x: 190, labels: ['planner', 'retriever', 'tool-use', 'critic'] },
  { x: 320, labels: ['llm', 'vector db'] },
  { x: 440, labels: ['decision'] },
]

function ys(n: number) {
  const gap = 300 / (n + 1)
  return Array.from({ length: n }, (_, i) => 40 + gap * (i + 1))
}

export function HeroVisual() {
  const pts = layers.map((l) => ys(l.labels.length).map((y) => ({ x: l.x, y })))
  return (
    <div className="relative w-full">
      <div className="glass relative overflow-hidden rounded-2xl border border-border p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-cyan pulse-soft" aria-hidden="true" />
            agent_runtime.live
          </span>
          <span className="hidden sm:inline">v2026.09</span>
        </div>
        <svg viewBox="0 0 500 380" className="h-auto w-full" aria-hidden="true" fontFamily="var(--font-mono)">
          <defs>
            <linearGradient id="hv-edge" x1="0" x2="1">
              <stop offset="0" stopColor={C} stopOpacity="0.5" />
              <stop offset="1" stopColor={V} stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[80, 140, 200, 260, 320].map((y) => (
            <line key={y} x1="0" x2="500" y1={y} y2={y} stroke="rgba(148,163,199,0.06)" />
          ))}
          {pts.slice(0, -1).map((col, li) =>
            col.flatMap((a, ai) =>
              pts[li + 1].map((b, bi) => (
                <g key={`${li}-${ai}-${bi}`}>
                  <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={DIM} strokeWidth="0.6" />
                  {(ai + bi + li) % 3 === 0 ? (
                    <line
                      className="flow-line"
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke="url(#hv-edge)"
                      strokeWidth="1"
                      style={{ animationDelay: `${(ai + bi) * 0.3}s` }}
                    />
                  ) : null}
                </g>
              )),
            ),
          )}
          {pts.map((col, li) =>
            col.map((p, pi) => {
              const color = li === 3 ? M : li === 2 ? V : C
              return (
                <g key={`${li}-${pi}`}>
                  <circle cx={p.x} cy={p.y} r="11" fill={color} fillOpacity="0.07" className="pulse-soft" style={{ animationDelay: `${(li + pi) * 0.5}s` }} />
                  <circle cx={p.x} cy={p.y} r="5" fill="#05070d" stroke={color} strokeWidth="1.2" />
                  <text x={p.x} y={p.y + 22} textAnchor="middle" fontSize="9" fill="rgba(230,235,245,0.55)">
                    {layers[li].labels[pi]}
                  </text>
                </g>
              )
            }),
          )}
          {['INPUT', 'AGENTS', 'MODELS', 'OUTPUT'].map((l, i) => (
            <text key={l} x={layers[i].x} y="28" textAnchor="middle" fontSize="9" letterSpacing="2" fill={i === 3 ? M : C} fillOpacity="0.8">
              {l}
            </text>
          ))}
        </svg>
        <div className="mt-2 grid grid-cols-3 gap-2 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>
            <span className="text-cyan">rag</span> · retrieval
          </span>
          <span className="text-center">
            <span className="text-violet">multi</span>-agent
          </span>
          <span className="text-right">
            <span className="text-magenta">tool</span> calls
          </span>
        </div>
      </div>
    </div>
  )
}
