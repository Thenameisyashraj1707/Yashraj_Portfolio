export type VisualKey =
  | 'supply-chain'
  | 'agent-pipeline'
  | 'cad'
  | 'task-graph'
  | 'code-editor'
  | 'knowledge-graph'
  | 'traffic'
  | 'voice'
  | 'api-architecture'
  | 'market-chart'

export type ProjectLayout = 'cinematic' | 'split' | 'grid' | 'terminal' | 'dashboard'

export type Project = {
  id: string
  index: string
  name: string
  category: string
  tagline: string
  problem?: string
  solution?: string
  architecture?: string[]
  tech: string[]
  capabilities?: string[]
  github: string
  liveDemo?: string
  visual: VisualKey
  layout: ProjectLayout
  note?: string
}

export const projects: Project[] = [
  {
    id: 'smartchain-nexus',
    index: '01',
    name: 'SmartChain Nexus',
    category: 'Agentic AI',
    tagline:
      'Decision intelligence for supply-chain teams, turning natural-language questions into operational recommendations.',
    problem:
      'Supply-chain teams need to reason across risk, inventory, suppliers and demand — questions that span many operational workflows.',
    solution:
      'A multi-agent decision intelligence system that turns natural-language questions into operational recommendations.',
    architecture: [
      'Natural-language question',
      'Multi-agent orchestration (LangGraph)',
      'Domain agents',
      'Supabase / PostgreSQL data',
      'Operational recommendation',
    ],
    capabilities: [
      'Risk',
      'Inventory',
      'Supplier',
      'Demand',
      'Reorder',
      'Transfer',
      'Slotting',
      'Forecasting',
    ],
    tech: [
      'Python',
      'FastAPI',
      'LangGraph',
      'Groq / Llama',
      'Supabase',
      'PostgreSQL',
      'Next.js',
      'React',
      'Tailwind',
      'Pandas',
    ],
    github:
      'https://github.com/Thenameisyashraj1707/SmartChain-Nexus-Agentic-AI-Supply-Chain-Decision-Intelligence-System',
    visual: 'supply-chain',
    layout: 'cinematic',
  },
  {
    id: 'autodev',
    index: '02',
    name: 'AutoDev',
    category: 'LLM Engineering',
    tagline:
      'A self-healing software engineering loop with planner, architect, coding, execution, recovery, QA and security agents.',
    problem: 'Software generation with LLMs breaks when code fails and nothing in the loop recovers.',
    solution:
      'A multi-agent, self-healing engineering loop where specialised agents plan, design, write, execute, recover, test and review code.',
    architecture: ['Planner', 'Architect', 'Coding', 'Execution', 'Recovery', 'QA', 'Security'],
    capabilities: [
      'Planner agent',
      'Architect agent',
      'Coding agent',
      'Execution agent',
      'Recovery agent',
      'QA agent',
      'Security agent',
    ],
    tech: ['Python', 'Multi-Agent Systems', 'LLMs'],
    github: 'https://github.com/Thenameisyashraj1707/Ai_Auto_Corp',
    visual: 'agent-pipeline',
    layout: 'split',
    note: 'Repository: Ai_Auto_Corp',
  },
  {
    id: 'generative-ai-cad',
    index: '03',
    name: 'Generative AI CAD',
    category: 'Generative AI',
    tagline:
      'Natural-language engineering requirements become parametric CAD geometry and STEP exports.',
    problem: 'Translating written engineering requirements into CAD geometry is manual and slow.',
    solution:
      'A local LLM pipeline that converts natural-language requirements into parametric CAD geometry with STEP export.',
    architecture: [
      'Natural-language requirement',
      'Local LLM (Ollama / Llama)',
      'Parametric CadQuery model',
      'OpenCascade geometry',
      'STEP export',
    ],
    capabilities: ['Parametric CAD geometry', 'STEP exports', 'CSV-driven data', 'Tkinter desktop UI'],
    tech: ['Python', 'Ollama', 'Llama', 'CadQuery', 'OpenCascade', 'Pandas', 'CSV', 'Tkinter'],
    github:
      'https://github.com/Thenameisyashraj1707/Generative-AI-Based-Automated-3D-CAD-Model-Generator',
    visual: 'cad',
    layout: 'grid',
  },
  {
    id: 'smart-task-planner',
    index: '04',
    name: 'Smart Task Planner',
    category: 'AI Automation',
    tagline:
      'Transforms high-level goals into ordered tasks with dependencies, priorities, estimated durations and timeline reasoning.',
    problem: 'High-level goals are hard to break into an actionable, ordered plan.',
    solution:
      'An LLM-powered planner that decomposes goals into ordered tasks with dependencies, priorities, durations and timeline reasoning.',
    architecture: ['Goal input', 'Flask API', 'OpenAI reasoning', 'Ordered task plan', 'Timeline'],
    capabilities: ['Task dependencies', 'Priorities', 'Estimated durations', 'Timeline reasoning'],
    tech: ['Python', 'Flask', 'OpenAI', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Thenameisyashraj1707/Smart-Task-Planner',
    visual: 'task-graph',
    layout: 'dashboard',
  },
  {
    id: 'ai-coder-pro',
    index: '05',
    name: 'AI Coder Pro',
    category: 'LLM Engineering',
    tagline: 'An LLM-engineering project exploring AI-assisted coding.',
    tech: [],
    github: 'https://github.com/Thenameisyashraj1707/Ai_coder_Pro',
    visual: 'code-editor',
    layout: 'terminal',
  },
  {
    id: 'omni-notes-ai',
    index: '06',
    name: 'Omni Notes AI',
    category: 'AI / Knowledge',
    tagline: 'An AI knowledge project exploring intelligent notes.',
    tech: [],
    github: 'https://github.com/Thenameisyashraj1707/omni-notes-ai',
    visual: 'knowledge-graph',
    layout: 'grid',
  },
  {
    id: 'real-time-traffic-detection',
    index: '07',
    name: 'Real-Time Traffic Detection',
    category: 'Computer Vision',
    tagline: 'A computer-vision project for real-time traffic detection.',
    tech: [],
    github: 'https://github.com/Thenameisyashraj1707/Real-Time-Traffic-Detection',
    visual: 'traffic',
    layout: 'grid',
  },
  {
    id: 'ai-assistant-chatbot',
    index: '08',
    name: 'AI Assistant Chatbot',
    category: 'LLM / Voice AI',
    tagline:
      'A voice-powered chatbot concept using BlenderBot-400M with speech input and text-to-speech.',
    architecture: ['Speech input', 'BlenderBot-400M', 'Text-to-speech'],
    capabilities: ['Speech input', 'Conversational responses', 'Text-to-speech output'],
    tech: ['BlenderBot-400M', 'Speech input', 'Text-to-speech'],
    github: 'https://github.com/Thenameisyashraj1707/Ai-assistant-chatbot',
    visual: 'voice',
    layout: 'grid',
  },
  {
    id: 'split-app-backend',
    index: '09',
    name: 'Split App Backend',
    category: 'Backend',
    tagline: 'A backend project structured as API, service and database layers.',
    architecture: ['API', 'Service', 'Database'],
    tech: [],
    github: 'https://github.com/Thenameisyashraj1707/Split-App-Backend-',
    visual: 'api-architecture',
    layout: 'terminal',
  },
  {
    id: 'trading-bot',
    index: '10',
    name: 'Trading Bot',
    category: 'AI / Automation',
    tagline: 'An automation project exploring market signals and execution logic.',
    tech: [],
    github: 'https://github.com/Thenameisyashraj1707/Trading_bot',
    visual: 'market-chart',
    layout: 'dashboard',
    note: 'Conceptual visual only — no real financial performance is implied.',
  },
]
