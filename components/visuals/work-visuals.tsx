import type { WorkVisual } from '@/data/engineering-work'

const C = '#22d3ee'
const V = '#8b5cf6'
const M = '#d946ef'
const B = '#3b82f6'
const DIM = 'rgba(148,163,199,0.28)'
const FAINT = 'rgba(148,163,199,0.12)'
const TXT = 'rgba(230,235,245,0.65)'

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 200" className="size-full" aria-hidden="true" fontFamily="var(--font-mono)">
      {children}
    </svg>
  )
}

function Impact() {
  const sources = ['PLM', 'SAP/ERP', 'QMS', 'BOM', 'MES', 'KB', 'SUPPLIER']
  return (
    <Frame>
      <rect x="10" y="84" width="54" height="32" rx="6" fill="#0e1526" stroke={M} strokeOpacity="0.7" />
      <text x="37" y="104" fontSize="8" textAnchor="middle" fill={M}>ECR</text>
      <line className="flow-line" x1="64" y1="100" x2="112" y2="100" stroke={C} />
      <rect x="112" y="70" width="74" height="60" rx="8" fill="rgba(34,211,238,0.06)" stroke={C} strokeOpacity="0.7" />
      <text x="149" y="94" fontSize="7.5" textAnchor="middle" fill={C}>AGENTS</text>
      <text x="149" y="108" fontSize="7" textAnchor="middle" fill={TXT}>LLM + RAG</text>
      <text x="149" y="120" fontSize="6.5" textAnchor="middle" fill="rgba(230,235,245,0.4)">FAISS</text>
      {sources.map((s, i) => {
        const y = 18 + i * 26
        return (
          <g key={s}>
            <line x1="186" y1="100" x2="236" y2={y + 8} stroke={DIM} />
            <line className="flow-line" x1="236" y1={y + 8} x2="186" y2="100" stroke={i % 2 ? V : C} strokeOpacity="0.5" style={{ animationDelay: `${i * 0.2}s` }} />
            <rect x="236" y={y} width="72" height="16" rx="4" fill="#0a0f1c" stroke={FAINT} />
            <text x="244" y={y + 11} fontSize="7" fill={TXT}>{s}</text>
          </g>
        )
      })}
    </Frame>
  )
}

function Dashboard() {
  const bars = [50, 72, 44, 88, 64, 96, 58]
  return (
    <Frame>
      <rect x="10" y="10" width="300" height="180" rx="10" fill="#0a0f1c" stroke={FAINT} />
      {[
        ['CDF', C], ['ODF', V],
      ].map(([l, c], i) => (
        <g key={l}>
          <rect x={24 + i * 96} y="24" width="84" height="40" rx="6" fill="#0e1526" stroke={FAINT} />
          <text x={34 + i * 96} y="40" fontSize="7" fill={c}>{l} ESTIMATE</text>
          <rect x={34 + i * 96} y="48" width="46" height="6" rx="3" fill={c} fillOpacity="0.5" />
        </g>
      ))}
      <rect x="216" y="24" width="80" height="40" rx="6" fill="#0e1526" stroke={FAINT} />
      <text x="226" y="40" fontSize="7" fill={M}>AUTO</text>
      <circle cx="280" cy="44" r="10" fill="none" stroke={DIM} strokeWidth="3" />
      <circle cx="280" cy="44" r="10" fill="none" stroke={M} strokeWidth="3" strokeDasharray="44 63" transform="rotate(-90 280 44)" />
      {bars.map((h, i) => (
        <rect key={i} x={30 + i * 38} y={176 - h} width="20" height={h} rx="3" fill={i % 2 ? V : C} fillOpacity="0.45" />
      ))}
      <line x1="24" y1="176" x2="296" y2="176" stroke={DIM} />
    </Frame>
  )
}

function Mail() {
  return (
    <Frame>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${20 + i * 8} ${30 + i * 8})`}>
          <rect width="96" height="64" rx="6" fill="#0e1526" stroke={i === 2 ? C : FAINT} strokeOpacity={i === 2 ? 0.7 : 1} />
          <path d="M0 4 L48 36 L96 4" fill="none" stroke={i === 2 ? C : DIM} />
        </g>
      ))}
      <line className="flow-line" x1="140" y1="80" x2="190" y2="80" stroke={C} />
      <rect x="190" y="50" width="110" height="100" rx="8" fill="#0a0f1c" stroke={FAINT} />
      {['WEBHOOK  ✓', 'PARSE    ✓', 'SEND     ✓', 'RETRY    ↻', 'LOG      ✓'].map((l, i) => (
        <text key={l} x="202" y={72 + i * 16} fontSize="7.5" fill={i === 3 ? M : TXT}>{l}</text>
      ))}
      <text x="20" y="170" fontSize="7" fill="rgba(230,235,245,0.4)">GOOGLE WORKSPACE · EMAIL</text>
    </Frame>
  )
}

function Visitor() {
  return (
    <Frame>
      <rect x="20" y="24" width="100" height="148" rx="10" fill="#0e1526" stroke={C} strokeOpacity="0.6" />
      <rect x="54" y="30" width="32" height="5" rx="2.5" fill="#05070d" />
      <circle cx="70" cy="74" r="20" fill="rgba(34,211,238,0.08)" stroke={C} strokeOpacity="0.6" />
      <circle cx="70" cy="68" r="7" fill={DIM} />
      <path d="M58 86 q12 -12 24 0" fill={DIM} />
      <text x="70" y="114" fontSize="8" textAnchor="middle" fill="rgba(230,235,245,0.8)">VISITOR</text>
      <rect x="36" y="124" width="68" height="5" rx="2.5" fill={DIM} />
      <rect x="44" y="136" width="52" height="5" rx="2.5" fill={DIM} />
      <rect x="36" y="150" width="68" height="12" rx="3" fill={C} fillOpacity="0.2" />
      <text x="70" y="159" fontSize="6.5" textAnchor="middle" fill={C}>PASS ACTIVE</text>
      <rect x="140" y="24" width="160" height="148" rx="8" fill="#0a0f1c" stroke={FAINT} />
      <text x="152" y="42" fontSize="7" fill="rgba(230,235,245,0.45)">GATE LOG</text>
      {[
        ['IN', C], ['OUT', V], ['IN', C], ['IN', C], ['OUT', V], ['PENDING', M],
      ].map(([s, c], i) => (
        <g key={i}>
          <line x1="152" y1={54 + i * 19} x2="288" y2={54 + i * 19} stroke={FAINT} />
          <rect x="152" y={60 + i * 19} width="70" height="5" rx="2.5" fill={DIM} />
          <text x="288" y={66 + i * 19} fontSize="6.5" textAnchor="end" fill={c}>{s}</text>
        </g>
      ))}
    </Frame>
  )
}

function WhatsApp() {
  return (
    <Frame>
      <rect x="90" y="8" width="140" height="184" rx="18" fill="#0a0f1c" stroke={FAINT} />
      <rect x="90" y="8" width="140" height="28" rx="18" fill="#0e1526" />
      <circle cx="110" cy="22" r="7" fill="rgba(52,211,153,0.3)" />
      <text x="124" y="25" fontSize="7.5" fill="rgba(230,235,245,0.8)">Taskbot</text>
      <rect x="102" y="48" width="92" height="22" rx="8" fill="#0e1526" />
      <text x="110" y="62" fontSize="7" fill={TXT}>/task assign QA</text>
      <rect x="126" y="80" width="94" height="34" rx="8" fill="rgba(34,211,238,0.1)" stroke={C} strokeOpacity="0.4" />
      <text x="134" y="94" fontSize="7" fill={C}>Task created ✓</text>
      <text x="134" y="106" fontSize="6.5" fill={TXT}>due: Fri · owner: QA</text>
      <rect x="102" y="124" width="72" height="22" rx="8" fill="#0e1526" />
      <text x="110" y="138" fontSize="7" fill={TXT}>/status</text>
      <rect x="146" y="156" width="74" height="22" rx="8" fill="rgba(139,92,246,0.12)" stroke={V} strokeOpacity="0.4" />
      <text x="154" y="170" fontSize="7" fill={V}>3 open · 1 done</text>
      <line className="flow-line" x1="20" y1="100" x2="90" y2="100" stroke={C} />
      <text x="20" y="92" fontSize="6.5" fill="rgba(230,235,245,0.4)">WEBHOOK</text>
      <line className="flow-line" x1="230" y1="100" x2="300" y2="100" stroke={V} />
      <text x="300" y="92" fontSize="6.5" textAnchor="end" fill="rgba(230,235,245,0.4)">API</text>
    </Frame>
  )
}

function HrChat() {
  return (
    <Frame>
      <rect x="16" y="16" width="288" height="168" rx="10" fill="#0a0f1c" stroke={FAINT} />
      <text x="30" y="36" fontSize="7" fill={B}>HR INDUCTION · ASSISTANT</text>
      <rect x="30" y="48" width="150" height="26" rx="8" fill="#0e1526" />
      <text x="40" y="64" fontSize="7.5" fill={TXT}>Welcome! Ask me anything.</text>
      <rect x="140" y="84" width="150" height="26" rx="8" fill="rgba(139,92,246,0.12)" stroke={V} strokeOpacity="0.4" />
      <text x="150" y="100" fontSize="7.5" fill={V}>Where do I start on day 1?</text>
      <rect x="30" y="120" width="180" height="40" rx="8" fill="rgba(34,211,238,0.08)" stroke={C} strokeOpacity="0.4" />
      <rect x="40" y="130" width="140" height="5" rx="2.5" fill={C} fillOpacity="0.5" />
      <rect x="40" y="142" width="100" height="5" rx="2.5" fill={DIM} />
      <circle cx="226" cy="152" r="2" fill={M} className="pulse-soft" />
      <circle cx="234" cy="152" r="2" fill={M} className="pulse-soft" style={{ animationDelay: '0.3s' }} />
      <circle cx="242" cy="152" r="2" fill={M} className="pulse-soft" style={{ animationDelay: '0.6s' }} />
    </Frame>
  )
}

const map: Record<WorkVisual, () => React.JSX.Element> = {
  impact: Impact,
  dashboard: Dashboard,
  mail: Mail,
  visitor: Visitor,
  whatsapp: WhatsApp,
  'hr-chat': HrChat,
}

export function WorkVisualArt({ visual }: { visual: WorkVisual }) {
  const V = map[visual]
  return <V />
}
