import type { Experience } from '../types/portfolio'
import { ArchitectureDiagram } from './ArchitectureDiagram'

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="case-study" id={experience.id}>
      <header className="case-header">
        <div>
          <div className="case-labels"><span className="status-badge">Professional</span><p className="case-company">{experience.company}</p></div>
          <h3>{experience.title}</h3>
        </div>
        <div className="case-meta"><span>{experience.role}</span><span>{experience.period}</span></div>
      </header>
      <div className="case-grid">
        <section>
          <h4>Context</h4>
          <p>{experience.overview}</p>
          {experience.industry && <p className="muted">Industry: {experience.industry}</p>}
        </section>
        <section>
          <h4>Contributions</h4>
          <ul>{experience.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>
      {(experience.frontend || experience.backend || experience.database) && (
        <div className="workstream-grid">
          {experience.frontend && <div><span>Frontend</span>{experience.frontend.map((item) => <p key={item}>{item}</p>)}</div>}
          {experience.backend && <div><span>Backend</span>{experience.backend.map((item) => <p key={item}>{item}</p>)}</div>}
          {experience.database && <div><span>Database</span>{experience.database.map((item) => <p key={item}>{item}</p>)}</div>}
        </div>
      )}
      <div className="case-footer">
        <div><h4>Technologies</h4><div className="tag-list">{experience.technologies.map((item) => <span key={item}>{item}</span>)}</div></div>
        {experience.practices && <div><h4>Engineering practices</h4><div className="tag-list">{experience.practices.map((item) => <span key={item}>{item}</span>)}</div></div>}
      </div>
      {experience.id === 'tenant-management' && <ArchitectureDiagram />}
    </article>
  )
}
