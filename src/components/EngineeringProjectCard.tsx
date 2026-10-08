import { ArrowUpRight, CodeXml } from 'lucide-react'
import type { EngineeringProject } from '../types/portfolio'
import { ProjectArchitecture } from './ProjectArchitecture'

export function EngineeringProjectCard({ project, featured = false }: { project: EngineeringProject; featured?: boolean }) {
  return (
    <article className={`engineering-card${featured ? ' featured' : ''}`} id={project.id}>
      <header className="engineering-header">
        <div>
          <div className="project-kicker"><span className="status-badge">{project.status}</span><span>{project.type}</span></div>
          <h3>{project.name}</h3>
          {project.alternateName && <p className="alternate-name">Also developed as {project.alternateName}</p>}
        </div>
        <div className="project-role"><small>Role</small><strong>{project.role}</strong></div>
      </header>
      <p className="engineering-summary">{project.description}</p>
      <div className="engineering-columns">
        <section>
          <h4>Implemented</h4>
          <ul>{project.implemented.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h4>Engineering challenges</h4>
          <ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>
      {project.planned && <div className="planned-note"><strong>Planned</strong><p>{project.planned.join(' ')}</p></div>}
      {(project.architecture || project.githubUrl || project.demoUrl) && (
        <div className="project-disclosure-row">
          {project.architecture && (
            <details>
              <summary>Architecture <span aria-hidden="true">+</span></summary>
              <ProjectArchitecture projectName={project.name} nodes={project.architecture} />
            </details>
          )}
          <div className="project-actions">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><CodeXml aria-hidden="true" />GitHub</a>}
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer"><ArrowUpRight aria-hidden="true" />Live demo</a>}
          </div>
        </div>
      )}
      <div className="tag-list engineering-tags" aria-label={`${project.name} technologies`}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
    </article>
  )
}
