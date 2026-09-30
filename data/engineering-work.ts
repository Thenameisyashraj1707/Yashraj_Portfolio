export type WorkVisual = 'impact' | 'dashboard' | 'mail' | 'visitor' | 'whatsapp' | 'hr-chat'

export type EngineeringWork = {
  id: string
  index: string
  title: string
  org: string
  problem: string
  solution: string
  tech: string[]
  stackLabel: string
  contribution: string
  visual: WorkVisual
}

export const engineeringWork: EngineeringWork[] = [
  {
    id: 'change-impact',
    index: 'W/01',
    title: 'Enterprise Change Impact Analysis Agent',
    org: 'TCS · NPI Value Stream / Digital Garage',
    problem:
      'Impact analysis for Engineering Change Requests requires tracing data across PLM, SAP/ERP, QMS, BOM/EBOM, manufacturing systems, knowledge bases and supplier records.',
    solution:
      'A multi-agent system using LLMs and RAG to automate impact analysis across enterprise engineering data.',
    tech: ['LLMs', 'RAG', 'LangChain', 'FAISS', 'Sentence Transformers', 'FastAPI', 'Streamlit', 'Pandas'],
    stackLabel: 'Project stack',
    contribution:
      'Worked with multi-agent architecture, LLMs and RAG on this system. Internal project estimate: potential 60–80% reduction in material estimation effort (not independently audited).',
    visual: 'impact',
  },
  {
    id: 'cdf-odf',
    index: 'W/02',
    title: 'Automated CDF/ODF Estimation Dashboard',
    org: 'Western Heat & Forge',
    problem: 'CDF/ODF estimation was a manual, repetitive production process.',
    solution: 'Estimation automation surfaced through a dashboard.',
    tech: ['FastAPI', 'Flask', 'Webhooks', 'Retry/logging', 'WhatsApp', 'Email', 'Google Workspace'],
    stackLabel: 'WHF automation stack',
    contribution: 'Built the CDF/ODF estimation automation.',
    visual: 'dashboard',
  },
  {
    id: 'mail-automation',
    index: 'W/03',
    title: 'Mail Automation System',
    org: 'Western Heat & Forge',
    problem: 'Routine operational email was handled manually.',
    solution: 'Automated mail workflows with webhooks, retry and logging.',
    tech: ['Email', 'Google Workspace', 'Webhooks', 'Retry/logging'],
    stackLabel: 'WHF automation stack',
    contribution: 'Built the mail automation workflows.',
    visual: 'mail',
  },
  {
    id: 'visitor-management',
    index: 'W/04',
    title: 'Visitor Management System',
    org: 'Western Heat & Forge · Security',
    problem: 'Visitor handling within security processes needed a structured workflow.',
    solution: 'A visitor management system as part of security process automation.',
    tech: ['FastAPI', 'Flask', 'Webhooks', 'Retry/logging', 'WhatsApp', 'Email', 'Google Workspace'],
    stackLabel: 'WHF automation stack',
    contribution: 'Worked on the visitor management system.',
    visual: 'visitor',
  },
  {
    id: 'whatsapp-taskbot',
    index: 'W/05',
    title: 'WhatsApp Taskbot',
    org: 'Western Heat & Forge',
    problem: 'Task communication across teams was scattered.',
    solution: 'A WhatsApp-based taskbot integrated through webhooks.',
    tech: ['WhatsApp', 'Webhooks', 'Retry/logging'],
    stackLabel: 'WHF automation stack',
    contribution: 'Built the WhatsApp Taskbot.',
    visual: 'whatsapp',
  },
  {
    id: 'hr-induction',
    index: 'W/06',
    title: 'AI HR Induction Chatbot',
    org: 'Western Heat & Forge · HR',
    problem: 'New-joiner induction relied on repeated manual explanations.',
    solution: 'An AI chatbot supporting the HR induction process.',
    tech: ['FastAPI', 'Flask', 'Webhooks', 'Retry/logging', 'WhatsApp', 'Email', 'Google Workspace'],
    stackLabel: 'WHF automation stack',
    contribution: 'Built the AI HR Induction Chatbot.',
    visual: 'hr-chat',
  },
]
