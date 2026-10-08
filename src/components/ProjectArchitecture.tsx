interface ProjectArchitectureProps {
  projectName: string
  nodes: string[]
}

export function ProjectArchitecture({ projectName, nodes }: ProjectArchitectureProps) {
  return (
    <figure className="project-architecture">
      <div className="architecture-chain" role="img" aria-label={`${projectName} architecture: ${nodes.join(' to ')}`}>
        {nodes.map((node, index) => (
          <div className="architecture-step" key={node}>
            <span>{node}</span>
            {index < nodes.length - 1 && <span className="chain-arrow" aria-hidden="true">↓</span>}
          </div>
        ))}
      </div>
      <figcaption>Simplified project architecture</figcaption>
    </figure>
  )
}
