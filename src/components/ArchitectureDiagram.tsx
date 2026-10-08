import { Database, FileInput, PanelsTopLeft, ServerCog, ShieldCheck } from 'lucide-react'

export function ArchitectureDiagram() {
  return (
    <figure className="architecture" aria-labelledby="architecture-caption">
      <div className="architecture-flow" role="img" aria-label="React frontend connects through an API Gateway to Spring Boot services and MySQL. External files enter backend processing services.">
        <div className="diagram-node"><PanelsTopLeft aria-hidden="true" /><span>React frontend</span></div>
        <span className="diagram-arrow" aria-hidden="true">→</span>
        <div className="diagram-node"><ShieldCheck aria-hidden="true" /><span>API Gateway</span></div>
        <span className="diagram-arrow" aria-hidden="true">→</span>
        <div className="diagram-node"><ServerCog aria-hidden="true" /><span>Spring Boot services</span></div>
        <span className="diagram-arrow" aria-hidden="true">→</span>
        <div className="diagram-node"><Database aria-hidden="true" /><span>MySQL</span></div>
        <div className="ingestion-path">
          <div className="diagram-node"><FileInput aria-hidden="true" /><span>External files / data</span></div>
          <span className="diagram-arrow" aria-hidden="true">↗</span>
          <span>File ingestion &amp; processing</span>
        </div>
      </div>
      <figcaption id="architecture-caption">Simplified architecture based on my responsibilities.</figcaption>
    </figure>
  )
}
