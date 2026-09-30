export const profile = {
  name: 'Yashraj Sah',
  firstName: 'Yashraj',
  roles: [
    'Agentic AI Engineer',
    'Generative AI Engineer',
    'LLM Engineer',
    'AI/ML Engineer',
    'Software Engineer',
  ],
  primaryRole: 'Agentic AI Engineer',
  location: 'Pune, Maharashtra, India',
  email: 'yashrajsah082@gmail.com',
  phone: '+91 77093 08941',
  phoneHref: 'tel:+917709308941',
  linkedin: 'https://www.linkedin.com/in/yashraj-sah',
  github: 'https://github.com/Thenameisyashraj1707',
  mailto: 'mailto:yashrajsah082@gmail.com?subject=Portfolio%20Inquiry%20-%20Yashraj%20Sah',
  resume: '/Yashraj-Sah-Resume.pdf',
  photo: '/profile.jpg',  
  headline: 'Building intelligent systems that turn complexity into clarity.',
  subtitle:
    'Agentic AI Engineer focused on Generative AI, LLM applications, intelligent automation and production-oriented software systems.',
  about: [
    'I am a Computer Science & Engineering graduate specializing in Artificial Intelligence and Machine Learning, with hands-on experience building Agentic AI, Generative AI, LLM-powered applications and intelligent automation systems.',
    'My work combines AI engineering with practical software development — from multi-agent decision systems and RAG pipelines to backend APIs, automation workflows and full-stack applications.',
    'I enjoy turning complex business and engineering problems into intelligent, usable software.',
  ],
  metrics: [
    { value: '2026', label: 'Graduate' },
    { value: '3+', label: 'Internship experiences' },
    { value: '10+', label: 'AI / Software projects' },
    { value: 'AI', label: 'Primary focus' },
  ],
  education: {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    institution: 'VIIT Pune',
    period: '2022 – 2026',
    cgpa: '7.87 / 10',
  },
  achievement: {
    title: '2nd Rank',
    event: 'Sci-Tech Exhibition',
  },
  openTo:
    'Open to opportunities in Agentic AI, Generative AI, LLM Engineering, AI/ML and software engineering.',
} as const

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
] as const

export const buildProcess = [
  { step: '01', title: 'Understand the problem', note: 'Context, constraints, users' },
  { step: '02', title: 'Design the system', note: 'Architecture & data flow' },
  { step: '03', title: 'Build the AI layer', note: 'Agents, LLMs, retrieval' },
  { step: '04', title: 'Integrate software', note: 'APIs, UI, automation' },
  { step: '05', title: 'Test + iterate', note: 'Evaluate, refine, harden' },
  { step: '06', title: 'Ship', note: 'Deliver usable software' },
] as const
