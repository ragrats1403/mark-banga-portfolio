import { ArrowDown, ArrowRight, CodeXml, ContactRound, Download, Mail, MapPin } from 'lucide-react'
import { ExperienceCard } from './components/ExperienceCard'
import { EngineeringProjectCard } from './components/EngineeringProjectCard'
import { ExternalLink } from './components/ExternalLink'
import { Header } from './components/Header'
import { PersonalProjectCard } from './components/PersonalProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { engineeringProjects, experiences, personalProjects, portfolio, skillGroups } from './data/portfolio'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">{portfolio.person.title} · Cebu, Philippines</p>
              <h1>{portfolio.person.headline}</h1>
              <p className="hero-summary">{portfolio.person.summary}</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">View engineering projects <ArrowRight aria-hidden="true" /></a>
                <a className="button secondary" href={portfolio.links.resume.href} target="_blank" rel="noreferrer">Download résumé <Download aria-hidden="true" /></a>
              </div>
              <div className="social-links" aria-label="Professional links">
                <ExternalLink link={portfolio.links.github}><CodeXml aria-hidden="true" />GitHub</ExternalLink>
                <ExternalLink link={portfolio.links.linkedin}><ContactRound aria-hidden="true" />LinkedIn</ExternalLink>
                <ExternalLink link={portfolio.links.email}><Mail aria-hidden="true" />Email</ExternalLink>
              </div>
            </div>
            <aside className="hero-panel" aria-label="Core technology profile">
              <div className="status"><span aria-hidden="true" />Full-stack engineering profile</div>
              <dl>
                <div><dt>Frontend</dt><dd>React · TypeScript · Angular</dd></div>
                <div><dt>Backend</dt><dd>Java · Spring Boot · REST APIs</dd></div>
                <div><dt>Data</dt><dd>PostgreSQL · MySQL · Prisma</dd></div>
                <div><dt>Systems</dt><dd>REST APIs · Realtime · Background jobs</dd></div>
              </dl>
              <a href="#about">Explore experience <ArrowDown aria-hidden="true" /></a>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <SectionHeading eyebrow="01 / About" title="Frontend foundations, full-stack perspective." />
            <p className="about-copy">{portfolio.about}</p>
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="container">
            <SectionHeading eyebrow="02 / Experience" title="Selected professional case studies" description="Professional project details are summarized to respect employer and client confidentiality." />
            <div className="case-list">{experiences.map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}</div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="03 / Engineering projects" title="Selected engineering projects" description="Independent projects demonstrating full-stack architecture, realtime systems, durable background processing, and software maintenance." />
            <div className="engineering-list">{engineeringProjects.map((project, index) => <EngineeringProjectCard key={project.id} project={project} featured={index === 0} />)}</div>
            {personalProjects.length > 0 && (
              <div className="additional-projects">
                <div className="additional-heading"><p className="eyebrow">Additional work</p><h3>More project work</h3></div>
                <div className="projects-grid">{personalProjects.map((project) => <PersonalProjectCard key={project.name} project={project} />)}</div>
              </div>
            )}
          </div>
        </section>

        <section className="section section-tinted" id="skills">
          <div className="container">
            <SectionHeading eyebrow="04 / Skills" title="Software development toolkit" description="Technologies and engineering practices supported by professional experience and current projects." />
            <div className="skills-grid">{skillGroups.map((group) => <article className="skill-group" key={group.name}><h3>{group.name}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-card">
            <div><p className="eyebrow">05 / Contact</p><h2>Let’s build reliable software.</h2><p>I’m based in Mandaue City, Cebu and open to conversations about software development opportunities.</p><a className="text-link" href={portfolio.links.resume.href} target="_blank" rel="noreferrer">Open résumé <ArrowRight aria-hidden="true" /></a></div>
            <div className="contact-links">
              <ExternalLink link={portfolio.links.email}><Mail aria-hidden="true" /><span><small>Email</small>{portfolio.person.email}</span></ExternalLink>
              <ExternalLink link={portfolio.links.github}><CodeXml aria-hidden="true" /><span><small>GitHub</small>{portfolio.links.github.configured ? '@ragrats1403' : 'Add URL in portfolio.ts'}</span></ExternalLink>
              <ExternalLink link={portfolio.links.linkedin}><ContactRound aria-hidden="true" /><span><small>LinkedIn</small>{portfolio.links.linkedin.configured ? 'Mark Ardon Bañga' : 'Add URL in portfolio.ts'}</span></ExternalLink>
              <div className="contact-location"><MapPin aria-hidden="true" /><span><small>Location</small>{portfolio.person.location}</span></div>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container"><p>© {new Date().getFullYear()} {portfolio.person.name}</p><a href="#top">Back to top ↑</a></div></footer>
    </>
  )
}

export default App
