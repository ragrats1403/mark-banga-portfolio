import type { PersonalProject } from '../types/portfolio'

export function PersonalProjectCard({ project }: { project: PersonalProject }) {
  return (
    <article className="project-card">
      {project.image && <img src={project.image} alt="" loading="lazy" />}
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-details"><strong>Key challenges</strong><ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="project-details"><strong>Major features</strong><ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul></div>
      {project.technologies.length > 0 && <div className="tag-list project-tags" aria-label={`${project.name} technologies`}>{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>}
    </article>
  )
}
