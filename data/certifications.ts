export type Certification = {
  title: string
  issuer?: string
  date?: string
  credentialUrl?: string
  file?: string
  featured?: boolean
}

export const certifications: Certification[] = [
  {
    title: 'Claude Certified Developer – Foundations',
    issuer: 'Anthropic',
    credentialUrl:
      'https://www.credly.com/badges/77f01280-cd97-40ad-9e6a-6fde371ded4c',
    file: '/assets/documents/certifications/ClaudeCertifiedCertificate-YASHRAJ.pdf',
    featured: true,
  },

  {
    title: 'Complete Generative AI with LangChain & Hugging Face',
    file: '/assets/documents/certifications/Infosis Generative models for developers.pdf',
  },

  {
    title: 'Complete Python Bootcamp',
    file: '/assets/documents/certifications/coursera machine laerning with python certificate  1.pdf',
  },

  {
    title: 'IBM AI Engineering',
    issuer: 'IBM',
    file: '/assets/documents/certifications/Coursera  IBM AI Completion certificate.pdf',
  },

  {
    title: 'IBM DevOps for AI',
    issuer: 'IBM',
    file: '/assets/documents/certifications/Coursera Devops Final certificate.pdf',
  },

  {
    title: 'Cisco CCNA',
    issuer: 'Cisco',
    file: '/assets/documents/certifications/391049_Yashraj_Sah_CCNA_Module 1-certificate.pdf',
  },

  {
    title: 'Infosys Internship Certificate',
    issuer: 'Infosys Springboard',
    date: 'Oct – Dec 2024',
    file: '/assets/documents/internships/Infosys Springboard Internship Certificate .pdf',
  },

  {
    title: 'TCS Internship Certificate',
    issuer: 'Tata Consultancy Services',
    date: 'Mar – Aug 2026',
    file:'/assets/documents/internships/TCS INTERNSHIP CERTIFICATE.pdf',
  },
]