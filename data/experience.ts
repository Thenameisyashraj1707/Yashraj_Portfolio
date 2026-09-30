export type Experience = {
  id: string
  company: string
  shortName: string
  role: string
  period: string
  summary: string
  details?: { label: string; items: string[] }[]
  highlight?: { value: string; label: string; disclaimer: string }
  selectedWork?: string[]
  tech?: string[]
}

export const experience: Experience[] = [
  {
    id: 'tcs',
    company: 'Tata Consultancy Services (TCS)',
    shortName: 'TCS',
    role: 'Agentic AI / GenAI Intern',
    period: 'Mar 2026 – Aug 2026',
    summary:
      'Worked under the NPI Value Stream / Digital Garage on an Enterprise Change Impact Analysis Agent. The system focused on automating impact analysis for Engineering Change Requests using enterprise engineering data.',
    details: [
      {
        label: 'Enterprise data sources',
        items: [
          'PLM',
          'SAP/ERP',
          'QMS',
          'BOM/EBOM',
          'Manufacturing Systems',
          'Engineering Knowledge Bases',
          'Supplier Records',
        ],
      },
    ],
    tech: [
      'Multi-agent architecture',
      'LLMs',
      'RAG',
      'LangChain',
      'FAISS',
      'Sentence Transformers',
      'FastAPI',
      'Streamlit',
      'Pandas',
    ],
    highlight: {
      value: '60–80%',
      label: 'Potential reduction in material estimation effort',
      disclaimer: 'Internal project estimate — not an independently audited metric.',
    },
  },
  {
    id: 'whf',
    company: 'Western Heat & Forge',
    shortName: 'WHF',
    role: 'AI/ML Intern',
    period: 'Jul 2025 – Jan 2026',
    summary:
      'Worked on production-oriented automation across HR, Production, Marketing, Security and RFQ processes.',
    details: [
      {
        label: 'Process areas',
        items: ['HR', 'Production', 'Marketing', 'Security', 'RFQ processes'],
      },
    ],
    tech: ['FastAPI', 'Flask', 'Webhooks', 'Retry/logging', 'WhatsApp', 'Email', 'Google Workspace'],
    selectedWork: [
      'WhatsApp Taskbot',
      'AI HR Induction Chatbot',
      'Marketing/RFQ automation',
      'CDF/ODF estimation automation',
      'Mail automation',
    ],
  },
  {
    id: 'codingjr',
    company: 'Coding Jr',
    shortName: 'CJR',
    role: 'AI Research Intern',
    period: 'May 2025 – Nov 2025',
    summary: 'AI research internship.',
  },
  {
    id: 'infosys',
    company: 'Infosys Springboard',
    shortName: 'INF',
    role: 'Internship 5.0',
    period: 'Oct 2024 – Dec 2024',
    summary: 'Project: Analysing Income Statement Balance Sheet Table with OpenAI.',
    tech: ['OpenAI'],
  },
  {
    id: 'vois',
    company: 'AICTE / VOIS',
    shortName: 'VOIS',
    role: 'Virtual Internship — Data Analytics using AI-LLMs',
    period: 'Oct 2024 – Nov 2024',
    summary: 'Virtual internship focused on data analytics using AI-LLMs.',
  },
]
