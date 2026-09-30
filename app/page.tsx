import { LabBackground } from '@/components/lab-background'
import { About } from '@/components/sections/about'
import { Certifications } from '@/components/sections/certifications'
import { Contact } from '@/components/sections/contact'
import { Credentials } from '@/components/sections/credentials'
import { EngineeringWorkSection } from '@/components/sections/engineering-work'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { certifications } from '@/data/certifications'
import { documents } from '@/data/documents'
import { profile } from '@/data/profile'
import { publicAssetExists } from '@/lib/assets'

export default function Page() {
  const docs = documents.map((d) => ({ ...d, available: publicAssetExists(d.file) }))
  const certs = certifications.map((c) => ({ ...c, available: c.file ? publicAssetExists(c.file) : false }))

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.primaryRole,
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' },
    alumniOf: profile.education.institution,
    sameAs: [profile.linkedin, profile.github],
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <LabBackground />
      <SiteNav />
      <main id="main">
        <Hero photoAvailable={publicAssetExists(profile.photo)} resumeAvailable={publicAssetExists(profile.resume)} />
        <About />
        <Experience />
        <EngineeringWorkSection />
        <Projects />
        <Skills />
        <Certifications items={certs} />
        <Credentials docs={docs} />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  )
}
