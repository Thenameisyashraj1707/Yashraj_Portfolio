export type DocumentCategory =
  | 'Education'
  | 'Internship'
  | 'Professional Certification'
  | 'Project Documentation'

export type PortfolioDocument = {
  title: string
  category: DocumentCategory
  issuer: string
  date?: string
  file: string
  type: 'pdf' | 'image'
}

export const documentCategories: {
  id: DocumentCategory
  label: string
  code: string
}[] = [
  { id: 'Education', label: 'Education', code: 'EDU' },
  { id: 'Internship', label: 'Internship Certificates', code: 'INT' },
  {
    id: 'Professional Certification',
    label: 'Professional Certifications',
    code: 'CRT',
  },
  { id: 'Project Documentation', label: 'Project Documentation', code: 'DOC' },
]

export const documents: PortfolioDocument[] = [
  // =========================
  // EDUCATION
  // =========================

  {
    title: 'Passing Certificate',
    category: 'Education',
    issuer: 'VIIT Pune',
    date: '2026',
    file: '/assets/documents/education/passing-certificate.pdf',
    type: 'pdf',
  },

  {
    title: 'Academic / Consolidated Marksheet',
    category: 'Education',
    issuer: 'VIIT Pune',
    date: '2026',
    file: '/assets/documents/education/marksheet.pdf',
    type: 'pdf',
  },

  // =========================
  // INTERNSHIP CERTIFICATES
  // =========================

  {
    title: 'TCS Internship Certificate',
    category: 'Internship',
    issuer: 'Tata Consultancy Services',
    date: '2026',
    file: '/assets/documents/internships/TCS INTERNSHIP CERTIFICATE.pdf',
    type: 'pdf',
  },

  {
    title: 'Coding Jr Internship Certificate',
    category: 'Internship',
    issuer: 'Coding Jr',
    date: '2025',
    file: '/assets/documents/internships/Coding jr internship completion certificate .pdf',
    type: 'pdf',
  },

  {
    title: 'Infosys Internship Certificate',
    category: 'Internship',
    issuer: 'Infosys Springboard',
    date: '2024',
    file: '/assets/documents/internships/Infosys Springboard Internship Certificate .pdf',
    type: 'pdf',
  },

  {
    title: 'AICTE / VOIS Certificate',
    category: 'Internship',
    issuer: 'AICTE / VOIS',
    date: '2024',
    file: '/assets/documents/internships/AICTE_VOIS_COMPANY_INTERNSHIP_CERTIFCATE.pdf',
    type: 'pdf',
  },

  // =========================
  // PROFESSIONAL CERTIFICATIONS
  // =========================

  {
    title: 'Claude Certified Developer',
    category: 'Professional Certification',
    issuer: 'Anthropic',
    file: '/assets/documents/certifications/ClaudeCertifiedCertificate-YASHRAJ.pdf',
    type: 'pdf',
  },

  {
    title: 'Generative AI Certificate',
    category: 'Professional Certification',
    issuer: 'LangChain & Hugging Face course',
    file: '/assets/documents/certifications/Infosis Generative models for developers.pdf',
    type: 'pdf',
  },

  {
    title: 'IBM AI Engineering',
    category: 'Professional Certification',
    issuer: 'IBM',
    file: '/assets/documents/certifications/Coursera  IBM AI Completion certificate.pdf',
    type: 'pdf',
  },

  {
    title: 'IBM DevOps for AI',
    category: 'Professional Certification',
    issuer: 'IBM',
    file: '/assets/documents/certifications/Coursera Devops Final certificate.pdf',
    type: 'pdf',
  },
]