import type { VisualKey } from '@/data/projects'

const C = '#22d3ee'
const B = '#3b82f6'
const V = '#8b5cf6'
const M = '#d946ef'
const DIM = 'rgba(148,163,199,0.28)'
const FAINT = 'rgba(148,163,199,0.12)'

type SvgProps = { className?: string }

function Frame({ children, className }: SvgProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 260"
      className={className ?? 'size-full'}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      fontFamily="var(--font-mono)"
    >
      {children}
    </svg>
  )
}

function SupplyChain(p: SvgProps) {
  const nodes = [
    { x: 40, y: 60, l: 'SUPPLIER' },
    { x: 40, y: 200, l: 'SUPPLIER' },
    { x: 150, y: 130, l: 'PLANT' },
    { x: 260, y: 60, l: 'WAREHOUSE' },
    { x: 260, y: 200, l: 'WAREHOUSE' },
    { x: 360, y: 130, l: 'DEMAND' },
  ]
  const edges = [
    [0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [3, 4],
  ]
  return (
    <Frame {...p}>
      {edges.map(([a, b], i) => (
        <g key={i}>
          <line x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke={DIM} />
          <line
            className="flow-line"
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke={i % 2 ? V : C}
            strokeOpacity="0.8"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        </g>
      ))}
      {nodes.map((n, i) => (
        <g key={i} className="transition-transform duration-500 group-hover:-translate-y-0.5">
          <rect x={n.x - 22} y={n.y - 14} width="44" height="28" rx="6" fill="#0a0f1c" stroke={i === 5 ? M : i === 2 ? V : C} strokeOpacity="0.7" />
          <rect x={n.x - 12} y={n.y - 4} width="24" height="3" rx="1.5" fill={i === 5 ? M : C} fillOpacity="0.8" />
          <rect x={n.x - 12} y={n.y + 3} width="16" height="3" rx="1.5" fill={DIM} />
          <text x={n.x} y={n.y + 28} textAnchor="middle" fontSize="7" fill="rgba(230,235,245,0.55)" letterSpacing="1">
            {n.l}
          </text>
        </g>
      ))}
      <g transform="translate(118 8)">
        <rect width="164" height="22" rx="11" fill="#0e1526" stroke={C} strokeOpacity="0.4" />
        <text x="12" y="14.5" fontSize="8" fill={C}>{'>'} reorder risk at WH-2?</text>
      </g>
    </Frame>
  )
}

function AgentPipeline(p: SvgProps) {
  const agents = ['PLANNER', 'ARCHITECT', 'CODING', 'EXECUTION', 'RECOVERY', 'QA', 'SECURITY']
  return (
    <Frame {...p}>
      <rect x="16" y="16" width="190" height="228" rx="8" fill="#0a0f1c" stroke={FAINT} />
      <circle cx="30" cy="30" r="3" fill={M} fillOpacity="0.7" />
      <circle cx="40" cy="30" r="3" fill={V} fillOpacity="0.7" />
      <circle cx="50" cy="30" r="3" fill={C} fillOpacity="0.7" />
      {[
        [30, 60, C], [44, 30, V], [30, 45, DIM], [44, 60, B], [58, 40, DIM], [30, 70, C],
        [44, 50, DIM], [58, 60, V], [30, 35, DIM], [44, 80, C], [30, 55, DIM],
      ].map(([x, w, c], i) => (
        <rect key={i} x={x as number} y={50 + i * 17} width={w as number} height="5" rx="2.5" fill={c as string} fillOpacity={c === DIM ? 1 : 0.7} />
      ))}
      <rect x="30" y="232" width="6" height="8" fill={C} className="caret" />
      {agents.map((a, i) => {
        const y = 22 + i * 32
        return (
          <g key={a}>
            {i < agents.length - 1 ? (
              <line className="flow-line" x1="300" y1={y + 22} x2="300" y2={y + 32} stroke={C} strokeOpacity="0.7" />
            ) : null}
            <rect
              x="230"
              y={y}
              width="140"
              height="22"
              rx="5"
              fill={i === 4 ? 'rgba(217,70,239,0.1)' : '#0e1526'}
              stroke={i === 4 ? M : i % 2 ? V : C}
              strokeOpacity="0.55"
              className="transition-all duration-500 group-hover:stroke-opacity-100"
            />
            <text x="242" y={y + 14.5} fontSize="8" fill="rgba(230,235,245,0.8)" letterSpacing="1.2">
              {String(i + 1).padStart(2, '0')} {a}
            </text>
          </g>
        )
      })}
      <path d="M370 154 C 392 154 392 102 370 102" fill="none" stroke={M} strokeOpacity="0.6" strokeDasharray="3 3" />
      <line x1="206" y1="130" x2="230" y2="130" stroke={DIM} strokeDasharray="2 3" />
    </Frame>
  )
}

function Cad(p: SvgProps) {
  const cx = 200
  const cy = 130
  return (
    <Frame {...p}>
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`g${i}`} x1={40 + i * 40} y1="230" x2={120 + i * 20} y2="180" stroke={FAINT} />
      ))}
      <g className="origin-center transition-transform duration-700 group-hover:rotate-[4deg]" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <path d={`M${cx - 90} ${cy + 10} L${cx} ${cy + 55} L${cx + 90} ${cy + 10} L${cx} ${cy - 35} Z`} fill="rgba(34,211,238,0.06)" stroke={C} strokeOpacity="0.8" />
        <path d={`M${cx - 90} ${cy + 10} L${cx - 90} ${cy + 30} L${cx} ${cy + 75} L${cx + 90} ${cy + 30} L${cx + 90} ${cy + 10}`} fill="none" stroke={C} strokeOpacity="0.5" />
        <line x1={cx} y1={cy + 55} x2={cx} y2={cy + 75} stroke={C} strokeOpacity="0.5" />
        <ellipse cx={cx} cy={cy + 10} rx="34" ry="17" fill="#05070d" stroke={V} strokeOpacity="0.9" />
        <path d={`M${cx - 34} ${cy + 10} L${cx - 34} ${cy - 50} M${cx + 34} ${cy + 10} L${cx + 34} ${cy - 50}`} stroke={V} strokeOpacity="0.8" />
        <ellipse cx={cx} cy={cy - 50} rx="34" ry="17" fill="rgba(139,92,246,0.08)" stroke={V} />
        <ellipse cx={cx} cy={cy - 50} rx="14" ry="7" fill="#05070d" stroke={C} />
        {[[-60, 12], [60, 12], [0, 40], [0, -18]].map(([dx, dy], i) => (
          <ellipse key={i} cx={cx + dx} cy={cy + dy} rx="7" ry="3.5" fill="none" stroke={C} strokeOpacity="0.7" />
        ))}
      </g>
      <line x1={cx - 90} y1={cy + 95} x2={cx + 90} y2={cy + 95} stroke={M} strokeOpacity="0.6" />
      <line x1={cx - 90} y1={cy + 90} x2={cx - 90} y2={cy + 100} stroke={M} strokeOpacity="0.6" />
      <line x1={cx + 90} y1={cy + 90} x2={cx + 90} y2={cy + 100} stroke={M} strokeOpacity="0.6" />
      <text x={cx} y={cy + 112} textAnchor="middle" fontSize="8" fill={M} fillOpacity="0.8">Ø 180.00</text>
      <text x="20" y="28" fontSize="8" fill={C} fillOpacity="0.7">PARAMETRIC / FLANGE_01</text>
      <text x="380" y="28" textAnchor="end" fontSize="8" fill="rgba(230,235,245,0.4)">.STEP</text>
    </Frame>
  )
}

function TaskGraph(p: SvgProps) {
  const rows = [
    { l: 'Define scope', s: 0, w: 60, c: C },
    { l: 'Research', s: 50, w: 70, c: B },
    { l: 'Design', s: 110, w: 60, c: V },
    { l: 'Build', s: 160, w: 90, c: C },
    { l: 'Review', s: 240, w: 40, c: M },
  ]
  return (
    <Frame {...p}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <g key={i}>
          <line x1={110 + i * 42} y1="30" x2={110 + i * 42} y2="230" stroke={FAINT} />
          <text x={110 + i * 42} y="24" fontSize="7" fill="rgba(230,235,245,0.35)" textAnchor="middle">D{i + 1}</text>
        </g>
      ))}
      {rows.map((r, i) => {
        const y = 48 + i * 38
        return (
          <g key={r.l}>
            <text x="20" y={y + 10} fontSize="8" fill="rgba(230,235,245,0.7)">{r.l}</text>
            <rect x={110 + r.s} y={y} width={r.w} height="14" rx="4" fill={r.c} fillOpacity="0.16" stroke={r.c} strokeOpacity="0.7" className="transition-all duration-500 group-hover:fill-opacity-30" />
            <rect x={110 + r.s} y={y} width={r.w * 0.6} height="14" rx="4" fill={r.c} fillOpacity="0.35" />
            {i < rows.length - 1 ? (
              <path
                className="flow-line"
                d={`M${110 + r.s + r.w} ${y + 7} C ${120 + r.s + r.w} ${y + 7}, ${100 + rows[i + 1].s} ${y + 45}, ${110 + rows[i + 1].s} ${y + 45}`}
                fill="none"
                stroke={DIM}
              />
            ) : null}
            <text x={106} y={y + 10} fontSize="7" fill={r.c} textAnchor="end">P{(i % 3) + 1}</text>
          </g>
        )
      })}
    </Frame>
  )
}

function CodeEditor(p: SvgProps) {
  const lines: [number, string, string][] = [
    [0, 'def', V], [1, 'solve(task):', 'rgba(230,235,245,0.8)'],
    [1, 'plan = llm.plan(task)', C], [1, 'for step in plan:', 'rgba(230,235,245,0.7)'],
    [2, 'code = llm.write(step)', C], [2, 'run(code)', B], [1, 'return result', V],
  ]
  return (
    <Frame {...p}>
      <rect x="20" y="20" width="360" height="220" rx="10" fill="#0a0f1c" stroke={FAINT} />
      <line x1="20" y1="44" x2="380" y2="44" stroke={FAINT} />
      <rect x="32" y="28" width="70" height="10" rx="3" fill="rgba(34,211,238,0.12)" />
      <text x="38" y="36" fontSize="7" fill={C}>agent.py</text>
      {lines.map(([indent, text, color], i) => (
        <g key={i}>
          <text x="36" y={66 + i * 18} fontSize="8" fill="rgba(148,163,199,0.4)">{i + 1}</text>
          <text x={58 + indent * 16} y={66 + i * 18} fontSize="9" fill={color}>
            {i === 1 ? '' : text}
          </text>
          {i === 0 ? (
            <text x="80" y="66" fontSize="9" fill="rgba(230,235,245,0.8)">solve(task):</text>
          ) : null}
        </g>
      ))}
      <rect x="220" y="136" width="146" height="58" rx="6" fill="#0e1526" stroke={V} strokeOpacity="0.6" className="transition-transform duration-500 group-hover:-translate-y-1" />
      <text x="230" y="152" fontSize="7" fill={V}>AI SUGGESTION</text>
      <rect x="230" y="160" width="110" height="4" rx="2" fill={DIM} />
      <rect x="230" y="170" width="80" height="4" rx="2" fill={DIM} />
      <rect x="230" y="180" width="44" height="8" rx="2" fill="rgba(139,92,246,0.25)" />
      <text x="236" y="186.5" fontSize="6" fill="rgba(230,235,245,0.8)">TAB ↹</text>
      <rect x="170" y="182" width="5" height="10" fill={C} className="caret" />
    </Frame>
  )
}

function KnowledgeGraph(p: SvgProps) {
  const nodes = [
    [200, 130, 14, C], [110, 70, 8, V], [300, 70, 9, B], [90, 190, 7, C], [310, 195, 8, V],
    [200, 40, 6, M], [200, 220, 6, B], [150, 140, 5, DIM], [255, 145, 5, DIM], [40, 120, 5, DIM], [360, 130, 5, DIM],
  ] as const
  const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 7], [0, 8], [1, 5], [2, 5], [3, 6], [4, 6], [1, 9], [2, 10], [7, 3], [8, 4]]
  return (
    <Frame {...p}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={DIM} strokeOpacity="0.8" />
      ))}
      {nodes.map(([x, y, r, c], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r + 5} fill={c} fillOpacity="0.06" className={i < 5 ? 'pulse-soft' : undefined} style={{ animationDelay: `${i * 0.4}s` }} />
          <circle cx={x} cy={y} r={r} fill="#0a0f1c" stroke={c} strokeOpacity="0.9" />
        </g>
      ))}
      {[
        [110, 50, 'Meeting notes'], [300, 50, 'Research'], [90, 212, 'Ideas'], [310, 218, 'Tasks'],
      ].map(([x, y, l]) => (
        <text key={l as string} x={x as number} y={y as number} fontSize="7.5" textAnchor="middle" fill="rgba(230,235,245,0.6)">{l}</text>
      ))}
      <text x="200" y="133" fontSize="7" textAnchor="middle" fill={C}>AI</text>
    </Frame>
  )
}

function Traffic(p: SvgProps) {
  return (
    <Frame {...p}>
      <path d="M150 40 L250 40 L390 240 L10 240 Z" fill="rgba(14,21,38,0.9)" stroke={FAINT} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={198 - i * 0.5} y={52 + i * 38} width={3 + i} height={14 + i * 3} fill="rgba(230,235,245,0.2)" />
      ))}
      {[
        { x: 110, y: 170, w: 70, h: 44, c: C, l: 'car 0.94', id: 'ID-07' },
        { x: 232, y: 120, w: 50, h: 32, c: V, l: 'truck 0.89', id: 'ID-12' },
        { x: 170, y: 72, w: 30, h: 20, c: M, l: 'bike 0.81', id: 'ID-15' },
      ].map((b) => (
        <g key={b.id} className="transition-transform duration-500 group-hover:translate-x-0.5">
          <rect x={b.x + 6} y={b.y + 8} width={b.w - 12} height={b.h - 12} rx="4" fill="rgba(148,163,199,0.18)" />
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" stroke={b.c} strokeWidth="1.2" />
          <rect x={b.x} y={b.y - 11} width={b.l.length * 4.6 + 6} height="11" fill={b.c} fillOpacity="0.9" />
          <text x={b.x + 3} y={b.y - 3} fontSize="7" fill="#05070d">{b.l}</text>
          <circle cx={b.x + b.w / 2} cy={b.y + b.h} r="2" fill={b.c} />
          <path d={`M${b.x + b.w / 2} ${b.y + b.h} l -10 22`} stroke={b.c} strokeOpacity="0.5" strokeDasharray="2 3" />
          <text x={b.x + b.w + 4} y={b.y + 8} fontSize="6" fill={b.c} fillOpacity="0.8">{b.id}</text>
        </g>
      ))}
      <text x="16" y="24" fontSize="8" fill={C}>● REC  CAM_02</text>
      <text x="384" y="24" fontSize="8" fill="rgba(230,235,245,0.5)" textAnchor="end">DETECT + TRACK</text>
    </Frame>
  )
}

function Voice(p: SvgProps) {
  const bars = Array.from({ length: 44 }, (_, i) => 6 + Math.abs(Math.sin(i * 0.7) * 26 + Math.cos(i * 1.9) * 10))
  return (
    <Frame {...p}>
      <rect x="30" y="26" width="200" height="34" rx="12" fill="#0e1526" stroke={FAINT} />
      <text x="44" y="47" fontSize="8.5" fill="rgba(230,235,245,0.8)">Hey, what can you do?</text>
      <rect x="150" y="72" width="220" height="34" rx="12" fill="rgba(34,211,238,0.08)" stroke={C} strokeOpacity="0.4" />
      <text x="162" y="93" fontSize="8.5" fill={C}>I can chat and reply out loud.</text>
      <g transform="translate(40 150)">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 7.4}
            y={40 - h}
            width="3.4"
            height={h * 2}
            rx="1.7"
            fill={i < 22 ? C : V}
            fillOpacity={0.35 + (h / 50) * 0.6}
            className="pulse-soft"
            style={{ animationDelay: `${(i % 8) * 0.18}s` }}
          />
        ))}
      </g>
      <text x="40" y="244" fontSize="7" fill="rgba(230,235,245,0.4)">SPEECH IN</text>
      <text x="364" y="244" fontSize="7" textAnchor="end" fill="rgba(230,235,245,0.4)">TTS OUT</text>
    </Frame>
  )
}

function ApiArchitecture(p: SvgProps) {
  const layers = [
    { l: 'API', s: 'REST endpoints', c: C },
    { l: 'SERVICE', s: 'business logic', c: V },
    { l: 'DATABASE', s: 'persistence', c: B },
  ]
  return (
    <Frame {...p}>
      <text x="30" y="36" fontSize="8" fill="rgba(230,235,245,0.5)">GET /groups/:id/expenses</text>
      <text x="30" y="50" fontSize="8" fill={C}>200 OK</text>
      {layers.map((l, i) => {
        const x = 30 + i * 122
        return (
          <g key={l.l}>
            <rect x={x} y="90" width="100" height="90" rx="8" fill="#0a0f1c" stroke={l.c} strokeOpacity="0.6" className="transition-all duration-500 group-hover:stroke-opacity-100" />
            <text x={x + 12} y="112" fontSize="9" fill={l.c} letterSpacing="1.2">{l.l}</text>
            <text x={x + 12} y="126" fontSize="7" fill="rgba(230,235,245,0.45)">{l.s}</text>
            {i === 2 ? (
              <g>
                {[0, 1, 2].map((r) => (
                  <ellipse key={r} cx={x + 50} cy={146 + r * 10} rx="22" ry="5" fill="#0e1526" stroke={l.c} strokeOpacity="0.6" />
                ))}
              </g>
            ) : (
              [0, 1, 2].map((r) => <rect key={r} x={x + 12} y={140 + r * 10} width={70 - r * 14} height="4" rx="2" fill={DIM} />)
            )}
            {i < 2 ? (
              <>
                <line className="flow-line" x1={x + 100} y1="125" x2={x + 122} y2="125" stroke={C} />
                <line className="flow-line" x1={x + 122} y1="145" x2={x + 100} y2="145" stroke={V} style={{ animationDirection: 'reverse' }} />
              </>
            ) : null}
          </g>
        )
      })}
      <text x="30" y="220" fontSize="7" fill="rgba(230,235,245,0.35)">REQUEST → HANDLER → SERVICE → STORE → RESPONSE</text>
    </Frame>
  )
}

function MarketChart(p: SvgProps) {
  const candles = Array.from({ length: 22 }, (_, i) => {
    const base = 150 - Math.sin(i * 0.45) * 40 - i * 1.6
    const up = Math.sin(i * 1.3) > -0.2
    return { x: 30 + i * 15.5, o: base + (up ? 10 : -8), c: base + (up ? -10 : 8), h: base - 20, l: base + 20, up }
  })
  return (
    <Frame {...p}>
      {[60, 110, 160, 210].map((y) => (
        <line key={y} x1="20" y1={y} x2="380" y2={y} stroke={FAINT} />
      ))}
      <polyline
        points={candles.map((c) => `${c.x},${(c.o + c.c) / 2 - 4}`).join(' ')}
        fill="none"
        stroke={V}
        strokeOpacity="0.7"
        strokeWidth="1.2"
      />
      {candles.map((c, i) => (
        <g key={i}>
          <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.up ? C : M} strokeOpacity="0.6" />
          <rect x={c.x - 4} y={Math.min(c.o, c.c)} width="8" height={Math.abs(c.o - c.c)} fill={c.up ? C : M} fillOpacity={c.up ? 0.7 : 0.5} />
        </g>
      ))}
      {[
        [5, 'BUY', C],
        [13, 'SELL', M],
        [19, 'BUY', C],
      ].map(([idx, l, col]) => {
        const c = candles[idx as number]
        return (
          <g key={idx as number} className="transition-transform duration-500 group-hover:-translate-y-1">
            <path d={`M${c.x} ${c.l + 8} l -5 8 h 10 z`} fill={col as string} />
            <text x={c.x} y={c.l + 26} fontSize="7" textAnchor="middle" fill={col as string}>{l}</text>
          </g>
        )
      })}
      <text x="20" y="30" fontSize="8" fill="rgba(230,235,245,0.5)">SIGNAL ENGINE / SIMULATED</text>
      <circle cx="366" cy="27" r="3" fill={C} className="pulse-soft" />
    </Frame>
  )
}

const visualMap: Record<VisualKey, (p: SvgProps) => React.JSX.Element> = {
  'supply-chain': SupplyChain,
  'agent-pipeline': AgentPipeline,
  cad: Cad,
  'task-graph': TaskGraph,
  'code-editor': CodeEditor,
  'knowledge-graph': KnowledgeGraph,
  traffic: Traffic,
  voice: Voice,
  'api-architecture': ApiArchitecture,
  'market-chart': MarketChart,
}

export function ProjectVisual({ visual, className }: { visual: VisualKey; className?: string }) {
  const Visual = visualMap[visual]
  return <Visual className={className} />
}
