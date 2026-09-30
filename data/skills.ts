export const capabilities = [
  {
    code: 'AG',
    title: 'Agentic AI',
    skills: ['Agentic AI', 'Multi-Agent Systems', 'AI Agents', 'LangGraph'],
  },
  {
    code: 'GN',
    title: 'Generative AI',
    skills: ['Generative AI', 'Prompt Engineering', 'OpenAI', 'Hugging Face'],
  },
  {
    code: 'LM',
    title: 'LLM Engineering',
    skills: ['LLMs', 'RAG', 'LangChain', 'FAISS', 'Groq', 'Llama', 'Ollama'],
  },
  {
    code: 'AU',
    title: 'AI Automation',
    skills: ['AI Automation', 'Selenium', 'REST APIs'],
  },
  {
    code: 'ML',
    title: 'AI/ML',
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'PyTorch'],
  },
  {
    code: 'BE',
    title: 'Backend Engineering',
    skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Supabase', 'Pytest'],
  },
  {
    code: 'FS',
    title: 'Full-Stack Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Docker', 'Git/GitHub'],
  },
  {
    code: 'CV',
    title: 'Computer Vision',
    skills: ['Computer Vision', 'PyTorch', 'TensorFlow'],
  },
] as const

export const skillMatrix = [
  {
    group: 'AI / ML',
    skills: [
      'Agentic AI',
      'Generative AI',
      'LLMs',
      'RAG',
      'Multi-Agent Systems',
      'Prompt Engineering',
      'AI Automation',
      'Computer Vision',
      'Machine Learning',
    ],
  },
  {
    group: 'LLM / AI Tools',
    skills: [
      'OpenAI',
      'Groq',
      'Llama',
      'Ollama',
      'Hugging Face',
      'LangChain',
      'LangGraph',
      'FAISS',
      'Sentence Transformers',
    ],
  },
  {
    group: 'Backend',
    skills: ['Python', 'FastAPI', 'Flask', 'Django', 'REST APIs', 'JWT', 'OAuth', 'Pydantic'],
  },
  { group: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Streamlit'] },
  { group: 'Database', skills: ['PostgreSQL', 'Supabase', 'MySQL', 'FAISS'] },
  { group: 'Tools', skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Selenium', 'Pytest'] },
  { group: 'Cloud', skills: ['AWS fundamentals', 'CI/CD'] },
] as const
